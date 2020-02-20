var dogs = ["button","spike","buddy"];
// would add cactus to the end from line 9

for (i = 0, i< dogs.legth(); i++){
    console.log(dogs[i];);
}

//.push - pushs stuff on the end
dogs.push("cactus", "pants");
//.pop - takes the last element out of the array
//dogs.pop would remove pants

// array interation - goes through every single thing in the array

var clothes = ["shirt","pants","dress","hat"];

for(var i = 0; i < clothes.legth; i ++){
    console.log(clothes[i]);
}
// would break if <= b/c the index is longer than the postitions
// of 0,1,2,3, legth is 4 there is no postion 4
//legth property is always one highter than the index coumt
//[dogs.leght -1]
//fruits[fruitsh.legth] = "lemon"; adds onto b/c legth is one more than index

const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
// for each part of array we can do something to

// can also break up arrays with spaces, don't put comma on end
// can change the names dogs[0] = "fluffy";

// JS Data Types

string, intergers, booleans, objects
// console.log(type of 32);

//Casting; can change the types with methods, castin actors into a new
// Number() parseFloat() saves decimals parseInt() int uses whole numbers, rounds down

// Array 

// Shift(); is same thing as popping but at the begining, removes it from the begining, reset the index

// Unshift(); adds it to beginning

/*Split(parameters); - we have a string and we want to make it into an array, word scrample or push 
csv (excel file, comma seperated values) to array, 
cutting the pizza up

names    names="n,n,n,n,n,"
names       split namesArr=["n","n","n"]
names

Splice(1.1) - takes out the piece, changes the orginal without a copy, how many to remove, the postition, 
can also add things in fruits.slice(2,0, "kiwi", "mango"); 0 means don't remove we're adding

Slice(2.3) - makes 2 arrays, one with orginal, one with the piece out (2.3) index is first number, 3 is the end
non inclusive, doesn't touch the sourse array, return what it comes out

concat takes an array and returns it as a string

sort - set up for strings alphabetical, doesn't work so well for numbers, can also reverse

join - takes everything thats seperated and puts it together
console.log(elements.join("-")); or ("") empty string (" ") space has value would change index


filter - gives us a condition and returns if it is, organize data
var ages = [32,33,16,40];

function checkAge >= 18;
ages.filter(checkAge);


reduce - given a set of data, I want to get a single number, i.e. count, average

const array2 = [1,3,5,6,]
const reducer = ("accumulator, currentValue) => accumulater + currentValue;
console.log(array1.reduce(reducer, 5)); added the 5
function myFunct(total, num){
    return total - sum
}


// Git hub deployment

make repo with username.github.io
cd ../ up into cbc-8
git branch - shows it
git checkout -b testing (makes it)
git checkout master
nano hello.txt
add, commit, push

*/
