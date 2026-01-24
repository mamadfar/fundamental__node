
import { input } from '@inquirer/prompts'

// const answer = await input({
//     message: 'What is your favorite programming language?',
//     default: 'JavaScript'
// })

// console.log(`Hello, ${answer}!`)

const answer = await input({
    message: 'Enter title: ',
    default: 'Untitled',
    validate: value => {
        if (value.length < 3) {
            return 'Title must be at least 3 characters long.'
        }
        return true
    }
})

console.log(`Title: ${answer}`)