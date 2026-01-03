import http from 'http'

const config = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/todos?_limit=3',
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=UTF-8'
    }
}

const req = http.request(config, callback)

const data = {
    userId: 555,
    title: 'New Todo from Node.js',
    completed: false
}

req.write(JSON.stringify(data))
req.end()

function callback(res) {
    console.log('Status Code: ', res.statusCode)
    let body = ''

    res.on('data', chunk => {
        body += chunk.toString();
    })

    res.on('close', () => {
        console.log('Response Body: ', JSON.parse(body))
    })
}