const jsonServer = require('json-server')
const router = jsonServer.router('db.json')
const middleware = jsonServer.defaults()
const server = jsonServer.create()

// server should use middleware and router
server.use(middleware)
server.use(router)

// set the port for the server
const PORT = 3000 || process.env.PORT

server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`)
    })