
import { select, rawlist, checkbox, Separator } from '@inquirer/prompts'

// const answer = await select({
//     message: "Which languages do you know?",
//     // choices: ["JavaScript", "Python", "Java", "C++"]
//     choices: [
//         new Separator("=== Compiled Languages ==="),
//         "Java",
//         "C++",
//         new Separator("=== Scripting Languages ==="),
//         "JavaScript",
//         "Python"
//     ],
//     default: "Python"
// })

// console.log(answer);

// const answer = await rawlist({
//     message: "Which languages do you know?",
//     choices: [
//         new Separator("=== Compiled Languages ==="),
//         "Java",
//         "C++",
//         new Separator("=== Scripting Languages ==="),
//         "JavaScript",
//         "Python"
//     ],
//     default: "Python"
// })

// console.log(answer);

const answer = await checkbox({
    message: "Which languages do you know?",
    choices: [
        new Separator("=== Compiled Languages ==="),
        "Java",
        "C++",
        new Separator("=== Scripting Languages ==="),
        "JavaScript",
        "Python"
    ]
})

console.log(answer);