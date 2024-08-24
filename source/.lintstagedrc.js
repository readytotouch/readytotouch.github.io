module.exports = {
  'source/**/*.js': ['eslint --fix', 'prettier --write --ignore-unknown'],
  'source/**/*.scss': ['stylelint --fix', 'git add --all'],
}
