const fs = require('fs');
const path = require('path');
const rl = require('readline').createInterface(process.stdin, process.stdout);

rl.setPrompt('Put in message\n');
rl.prompt();

/**
 * I would've like to see this also emitt some custom events to log when a file has been created/written/read
 * Also to have it read the entire contents of the txt file and append instead of overwritting. 
 */

rl.on('line', input => {
    fs.writeFile(path.join(__dirname, 'userMes.txt'), input, err => {
        if(err) {
            throw err;
        }
    })
});