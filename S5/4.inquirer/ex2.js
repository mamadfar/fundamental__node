import inquirer from "inquirer";


// const answer = await inquirer.prompt({
//     type: "input",
//     name: "language",
//     message: "What is your favorite programming language?",
//     default: "JavaScript"
// })

// console.log(`Your favorite programming language is: ${answer.language}`);

const answer = await inquirer.prompt({
    type: "input",
    name: "title",
    message: "Enter title: ",
    default: "Untitled",
    validate: value => {
        if (value.length < 3) {
            return "Title must be at least 3 characters long.";
        }
        return true;
    }
})

console.log(`Title: ${answer.title}`);