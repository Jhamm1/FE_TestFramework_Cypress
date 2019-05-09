// This defines the mode of operation for checks depending on the environment
const mode = process.env.NODE_ENV === 'production' ? 'error' : 'warn'

module.exports = {
  parserOptions: {
    'parser': 'babel-eslint',
    'sourceType': 'module'
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],

  'plugins': [
    'eslint-plugin-babel'
  ],

  rules: {
    'arrow-body-style': [ 'error', 'as-needed' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'arrow-parens': [ 'error', 'as-needed' ],
    'arrow-spacing': [ 'error', {
      'before': true,
      'after': true,
    } ],

    'babel/semi': [ 'error', 'never' ],
    'block-spacing': 'error',
    'brace-style': [ 'error', '1tbs', { 'allowSingleLine': true } ],

    'camelcase': [ 'error', { 'properties': 'always' } ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'comma-spacing': [ 'error', { 'before': false, 'after': true } ],
    'computed-property-spacing': [ 'error', 'never' ],
    'consistent-return': [ 'error', { 'treatUndefinedAsUnspecified': true } ],

    'dot-location': [ 'error', 'property' ],

    'eol-last': [ 'error', 'always' ],
    'eqeqeq': 'error',

    'func-call-spacing': [ 'error', 'never' ],
    'func-name-matching': 'error',
    'func-names': [ 'error', 'never' ],

    'getter-return': 'error',

    'indent': [ 'error', 2, { 'SwitchCase': 1 } ],

    'key-spacing': [ 'error', {
      'beforeColon': false,
      'afterColon': true,
    } ],
    'keyword-spacing': 'error',

    'no-alert': mode,
    'no-console': mode,
    'no-const-assign': 'error',
    'no-debugger': mode,
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': [ 'error', { 'max': 1 } ],
    'no-return-assign': [ 'error', 'always' ],
    'no-trailing-spaces': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'no-whitespace-before-property': 'error',

    'object-curly-spacing': [ 'error', 'always' ],
    'object-shorthand': [ 'error', 'always' ],
    'one-var': [ 'error', 'never' ],

    'prefer-const': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-template': 'error',

    'quotes': [ 'error', 'single' ],

    'semi': [ 'error', 'never' ],
    'space-before-blocks': 'error',
    'space-before-function-paren': [ 'error', {
      'anonymous': 'never',
      'named': 'always',
      'asyncArrow': 'always',
    } ],
    'space-in-parens': [ 'error', 'never' ],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',

    'template-curly-spacing': [ 'error', 'never' ],

    'valid-jsdoc': 'error',
    'vue/attribute-hyphenation': [ 'error', 'never' ],
    'vue/html-indent': [ 'none' ],
    'vue/max-attributes-per-line': [ 'error', {
      singleline: 5,
      multiline: { max: 5, 'allowFirstLine': true },
    } ],
    'vue/attributes-order': [ 'none' ],
  },

  env: {
    node: true
  },
}
