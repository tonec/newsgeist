const webhoseio = require('webhoseio')

module.exports = (db) => {
  const client = webhoseio.config({token: 'f908547b-8bde-4bd9-a7e3-f5de41f78401'})

  const queryParams = {
    'q': 'performance_score:>0 (title:"United States" OR title:US)',
    'sort': 'crawled'
  }

  client.query('filterWebContent', queryParams)
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
}
