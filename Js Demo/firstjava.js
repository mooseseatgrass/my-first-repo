// java homework 1

var skate = "awesome";
var wheels = 8;

var x = (skate * wheels);

console.log(x);


console.log(skate * wheels);

console.log(2 + true);

/* 
infinint loop, can also happen when diving by zero. if inside is false it won't run
while(true){
    console.log("hello");

}

var count = 15;
var doCount = 15;

function print(){
    while(count > 10){
        console.log("test";)
        counr --;
    }
}do{
    console.log("hi");
        doCount--;
}
while(doCount > 20);
count = 200;
}

*/

// Conditional statements HW
var count= 2;

count = count + 5;
console.log(count);

count = count * 2;
console.log(count);

count = count % 3;
// remainder of 2 possilbly
console.log(count);
//remainder of 0
count = count % 2;
console.log(count)

if(count % 2 == 0){
    console.log("True");

} else{
    console.log("False");
}

if (count > 0 && count < 0){
    console.log("biggerThanZero");
}

if (count == 10 || count >= 5){
    console.log("equals10");
}
/*
if(1 === 1){
    console.log(gravy);
}
if(count > 0){
    console.log(biscuits);
}
if (count < 9){
    console.log(fork);

}
if(1 === 1 && count > 0 && count < 9){
    console.log(completed);
}
*/

// The conditional statements put together save space but there are not as many path choices for what happens

// Loop exercise HW
// var i=0;
// while (i<=50){
//     if (i % 2 == 0){ 
//         console.log(i);
//     }
//     i++;
// }


// if() {

// } else {
//     if() {

//     } else if() {

//     }
// }


// for (var i = 0; i <= 100; i++){
//     if (i % 3 == 0 && i % 5 == 0){
//         console.log(i + "fizzbuzz");
//     } else {
//         if (i % 3 == 0){
//             console.log(i + "fizz");
//         }   else if (i % 5 == 0){
//                 console.log(i + "buzz");
//         }
//     } 
//     console.log(i);
// }

// Function exercise

function addNumbers(c, d){
    return c + d;
}

function multiply(c, d){
    return c * d;
}

function myFuct(start,end){
    for (var i = start; i <= end; i++){
        console.log(i);

    }
}
myFuct(4,10);

var out= "pedal";

function glow(inside){
    return out + inside;
}
console.log(glow("seed"));

// iife 

(function(){
    console.log("Sucess!");
})();















