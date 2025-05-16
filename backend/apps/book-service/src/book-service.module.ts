import { Module } from '@nestjs/common';
import { CommonModule, getApolloDriverConfig } from '@lib/common';
import { BookModule } from './book/book.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriverConfig } from '@nestjs/apollo';
import { BasketModule } from './basket/basket.module';
import { AuthorModule } from './author/author.module';
import { ReviewModule } from './review/review.module';
import { BookLicenseModule } from './book-license/book-license.module';

@Module({
  imports: [
    CommonModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>(
      getApolloDriverConfig(process.env.NODE_ENV),
    ),
    BookLicenseModule,
  ],
  controllers: [],
  providers: [],
})
export class BookServiceModule {}
