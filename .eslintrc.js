module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'prettier'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    camelcase: 0,
    'consistent-return': 0,
    'no-param-reassign': ['error', { props: false }],
    'no-shadow': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'no-use-before-define': ['error', { functions: false, classes: true }],
    'prefer-promise-reject-errors': 0,
    radix: ['error', 'as-needed'],
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/label-has-associated-control': ['error', { depth: 5 }],
    // This rule is deprecated, and also doesn't work with how the react-md component library handles labeling:
    'jsx-a11y/label-has-for': 0,
    'prettier/prettier': 'error',
    'react/destructuring-assignment': 0,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/no-array-index-key': 0,
    'react/react-in-jsx-scope': 0,
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/no-unescaped-entities': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
  },
}

/*
ESLINT CONFIG NOTES: 
We should be able to re-enable all of the rules starting with `react/` after some refactoring.
Some will be controversial.
- Regarding `react/destructuring-assignment`, here's the reasoning:
https://github.com/yannickcr/eslint-plugin-react/issues/1731
https://github.com/yannickcr/eslint-plugin-react/issues/1629
- Regarding `react/no-array-index-key`, here's the reasoning:
https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318
https://github.com/facebook/react/issues/12873
Unrelated to React, regarding `import/no-unresolved`:
A potential alternative to disabling would be to install "eslint-import-resolver-alias"
and then permit specific aliases, like so:
  "settings": {
    "import/resolver": {
      "alias": {
        "map": [
          ["components", "./app/javascript/app/components"],
          ["store", "./app/javascript/app/store"],
          ["utils", "./app/javascript/app/utils"],
          ["general", "./app/javascript/app/general"],
          ["va_public", "./app/javascript/app/va_public"]
        ],
        "extensions": [".js", ".jsx", ".json"]
      }
    }
  }
...but that gets difficult to maintain as we add more and more directories.
*/
