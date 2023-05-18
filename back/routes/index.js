

function routes(fastify){
    fastify.register(require('./task'))
    fastify.register(require('./user'))
}

module.exports = routes