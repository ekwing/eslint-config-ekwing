# eslint-config-ekwing
This package provides Ekwingfe's base JS .eslintrc as an extensible shared config.

## Usage

### eslint-config-ekwing/vue
First, install this package
```
yarn add eslint-config-ekwing eslint-config-prettier eslint-plugin-import eslint-plugin-prettier eslint-plugin-simple-import-sort eslint-plugin-vue eslint -D
```
Then add following contents to your .eslintrc.js file
```
{
  extends: ['ekwing/vue']
}
```