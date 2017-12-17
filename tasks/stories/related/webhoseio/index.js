const webhoseio = require('webhoseio')

module.exports = (query) => {
  const client = webhoseio.config({token: 'f908547b-8bde-4bd9-a7e3-f5de41f78401'})

  const q = query.reduce((acc, item, index, arr) => {
    if (index === arr.length - 1) {
      return acc.concat(`title:"${item.name}"`)
    }
    return acc.concat(`title:"${item.name}" OR `)
  }, '')

  // console.log('Q: ', q)

  const queryParams = {
    q: `performance_score:>0 language:english published:>${Date.now() - 86400000} (${q})`,
    sort: 'crawled'
  }

  // client.query('filterWebContent', queryParams)
  //   .then(response => {
  //     console.log(response)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
}
