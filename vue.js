module.exports = {
  extends: [
    './index.js',
    require.resolve('eslint-config-prettier/vue'),
    'plugin:vue/essential'
  ],
  rules: {
    'vue/v-on-style': 'error',
    'vue/v-bind-style': 'error',
    'vue/html-quotes': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/prop-name-casing': 'error',
    'vue/attributes-order': 'error',
    'vue/order-in-components': 'error',
    'vue/this-in-template': 'error',
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      ignores: []
    }]
  }
}