module.exports = {
  env: {
    amd: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  overrides: [{ files: ['*.jsx', '*.js'] }],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'react-native', 'jest', 'prettier'],
  globals: {
    fetch: false,
    React: false,
  },
  settings: {
    react: {
      version: '17.0.2',
    },
  },
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': 'off',
    'react/react-in-jsx-scope': 1,
    'react/jsx-key': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'no-underscore-dangle': 'off',
    'react/prop-types': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'default-case': 'off',
    'no-case-declarations': 'off',
    'object-shorthand': 'off',
    'consistent-return': 'off',
    'no-undef': 'error',
    'no-restricted-globals': 'off',
    'no-restricted-syntax': 'off',
    camelcase: 'off',
    'no-shadow': [
      'error',
      {
        allow: [
          'item',
          'index',
          'e',
          'ev',
          'event',
          'id',
          'language',
          'cart',
          'billing',
          'shipping',
          'node',
          'term',
          'streamFacet',
        ],
      },
    ],
    'no-return-assign': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'guard-for-in': 'off',
    'no-param-reassign': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-alert': 'error',
    yoda: 'error',
    'func-names': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
  },
};
