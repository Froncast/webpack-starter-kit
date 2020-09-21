module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['airbnb'],
  plugins: ['babel', 'import', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    semi: [
      'error',
      'never',
    ],
    'arrow-parens': [
      'error',
      'as-needed',
    ],
    'no-confusing-arrow': [
      'error',
      {
        allowParents: true,
      },
    ],
  },
}
