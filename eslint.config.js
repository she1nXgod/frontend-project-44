import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';

const compat = new FlatCompat({
  recommendedConfig: pluginJs.configs.recommended,
});

export default [
  ...compat.extends('airbnb-base'),
  {
    rules: {
      'import/extensions': [
        'error',
        {
          js: 'always',
        },
      ],
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'no-console': 'off',
      'import/no-extraneous-dependencies': 'off',
    },
  },
];
