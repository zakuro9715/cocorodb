module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/strongly-recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'vue',
  ],
  rules: {
    "no-console": 1,
    "no-debugger": 1,
    "prettier/prettier": [
      "error",
      {
        "printWidth": 120,
        "singleQuote": true,
        "trailingComma": "es5",
        "arrowParens": "always",
        "semi": false,
      },
    ],
  },
}
