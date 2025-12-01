
console.clear()

// process.stdin.on('data', chunk => {
//     console.log(chunk.toString().toUpperCase())
// })

// process.stdin.on('readable', () => {
//     let chunk;

//     while (chunk = process.stdin.read()) {
//         console.log(chunk.toString().toUpperCase())
//     }
// })

// process.stdin.on('data', chunk => {
//     process.stdout.write(chunk.toString().toUpperCase())
// })

process.stdin.on('data', chunk => {
    if (chunk.toString().trimEnd() === 'q') {
        process.stdin.pause()
        console.log('Goodbye!')
        console.log('Rest of the logic!')
    } else {
        process.stdout.write(chunk.toString().toUpperCase())
    }
})