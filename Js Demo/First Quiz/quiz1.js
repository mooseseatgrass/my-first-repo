// Problem 1

function superCalc(){
    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.getElementById("input2").value);
    var division =  (input1 / input2);
    division.toFixed(2);

    if (input2 !== 0){
    console.log(division.toFixed(2));
    } else {
        console.log("Cannot divide by 0");
    }
    document.querySelector("#result").innerHTML = division.toFixed(2);
};

// Problem 2

var fruitsArray = [
    "Bannana",
    "Apple",
    "Pear",
    "Strawberry",
    "Kiwi"
];

function longestString(fruitsArray){
    // var lengthOf = 0
    // var longest;
    for (var i = 0; i < fruitsArray.length -1; i++){
        // if(fruitsArray[i].length > lengthOf){
        //     lengthOf = fruitsArray[i].length;
        //     longest = fruitsArray[i]
        // an example showed something like this but I'm not sure how it works to get the longest
        // string in the array. I would add an else statement after I logged the results, if the length was <= 4
        // then I would splice with something like the example below to remove those items
        //}
    //}
    //return longest;
}

document.getElementById("fruitDemo").innerHTML = fruitsArray;

/* will use something similar to this example in w3schools
function myFunction() {
fruits.splice(2, 0, "Lemon", "Kiwi");
document.getElementById("demo").innerHTML = fruits;
}

*/

//Problem 3

var barn = {
    paint = "Red",
    heightInFt = 40,
    animal = "Donkey",

    paintBarn : function(){
        paint.splice(0, 1, i);
    },

    addAnimal : function(){
        return this.animal + newAnimal;
    }
}
