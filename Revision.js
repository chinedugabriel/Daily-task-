
// Udemy EX

// test();

// function charCounterLengthSpecifier(n, num){
//     let result = "";
//     let fR = "";
//     for (let i = 0; i < n.length; i++){
//         result += n[i];
//     }
//    fR = result.length;
//     nFR = result.length - num;
//    console.log("You have written " + fR + " characters, " + "you have"+ " " + nFR + " " +"characters left");
// }
// ******************OR***************

// function charCounterLengthSpecifier(n, num){
//     let fR = n.length;
//     nFR = n.length - num;
//     console.log("You have written " + fR + " characters, " + "you have"+ " " + nFR + " " +"characters left");
// }

// charCounterLengthSpecifier("jofoubo9bwsqxcd2cfo9bv", 30);


let page = "Home";
// let num = "0123456789";
// let letters = [ 'h', 'i', 'j', 'k', "be", "jay", 42 , 12, 22, 6, 10];

let arr =[ "Nmadu", "Success", "Chris", "Debby"];

// console.log(letters.sort((a,b)=> a -b));
//  OR //
// let result = letters.sort(function compareFun(a,b){ return a - b;});
// let result = arr[arr.length -1];

// looping through an array

// for(let i = 0; i < arr.length; i++ ){
//     result.push(arr[i]);
// };

// arr.forEach(outP);
// function outP(v){
//     return result.push(v);
// };

// let result = arr.join("pp");

// let result = arr.pop();
// arr[arr.length] = "chima";
// arr[arr.length] = "Adaugo";

// let result = arr.slice(3);
    
// console.log(result.toString());

//=========================================
// how find the maximum value in an array of number
// let Narr = [23,3,5,6,2,79,2];
// function minAndMaxFinder(array){
//     let preArrange = array.sort((a,b) => a - b);
//     if (preArrange[preArrange.length - 1] > preArrange[0]){
//        return "Your Maximum value is " + preArrange[preArrange.length - 1] + " and your minimum value is " +  preArrange[0]; 
//     }else {
//         console.log(" check your code ");
//     }
    
    
// }

//  console.log(minAndMaxFinder(Narr));
//  console.log(Narr.sort());
//  console.log(letters.sort());
//==================================================

// How to revers a string in an array
// function wordMeaning(){
//     let result ="This ";
//     let p = "welcome back";

    
//    result = p.split("").reverse().join("");

// console.log(result);

// }
// wordMeaning();

// let p = ["wale", "Emmely", "mathew", "kemi", "Rockky"];
// let result = p.splice(1,2,"justTry");
// let result = p.slice(2,4);

// sort()  
let v = ["a", "c", "B", "E", "f"];

// let result = v.sort((a, b)=> a - b);
// let result = v.sort((a, b)=> 0.5 - Math.random());

// let person =[ 
//     {
//     name : "ije",
//     movie : "africa",
//     location : "Oka "
//     }, 
//     {
//     name : "faith",
//     movie : "south africa",
//     location : "Oka "
//     },
//     {
//     name : "jane",
//     movie : "ghana",
//     location : "Oka "
//     }
// ];

// let result = person.sort((a, b) => a.name - b.name);

// forEach(callback_function,thisArg) 

// let nv = "";
// let result = p.forEach(myFunction);
// function myFunction(value, index, array){
//   nv += value;
// }

// console.log(nv);
// console.log(arguments);
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
reduceRight();
every();
some();
indexOf();
lastIndexOf();
find();
findIndex();



*/
let person =[ 
    {
    name : "ije",
    movie : "Nije",
    location : "Oka "
    }, 
    {
    name : "faith",
    movie : "south africa",
    location : "Oka "
    },
    {
    name : "jane",
    movie : "ghana",
    location : "Oka "
    }
];

let text = "Gabriel is coming form church and you";
let letters = [ 'h', 'i', 'j', 'k', "b", "j", 42 , 12, 22, 6, 10];
let arrNum = [2, 3, 4, 10, 12];
let r = ['n', 'r', 'd', 'c', 'u', 'b', 'a'];
let num = 6.1355;

let ayr = [22, 254];
let nw =[];
let evenNumbers =[];
let oddNumbers =[];

// arrNum.forEach(showArr);
// function showArr(value){
  //   if(value % 2 == 0){
    //     return evenNumbers.push(++value);
//   }else{
//     return oddNumbers.push(--value);
//   }
// }
const showArr = value => value % 2 == 0 ? evenNumbers.push(value) : oddNumbers.push(value) ;

arrNum.forEach(showArr);

// let result = arrNum.map(addFn);
// function addFn(value,index,array){
//   return sum = value * 2;
// }

// let result = arrNum.filter(Fn);
// function Fn(value,index,array){
//   return sum = value > 22;
// }

// let rv = [];
// function test( value, index, array){
//   return rv.push(value % 2 == 1 ? value:"");
// }
// arrNum.forEach(test);

// let result = evenNumbers;
// const mlt = (value,index,array)=>value % 2 ==1?value:"";

// const mlt = (value,index,array)=>value % 2 ==1?value:"";

// let go = arrNum.map(mlt);

// const mlt = (value,index,array)=>value % 2 == 1;

// let gee = arrNum.filter(mlt);

//how to sum up the values in an array
// let newArrNum = [2, 4, 6, 3, 5];
// const sum = (previousValue, currentValue, currentIndex, array)=> previousValue + currentValue ;
// let result = newArrNum.reduce(sum,0);

// console.log(result);

// how to find the highest value in an array
// let newArrNum = [2, 4, 6, 3, 25];
// const sum = (previousValue, currentValue, currentIndex, array)=> previousValue > currentValue ? previousValue : currentValue;
// let result = newArrNum.reduce(sum,0);

// console.log(result);

// How to find the highest value in an object
// let persons =[ 
//     {
//     name : "ije",
//     movie : "africa",
//     location : "Oka ",
//     time : 10
//     }, 
//     {
//     name : "faith",
//     movie : "south africa",
//     location : "Oka ",
//     time : 2
//     },
//     {
//     name : "jane",
//     movie : "ghana",
//     location : "Oka ",
//     time : 4
//     }, 
//     {
//     name : "faith",
//     movie : "south africa",
//     location : "Oka ",
//     time : 2
//     },
//     {
//       name : "ije",
//       movie : "africa",
//       location : "Oka ",
//       time : 10
//     }
// ];
// const sum = (previousValue, currentValue, currentIndex, array)=> previousValue > currentValue.time ? previousValue: currentValue.time ;
// let result = persons.reduce(sum,0);

let p = ["wale", "Emmely", "mathew", "Emmely", "kemi", "Rockky", "mathew", "Emmely"];

// let newArrNum = [2, 4, 6, 3, 2, 5];
const evenNum = (previousValue, currentValue)=>
(previousValue + currentValue)  % 2 !== 0 ? previousValue : currentValue;
// let result = newArrNum.reduce(evenNum,0);

// console.log(result);

// How to remove duplicate value in an array using filter and indexOf
// let newAns = p.filter((value, index)=>p.indexOf(value)=== index);

// console.log(newAns);

// in details explain what this code is doing...


// End Here


// How to remove duplicate value in an array using reduce and indexOf
const names = [
	'shibu',
	'neymar',
	'vinicius',
	'pattinson',
	'ronaldo',
	'shibu',
	'neymar',
	'pattinson',
	'diCaprio'
];

// let onlyName = names.reduce((accumulator, currentValue) => {
// 	if (accumulator.indexOf(currentValue) ===  -1) {
// 		accumulator.push(currentValue);
// 	}
// 	return accumulator;
// }, []);

// console.log(onlyName);

// How to remove duplicate value in an array using reduce and indexOf
// let wuv = p.reduce((previousValue,currentValue)=>{
//   if(previousValue.indexOf(currentValue) === -1){
//     previousValue.push(currentValue);
//   }
//   return previousValue;
// },[]);

// console.log(wuv);

// in details explain what this code is doing...

// class work before next class today..


// *****************************************************

// The reduceRight() works from right-to-left in the array as it  runs a function on each array element to produce (reduce it to) a single value.

// let Arm = [[2, 4], [6, 3], [2, 5]];

let fun = (accumulator,currentValue) => accumulator + currentValue;
// let ans = Arm.reduceRight(fun);

// console.log(ans);

// every() the every method checks if all array values pass a test (from callback) and returns a boolean..

let arm = [2, 4, 6, 3, 2, 5];

let greaterValue = (value, index, array)=> value > 3;
// let ams = arm.every(greaterValue);

// console.log(ams);
// **note for every all the values most pass the test for it out put to be true..


// some() the every method checks if all array values pass a test (from callback) and returns a boolean..

let arN = [2, 4, 6, 3, 2, 5];

let greaterVal = (value, index, array)=> value > 3;
// let amZ = arN.some(greaterValue);

// console.log(amZ);

// **note for some() it returns true even when some of the values in the array doesn't pass the test onlike every that requires all of it values to pass it test...


// indexOf() give the index position of a value in the given array and doen't take a callback function to do so...

// var fruits = ["Apple", "Orange", "Apple", "Mango"];
// var a = fruits.indexOf("Orange");

// console.log(a);
// End

// lastIndexOf() give the index position of a value in the given array, just indexOf but it performs its operation opposite by starting its process from right to left onlike indexOf() that does its own from left to right and doen't take a callback function to do so...

var fruits = ["Apple", "Orange", "Apple", "Mango"];
// var a = fruits.lastIndexOf("Orange");

// console.log(a);
// End

// The find() method returns the value of the first array element that passes a test function.

var numbers = [4, 9, 16, 25, 29];
var firstY = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 8;
} 

console.log(firstY);

// findIndex() method returns the index of the first array element that passes a test function.

var firstO = numbers.findIndex(myWFunction);

function myWFunction(value, index, array) {
  return value > 18;
} 