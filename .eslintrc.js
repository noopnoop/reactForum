module.exports = {
  'settings' : {
    'react' : {
      'version' : 'detect'
    }
  },
  'parser' : '@typescript-eslint/parser',
  'plugins' : [
    '@typescript-eslint'
  ],
  'env' : {
    'browser' : true,
    'commonjs' : true,
    'es2020' : true,
    'node' : true,
    'mocha' : true
  },
  'extends' : [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  'parserOptions' : {
    'ecmaVersion' : 11,
    'sourceType' : 'module',
    'ecmaFeatures' : {
      'jsx' : true
    }
  },
  'rules' : {
    'indent' : [
      'warn',
      2
    ],
    'linebreak-style' : [
      'warn',
      'unix'
    ],
    'no-trailing-spaces' : [
      'warn'
    ],
    'no-unused-vars' : [
      'warn',
      {
        'argsIgnorePattern' : '^_',
        'varsIgnorePattern' : '^_'
      }
    ],
    'quotes' : [
      'warn',
      'single',
      'avoid-escape'
    ],
    'semi' : [
      'error',
      'always'
    ],
    'key-spacing' : [
      'warn',
      {
        'beforeColon' : true,
        'afterColon' : true
      }
    ],
    'space-before-function-paren' : [
      'warn',
    ]

  }
};
