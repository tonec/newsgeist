const Language = require('@google-cloud/language')

module.exports = (t) => {
  // Instantiates a client. Explicitly use service account credentials by
  // specifying the private key file. All clients in google-cloud-node have this
  // helper, see https://googlecloudplatform.github.io/google-cloud-node/#/docs/google-cloud/latest/guides/authentication
  console.log(Language)

  const client = new Language.LanguageServiceClient({
    keyFilename: './config/gckeys.json'
  })

  // The text to analyze
  const text = 'Theresa May heads to Brussels for key talks after Tory Brexit rebels inflict humiliating Commons defeat'

  const document = {
    content: text,
    type: 'PLAIN_TEXT'
  }

  // Detects the sentiment of the text
  client
    .analyzeEntities({document: document})
    .then(results => {
      const entities = results[0].entities

      console.log('Entities:', JSON.stringify(results, null, 2))
      entities.forEach(entity => {
        console.log(entity.name)
        console.log(` - Type: ${entity.type}, Salience: ${entity.salience}`)
        if (entity.metadata && entity.metadata.wikipedia_url) {
          console.log(` - Wikipedia URL: ${entity.metadata.wikipedia_url}$`)
        }
      })
    })
    .catch(err => {
      console.error('ERROR:', err)
    })
}
