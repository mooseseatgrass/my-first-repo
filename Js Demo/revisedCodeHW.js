// java homework 1

function skate(wheels, color, brand){
    this.wheels = wheels
    this.color = color
    this.brand = brand
}


var skate1 = new skate("Radar", "Black", "Ridell");


function thingCount(count, doCount){
    this.count = count,
    this.doCount = doCount,
    function print(){
        while(count >= 10){
            console.log("test");
            count --;
    }
    do{
        console.log("hi");
            doCount--;
    }
    while(doCount > 20){;
        count = 200;
    }
};

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

/*function randomCheck(){
    var green = document.getElementById('userInput').value;
    var blue = Math.floor(Math.random() * 10);
    if (green == blue){
        console.log("Success!");
    } else {
        console.log("Boo!");
    }
*/

// Array HW

var groceryList = ["bananas", "onions", "tomatoes", "sugar", "apples", "oatmeal", "salt", "pepper", "hotSauce", "litter"]

listLength = groceryList.length;

for (i = 0; i < listLength; i++){
    console.log(groceryList[i]);
}

var longName = "Copernicus";
var nameLength = longName.length;

for (var i = 0; i < nameLength; i++){
    console.log(longName[i]);
}

var stringy = "lo and behold";

for (i = 0; i < stringy.length; i++){
    console.log(stringy.toUpperCase());
}


var gro = [];

gro[0] = "coffee";
gro[1] = "juice"
gro[2] = "tea";
gro[3] = "soda"

gro.splice(2,1);

/* Turn that into an object
var grocery = {
    gro0 = "coffee",
    gro1 = "juice",
    gro2 = "tea";,
    gro3 = "soda"

}



var groceryInv = [
    [10, "Bananas"], 
    [4, "Onions"], 
    [8, "Tomatoes"], 
    [1, "Sugar"], 
    [29, "Apples"], 
    [9, "Oatmeal"], 
    [7, "Salt"], 
    [83, "Pepper"], 
    [37, "Hot sauce"], 
    [3, "Litter"]
];
*/
function cart(){

}
// Longer way of making it an object, next I'll try to make a contructor to add grocery items
// var groceryObj = {
//     "Banana"   : 10,
//     "Onion"    : 4,
//     "Tomato"   : 8,
//     "Sugar"    : 1,
//     "Apple"    : 29,
//     "Oatmeal"  : 9,
//     "Salt"     : 7,
//     "Pepper"   : 83,
//     "Hot Sauce": 37,
//     "Litter"   : 3,

//     function addInv(){
//         let input = document.getElementById("userInput").value;
//         groceryObj.forEach(groceryObj, function(){
//             cart.push(groceryObj[1]);
//             console.log(groceryObj[1]);
//         });
//     }

// }

var groceryStock = {
    item  : "item name",
    qty   : "whole number",
    price : "number with decimal",

    function addStock(){
        return ++groceryStock.qty
    };
    function subStock(){
        return --groceryStock.qty
    } else (i <= 0){
        alert("Out of stock!");
    }
}


// var inNum = fruits.splice(inNum, count, i++); splice method I don't think I want to use


function addInv(){
    let input = document.getElementById("userInput").value;
    groceryObj.forEach(groceryObj, function(){
        cart.push(groceryObj[1]);
        console.log(groceryObj[1]);
    });
}

function subInv(){
    let input = document.getElementById("userInput").value;
    
}

function outInv(){

}
