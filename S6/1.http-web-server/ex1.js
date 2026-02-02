
import http from 'http'

const server = http.createServer(() => {
    console.log('Request received')
})

server.listen(3000, () => {
    console.log('Server is listening on port 3000')
})

server.on('request', (req, res) => {
    res.write('Hello, World!')
    res.end()
})