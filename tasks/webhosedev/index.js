const Thread = require('../../models/thread')
const data = require('../../test/data/webhoseio.json')

module.exports = (db) => {
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
