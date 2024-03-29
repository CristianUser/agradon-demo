module.exports = {
  parserOptions: {
    ecmaVersion: '2018',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  // add global vars for chai, etc
  rules: {
    // possible errors
    'valid-jsdoc': [
      1,
      {
        requireReturn: false,
        requireParamDescription: false,
        requireReturnDescription: false
      }
    ],
    // best practices
    complexity: 0, // Reconsider this in the future
    'prefer-template': 2,
    'default-case': 2,
    'guard-for-in': 2,
    'no-alert': 1,
    'no-floating-decimal': 1,
    'no-self-compare': 2,
    'no-throw-literal': 2,
    'no-void': 2,
    'quote-props': [2, 'as-needed'],
    'vars-on-top': 2,
    'wrap-iife': 2,
    // variables
    'no-undef': 0,
    'no-unused-vars': 2,
    'no-var': 2,
    'no-const-assign': 2,
    'prefer-const': 2,
    // node.js
    'handle-callback-err': [2, '^.*(e|E)rr'],
    'no-mixed-requires': 0,
    'no-new-require': 2,
    'no-path-concat': 2,
    // stylistic issues
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    'comma-style': [2, 'last'],
    'comma-dangle': [2, 'never'],
    'eol-last': [2, 'always'],
    'max-nested-callbacks': [2, 5],
    'newline-after-var': [2, 'always'],
    'no-nested-ternary': 2,
    'no-spaced-func': 0,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 1,
    quotes: [2, 'single', 'avoid-escape'],
    semi: [2, 'always'],
    'keyword-spacing': 2,
    'space-before-blocks': [2, 'always'],
    'space-infix-ops': [
      1,
      {
        int32Hint: false
      }
    ],
    'spaced-comment': [2, 'always'],
    // legacy jshint rules
    'max-depth': [2, 4],
    'max-params': [2, 4]
  }
};
