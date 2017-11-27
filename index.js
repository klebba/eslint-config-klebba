module.exports = {
  plugins: ['prettier'],
  extends: ['prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    eqeqeq: ['error', 'allow-null'],
    'no-console': 'warn',
    'no-redeclare': ['error', { builtinGlobals: true }],
    'no-shadow': ['warn', { builtinGlobals: true, hoist: 'functions', allow: [] }],
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-unused-vars': 'warn',
    'no-var': 'error',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'prefer-const': 'error',
    'require-yield': 1,
  },
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
};
