module.exports = {
  extends: [
    'plugin:vue/essential',
    require.resolve('eslint-config-prettier/vue'),
    './index.js'
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
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint'
  }
}