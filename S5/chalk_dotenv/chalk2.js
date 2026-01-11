
import chalk from 'chalk'

console.log(`
    CPU: ${chalk.red('90%')}
    RAM: ${chalk.green('40%')}
    DISK: ${chalk.yellow('70%')}
    `)

console.log(chalk.blue.underline('Hello World!'))
console.log(chalk.overline('Hello World!'))
console.log(chalk.strikethrough('Hello World!'))

console.log(chalk.dim.blue('Hello') + chalk.blue(' World!'))
console.log(chalk.red.inverse("hello World"), "\n")

console.log(chalk.rgb(123, 45, 67).underline("hello world!"))
console.log(chalk.hex("#DEADED").bold("hello world!"), "\n")

const error = chalk.bold.red
const warning = chalk.hex('#FFA500')

console.log(error("This is an error message!"))
console.log(warning("This is a warning message!"))