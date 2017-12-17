const google = require('./google')

module.exports = (stories) => {
  let promises = []

  stories.forEach(story => {
    promises.push(google(story))
  })

  return Promise.all(promises)
}
