import * as dotenv from 'dotenv';
import type { IGraphQLConfig } from 'graphql-config';

dotenv.config({ path: './.env.local' });

const config: IGraphQLConfig = {
  projects: {
    publiwrite: {
      schema: `${process.env.NEXT_PUBLIC_GATEWAY_API_URL}/graphql`,
      documents: ['./apps/**/*.{ts,tsx}', './libs/**/*.{ts,tsx}'],
    },
  },
};

export default config;
