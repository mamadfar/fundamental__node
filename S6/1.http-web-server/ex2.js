import http from 'http'

const server = http.createServer();

server.on('request', (req, res) => {

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Header1', 'value1')
    res.setHeader('Header2', ['val1', 'val2'])
    res.setHeader('Header3', {'val1': 'val2'})
    res.statusCode = 404;
    res.statusMessage = 'Not Found 2';

    res.writeHead(200, 'OK 2', {Header4: 'value4'});

    res.write('Hello, World! <br/>')
    res.write('Hello, World! <br/>')
    res.end('<b> Hello, World! </b> <br/>')
});


server.listen(3000, () => {
    console.log('Server is listening on port 3000')
})