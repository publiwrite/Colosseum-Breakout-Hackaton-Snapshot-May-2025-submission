import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthorizationGuard, GqlCognitoUser } from '@nestjs-cognito/graphql';
import { CognitoJwtPayload } from 'aws-jwt-verify/jwt-model';
import { CheckoutService } from './checkout.service';
import { Balance } from './entities/balance.entity';
import { BookSalesPage } from './entities/book-sales.entity';
import { PaginationParamsDto } from '@lib/common';
import { UserBookSalesPage } from './entities/user-book-sales.entity';
import { OrderPrintingSettingsInput } from './dto/order-printing-settings.dto';
import { HelioService } from './helio/helio.service';

@Resolver()
export class CheckoutResolver {
  constructor(
    private readonly checkoutServiceService: CheckoutService,
    private readonly helioService: HelioService,
  ) {}

  @UseGuards(AuthorizationGuard({}))
  @Mutation(() => String)
  async createOrder(
    @GqlCognitoUser() user: CognitoJwtPayload,
    @Args('printingSettings', {
      nullable: true,
      type: () => OrderPrintingSettingsInput,
    })
    printingSettings?: OrderPrintingSettingsInput,
  ) {
    return this.checkoutServiceService.createStripeOrderFromBasket(
      user.sub,
      printingSettings ?? null,
    );
  }

  @UseGuards(AuthorizationGuard({}))
  @Mutation(() => String)
  async createBuyNowOrder(
    @GqlCognitoUser() user: CognitoJwtPayload,
    @Args('publicationListingId', { type: () => String })
    publicationListingId: string,
    @Args('printingSettings', {
      nullable: true,
      type: () => OrderPrintingSettingsInput,
    })
    printingSettings?: OrderPrintingSettingsInput,
  ) {
    return this.checkoutServiceService.createBuyNowStripeOrder(
      user.sub,
      publicationListingId,
      printingSettings ?? null,
    );
  }

  @UseGuards(AuthorizationGuard({}))
  @Query(() => String)
  async accountSessionSecret(@GqlCognitoUser() user: CognitoJwtPayload) {
    return this.checkoutServiceService.createConnectedAccountSession(user.sub);
  }

  @UseGuards(AuthorizationGuard({}))
  @Mutation(() => String)
  async createConnectedAccount(
    @GqlCognitoUser() user: CognitoJwtPayload,
    @Args('countryIso', { type: () => String }) countryIso: string,
  ) {
    return this.checkoutServiceService.createConnectedAccount(
      user.sub,
      countryIso,
    );
  }

  @UseGuards(AuthorizationGuard({}))
  @Query(() => Boolean)
  async accountOnboarded(@GqlCognitoUser() user: CognitoJwtPayload) {
    return this.checkoutServiceService.isConnectedAccountOnboarded(user.sub);
  }

  @UseGuards(AuthorizationGuard({}))
  @Mutation(() => Boolean)
  async withdraw(
    @GqlCognitoUser() user: CognitoJwtPayload,
    @Args('amount', { type: () => Number }) amount: number,
  ) {
    await this.checkoutServiceService.withdraw(user.sub, amount);
    return true;
  }

  @UseGuards(AuthorizationGuard({}))
  @Mutation(() => String)
  async createHelioBuyNowOrder(
    @GqlCognitoUser() user: CognitoJwtPayload,
    @Args('publicationListingId', { type: () => String })
    publicationListingId: string,
    @Args('printingSettings', {
      nullable: true,
      type: () => OrderPrintingSettingsInput,
    })
    printingSettings?: OrderPrintingSettingsInput,
  ) {
    return this.checkoutServiceService.createHelioBuyNowOrder(
      user.sub,
      publicationListingId,
      printingSettings,
    );
  }

  @UseGuards(AuthorizationGuard({}))
  @Mutation(() => String)
  async createHelioOrder(
    @GqlCognitoUser() user: CognitoJwtPayload,
    @Args('printingSettings', {
      nullable: true,
      type: () => OrderPrintingSettingsInput,
    })
    printingSettings?: OrderPrintingSettingsInput,
  ) {
    return this.checkoutServiceService.createHelioOrderFromBasket(
      user.sub,
      printingSettings,
    );
  }

  @UseGuards(AuthorizationGuard({}))
  @Query(() => Balance)
  async getAccountBalance(
    @GqlCognitoUser() user: CognitoJwtPayload,
  ): Promise<Balance> {
    return this.checkoutServiceService.getAccountBalance(user.sub);
  }

  @UseGuards(AuthorizationGuard({}))
  @Mutation(() => Boolean)
  async transferAvailableBalance(@GqlCognitoUser() user: CognitoJwtPayload) {
    return this.checkoutServiceService.transferAvailableFiatBalanceToStripe(
      user.sub,
    );
  }

  @UseGuards(AuthorizationGuard({}))
  @Query(() => BookSalesPage)
  async booksSales(
    @GqlCognitoUser() user: CognitoJwtPayload,
    @Args('pagination', {
      nullable: true,
      defaultValue: {
        limit: 10,
        offset: 0,
      },
    })
    pagination?: PaginationParamsDto,
  ) {
    return this.checkoutServiceService.getBooksSales(user.sub, pagination);
  }

  @UseGuards(AuthorizationGuard({}))
  @Query(() => UserBookSalesPage)
  async userSalesByBookId(
    @GqlCognitoUser() user: CognitoJwtPayload,
    @Args('bookId', { type: () => String }) bookId: string,
    @Args('pagination', {
      nullable: true,
      defaultValue: {
        limit: 10,
        offset: 0,
      },
    })
    pagination?: PaginationParamsDto,
  ) {
    return this.checkoutServiceService.getUserSales(
      user.sub,
      bookId,
      pagination.offset,
      pagination.limit,
    );
  }

  @UseGuards(AuthorizationGuard({}))
  @Mutation(() => String)
  async createHelioLicensePayment(
    @GqlCognitoUser() user: CognitoJwtPayload,
    @Args('licenseId', { type: () => String }) licenseId: string,
  ) {
    return this.helioService.createHelioLicensePayment(user.sub, licenseId);
  }
}
