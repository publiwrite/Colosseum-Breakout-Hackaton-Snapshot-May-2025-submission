import * as dotenv from 'dotenv';

dotenv.config({ path: './.env.local' });

export default {
  client: {
    service: {
      name: 'publiwrite',
      url: `${process.env.NEXT_PUBLIC_GATEWAY_API_URL}/graphql`,
    },
    includes: ['./apps/**/*.{ts,tsx}', './libs/**/*.{ts,tsx}'],
  },
};
