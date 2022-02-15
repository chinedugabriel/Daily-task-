let word1 = " Freelance with the best of the best Silicon Valley companies in a number of software jobs  ";
let word2 = "i am more than able";

// let Num2 = "1,2,3,4,5,6,7,8,9,10";

let letters = "abcdefghijklmnopqrstuvwxyz";

let newResult = 70;

let ux = 97.4536;

//     Arrays

let fruits = ["Banana", "Orange", "Apple", "Mango", "Melon"];

let food = ["jollof_rice", "cake", "white_soup", "fish_stew","Egusi_soup"]

let Num = [1,2,3,4,5,6,7,8,9,10];


let letter = ["a","B","C","d","e","F"];


let fun = ["rice", "beans", "Egg", "Shawama", 21,1, 45,132];

let work = ["morning", "afternoon", "evening"];

let cNum = [1,2,8,9,17,18,19,20,21,22,23,24,44,50,34,66,];


// forEach() method
// The forEach() method executes a provided function(a callBackFunction) once for each array element. the callbackFn is invoked with three arguments:

// the value of the element
// the index of the element
// the Array object being traversed

let sum = 0;

// Here we sum the array to get the total value of the array 

// let vul = Num.forEach((item, index )=> console.log("index & value ", index, "[",sum += item,"]"));

// Here we multiplied each array by 2 :
function addUpArr(item, index){
    sum = item * 2;
 console.log(sum)
}

// A for loop example on how a foreach method works 

// let Dy = 0;
// for(let i = 0; i < Num.length; i++){
//     console.log(Dy += Num[i])
// }

// let vul = Num.forEach(addUpArr);

// console.log(vul);
console.log(sum);

//Here is an example on how to find the even and odd numbers in a number Array.

// function evenAndOddFinder(arr){
//     if (arr % 2 == 1 ){
//         console.log(arr, "Is odd");
//     }else if(arr % 2 == 0){
//         console.log(arr, "Is even");
//     }
    
// }
// refactoring the function
let evenAndOddFinder = item =>{ item % 2 == 1 ? console.log(item, "Is odd"):(item % 2 == 0) ? console.log(item, "Is even"): 0 };

let vul = Num.forEach(evenAndOddFinder);