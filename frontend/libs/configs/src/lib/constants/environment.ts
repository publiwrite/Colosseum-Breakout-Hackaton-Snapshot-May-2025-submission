export const IS_LOCAL = process.env.NEXT_PUBLIC_ENVIRONMENT === 'local';
export const IS_DEVELOPMENT =
  process.env.NEXT_PUBLIC_ENVIRONMENT === 'development';
export const IS_STAGING = process.env.NEXT_PUBLIC_ENVIRONMENT === 'stage';
export const IS_PRODUCTION =
  process.env.NEXT_PUBLIC_ENVIRONMENT === 'production';

export const IS_NON_PRODUCTION = IS_LOCAL || IS_DEVELOPMENT || IS_STAGING;
