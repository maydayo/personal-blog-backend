import Fastify, { FastifyInstance } from 'fastify'

const app: FastifyInstance = Fastify({ logger: true })

app.listen(3001, '0.0.0.0', (err, address) => {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }
    app.log.info(`server listening on ${address}`)
})
