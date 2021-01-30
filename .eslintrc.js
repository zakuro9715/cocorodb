module.exports = {
  root: true,
  extends: [
    '@zakuro9715/vue-typescript/next',
  ],
  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      ignores: ['/^ion/'],
    }],
    'vue/no-deprecated-slot-attribute': 'off',
  },
}
