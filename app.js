// const CachedHandler = require('next-boost').default
// const express = require('express')
// const server = express()

// const hostname = 'deltawy.net'
// const port = 3014;
// const dev = process.env.NODE_ENV !== 'production'
// const args = { dir: '.', dev }

// async function main() {
//   server.get('/hello', function (req, res) {
//     res.send('hello world')
//   })

//   let handler
//   if (dev) {
//     const init = require('./init').default
//     handler = await init(args)
//   } else {
//     const script = require.resolve('./init')
//     const cached = await CachedHandler({ script, args })
//     handler = cached.handler
//   }
//   server.get('*', handler)

//   server.listen(port  ,'0.0.0.0', (err) => {
//     if (err) throw err
//     console.log(
//       `> Ready on https://${hostname}:${port}, dev ${dev ? 'on' : 'off'} `
//     )
//   })
// }

// main()


const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
 
const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3001
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()
 
app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl
 
      if (pathname === '/a') {
        await app.render(req, res, '/a', query)
      } else if (pathname === '/b') {
        await app.render(req, res, '/b', query)
      } else {
        await handle(req, res, parsedUrl)
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on https://${hostname}:${port}`)
    })
})
