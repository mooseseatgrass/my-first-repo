// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// function question(){ readline.question(`What's your name?`, (name) => {
//     console.log(`Hi ${name}!`)
//     readline.question(`What's your pets name?`, (petname) => {
//     console.log(`I bet ${petname} is adorable!`)
//     readline.close()
// })
// })
// }

// exports.question = question;

// const rl = require('readline').createInterface(process.stdin, process.stdout);

module.exports = {
    input(rl){
        const promise = new Promise(resolve => {
            let input;
            resolve(rl.on('line', userInput => {
                return userInput;
            })
        });
        }
}
