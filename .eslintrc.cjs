module.exports = {
  env: {
    node: true,
    es2021: true,
    'jest/globals': true,
  },
  plugins: ['deprecation', '@typescript-eslint', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
  ],
  overrides: [
    {
      files: ['**/**/*.ts'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: { 'filenames/match-regex': 'off' },
    },
  ],
  rules: {
    'i18n-text/no-en': 'off',
    'deprecation/deprecation': 'error',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSEnumDeclaration',
        message: "Don't declare enums.",
      },
    ],
    'prettier/prettier': 'off',
    'no-mixed-operators': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-readonly-parameter-types': ['error', { 'ignoreInferredTypes': true }],
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
};
