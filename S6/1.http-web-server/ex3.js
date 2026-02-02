
import http from 'http'

const server = http.createServer()

server.on('request', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    // res.end(JSON.stringify(req.headers, null, 2))
    // res.end(JSON.stringify(req.rawHeaders, null, 2))
    const obj = {
        httpVersion: req.httpVersion,
        method: req.method,
        url: req.url,
        host: req.headers.host,
    }

    res.end(JSON.stringify(obj, null, 2))
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000')
})