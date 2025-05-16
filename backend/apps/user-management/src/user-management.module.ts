import { Module } from '@nestjs/common';
import { CommonModule, getApolloDriverConfig } from '@lib/common';
import { ConfigModule } from '@nestjs/config';
import { ApolloFederationDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { UserInternalController } from './internal/user.internal.controller';
import { WalletSignInModule } from './wallet-sign-in/wallet-sign-in.module';
import { WalletMessageModule } from './wallet-message/wallet-message.module';

@Module({
  imports: [
    CommonModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>(
      getApolloDriverConfig(process.env.NODE_ENV),
    ),
    WalletSignInModule,
    WalletMessageModule,
  ],
  controllers: [UserInternalController],
})
export class UserManagementModule {}
