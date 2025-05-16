import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';
import { PublicKey } from '@solana/web3.js';

export function IsSolanaWalletAddress(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isSolanaWalletAddress',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          try {
            new PublicKey(value);
            return true;
          } catch (error) {
            return false;
          }
        },
        defaultMessage(args: ValidationArguments) {
          return `The wallet address ${args.value} is not a valid Solana wallet address`;
        },
      },
    });
  };
}
