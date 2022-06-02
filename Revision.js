// :::::::::::::::::::::::::::::::::
// function wordCounter(str,wrd){
//   word = new RegExp(wrd,"gi")
//    let result = str.match(word);
//    return result.length;
//   }
// console.log(wordCounter("bananana","na"));


// Start Here
/*
Var +

let +

Const  +

function +

hoisting +

Scope +

data Types: string, number, boolean, null, undefine, Array, object; +


Primitive data type & complex data type +
string, number, boolean, undefine +

complex data types :   +
Null
Array,
Object
***************************************************
function(); +
Object

***string method***
length +

indexOf() +
lastIndexOf() +
search() +

//Array {
  find() +
findIndex() +
}

slice() +
substring()+
substr() +
replace() +

toUpperCase() +
toLowerCase() +

trim() +
charAt() +
charCodeAt() +

padding
padStart() +
padEnd() +

split("") +
join("")

Number method
writing numbers in an exponential format (e)+
toString()+
toExponential()+
toFixed()+
toPrecision()+
valueOf()+
Number.MAX_VALUE+
Number_MIN_VALUE+
Number_POSITIVE_INFINITY+
NumbEr_NEGATIVE_INFINITY+
=============================
ARRAYS AND ARRAY METHODS
Creating an Array+
Accessing an Array +
checking If an Array.IsArray() using the following:
  1) creating your own isArray() function +
  2) Using Array.isArray() method +
  3) Using ..... intstanceof Array; +

Adding values into an array (pop(), shift()); +
Removing values from an array (push(), unshift()); +
Extracting values from an array (slice(), splice());+

ForEach(); +
map();+
filter();+
reduce();+
reduceRight();+
every();+
some();+
indexOf();+
lastIndexOf();+
find();+
findIndex();+
Date object+
Date & Time format+
how to getDate()+
how to setDate()+
=======================
Date()+
Date format+
Get Date()+
set Date()+
==================
math()
Math properties:
Math.E        // returns Euler's number +
Math.PI       // returns PI +
Math.SQRT2    // returns the square root of 2 +
Math.SQRT1_2  // returns the square root of 1/2 +
Math.LN2      // returns the natural logarithm of 2 +
Math.LN10     // returns the natural logarithm of 10 +
Math.LOG2E    // returns base 2 logarithm of E +
Math.LOG10E   // returns base 10 logarithm of E +
====================
Math.method()
Math.round()+
Math.ceil()+
Math.floor()+
Math.trunc()+
Math.abs()+
Math.sin()+
Math.cos()+
Math.min()+ // To find the minimum value of an array we use Math.min.apply(null, arrayName);
Math.max()+ // To find the maximum value of an array we use Math.max.apply(null, arrayName);
Math.log()+
Math.log2()+
Math.log10()+
***Math.random()+
===========================
Boolean+
Boolean()+
new Boolean()+
Comparison and Logical Operators +
*conditional Statement( if else & else if) +
*Switch()+ // the switch() uses === which is the strict type, so the data type of the argument most match the case if not nothing would be selected

for Loop+
for in loop+
for of loop+
while loop+
do while loop+

Break+
Continue+


*/


let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// let result = [];

// for(let i = 0; i < days.length;i++){
//   result.push(days[i]+2);
// }

// console.log(result);

// let num = 10;
// let rst = "";

// for(let i = 10; i>0; i--){
//   rst += i;
// }
// console.log(rst);

// =================================
// for in loop

// let rst = [];
// let y;

let person = {
  name : "Gabriel",
  age : "26",
  sex : "male",
  state : "Anambra"
};


// for (y in person){
  //   rst.push(person[y]);
  //   console.log(y);
  // }

  // console.log(rst);

  // ===============================
  // for of loop

  // for( y of days){
  //   rst.push(y);
  //   // console.log(y)
  // }
  // console.log(rst);
// let num = "12746239328";
//   let str = "sebastin chinedu gabriel";
//   let jks = "";
//   let i;
  // for(i of str){
  //   jks += i;
  // }

  // while loop
  // let sh = "";
  // let i = 0;

  // while(i <= 10){
  //   sh += i;
  //   i++
  // }
  // console.log(sh);

  // do while Loop

  // do{
  //   sh += i;
  //   i++
  // }
  // while(i == 10);
  // console.log(sh);


// let result = 0;

// for (let i = 0; i < 10; i++){
  //   if (i === 3){break;}
  //   result += i;
  // }
  
  // console.log(result);
  // for (let i = 0; i < 10; i++){
    //   if (i === 3){continue;}
    //   result += i;
    // }
    
    // console.log(result);
    
// let multiArr = [[2,1],[2,5],[4,5]];
// let result = 0;

// for(let i = 0; i < multiArr.length; i++){
  //   for(let j = 0; j < multiArr[i].length; j++){
    //     result += multiArr[i][j];
    //   }
    // }
    
    // console.log(result);
    
let multiArr = [[2,1],[2,5],[4,5]];
let result = 0;

let i = 0;
let j = 0;
for( i of multiArr){
  for(j of i){
    if( j === 4){
      break;
    }
    result += j;
  }
}

console.log(result);//10

for( i of multiArr){
  for(j of i){
    if( j === 4){
      continue;
    }
    result += j;
  }
}

console.log(result);//15