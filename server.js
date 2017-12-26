const express = require('express')
const next = require('next')

const __DEV__ = 'production' !== process.env.NODE_ENV
const app = next({ __DEV__ })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()
        const PORT = process.env.PORT || 3000

        server.get('/p/:id', (req, res) => {
            const actualPage = '/post'
            const queryParams = { id: req.params.id }
            app.render(req, res, actualPage, queryParams)
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(PORT, (err) => {
            if (err) console.log(err)
            console.log(`> Ready on http://localhost:${ PORT }`)
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })