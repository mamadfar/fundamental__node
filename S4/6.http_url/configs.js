import http from 'http'

const config = {
    host: 'jsonplaceholder.typicode.com',
    path: '/todos?_limit=3',
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'User-Agent': 'http module from Node.js'
    }
}

const req = http.request(config, callback)

req.end()

function callback(res) {
    console.log('Status Code: ', res.statusCode)
    console.log('Headers: ', res.headers)
    console.log('Raw Headers: ', res.rawHeaders)
    let body = ''

    res.on('data', chunk => {
        body += chunk.toString();
    })

    res.on('close', () => {
        console.log('Response Body: ', JSON.parse(body))
    })
}