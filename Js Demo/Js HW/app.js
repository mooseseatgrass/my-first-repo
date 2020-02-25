var multi = require('./cmdHW');

console.log(multi(8,4));

var bigMulti = require('./cmdHW');

function wait(){
    return new Promise((resolve, reject) => {
        try{
            resolve(bigMulti());
        } catch(error){
            reject("You borked it up");
        }
    })
}
