//? For http use the built-in 'http' module and for https use the built-in 'https' module
import http from 'http'

//? Way 1: Using http.request
// const config = {
//     method: 'GET',
// }

// const req = http.request('http://jsonplaceholder.typicode.com/todos?_limit=3', config, callback)
// req.end(); //? req is a stream, so we need to call end()

//? Way 2: Using http.get
http.get('http://jsonplaceholder.typicode.com/todos?_limit=3', callback)

function callback(res) {
    console.log('Status Code: ', res.statusCode)
    let body = ''

    res.on('data', chunk => {
        body += chunk.toString(); //? Binding chunk to string makes it string and we don't need to call toString again, it's just for demonstration
    })

    res.on('close', () => {
        console.log('Response Body: ', JSON.parse(body))
    })
}

//? Alternative way to attach the callback
// req.on('response', callback)