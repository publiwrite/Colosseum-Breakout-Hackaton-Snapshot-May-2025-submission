const nx = require('@nx/eslint-plugin');
const tsLintConfig = require('@nx/eslint-plugin/src/configs/typescript');
const jsLintConfig = require('@nx/eslint-plugin/src/configs/javascript');

module.exports = [
  {
    plugins: { nx },
    files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
    rules: {
      'nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
    ignores: ['node_modules', 'codegen.ts'],
  },
  {
    plugins: { nx },
    files: ['*.ts', '*.tsx'],
    rules: { ...tsLintConfig.rules },
    ignores: ['node_modules', 'codegen.ts'],
  },
  {
    plugins: { nx },
    files: ['*.js', '*.jsx'],
    rules: { ...jsLintConfig.rules },
    ignores: ['node_modules', 'codegen.ts'],
  },
];
