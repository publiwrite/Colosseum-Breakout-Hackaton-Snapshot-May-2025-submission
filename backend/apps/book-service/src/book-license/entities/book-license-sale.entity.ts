import { Field, ObjectType } from '@nestjs/graphql';
import { BookLicenseOrder } from './book-license-order.entity';

@ObjectType()
export class BookLicenseSaleEntity {
  @Field(() => Number, { nullable: true })
  volume: number;

  @Field(() => [BookLicenseOrder])
  orders: BookLicenseOrder[];
}
