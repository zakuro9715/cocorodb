module.exports = {
  root: true,
  extends: [
    '@zakuro9715/vue-typescript/next',
  ],
  rules: {
    'vue/component-name-in-template-casting': ['error', 'PascalCase', {
      ignores: [/^Ion/],
    }],
  }
}
