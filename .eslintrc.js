module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'eslint:recommended'
  ],
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    requireConfigFile: false
  },
  rules: {
    semi: 2
  },
  globals: {
    React: 'readonly',
    ReactDOM: 'readonly',
  }
};
