// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     terminal: false
// })

// function question(){ readline.question(`What's your name?\n`, (name) => {
//     console.log(`Hi ${name}!`)
//     readline.question(`What's your pets name?\n`, (petname) => {
//     console.log(`I bet ${petname} is adorable!`)
//     readline.close()
// })
// })
// }

// question();

// module.exports = question;

// const rl = require('readline').createInterface(process.stdin, process.stdout);

// module.exports = {
//     input(){
//         const promise = new Promise(resolve => {
//             let input;
//             resolve(rl.on('line', userInput => {
//                 return userInput;
//             }))
//         });
//         return promise;
//     }
// }
// above is first try

// const rl = require('readline').createInterface(process.stdin, process.stdout);

// module.exports = {
//     input(promt) {
//         const promise = new Promise(resolve => {
//             rl.setPrompt(prompt);
//         rl.prompt();
//         let input;
//         rl.on('line', userInput => {
//             input = userInput;
//         })
//         })
//     }
// }