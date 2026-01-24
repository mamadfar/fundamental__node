import axios from "axios"

const config1 = {
    url: "https://jsonplaceholder.typicode.com/todos?_limit=4",
    method: "get"
}

const send1 = async () => {
    try {
        const res = await axios(config1)
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

// send1()

const config2 = {
    params: {
        _limit: 3
    }
}

const send2 = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos", config2)
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

send2()