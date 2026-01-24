import inquirer from "inquirer";

// const answers = await inquirer.prompt({
//     type: "select",
//     name: "langs",
//     message: "Which languages do you know?",
//     // choices: ["JavaScript", "Python", "Java", "C++"]
//     choices: [
//         new inquirer.Separator("=== Compiled Languages ==="),
//         "Java",
//         "C++",
//         new inquirer.Separator("=== Scripting Languages ==="),
//         "JavaScript",
//         "Python"
//     ],
//     default: "Python"
// })

// console.log(answers.langs);

// const answers = await inquirer.prompt({
//     type: "rawlist",
//     name: "langs",
//     message: "Which languages do you know?",
//     choices: [
//         new inquirer.Separator("=== Compiled Languages ==="),
//         "Java",
//         "C++",
//         new inquirer.Separator("=== Scripting Languages ==="),
//         "JavaScript",
//         "Python"
//     ],
//     default: "Python"
// })

// console.log(answers.langs);

const answers = await inquirer.prompt({
    type: "checkbox",
    name: "langs",
    message: "Which languages do you know?",
    choices: [
        new inquirer.Separator("=== Compiled Languages ==="),
        "Java",
        "C++",
        new inquirer.Separator("=== Scripting Languages ==="),
        "JavaScript",
        "Python"
    ],
    default: ["Python"]
})

console.log(answers.langs);