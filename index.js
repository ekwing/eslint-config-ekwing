module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    require.resolve('eslint-config-prettier')
  ],
  plugins: ['prettier', 'simple-import-sort', 'import'],
  rules: {
    'no-console': 0,
    'no-useless-escape': 0,
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        singleQuote: true,
        semi: false,
        trailingComma: 'none',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        insertPragma: false,
        requirePragma: false
      }
    ],
    'import/no-useless-path-segments': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-duplicates': 'error',
    'import/newline-after-import': 'error',
    'import/exports-last': 'error',
    'import/group-exports': 'error',
    'simple-import-sort/sort': 'error'
  },
  parser: 'babel-eslint'
}