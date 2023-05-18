

const dbConnector = require('./infrastructure/lib/mongoPluging')
const routes = require('./routes/index')

const environment = 'test'

/**
 * @type { import('fastify').FastifyInstance } Instance of Fastify
 */
const fastify = require('fastify')({
  logger: true
})

const cors = require('@fastify/cors');

fastify.register(dbConnector)
routes(fastify)


fastify.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS','PUT','DELETE']
});

fastify.listen({ port: 3001 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
