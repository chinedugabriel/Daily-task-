let fruits = ["Banana", "Orange", "Apple", "Mango", "Melon"];
// fruits.toString()
// console.log(fruits[2].split("", 3));




let word1 = " Freelance with the best of the best Silicon Valley companies in a number of software jobs  ";
let word2 = "i am more than able";

// Extracting String Characters
// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]

// charAt()
// The charAt() method returns the character at a specified index (position) in a string

// let result = word2.charAt(10)
// console.log(result);




// charCodeAt()
// The charCodeAt() method returns the unicode of the character at a specified index in a string:

// The method returns a UTF-16 code (an integer between 0 and 65535).

// let result = word2.charCodeAt(3)
// console.log(result);

// Property access []
// in the process makes it easy to access character in a string like an array.

let result = word2[3]
console.log(result);

 
