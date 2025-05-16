import {
  BadRequestException,
  Injectable,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaService } from '@libs/core';
import { ConfigService } from '@nestjs/config';
import {
  Prisma,
  OrderItemStatus,
  OrderStatus,
  Currency,
  OrderType,
  PaymentType,
  PayoutStatus,
} from '@prisma-clients/main';
import { StripeService } from './stripe/stripe.service';
import Stripe from 'stripe';
import { Queue } from 'bullmq';
import { InjectQueue } from '@nestjs/bullmq';
import {
  BookVaultService,
  EnvironmentType,
  getPartnerIDByCountryCode,
  PaginationParamsDto,
  PHYSICAL_FORMATS,
  Transaction,
} from '@lib/common';
import { HelioService } from './helio/helio.service';
import { PrismaClient } from '@prisma-clients/main';
import { Balance } from './entities/balance.entity';
import { InjectKysely } from 'nestjs-kysely';
import { Kysely, sql } from 'kysely';
import { DB } from '../../../prisma/kysely/db/types';
import {
  createOrderDescription,
  createOrderName,
  getCheckOrdersRepeatOptions,
} from './checkout.utils';
import { QueueNames } from '@lib/common/entities/queues';
import { OrderPrintingSettingsInput } from './dto/order-printing-settings.dto';
import { v4 as uuidV4 } from 'uuid';
import { ShippingCalculatorService } from './shipping-calculator/shipping-calculator.service';

@Injectable()
export class CheckoutService implements OnModuleInit {
  constructor(
    @InjectKysely('postgres') private readonly db: Kysely<DB>,
    private readonly prismaService: PrismaService,
    private readonly stripeService: StripeService,
    private readonly helioService: HelioService,
    private readonly configService: ConfigService,
    @InjectQueue(QueueNames.CheckOrders)
    private readonly checkOrdersQueue: Queue,
    @InjectQueue(QueueNames.Payouts) private readonly payoutsQueue: Queue,
    @InjectQueue(QueueNames.CheckBookVaultOrderStatus)
    private readonly checkBookVaultOrdersQueue: Queue,
    private readonly bookVaultService: BookVaultService,
    private readonly shippingCalculatorService: ShippingCalculatorService,
  ) {}

  async onModuleInit() {
    await this.addCheckOrdersCronJob();
    await this.addCheckBookVaultOrdersCronJob();
  }

  async addCheckOrdersCronJob() {
    await this.checkOrdersQueue.add('check-orders-cron-job', {
      repeat: getCheckOrdersRepeatOptions(
        this.configService.get<EnvironmentType>('NODE_ENV'),
      ),
    });
  }

  async addCheckBookVaultOrdersCronJob(): Promise<void> {
    await this.checkBookVaultOrdersQueue.add(
      'check-book-vaults-order-cron-job',
      {
        repeat: {
          pattern: '*/45 * * * *',
        },
      },
    );
  }

  @Transaction({
    timeout: 20000,
  })
  async createBuyNowStripeOrder(
    userId: string,
    publicationListingId: string,
    orderPrintingSettings: OrderPrintingSettingsInput,
    tx?: PrismaService | PrismaClient,
  ): Promise<string> {
    const listing = await tx.publicationListing.findUnique({
      where: { id: publicationListingId },
      include: {
        publication: {
          include: {
            bookEdition: {
              include: {
                book: true,
              },
            },
            isbn: true,
          },
        },
      },
    });

    if (!listing) {
      throw new NotFoundException('Listing not found');
    }

    if (
      PHYSICAL_FORMATS.includes(listing.publication.format) &&
      !orderPrintingSettings
    ) {
      throw new BadRequestException('Physical books needs shipping details');
    }

    //TODO analyse how to exclude getOrderFulfillmentDetails from the actual prisma transaction
    const order = await tx.order.create({
      data: {
        orderItems: {
          createMany: {
            data: {
              publicationListingId: listing.id,
              quantity: 1,
              status: OrderItemStatus.Pending,
              productPriceInCents: listing.priceInCents,
              totalPriceInCents: listing.priceInCents,
              totalProductionCost: listing.priceInCents,
            },
          },
        },
        userId,
        status: OrderStatus.PENDING_TRANSACTION,
        currency: Currency.USD,
        totalInCents: listing.priceInCents,
        subTotalInCents: listing.priceInCents,
        taxInCents: 0,
        refundAmountInCents: 0,
        type: OrderType.BUY_NOW_ORDER,
      },
    });

    if (
      PHYSICAL_FORMATS.includes(listing.publication.format) &&
      orderPrintingSettings
    ) {
      const details = await this.getOrderFulfillmentDetails(
        [
          {
            ISBN: listing.publication.isbn.value,
            Quantity: 1,
            ListingPrice: Number(listing.priceInCents),
          },
        ],
        orderPrintingSettings,
      );

      await tx.orderFulfillmentDetails.create({
        data: {
          productionCostInCents: details.ProductionCost,
          totalInCents: details.GrandTotal,
          dispatchCostInCents: details.DispatchCost,
          extrasCostInCents: details.ExtrasCost,
          companyDeductionInCents: details.Deduction,
          serviceId: orderPrintingSettings.serviceId,
          addressId: orderPrintingSettings.addressId,
          productionSpeed: orderPrintingSettings.productionSpeed,
          orderId: order.id,
        },
      });

      await tx.order.update({
        where: {
          id: order.id,
        },
        data: {
          //Add shipping cost + production priority
          totalInCents: {
            increment:
              details.ExtrasCost + details.DispatchCost - details.Deduction,
          },
        },
      });
    }

    return this.createStripePaymentIntent(
      userId,
      Number(listing.priceInCents),
      {
        id: order.id,
        description: createOrderDescription(
          order.id,
          [listing],
          PaymentType.STRIPE,
        ),
      },
      tx,
    );
  }

  async getOrderFulfillmentDetails(
    orderItems: {
      ISBN: string;
      Quantity: number;
      ListingPrice: number;
    }[],
    orderPrintingSettings: OrderPrintingSettingsInput,
  ) {
    const address = await this.prismaService.address.findUnique({
      where: {
        id: orderPrintingSettings.addressId,
      },
      include: {
        country: true,
      },
    });

    const PartnerID = getPartnerIDByCountryCode(address.country.iso);

    const order = await this.bookVaultService.validateOrder({
      PartnerID,
      Address: {
        Addressee: address.id,
        Address1: address.line1,
        Address2: address.line2,
        Address3: address.line3,
        Address4: address.line3,
        Country: {
          ISO_Code: address.country.iso,
        },
        County: address.county,
        Postcode: address.postcode,
        Town: address.town,
      },
      OrderLines: orderItems,
      DocRef: uuidV4(),
      CharityRoundup: false,
      DispatchRequest: {
        RequestedServID: [+orderPrintingSettings.serviceId],
        RequestedService: 'Specified',
      },
      ProductionLevel: orderPrintingSettings.productionSpeed,
    });

    const deduction =
      await this.shippingCalculatorService.calculateShippingDeduction(
        Math.ceil(order.OrderCost.ProductionCost * 100),
        orderItems.reduce((acc, item) => acc + Number(item.ListingPrice), 0),
      );

    //ExtrasCost represents the production speed upgrade, which we include as part of the overall shipping cost
    return {
      ProductionCost: BigInt(Math.ceil(order.OrderCost.ProductionCost * 100)),
      DispatchCost: BigInt(Math.ceil(order.OrderCost.DispatchCost * 100)),
      ExtrasCost: BigInt(Math.ceil(order.OrderCost.ExtrasCost * 100)),
      GrandTotal: BigInt(Math.ceil(order.OrderCost.GrandTotal * 100)),
      Deduction: BigInt(
        Math.min(
          deduction,
          Math.ceil(order.OrderCost.ExtrasCost * 100) +
            Math.ceil(order.OrderCost.DispatchCost * 100),
        ),
      ),
    };
  }

  @Transaction()
  async createStripeOrderFromBasket(
    userId: string,
    orderPrintingSettings: OrderPrintingSettingsInput,
    tx?: PrismaService | PrismaClient,
  ): Promise<string> {
    const { items, total, listingsWithBookInformation } =
      await this.transformBasketToOrderItems(userId, tx);

    const hasPhysicalItem = listingsWithBookInformation.some((item) =>
      PHYSICAL_FORMATS.includes(item.publication.format),
    );

    if (hasPhysicalItem && !orderPrintingSettings) {
      throw new BadRequestException('Physical books needs shipping details');
    }

    const order = await tx.order.create({
      data: {
        orderItems: {
          createMany: {
            data: items,
          },
        },
        userId,
        status: OrderStatus.PENDING_TRANSACTION,
        currency: Currency.USD,
        totalInCents: total,
        subTotalInCents: total,
        taxInCents: 0,
        refundAmountInCents: 0,
        type: OrderType.BASKET_ORDER,
      },
    });

    if (hasPhysicalItem) {
      const details = await this.getOrderFulfillmentDetails(
        listingsWithBookInformation
          .filter((item) => PHYSICAL_FORMATS.includes(item.publication.format))
          .map((l) => ({
            ISBN: l.publication.isbn.value,
            Quantity: l.quantity,
            ListingPrice: Number(l.priceInCents),
          })),

        orderPrintingSettings,
      );

      await tx.orderFulfillmentDetails.create({
        data: {
          productionCostInCents: details.ProductionCost,
          totalInCents: details.GrandTotal,
          dispatchCostInCents: details.DispatchCost,
          extrasCostInCents: details.ExtrasCost,
          companyDeductionInCents: details.Deduction,
          serviceId: orderPrintingSettings.serviceId,
          addressId: orderPrintingSettings.addressId,
          productionSpeed: orderPrintingSettings.productionSpeed,
          orderId: order.id,
        },
      });

      await tx.order.update({
        where: {
          id: order.id,
        },
        data: {
          //Add shipping cost + production priority
          totalInCents: {
            increment:
              details.ExtrasCost + details.DispatchCost - details.Deduction,
          },
        },
      });
    }

    return this.createStripePaymentIntent(
      userId,
      Number(total),
      {
        id: order.id,
        description: createOrderDescription(
          order.id,
          listingsWithBookInformation,
          PaymentType.STRIPE,
        ),
      },
      tx,
    );
  }

  @Transaction()
  async createStripePaymentIntent(
    userId: string,
    amount: number,
    orderDetails: {
      id: string;
      description: string;
    },
    tx?: PrismaService | PrismaClient,
  ): Promise<string> {
    const customerId = await this.getStripeCustomerId(userId, tx);
    const paymentIntent = await this.stripeService.createPaymentIntent(
      amount,
      customerId,
      orderDetails,
    );

    await tx.transaction.create({
      data: {
        orderId: orderDetails.id,
        paymentType: PaymentType.STRIPE,
        stripeTransaction: {
          create: {
            paymentIntentId: paymentIntent.id,
          },
        },
      },
    });

    return paymentIntent.client_secret;
  }

  @Transaction()
  async getStripeCustomerId(userId: string, tx?: PrismaService | PrismaClient) {
    const userPaymentDetails = await tx.userPaymentDetails.findUnique({
      where: {
        userId,
      },
    });
    if (userPaymentDetails?.stripeCustomerId) {
      return userPaymentDetails.stripeCustomerId;
    }

    let customer: Stripe.Customer | null =
      await this.stripeService.getCustomer(userId);
    if (!customer) {
      //TODO TBD what user details we add to stripe customer
      customer = await this.stripeService.createCustomer(userId);
    }

    await tx.userPaymentDetails.upsert({
      where: {
        userId,
      },
      create: {
        userId,
        stripeCustomerId: customer.id,
      },
      update: {
        stripeCustomerId: customer.id,
      },
    });
    return customer.id;
  }

  @Transaction()
  async withdraw(
    userId: string,
    amount: number,
    tx?: PrismaService | PrismaClient,
  ) {
    const paymentDetails = await tx.userPaymentDetails.findUnique({
      where: {
        userId,
      },
    });

    const stripeAcc = await this.stripeService.getConnectedAccount(
      paymentDetails.stripeConnectedAccountId,
    );

    if (!paymentDetails?.stripeConnectedAccountId) {
      throw new NotFoundException('User has not onboarded');
    }

    if (!(await this.isUserOnboarded(stripeAcc.id))) {
      throw new NotFoundException('User has not onboarded');
    }

    const userBalance = await tx.userBalance.findUnique({
      where: {
        userId,
      },
    });

    if (!userBalance || userBalance?.availableFiatBalanceInCents < amount) {
      throw new NotFoundException('User has insufficient funds');
    }
    const payout = await tx.userPayout.create({
      data: {
        userId,
        currency: Currency.USD,
        amountInCents: amount,
        status: PayoutStatus.PENDING,
      },
    });

    await tx.userBalance.update({
      where: { userId: userId },
      data: {
        availableFiatBalanceInCents: {
          decrement: Number(amount),
        },
      },
    });

    await this.payoutsQueue.add(`Process payout ${payout.id}`, {
      payoutId: payout.id,
    });

    return payout;
  }

  @Transaction()
  async createHelioBuyNowOrder(
    userId: string,
    publicationListingId: string,
    orderPrintingSettings: OrderPrintingSettingsInput,
    tx?: PrismaService | PrismaClient,
  ): Promise<string> {
    const listing = await tx.publicationListing.findUnique({
      where: { id: publicationListingId },
      include: {
        publication: {
          include: {
            bookEdition: {
              include: {
                book: true,
              },
            },
            isbn: true,
          },
        },
      },
    });

    if (!listing) {
      throw new NotFoundException('Listing not found');
    }

    if (
      PHYSICAL_FORMATS.includes(listing.publication.format) &&
      !orderPrintingSettings
    ) {
      throw new BadRequestException('Physical books needs shipping details');
    }

    const order = await tx.order.create({
      data: {
        orderItems: {
          createMany: {
            data: {
              publicationListingId: listing.id,
              quantity: 1,
              status: OrderItemStatus.Pending,
              productPriceInCents: listing.priceInCents,
              totalPriceInCents: listing.priceInCents,
              totalProductionCost: listing.priceInCents,
            },
          },
        },
        userId,
        status: OrderStatus.PENDING_TRANSACTION,
        currency: Currency.USDC,
        totalInCents: listing.priceInCents,
        subTotalInCents: listing.priceInCents,
        taxInCents: 0,
        refundAmountInCents: 0,
        type: OrderType.BUY_NOW_ORDER,
      },
    });

    if (
      PHYSICAL_FORMATS.includes(listing.publication.format) &&
      orderPrintingSettings
    ) {
      const details = await this.getOrderFulfillmentDetails(
        [
          {
            ISBN: listing.publication.isbn.value,
            Quantity: 1,
            ListingPrice: Number(listing.priceInCents),
          },
        ],
        orderPrintingSettings,
      );

      await tx.orderFulfillmentDetails.create({
        data: {
          productionCostInCents: details.ProductionCost,
          totalInCents: details.GrandTotal,
          dispatchCostInCents: details.DispatchCost,
          extrasCostInCents: details.ExtrasCost,
          companyDeductionInCents: details.Deduction,
          serviceId: orderPrintingSettings.serviceId,
          addressId: orderPrintingSettings.addressId,
          productionSpeed: orderPrintingSettings.productionSpeed,
          orderId: order.id,
        },
      });

      await tx.order.update({
        where: {
          id: order.id,
        },
        data: {
          //Add shipping cost + production priority
          totalInCents: {
            increment:
              details.ExtrasCost + details.DispatchCost - details.Deduction,
          },
        },
      });
    }

    const listings = [listing];
    return this.createHelioPaymentLink(
      order.totalInCents * BigInt(10000),
      {
        id: order.id,
        name: createOrderName(order.id, listings),
        description: createOrderDescription(
          order.id,
          listings,
          PaymentType.HELIO,
        ),
      },
      tx,
    );
  }

  @Transaction()
  async createHelioOrderFromBasket(
    userId: string,
    orderPrintingSettings: OrderPrintingSettingsInput,
    tx?: PrismaService | PrismaClient,
  ): Promise<string> {
    const { items, total, listingsWithBookInformation } =
      await this.transformBasketToOrderItems(userId, tx);

    const hasPhysicalItem = listingsWithBookInformation.some((item) =>
      PHYSICAL_FORMATS.includes(item.publication.format),
    );

    if (hasPhysicalItem && !orderPrintingSettings) {
      throw new BadRequestException('Physical books needs shipping details');
    }

    const order = await tx.order.create({
      data: {
        orderItems: {
          createMany: {
            data: items,
          },
        },
        userId,
        status: OrderStatus.PENDING_TRANSACTION,
        currency: Currency.USDC,
        totalInCents: total,
        subTotalInCents: total,
        taxInCents: 0,
        refundAmountInCents: 0,
        type: OrderType.BASKET_ORDER,
      },
    });

    if (hasPhysicalItem) {
      //TODO extract this into a method to fix duplicate code issue
      const details = await this.getOrderFulfillmentDetails(
        listingsWithBookInformation
          .filter((item) => PHYSICAL_FORMATS.includes(item.publication.format))
          .map((l) => ({
            ISBN: l.publication.isbn.value,
            Quantity: l.quantity,
            ListingPrice: Number(l.priceInCents),
          })),

        orderPrintingSettings,
      );

      await tx.orderFulfillmentDetails.create({
        data: {
          productionCostInCents: details.ProductionCost,
          totalInCents: details.GrandTotal,
          dispatchCostInCents: details.DispatchCost,
          extrasCostInCents: details.ExtrasCost,
          companyDeductionInCents: details.Deduction,
          serviceId: orderPrintingSettings.serviceId,
          addressId: orderPrintingSettings.addressId,
          productionSpeed: orderPrintingSettings.productionSpeed,
          orderId: order.id,
        },
      });

      await tx.order.update({
        where: {
          id: order.id,
        },
        data: {
          //Add shipping cost + production priority
          totalInCents: {
            increment:
              details.ExtrasCost + details.DispatchCost - details.Deduction,
          },
        },
      });
    }

    return this.createHelioPaymentLink(
      order.totalInCents * BigInt(10000),
      {
        id: order.id,
        name: createOrderName(order.id, listingsWithBookInformation),
        description: createOrderDescription(
          order.id,
          listingsWithBookInformation,
          PaymentType.HELIO,
        ),
      },
      tx,
    );
  }

  @Transaction()
  async transformBasketToOrderItems(
    userId: string,
    tx?: PrismaService | PrismaClient,
  ) {
    const basket = await tx.basket.findUnique({
      where: {
        userId,
      },
      include: {
        items: {
          include: {
            publicationsListing: {
              include: {
                publication: {
                  include: {
                    bookEdition: {
                      include: {
                        book: true,
                      },
                    },
                    isbn: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!basket) {
      throw new NotFoundException('Basket not found');
    }

    if (basket.items.length === 0) {
      throw new NotFoundException('Basket is empty');
    }

    const items = basket.items.map((item) => ({
      publicationListingId: item.publicationListingId,
      quantity: item.quantity,
      status: OrderItemStatus.Pending,
      productPriceInCents: item.publicationsListing.priceInCents,
      totalPriceInCents:
        item.publicationsListing.priceInCents * BigInt(item.quantity),
    }));

    const total = items.reduce(
      (total, item) =>
        BigInt(total) + BigInt(item.quantity) * item.productPriceInCents,
      0n,
    );

    return {
      items,
      listingsWithBookInformation: basket.items.map(
        (item) => item.publicationsListing,
      ),
      total,
    };
  }

  @Transaction()
  async createHelioPaymentLink(
    amount: bigint,
    orderDetails: {
      id: string;
      name: string;
      description: string;
    },
    tx?: PrismaService | PrismaClient,
  ): Promise<string> {
    const paymentLink = await this.helioService.createPayLink(
      amount,
      orderDetails.name,
      orderDetails.description,
      this.configService.get<string>('HELIO_WALLET_ID'),
    );

    const webhook = await this.helioService.createPaymentLinkWebHook(
      paymentLink.id,
    );

    await tx.helioOrder.create({
      data: {
        orderId: orderDetails.id,
        paymentLinkId: paymentLink.id,
        webhookId: webhook.id,
        webhookSecret: webhook.sharedToken,
      },
    });

    return paymentLink.id;
  }

  async createConnectedAccount(userId: string, countryIso: string) {
    return this.stripeService.createConnectedAccount(userId, countryIso);
  }

  async createConnectedAccountSession(userId: string) {
    const accountId =
      await this.stripeService.retrieveUserConnectedAccount(userId);

    if (!accountId) {
      throw new BadRequestException('User has no connected account');
    }

    return this.stripeService.createConnectedAccountSession(accountId);
  }

  async isConnectedAccountOnboarded(userId: string): Promise<boolean> {
    const accountId =
      await this.stripeService.retrieveUserConnectedAccount(userId);

    if (!accountId) {
      return false;
    }

    return await this.isUserOnboarded(accountId);
  }

  private async isUserOnboarded(connectedAccountId: string): Promise<boolean> {
    const stripeAcc =
      await this.stripeService.getConnectedAccount(connectedAccountId);

    if (!stripeAcc || !stripeAcc.charges_enabled) {
      return false;
    }

    return true;
  }

  async getAccountBalance(userId: string): Promise<Balance> {
    let connectedAccountBalance: Stripe.Response<Stripe.Balance> | null = null;
    try {
      connectedAccountBalance =
        await this.stripeService.getConnectedAccountBalance(userId);
    } catch (error) {
      connectedAccountBalance = null;
    }

    const userBalance = await this.prismaService.userBalance.findUnique({
      where: {
        userId: userId,
      },
    });

    if (!userBalance) {
      return {
        availableFiatBalance: [],
        pendingFiatBalanceInCents: BigInt(0),
        pendingCryptoBalanceInCents: BigInt(0),
        availableCryptoBalanceInCents: BigInt(0),
      };
    }
    let hasUsdBalance = false;

    const availableFiatBalances = (
      connectedAccountBalance?.available || []
    ).map((bal) => {
      if (bal.currency === 'usd') {
        hasUsdBalance = true;
        return {
          currency: bal.currency,
          value: BigInt(bal.amount) + userBalance.availableFiatBalanceInCents,
        };
      }

      return {
        currency: bal.currency,
        value: BigInt(bal.amount),
      };
    });
    if (!hasUsdBalance) {
      availableFiatBalances.push({
        currency: 'usd',
        value: userBalance.availableFiatBalanceInCents,
      });
    }

    return {
      availableFiatBalance: availableFiatBalances,
      pendingFiatBalanceInCents: userBalance.pendingFiatBalanceInCents,
      pendingCryptoBalanceInCents: userBalance.pendingCryptoBalanceInCents,
      availableCryptoBalanceInCents: userBalance.availableCryptoBalanceInCents,
    };
  }

  async transferAvailableFiatBalanceToStripe(userId: string): Promise<boolean> {
    return await this.db.transaction().execute(async (trx) => {
      // 1. Fetch user payment details
      const details = await trx
        .selectFrom('UserPaymentDetails')
        .select(['userId', 'stripeConnectedAccountId'])
        .where('userId', '=', userId)
        .executeTakeFirst();

      if (!details?.stripeConnectedAccountId) {
        throw new BadRequestException('User has no connected account');
      }

      // 2. Fetch user balance with for update to lock the row
      const userBalance = await trx
        .selectFrom('UserBalance')
        .select(['userId', 'availableFiatBalanceInCents'])
        .where('userId', '=', userId)
        .forUpdate('UserBalance')
        .forKeyShare('UserBalance')
        .executeTakeFirst();

      if (
        !userBalance ||
        Number(userBalance.availableFiatBalanceInCents) <= 0
      ) {
        return false;
      }

      // 3. Get connected Stripe account
      const stripeAcc = await this.stripeService.getConnectedAccount(
        details.stripeConnectedAccountId,
      );

      if (!stripeAcc || !stripeAcc.charges_enabled) {
        throw new BadRequestException('User account has no charges enabled');
      }

      // 4. Transfer funds to Stripe
      await this.stripeService.transferFunds(
        Number(userBalance.availableFiatBalanceInCents),
        Currency.USD,
        stripeAcc.id,
      );

      // 5. Update user balance
      await trx
        .updateTable('UserBalance')
        .set({
          availableFiatBalanceInCents: '0',
        })
        .where('userId', '=', userId)
        .execute();

      return true;
    });
  }

  async getBooksSales(userId: string, pagination?: PaginationParamsDto) {
    // Fetch book sales data with pagination, grouping by book, type, and currency
    let baseQuery = this.db
      .selectFrom('UserSales')
      .innerJoin(
        'PublicationListing',
        'UserSales.publicationListingId',
        'PublicationListing.id',
      )
      .innerJoin(
        'Publication',
        'Publication.id',
        'PublicationListing.publicationId',
      )
      .innerJoin('BookEdition', 'BookEdition.id', 'Publication.bookEditionId')
      .select([
        'BookEdition.bookId',
        'PublicationListing.id',
        'Publication.format',
        'UserSales.currency',
        sql<number>`SUM(CASE WHEN "UserSales".status = 'COMPLETED' THEN "UserSales"."totalInCents" ELSE 0 END)`.as(
          'salesVolumeCompleted',
        ),
        sql<number>`SUM(CASE WHEN "UserSales".status = 'PENDING' THEN "UserSales"."totalInCents" ELSE 0 END)`.as(
          'salesVolumePending',
        ),
        sql<number>`COUNT(CASE WHEN "UserSales".status = 'COMPLETED' THEN 1 ELSE NULL END)`.as(
          'unitsCompletedCount',
        ),
        sql<number>`COUNT(CASE WHEN "UserSales".status = 'PENDING' THEN 1 ELSE NULL END)`.as(
          'unitsPendingCount',
        ),
      ])
      .where('UserSales.userId', '=', userId)
      .groupBy([
        'BookEdition.id',
        'PublicationListing.id',
        'Publication.format',
        'UserSales.currency',
      ]);

    const countQuery = this.db
      .selectFrom(baseQuery.as('BookSales'))
      .select(this.db.fn.count<number>('id').as('count'));

    const [{ count }] = await countQuery.execute();

    // Apply pagination
    if (pagination) {
      baseQuery = baseQuery.offset(pagination.offset).limit(pagination.limit);
    }

    // Get the items
    const salesData = await baseQuery.execute();

    // Aggregate the data by book
    const booksMap = new Map<
      string,
      {
        bookId: string;
        listings: Array<{
          type: string;
          unitsCompleted: {
            count: number;
            salesVolumeInFiat: number;
            salesVolumeInCrypto: number;
          };
          unitsPending: {
            count: number;
            salesVolumeInFiat: number;
            salesVolumeInCrypto: number;
          };
        }>;
      }
    >();

    for (const sale of salesData) {
      if (!booksMap.has(sale.id)) {
        booksMap.set(sale.id, {
          bookId: sale.bookId,
          listings: [],
        });
      }

      const book = booksMap.get(sale.id);
      if (book) {
        // Find or create the listing entry for this book type
        let listing = book.listings.find(
          (listing) => listing.type === sale.format,
        );
        if (!listing) {
          listing = {
            type: sale.format,
            unitsCompleted: {
              count: 0,
              salesVolumeInFiat: 0,
              salesVolumeInCrypto: 0,
            },
            unitsPending: {
              count: 0,
              salesVolumeInFiat: 0,
              salesVolumeInCrypto: 0,
            },
          };
          book.listings.push(listing);
        }

        // Update listing based on currency
        if (sale.currency === Currency.USD) {
          listing.unitsCompleted.salesVolumeInFiat += Number(
            sale.salesVolumeCompleted,
          );
          listing.unitsPending.salesVolumeInFiat += Number(
            sale.salesVolumePending,
          );
        } else if (sale.currency === Currency.USDC) {
          listing.unitsCompleted.salesVolumeInCrypto += Number(
            sale.salesVolumeCompleted,
          );
          listing.unitsPending.salesVolumeInCrypto += Number(
            sale.salesVolumePending,
          );
        }

        listing.unitsCompleted.count += Number(sale.unitsCompletedCount);
        listing.unitsPending.count += Number(sale.unitsPendingCount);
      }
    }

    const items = Array.from(booksMap.values());

    return {
      items,
      count,
    };
  }
  @Transaction()
  async getUserSales(
    userId: string,
    publicationId: string,
    offset: number,
    limit: number,
    tx?: PrismaService | PrismaClient,
  ) {
    const count = await tx.userSales.count({
      where: {
        userId: userId,
        publicationListing: {
          publicationId,
        },
      },
    });

    const items = await tx.userSales.findMany({
      take: limit,
      skip: offset,
      where: {
        userId: userId,
        publicationListing: {
          publicationId,
        },
      },
      include: {
        orderItem: {
          include: {
            publicationListing: true,
          },
        },
      },
      orderBy: {
        orderItem: {
          createdAt: Prisma.SortOrder.desc,
        },
      },
    });

    return {
      count,
      items,
    };
  }
}
