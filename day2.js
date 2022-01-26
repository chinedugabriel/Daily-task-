let word1 = " Freelance with the best of the best Silicon Valley companies in a number of software jobs  ";
let word2 = "i am more than able";

let Num = 12345678910;
// let Num2 = "1,2,3,4,5,6,7,8,9,10";

let letters = "abcdefghijklmnopqrstuvwxyz";

let newResult = 70;

let ux = 97.4536;

//      Arrays

// How to create an array

let fruits = ["Banana", "Orange", "Apple", "Mango", "Melon"];
// OR you create an array like this :

// let fruits = [];
// fruits[0] = "Cross ";
// fruits[1] = "Muse ";
// fruits[2] = "Bird ";
// fruits[3] = "Man ";
// fruits[4] = "Good ";
// fruits[5] = "Girl ";
// fruits[6] = "Fish ";
// fruits[7] = "Brain ";
// fruits[8] = "Wake ";
// fruits[9] = "Moon ";
// fruits[10] = "Work ";
// fruits[11] = "Play ";
// fruits[12] = "Play_list";

// asses an array by calling the index
// let result = fruits[1];

// result = fruits.length;

//  console.log(result.length );

//  Looping through an Array;
//  let op = [];
//  for (i=0; i< fruits.length; i++){
//      op .push(fruits[i]);
//     }
//     console.log(op);
//  for (i=0; i< fruits.length; i++){
//     //  op .push(fruits[i]);
//      op += fruits[i];
//     }
//     console.log(op.split(" "));

// Array Method
//Push()
// its used for adding more content into an array...
// let food = ["jollof_rice", "cake", "white_soup", "fish_stew"];
// food.push("Oha_soup")
// let dish = food;
// console.log(dish);


// We use Array.isArray() to find or to check if an array is actually an array.....

// Array.isArray(name of the array here);

// or   fruits instanceof Array;

// To string to convert an array to a string 
// let dish = food.toString();
// console.log(dish);

// join() method behaves as the toString method the only deference is that it specifies the separator

// dish = food.join("*");
// console.log(dish);

// Popping and Pushing 
// Popping items out of an array, or pushing items into an array.

// Popping 
// The pop() method removes the last item from an array 
// dish = food.pop();
// console.log(food);

// food.push("Oha_soup")

// Shifting Elements
// Shifting is equivalent to popping, working on the first element instead of the last.
// dish = food.shift();
// console.log(food);

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

// dish = food.unshift("Amala_Eforirow");
// console.log(food);

// you can also asses an array by its index value
// console.log(food[2]); 

// Using delete may leave undefined holes in the array. Use pop() or shift() instead.
// delete food[2];
// console.log(food);

// Using splice in a array 
// splice() method can be used to add new items to an array:

let food = ["jollof_rice", "cake", "white_soup", "fish_stew","Egusi_soup"];

// dish = food.splice(1,0,"melon","orang"); 
/* 
The first parameter (0) defines the position where new elements should be added (spliced in).

The second parameter (1) defines how many elements should be removed.

The rest of the parameters are omitted. No new elements will be added. 
*/

// dish = food.splice(1,2);

// console.log(food);
/*
Merging (Concatenating) Arrays
The concat() method creates a new array by merging (concatenating) existing arrays:
acts the same way when using a string method
*/
// dish = food.concat(fruits);
// console.log(dish);
/*
Slicing an Array
The slice() method slices out a piece of an array into a new array.
slice(show the value at this given index, before this given index)
*/
dish = food.slice(1,3);
console.log(dish);

