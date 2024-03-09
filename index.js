// [off, warn, error] || [0, 1, 2]
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-refresh'],
  rules: {
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-debugger': 'off',
    'no-shadow': 'off',
    'no-undef': 'off',
    'react-hooks/rules-of-hooks': 'warn',
    'react-refresh/only-export-components': ['off', { allowConstantExport: true }],
    'react/jsx-boolean-value': 'error',
    'react/react-in-jsx-scope': 'off',
    semi: 'off',
  },
}
