import { createBrotliCompress } from "zlib";

//make two functions, one that does complicated math and one that waits for the math to get returned


//complicated math
function someMath(){
    for( i = 0 ; i < 10000000; i++) {
        if(i = 10000000){
            console.log(i);
        }
    }
}

//where we put our promise
function waitForMath(){
    return new Promise((resolve, reject) => {
        try{
        resolve(someMath());
        } catch(error){
        reject("Error: numbers aren't real");
        }
    })
}

waitForMath().then(res => {
    console.log(res);
});


// call back
const carlos = () => {
    console.log('hello carlos');
}

const williams = (cb) => {
    cb();
    console.log('willams');
}

const harcourt = (cb) => {
    cb();
    console.log('hello harcourt');
}

// williams(carlos);

// willams(harcourt(carlos));

// Promises

const myPromise = () => {
    const promise = new Promise((resolve, reject) => {
        const dataBaseQuery = true;

        if(dataBaseQuery){
            resolve('yay you resolved');
        } else {
            reject('you failed');
        }
    });
    return promise
}

// if you only have resolve you only need .then, if reject you must have a catch
myPromise().then(res => {console.log(res);}).catch(rej => {console.log(rej)});

const rl = require('readline').createInterface(process.stdin, process.stdout);

rl.setPrompt(`What's your name?`);
rl.prompt();

rl.on('line', userInput => {
    
})