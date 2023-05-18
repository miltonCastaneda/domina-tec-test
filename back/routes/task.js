const { v4: uuidv4 } = require('uuid');

/**
 * A plugin that provide encapsulated routes about task
 * @param {FastifyInstance} fastify encapsulated fastify instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
async function task(fastify, options) {
    const collection = fastify.mongo.db.collection('task')

    fastify.get('/task', async (request, reply) => {
       
        const result = await collection.find().toArray()
        if (result.length === 0) {
            throw new Error('No documents found')
        }
        return result.map((x)=> {
            x.id = x.taskId
            delete x._id
            delete x.taskId
            return x;
        });
    })

    fastify.get('/task/:id', async (request, reply) => {
        
        const result = await collection.findOne({ taskId: request.params.id });
        
        if (!result) {
            throw new Error('Invalid value')
        }
        return result
    })

    fastify.delete('/task/:id', async (request, reply) => {

        const result = await collection.deleteOne({ taskId: request.params.id })
        if (!result) {
            throw new Error('Invalid value')
        }
        return result
    })

    fastify.delete('/task', async (request, reply) => {

        const result = await collection.deleteMany({})

        if (!result) {
            throw new Error('Invalid value')
        }

        return result
    })

    fastify.put('/task/:id', async (request, reply) => {
        
        const result = await collection.updateOne({ taskId: request.params.id }, {  $set: {
             
                taskId: request.body.id,
                title: request.body.title,
                completed: request.body.completed,
                description: request.body.description,
                doneAt: new Date()
            
            }})

        if (!result) {
            throw new Error('Invalid value')
        }

        return result
    })

    fastify.post('/task', taskBodySchema, async (request, reply) => {
    
        const result = await collection.insertOne(
            { 
                taskId: request.body.id,
                title: request.body.title,
                completed: request.body.completed,
                description: request.body.description,
                createAt: new Date() 
            })

        if (!result) {
            throw new Error('Invalid value')
        }

        return result
    })
}

/**
 * A ojbect with schema definition for validate "task in method put"
 */
const taskUpdateSchema = {
    schema: {
        type: 'object',
        required: ['description'],
        properties: {
            description: { type: 'string' }
        },
        querystring: {
            type: 'object',
            properties: {
                id: { type: 'string' }
            },
            required: ['id'],
        },
    }
}

/**
 * A ojbect with schema definition for validate "task in method post"
 */
const taskBodySchema = {
    schema: {
        type: 'object',
        required: ['description'],
        properties: {
            description: { type: 'string' }
        },
    }
}

module.exports = task