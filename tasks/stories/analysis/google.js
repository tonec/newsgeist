const Language = require('@google-cloud/language')
const _get = require('lodash.get')

module.exports = (story) => {
  const client = new Language.LanguageServiceClient({
    keyFilename: './config/gckeys.json'
  })

  const document = {
    content: _get(story, 'description'),
    type: 'PLAIN_TEXT'
  }

  return client.analyzeEntities({document: document})
}
