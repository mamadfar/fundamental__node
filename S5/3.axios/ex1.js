
import axios from 'axios'

const send1 = async () => {
    const res = await axios.get('https://www.example.com')
    console.log(res.data)
    console.log(res.status)
    console.log(res.statusText)
    console.log(res.headers)
}

// send1()

const send2 = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        console.log(res.data)
        console.log(res.headers)
    } catch (error) {
        console.log(error)
    }
}

send2()