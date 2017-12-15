const Thread = require('../../models/thread')
const data = require('../../test/data/webhoseio.json')

module.exports = (db) => {
  db.dropCollection('threads', (err, result) => {
    if (err) {
      console.log('Clearing collection error: ', err)
    }
  })

  data.posts.map(post => {
    const thread = new Thread({
      title: post.title,
      text: post.text
    })

    thread.save(err => {
      if (err) console.error(err)
    })
  })
}
