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
    'plugin:vue/strongly-recommended',
    'zakuro'
  ],
  plugins: [
    'vue',
  ],
  rules: {
    "no-console": 1,
    "no-debugger": 1,
    "import/extensions": 0,
  },
}
