import fs from 'fs'
import axios from "axios"

const config = {
    method: 'get',
    url: 'https://mamadfar.dev/favicon.ico',
    responseType: 'stream',
}

const send = async () => {
    try {
        const res = await axios(config) //? res is a readable stream
        const writable = fs.createWriteStream('favicon.ico')
        res.data.pipe(writable)
    } catch (error) {
        console.log(error)
    }
}

send();