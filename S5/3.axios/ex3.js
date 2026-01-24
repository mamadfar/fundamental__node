import axios from "axios"

const config = {
    baseURL: "https://jsonplaceholder.typicode.com",
    url: "/todos",

    headers: {
        "User-Agent": "Node.js test",
        "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "post",
    data: {
        title: "New Todo Item",
        completed: false
    },
    //? This doesn't accept search params in POST request, this is just a test
    // data: new URLSearchParams({
    //     _limit: 4
    // })
    responseType: "json", //? arraybuffer, blob, document, json, text, stream
    responseEncoding: "utf8", //? 'utf8', 'latin1', 'binary'
    timeout: 5000 //? Usefull when the server is not responding or when we wanna make a lot of requests to multiple servers
}
const send = async () => {
    try {
        const res = await axios(config)
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

send();