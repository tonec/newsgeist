module.exports = (options) => {
  let qs = ''

  for (let option in options) {
    let key = option
    let val = options[option]

    qs = qs.concat(key, '=', val, '&')
  }

  return `?${encodeURI(qs.slice(0, -1))}`
}
