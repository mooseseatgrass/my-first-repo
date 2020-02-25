var multi = function(a, b){
    return a * b;
}

console.log(multi(6,8));
console.log("hello");

module.exports = multi;

// function bigMulti (){
//     setTimeout(() => {
//     return 38234798 * 382724;
//     }, 2000);
// }

function bigMulti (){
    setTimeout(() => {
    let c = 78974939
    let d = 847937903
    return c * d;
    }, 2000);
}

console.log(bigMulti());