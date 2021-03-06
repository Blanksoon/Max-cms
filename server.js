const path = require('path')

const express = require('express')
const next = require('next')
const cors = require('cors')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const i18nextMiddleware = require('i18next-express-middleware')
const Backend = require('i18next-node-fs-backend')
const i18n = require('./tools/i18n')

const port = process.env.SERVER_PORT || 8080

const startNextServer = () => {
  app
    .prepare()
    .then(() => {
      const server = express()

      // server.get('/lives/:id', (req, res) => {
      //   const actualPage = '/lives_vdo'
      //   const queryParams = { id: req.params.id }
      //   app.render(req, res, actualPage, queryParams)
      // })

      // server.get('/vods/:id', (req, res) => {
      //   const actualPage = '/videoPlayer'
      //   const queryParams = { id: req.params.id }
      //   app.render(req, res, actualPage, queryParams)
      // })
      // enable middleware for i18next
      server.use(i18nextMiddleware.handle(i18n))
      // serve locales for client
      server.use('/locales', express.static(path.resolve('./locales')))
      // missing keys
      server.post(
        '/locales/add/:lng/:ns',
        i18nextMiddleware.missingKeyHandler(i18n)
      )
      //use cors
      server.use(cors())

      server.get('*', (req, res) => handle(req, res))

      server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
      })
    })
    .catch(ex => {
      console.error(ex.stack)
      process.exit(1)
    })
}

i18n
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init(
    {
      debug: false,
      preload: ['en', 'th'], // preload all langages
      ns: ['common'], // need to preload all the namespaces
      backend: {
        loadPath: path.resolve('./locales/{{lng}}/{{ns}}.json'),
        addPath: path.resolve('./locales/{{lng}}/{{ns}}.missing.json'),
      },
    },
    startNextServer
  )
