
import { input } from '@inquirer/prompts'

const answer = await input({
    message: 'What is your first name?',
})

console.log(`Hello, ${answer}!`)