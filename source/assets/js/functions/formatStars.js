export default num => {
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1).replace(/\.0$/, '')}k`
  }
  return num.toString()
}
