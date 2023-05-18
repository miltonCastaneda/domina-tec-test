const { v4: uuidv4 } = require('uuid');

/**
 * A plugin that provide encapsulated routes about user
 * @param {FastifyInstance} fastify encapsulated fastify instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
async function user(fastify, options) {
    const collection = fastify.mongo.db.collection('user')

    fastify.get('/user', async (request, reply) => {
        
        const result = await collection.find().toArray()
        if (result.length === 0) {
            throw new Error('No documents found')
        }
        return result
    })

    fastify.get('/user/:userName', async (request, reply) => {
        
        const result = await collection.findOne({ userName: request.params.userName })
        if (!result) {
            throw new Error('Invalid value')
        }
        return result
    })

    fastify.delete('/user/:userName', async (request, reply) => {

        const result = await collection.deleteOne({ userName: request.params.userName })
        if (!result) {
            throw new Error('Invalid value')
        }
        return { success: true }
    })

    fastify.delete('/user', async (request, reply) => {

        const result = await collection.deleteMany({})

        if (!result) {
            throw new Error('Invalid value')
        }

        return { success: true }
    })

    fastify.put('/user/:userName', userBodySchema , async (request, reply) => {
        
        const result = await collection.updateOne({ userName: request.params.userName }, {  
            $set: {
                userName: request.body.userName,
                fullName: request.body.fullName,
                passWord: request.body.passWord,
                email: request.body.email,
                phone: request.body.phone,
                doneAt: new Date()
        } })

        if (!result) {
            throw new Error('Invalid value')
        }

        return { success: true }
    })

    fastify.post('/user', userBodySchema , async (request, reply) => {
    
        const result = await collection.insertOne({
            userName: request.body.userName,
            fullName: request.body.fullName,
            passWord: request.body.passWord,
            email: request.body.email,
            phone: request.body.phone,
            createAt: new Date() })

        if (!result) {
            throw new Error('Invalid value')
        }

        return { success: true }
    })

    fastify.post('/auth', userBodySchema , async (request, reply) => {
    
        //TODO: to improve the auth way  
        const result = await collection.findOne({
            userName: request.body.userName,
            passWord: request.body.passWord})

        if (!result) {
            return { success: false }
        }

        return { success: true }
    })
}

/**
 * A ojbect with schema definition for validate "user in method put"
 */
const userUpdateSchema = {
    schema: {
        type: 'object',
        required: ['userName', 'fullName', 'password', 'email'],
        properties: {
            userName: { type: 'string' },
            fullName: { type: 'string' },
            password: { type: 'string' },
            email: { type: 'string' },
            phone: { type: 'string' },
        },
        querystring: {
            type: 'object',
            properties: {
                userName: { type: 'string' }
            },
            required: ['userName'],
        },
    }
}

/**
 * A ojbect with schema definition for validate "user in method post"
 */
const userBodySchema = {
    schema: {
        type: 'object',
        required: ['userName', 'fullName', 'password', 'email' ],
        properties: {
            userName: { type: 'string' },
            fullName: { type: 'string' },
            password: { type: 'string' },
            email: { type: 'string' },
            phone: { type: 'string' },
        },
    }
}

module.exports = user