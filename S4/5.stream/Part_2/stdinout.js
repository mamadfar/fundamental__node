
let firstname, lastname, step = 1;

process.stdout.write("What is your firstname? ");

process.stdin.on('data', chunk => {
    if (step === 1) {
        firstname = chunk.toString().trim()
        process.stdout.write("What is your lastname? ");
        step = 2;
    } else if (step === 2) {
        lastname = chunk.toString().trim()
        process.stdin.pause()
        showResult()
        // process.stdin.resume(); //? to resume reading from stdin if needed
    }
})

const showResult = () => {
    process.stdout.write(`Hello ${firstname} ${lastname}!\n`);
    process.exit(); //? 0 or none means successful termination
}