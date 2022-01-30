let word1 = " Freelance with the best of the best Silicon Valley companies in a number of software jobs  ";
let word2 = "i am more than able";

// let Num2 = "1,2,3,4,5,6,7,8,9,10";

let letters = "abcdefghijklmnopqrstuvwxyz";

let newResult = 70;

let ux = 97.4536;

//      Arrays

// How to create an array


// sort() Method
// The sort() method sorts or arrange an array alphabetically:
// dish = food.sort();

// reverse();
// reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first. 
// but for this to work for array that have words in them, and not just plain alphabet or numbers, you have to sort() first;

// dish = food.sort();
// dish = food.reverse();
// console.log(dish);

// let arrletters = letters.split("");

// arrletters.reverse();
// console.log(arrletters);


// Num.reverse();
// console.log(Num);



// Numeric Sort
// Earlier we did simple sorting with strings and single number values but sorting number with dobble values with just simple sort() will not be accurate thats when we need to pass in a function to clearly state or correct this glitch (function(a,b){ return a - b};) using a compare function

/*
let fruits = ["Banana", "Orange", "Apple", "Mango", "Melon"];

let food = ["jollof_rice", "cake", "white_soup", "fish_stew","Egusi_soup"]

let Num = [1,2,3,4,5,6,7,8,9,10];


let letter = ["a","B","C","d","e","F"];

let result = cNum.sort(function(a,b){ return a - b});
// let result = cNum.sort((a,b)=> a - b);
result= letter.sort(function(a,b){ return a - b});
console.log(result);

*/

let fun = ["rice", "beans", "Egg", "Shawama", 21,1, 45,132];

let work = ["morning", "afternoon", "evening"];

// let result = fun.sort(function(a,b){return a - b});

// let result = fun.sort(function(a,b){return 0.5 - Math.random()}); // to generate random NUmbers...

// console.log(result);

/*
So, the compare function has the following form:

function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
*/

// console.log(0.5 - Math.random());

let cNum = [1,2,8,9,17,18,19,20,21,22,23,24,44,50,34,66,];

// let result = cNum.sort((a, b)=> a-b);

// console.log(result[0], result[result.length -1]);

// we use result[0] to get the lowest number or value and result[result.length -1] to find the highest value in the array;

let boy =[ {
    sex : "boy",
    age : 46,
    cloths : 30,
    devices : 10
},{
    Sex : "girl",
    age : 30,
    cloths : 150,
    devices : 6
}];

// let result = boy.sort((a,b)=> a.age - b.age);

console.log(result);
