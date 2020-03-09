var multi = (a, b) => {
    return a * b;
}

// console.log(multi(6,8));
// console.log("hello");

module.exports = multi;

function bigMulti (){
    setTimeout(() => {
        return 38234798 * 382724;
    }, 2000);
} 

// function bigMulti(){
//     let c = 78974939
//     let d = 847937903
//     return c * d;
// }
module.exports = bigMulti;
// Function to move to app.js
// function wait(){
//     return new Promise((resolve, reject) => {
//         try{
//             resolve(bigMulti());
//         } catch(error){
//             reject("You borked it up");
//         }
//     })
// }

//console.log(bigMulti());