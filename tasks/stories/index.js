const _get = require('lodash.get')
const _sortBy = require('lodash.sortBy')
const topStories = require('./top')
const analysis = require('./analysis')
const relatedStories = require('./related')

const topStoriesTransformer = (data) => {
  return data.value.reduce((acc, item) => {
    return acc.concat({
      title: _get(item, 'name'),
      url: _get(item, 'url'),
      description: _get(item, 'description')
    })
  }, [])
}

const entitiesTransformer = (data) => {
  let ents = data.map((item) => {
    return item[0].entities.reduce((acc, entity) => {
      if (_get(entity, 'salience') > 0.1 && _get(entity, 'type') === 'PERSON') {
        return acc.concat({
          name: _get(entity, 'name'),
          type: _get(entity, 'type'),
          salience: _get(entity, 'salience')
        })
      }
      return acc
    }, [])
  })

  ents = _sortBy(ents, (o) => o.salience)

  return ents
}

module.exports = () => {
  topStories()
    .then(topStoriesTransformer)
    .then(analysis)
    .then(entitiesTransformer)
    .then(relatedStories)
    .then(data => console.log('Data: ', data))
    .catch(error => console.log('Error bbb: ', error))
}
