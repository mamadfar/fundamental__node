
import { number, confirm, password, editor } from '@inquirer/prompts'

// const answer = await number({
//     message: "Enter a number: ",
//     validate: value => {
//         if (isNaN(value)) {
//             return "Please enter a valid number.";
//         } else if (value > 1000) {
//             return "Number must be less than or equal to 1000.";
//         }
//         return true;
//     }
// })

// console.log(`Number: ${answer}`);

// const answer = await confirm({
//     message: "Do you want to proceed?",
//     default: true
// })

// console.log(`Confirmation: ${answer}`);

// const answer = await password({
//     message: "Enter your password: ",
// })

// console.log(`Password: ${answer}`);

const answer = await editor({
    message: "Please provide some input: ",
})

console.log(`Input: ${answer}`);