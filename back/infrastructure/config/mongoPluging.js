
// move to .ENV
const URL_DB = 'mongodb://db:27017/domina'
/**
 * @type {import('fastify-plugin').FastifyPlugin}
 */
const fastifyPlugin = require('fastify-plugin')


/**
 * Connects to a MongoDB database
 * @param {FastifyInstance} fastify Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
async function dbConnector (fastify, options) {
  fastify.register(require('@fastify/mongodb'), {
    url: URL_DB
  })
}

// Wrapping a plugin function with fastify-plugin exposes the decorators
// and hooks, declared inside the plugin to the parent scope.
module.exports = fastifyPlugin(dbConnector)