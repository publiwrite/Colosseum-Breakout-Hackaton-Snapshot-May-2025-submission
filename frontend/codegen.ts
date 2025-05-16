import { CodegenConfig } from '@graphql-codegen/cli';
import * as dotenv from 'dotenv';

dotenv.config({ path: `./.env.local` });

const config: CodegenConfig = {
  pluckConfig: {
    modules: [
      {
        name: '@apollo/client',
        identifier: 'gql',
      },
    ],
  },
  schema: `${process.env.NEXT_PUBLIC_GATEWAY_API_URL}/graphql`,
  watch: true,
  overwrite: true,
  documents: [`./apps/**/*.{ts,tsx}`, `./libs/**/*.{ts,tsx}`],
  generates: {
    './libs/configs/src/lib/apollo/__generated__/': {
      preset: 'client',
      plugins: [],
      config: {
        dedupeFragments: true,
      },
      presetConfig: {
        gqlTagName: 'gql',
        fragmentMasking: false,
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
