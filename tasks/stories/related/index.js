const webhoseio = require('./webhoseio')

module.exports = (topics) => {
  let promises = []

  // topics.forEach(topic => {
  //   promises.push(webhoseio(topic))
  // })

  promises.push(webhoseio(topics[0]))

  return Promise.all(promises)
}
