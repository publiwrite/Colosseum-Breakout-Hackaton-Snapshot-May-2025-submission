import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookLicenseService } from './book-license.service';
import { BookLicense, BookLicensePage } from './entities/book-license.entity';
import { CreateBookLicenseInput } from './dto/create-book-license.input';
import { UseGuards } from '@nestjs/common';
import { AuthorizationGuard, GqlCognitoUser } from '@nestjs-cognito/graphql';
import { CognitoJwtPayload } from 'aws-jwt-verify/jwt-model';
import { PaginationParamsDto } from '@lib/common';
import { BookLicenseOrder } from './entities/book-license-order.entity';
import { BookLicenseSaleEntity } from './entities/book-license-sale.entity';

@Resolver(() => BookLicense)
export class BookLicenseResolver {
  constructor(private readonly bookLicenseService: BookLicenseService) {}

  // Authenticated queries & mutations
  @UseGuards(AuthorizationGuard({}))
  @Mutation(() => BookLicense)
  async createBookLicense(
    @Args('input') createBookLicenseInput: CreateBookLicenseInput,
    @GqlCognitoUser() user: CognitoJwtPayload,
  ) {
    return this.bookLicenseService.createBookLicense(
      user.sub,
      createBookLicenseInput,
    );
  }

  @UseGuards(AuthorizationGuard({}))
  @Query(() => [BookLicense])
  async getMyBookLicenses(@GqlCognitoUser() user: CognitoJwtPayload) {
    return this.bookLicenseService.getOwnedBookLicenses(user.sub);
  }

  @UseGuards(AuthorizationGuard({}))
  @Query(() => [BookLicense])
  async getPurchasedBookLicenses(@GqlCognitoUser() user: CognitoJwtPayload) {
    return this.bookLicenseService.getPurchasedBookLicenses(user.sub);
  }

  @UseGuards(AuthorizationGuard({}))
  @Query(() => String)
  async getBookLicenseManuscriptUrl(
    @Args('bookLicenseId', { type: () => String }) bookLicenseId: string,
    @GqlCognitoUser() user: CognitoJwtPayload,
  ): Promise<string> {
    return this.bookLicenseService.getBookLicenseManuscriptUrl(
      bookLicenseId,
      user.sub,
    );
  }

  @UseGuards(AuthorizationGuard({}))
  @Query(() => BookLicenseSaleEntity)
  async getBookLicenseSales(
    @Args('bookLicenseId', { type: () => String }) bookLicenseId: string,
    @GqlCognitoUser() user: CognitoJwtPayload,
  ): Promise<BookLicenseSaleEntity> {
    return this.bookLicenseService.getBookLicenseSales(bookLicenseId, user.sub);
  }

  @UseGuards(AuthorizationGuard({}))
  @Query(() => BookLicenseOrder)
  async getBookLicenseOrderById(
    @Args('orderId', { type: () => String }) orderId: string,
    @GqlCognitoUser() user: CognitoJwtPayload,
  ): Promise<BookLicenseOrder> {
    return this.bookLicenseService.findBookLicenseOrderById(orderId, user.sub);
  }

  // Public queries & mutations
  @Query(() => BookLicense)
  async getBookLicenseById(@Args('id', { type: () => String }) id: string) {
    return this.bookLicenseService.findBookLicenseById(id);
  }

  @Query(() => [BookLicense])
  async getBookLicenseByIds(
    @Args('ids', { type: () => [String] }) ids: string[],
  ) {
    return this.bookLicenseService.findBookLicenseByIds(ids);
  }

  @Query(() => BookLicensePage)
  async getBookLicenses(
    @Args('pagination', {
      nullable: true,
      defaultValue: {
        limit: 10,
        offset: 0,
      },
    })
    pagination?: PaginationParamsDto,
    @Args('excludeLicenseId', {
      type: () => String,
      description:
        'This would be used on the book license page to show other available book licenses.',
      nullable: true,
    })
    excludedBookLicenseId?: string,
  ) {
    return this.bookLicenseService.findAll(pagination, excludedBookLicenseId);
  }
}
