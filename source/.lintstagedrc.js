module.exports = {
  '*.js': ['eslint --fix', 'prettier --write --ignore-unknown'],
  '*.scss': ['stylelint --fix', 'git add'],
}
