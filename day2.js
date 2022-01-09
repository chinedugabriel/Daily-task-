let fruits = ["Banana", "Orange", "Apple", "Mango", "Melon"];
// fruits.toString()
// console.log(fruits[2].split("", 3));


let word1 = " Freelance with the best of the best Silicon Valley companies in a number of software jobs  ";
let word2 = "i am more than able";

let Num = "12345678910";
let Num2 = "1,2,3,4,5,6,7,8,9,10";

let letters = "abcdefghijklmnopqrstuvwxyz";

// Mactch() method
//  it retrieves the result of matching a string against a regular expression and returns the matches, as an Array object.

// let result = word2.match(/a/gi);
// console.log(result);

//  Regular Expression 
// A regular expression is a sequence of characters that forms a search pattern.
// Eg:   var part = /wordMan/i;

// examples of methods that uses regular expression are:
// search(), Replace(), match(), etc...


// using regular expression object 
// let re = new RegExp('ab+c');

let reg = new RegExp("n", "m");
console.log(word1.match(reg));