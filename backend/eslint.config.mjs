// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      'testing-app/**',
      'prisma/clients/**',
      'dist/**',
      'apps/ebook-converter/src/puppeteer-app/**',
    ],
  },
  {
    files: ['**/*.ts'],
    extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-unsafe-optional-chaining': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
);
