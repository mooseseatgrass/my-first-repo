var multi = require('./cmdHW');

//console.log(multi(8,4));

var bigMulti = require('./cmdHW');

// function wait(){
//     return new Promise((resolve, reject) => {
//         try {
//             let answer = bigMulti();
//         } catch(e) {
//             console.log(e);
//         }
//     })
// }

async function wait() {
    let answer = bigMulti();
    await console.log(answer);
}


wait();
// Did not log the bigMulti fuction, not sure why