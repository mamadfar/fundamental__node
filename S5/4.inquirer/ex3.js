import inquirer from "inquirer";

// const answer = await inquirer.prompt({
//     type: "number",
//     name: "number",
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

// console.log(`Number: ${answer.number}`);

// const answer = await inquirer.prompt({
//     type: "confirm",
//     name: "confirmation",
//     message: "Do you want to proceed?",
//     default: false
// })

// console.log(`Confirmation: ${answer.confirmation}`);

// const answer = await inquirer.prompt({
//     type: "password",
//     name: "pass",
//     message: "Enter your password: ",
// })

// console.log(`Password: ${answer.pass}`);

// const answer = await inquirer.prompt({
//     type: "editor",
//     name: "text",
//     message: "Please provide some input: ",
// })

// console.log(`Input: ${answer.text}`);