const express = require('express')
const next = require('next')
const LRUCache = require('lru-cache');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const ssrCache = new LRUCache({
    max: 100 * 1024 * 1024,
    length: function (n, key) {
        return n.length
    },
    maxAge: 1000 * 60 * 60 * 24 * 30
});

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/_next/*', (req, res) => {
      return handle(req, res);
    });

    server.get('*', (req, res) => {
      return renderAndCache(req, res)
    });

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })

function getCacheKey(req) {
    return `${req.path}`
}

async function renderAndCache(req, res) {
    const key = getCacheKey(req);

    if (ssrCache.has(key)) {
        //console.log(`serving from cache ${key}`);
        res.setHeader('x-cache', 'HIT');
        res.send(ssrCache.get(key));
        return
    }

    try {
        //console.log(`key ${key} not found, rendering`);
        const html = await app.renderToHTML(req, res, req.path, req.query);

        if (res.statusCode !== 200) {
            res.send(html);
            return
        }

        ssrCache.set(key, html);

        res.setHeader('x-cache', 'MISS');
        res.send(html)
    } catch (err) {
        app.renderError(err, req, res, req.path, req.query)
    }
}
