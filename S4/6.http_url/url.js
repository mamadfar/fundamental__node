
import {URL} from 'url' //? We don't need to import URL, it's a global module in browsers

// const myUrl = new URL('https://user:pass@sub.example.com:8000/p/a/t/h?query=string#hash');
const myUrl = new URL('/p/a/t/h?query=string#hash', 'https://user:pass@sub.example.com:8080/');

console.log(myUrl.href, "\n")
console.log(myUrl.hash)
console.log(myUrl.host) //? host = hostname + port
console.log(myUrl.hostname)
console.log(myUrl.port) //? Default port for https is 443 and for http is 80 --- if not specified or use default, it will be empty string
console.log(myUrl.origin) //? protocol + '://' + host
console.log(myUrl.username)
console.log(myUrl.password)
console.log(myUrl.pathname)
console.log(myUrl.protocol)
console.log(myUrl.search, "\n")

console.log(myUrl.searchParams)
console.log(myUrl.searchParams.get('query'))
console.log(myUrl.searchParams.has('query'))
console.log(myUrl.searchParams.has('query2'))

myUrl.searchParams.append('query2', 'string2')

console.log(myUrl.searchParams.has('query2'))

myUrl.searchParams.delete('query2')

console.log(myUrl.searchParams.has('query2'))