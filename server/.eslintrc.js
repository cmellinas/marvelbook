module.exports = {
  env: {
    amd: true,
    browser: true,
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  globals: {},
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {},
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'linebreak-style': 0,
    'no-console': 'off',
    'no-plusplus': 'off',
    'object-curly-newline': [
      'error',
      {
        ExportDeclaration: { multiline: true, minProperties: 5 }
      }
    ],
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'es5' }]
  }
};
