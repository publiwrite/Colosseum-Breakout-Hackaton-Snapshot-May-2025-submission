import { Injectable } from '@nestjs/common';
import { PinataService, PrismaService, S3Service } from '@libs/core';
import { CreateBookLicenseInput } from './dto/create-book-license.input';
import {
  buildBookLicenseCoverKey,
  buildBookLicenseManuscriptKey,
} from './book-license.utils';
import { v4 } from 'uuid';
import { ConfigService } from '@nestjs/config';
import {
  AssetType,
  PrismaClient,
  R_BookLicenseOrderStatus,
} from '@prisma-clients/main';
import { PaginationParamsDto, SortOrder, Transaction } from '@lib/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { QueueNames } from '@lib/common/entities/queues';
import {
  BookLicenseCreationJobInput,
  BookLicenseCreationSteps,
} from './processors/dto/book-license-creation-job.input';
import { BookLicense } from './entities/book-license.entity';

@Injectable()
export class BookLicenseService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly s3Service: S3Service,
    private readonly configService: ConfigService,
    private readonly pinataService: PinataService,

    @InjectQueue(QueueNames.BookLicenseCreation)
    private bookLicenseCreationQueue: Queue<BookLicenseCreationJobInput>,
  ) {}

  async createBookLicense(ownerUserId: string, input: CreateBookLicenseInput) {
    const bookLicenseId = v4();
    const {
      title,
      description,
      priceInCents,
      ownerWalletAddress,
      authorName,
      typeOfRights,
      isbn,
      isForCommercialUse,
    } = input;

    const bookLicenseCoverKey = buildBookLicenseCoverKey(
      bookLicenseId,
      input.coverAssetKey.split('.').pop(),
    );

    const bookLicenseManuscriptKey = buildBookLicenseManuscriptKey(
      bookLicenseId,
      input.manuscriptAssetKey.split('.').pop(),
    );

    const signedUrl = await this.s3Service.getSignedUrl(
      this.configService.get('TEMPORARY_BUCKET'),
      input.coverAssetKey,
    );

    const coverAssetCid = await this.pinataService.uploadFromUrl(signedUrl);

    await Promise.all([
      // Copy book license cover from temp bucket to public bucket
      this.s3Service.copyObject(
        this.configService.get('TEMPORARY_BUCKET'),
        input.coverAssetKey,
        this.configService.get('PUBLIC_CDN_BUCKET'),
        bookLicenseCoverKey,
      ),

      // Copy book license manuscript content from temp bucket to private bucket
      this.s3Service.copyObject(
        this.configService.get('TEMPORARY_BUCKET'),
        input.manuscriptAssetKey,
        this.configService.get('PRIVATE_ASSETS_BUCKET'),
        bookLicenseManuscriptKey,
      ),
    ]);

    const bookLicense = await this.prisma.r_BookLicense.create({
      data: {
        id: bookLicenseId,
        title,
        description,
        ownerUserId,
        priceInCents,
        ownerWalletAddress,
        isbn,
        isForCommercialUse,
        typeOfRights,
        genres: {
          connect: input.genresIds.map((id) => ({ id })),
        },
        authors: {
          create: {
            name: authorName,
            userId: ownerUserId,
          },
        },
        coverAssetKey: bookLicenseCoverKey,
        coverAssetCid,
        manuscriptAssetKey: bookLicenseManuscriptKey,
      },
      include: this.includeBookLicenseFields(),
    });

    await this.bookLicenseCreationQueue.add(
      `Create book license (${bookLicenseId})`,
      {
        bookLicenseId,
        step: BookLicenseCreationSteps.Initial,
      },
    );

    return bookLicense;
  }

  async getOwnedBookLicenses(ownerUserId: string) {
    const items = await this.prisma.r_BookLicense.findMany({
      where: { ownerUserId },
      include: {
        authors: true,
        genres: true,
        orders: {
          select: {
            id: true,
            status: true,
            solanaPNftAddress: true,
            solanaPNftTxSignature: true,
            postPaymentTxSignature: true,
            signedTemplateIpfsCid: true,
            createdAt: true,
          },
          where: {
            status: R_BookLicenseOrderStatus.PAID,
          },
        },
      },
    });

    return items.map((item) => this.enhanceBookLicenseWithAssets(item as any));
  }

  @Transaction()
  async getPurchasedBookLicenses(
    userId: string,
    tx?: PrismaService | PrismaClient,
  ) {
    const purchasedBookLicensesIds = await tx.r_BookLicenseOrder.findMany({
      select: {
        bookLicenseId: true,
      },
      where: {
        buyerUserId: userId,
        status: R_BookLicenseOrderStatus.PAID,
      },
    });

    const items = await tx.r_BookLicense.findMany({
      where: {
        id: {
          in: purchasedBookLicensesIds.map((l) => l.bookLicenseId),
        },
      },
      include: {
        authors: true,
        genres: true,
        metadata: true,
        orders: {
          select: {
            id: true,
            status: true,
            solanaPNftAddress: true,
            solanaPNftTxSignature: true,
            postPaymentTxSignature: true,
            signedTemplateIpfsCid: true,
            createdAt: true,
          },
          where: {
            buyerUserId: userId,
            status: R_BookLicenseOrderStatus.PAID,
          },
        },
      },
    });

    return items.map((item) => this.enhanceBookLicenseWithAssets(item as any));
  }

  @Transaction()
  async getBookLicenseManuscriptUrl(
    bookLicenseId: string,
    userId: string,
    tx?: PrismaService | PrismaClient,
  ) {
    await this.checkIfUserHasAccessToBookLicenseManuscriptContent(
      bookLicenseId,
      userId,
      tx,
    );

    const license = await this.findBookLicenseById(bookLicenseId);

    const privateAssetsBucketName = this.configService.get(
      'PRIVATE_ASSETS_BUCKET',
    );

    return await this.s3Service.getSignedUrl(
      privateAssetsBucketName,
      license.manuscriptAssetKey,
    );
  }

  @Transaction()
  async findBookLicenseOrderById(
    orderId: string,
    userId: string,
    tx?: PrismaService | PrismaClient,
  ) {
    return await this.checkIfUserHasAccessToSignedAgreementForAnOrder(
      orderId,
      userId,
      tx,
      false,
    );
  }

  @Transaction()
  async getBookLicenseSales(
    bookLicenseId: string,
    userId: string,
    tx?: PrismaService | PrismaClient,
  ) {
    const bookLicense = await this.prisma.r_BookLicense.findFirst({
      where: {
        id: bookLicenseId,
        ownerUserId: userId,
      },
    });

    if (!bookLicense) {
      throw new Error('You do not have access to the sale data');
    }

    const orders = (
      await tx.r_BookLicenseOrder.findMany({
        where: {
          bookLicenseId,
          status: R_BookLicenseOrderStatus.PAID,
        },
        orderBy: {
          createdAt: SortOrder.DESC,
        },
      })
    ).filter((order) => !!order.signedTemplateIpfsCid);

    const volume = Number(bookLicense.priceInCents) * orders.length;
    return {
      volume,
      orders,
    };
  }

  // This is used for both the owner or the buyer
  private async checkIfUserHasAccessToSignedAgreementForAnOrder(
    orderId: string,
    userId: string,
    tx: PrismaService | PrismaClient,
    checkStatus = true,
  ) {
    const order = await tx.r_BookLicenseOrder.findFirst({
      where: {
        id: orderId,
        ...(checkStatus && {
          status: R_BookLicenseOrderStatus.PAID,
        }),
        OR: [
          {
            buyerUserId: userId,
          },
          {
            bookLicense: {
              ownerUserId: userId,
            },
          },
        ],
      },
      include: {
        bookLicense: true,
      },
    });

    if (!order) {
      throw new Error('You do not have access to this signed agreement');
    }

    return order;
  }

  // This is used for both the owner or the buyer
  private async checkIfUserHasAccessToBookLicenseManuscriptContent(
    bookLicenseId: string,
    userId: string,
    tx: PrismaService | PrismaClient,
  ): Promise<boolean> {
    const order = await tx.r_BookLicenseOrder.findFirst({
      where: {
        bookLicenseId,
        buyerUserId: userId,
        status: R_BookLicenseOrderStatus.PAID,
      },
      include: {
        bookLicense: true,
      },
    });

    const license = await tx.r_BookLicense.findFirst({
      where: {
        id: bookLicenseId,
        ownerUserId: userId,
      },
    });

    if (!order && !license) {
      throw new Error('You do not have access to this book license');
    }

    return true;
  }

  async findBookLicenseById(
    id: string,
    tx: PrismaService | PrismaClient = this.prisma,
  ) {
    const item = await tx.r_BookLicense.findUnique({
      where: { id },
      include: this.includeBookLicenseFields(),
    });

    return this.enhanceBookLicenseWithAssets(item as any);
  }

  async findBookLicenseByIds(
    ids: string[],
    tx: PrismaService | PrismaClient = this.prisma,
  ) {
    const items = await tx.r_BookLicense.findMany({
      where: {
        id: {
          in: ids,
        },
      },
      include: this.includeBookLicenseFields(),
    });
    return items.map((item) => this.enhanceBookLicenseWithAssets(item as any));
  }

  @Transaction()
  async findAll(
    pagination: PaginationParamsDto,
    excludedBookLicenseId: string | undefined = undefined,
    tx?: PrismaService | PrismaClient,
  ) {
    const items = await tx.r_BookLicense.findMany({
      skip: pagination.offset,
      take: pagination.limit,
      include: this.includeBookLicenseFields(),
      ...(excludedBookLicenseId && {
        where: {
          id: {
            not: excludedBookLicenseId,
          },
        },
      }),
      orderBy: { createdAt: SortOrder.DESC },
    });

    const count = await tx.r_BookLicense.count({
      ...(excludedBookLicenseId && {
        where: {
          id: {
            not: excludedBookLicenseId,
          },
        },
      }),
    });

    return {
      items: items.map((item) =>
        this.enhanceBookLicenseWithAssets(item as any),
      ),
      count,
    };
  }

  enhanceBookLicenseWithAssets(license: BookLicense) {
    return {
      ...license,
      assets: license.coverAssetKey
        ? [
            {
              id: license.id,
              key: license.coverAssetKey,
              type: AssetType.cover,
              bookId: '',
            },
          ]
        : [],
    };
  }

  includeBookLicenseFields() {
    return {
      authors: true,
      genres: true,
      metadata: true,
      orders: {
        select: {
          id: true,
          status: true,
          solanaPNftAddress: true,
          solanaPNftTxSignature: true,
          postPaymentTxSignature: true,
          signedTemplateIpfsCid: true,
          createdAt: true,
        },
        where: {
          status: R_BookLicenseOrderStatus.PAID,
        },
      },
    };
  }
}
