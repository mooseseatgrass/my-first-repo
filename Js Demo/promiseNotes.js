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