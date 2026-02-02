
import http from 'http'

const server = http.createServer()

server.on('request', (req, res) => {
    if (req.url === '/') {
        res.end('Welcome to the Home Page!')
    } else if (req.url === '/about') {
        res.end('This is the About Page.')
    } else {
        res.end('404 - Page Not Found')
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000')
})