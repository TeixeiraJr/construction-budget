require('dotenv').config()
require('newrelic')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const http = require('http')
const path = require('path')
const helmet = require('helmet')
const compression = require('compression')
const morgan = require('morgan')

const app = express()

const { requestHandler, errorHandler, tracingHandler } = require('./src/presenters/sentry')(app)

app.use(requestHandler())
app.use(errorHandler())
app.use(tracingHandler())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json({}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())
app.use(morgan('combined'))
app.use(compression())
app.use(helmet())
app.disable('x-powered-by')
app.disable('etag')

const port = process.env.PORT || 3000
const server = http.createServer(app)

require('./src/presenters/routes')(app)

app.get('/', (_, res) => res.sendFile(path.join(__dirname, './public', 'index.html')))
app.get('/health', (_, res) => res.status(200).json())

app.use((_, res) => res.status(404).json({ error: [{ title: '404', message: 'Route not found' }] }))
server.listen(port, () => console.info(`Server start in host: http://localhost:${port}`))

module.exports = app
