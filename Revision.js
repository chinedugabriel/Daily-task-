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

Type Conversion+
Bitwise Operation+
Regular Expression(RegExp)+
Errors(try{throw},catch(){},finally)+
Scope+
Hoisting+
Set()+
Maps()+

*/


let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


let person = {
  name : "Gabriel",
  age : "26",
  sex : "male",
  state : "Anambra"
};
    
// Sets

// Essential Set Methods
// Method	Description
// new Set()	Creates a new Set
// add()	Adds a new element to the Set
// delete()	Removes an element from a Set
// has()	Returns true if a value exists in the Set
// forEach()	Invokes a callback for each element in the Set
// values()	Returns an iterator with all the values in a Set
// Property	Description
//size	Returns the number of elements in a Set

// const setArr = new Set(days);
// setArr.add("BronchDay");
// setArr.add("PartyDay");
// setArr.add("CoddingDay");
// setArr.add("BronchDay");
// setArr.add("PartyDay");
// setArr.add("CoddingDay");

// let del = setArr.delete("CoddingDay");

// console.log(setArr.size);
// console.log(setArr.values());
// console.log(del);
// setArr.clear();
// console.log(setArr);


// let t =[];
// let r;
// for (r of setArr){
//   t.push(r);
//   // console.log(r);
// }
// console.log(t);



// Maps();
/*
Essential Map Methods
Method |	Description
new Map() |	Creates a new Map
set() |	Sets the value for a key in a Map
get() |	Gets the value for a key in a Map
delete() |	Removes a Map element specified by the key
has() |	Returns true if a key exists in a Map
forEach() |	Calls a function for each key/value pair in a Map
entries() |	Returns an iterator with the [key, value] pairs in a Map
Property |	Description
size |	Returns the number of elements in a Map
*/ 



let  multiArr =[["name","alfred"],["BetFriend","bayo"],[72,"true"]];

let tsMap = new Map();
// tsMap.set(multiArr);
tsMap.set("name", "alfred");
tsMap.set("bestFriend","bayo");
tsMap.set(72, "true");
// console.log(tsMap);
// tsMap.delete(72);
// console.log(tsMap.get("name"));
// console.log(tsMap.size);
// console.log(tsMap.has("72"));

// console.log(person.length);
// let y;
// let srt = "";
// tsMap.forEach((value,key)=>srt +="\n"+ key + " = "+ value);


// console.log(srt);
// console.log(tsMap.entries())

// let t;
// let k;
// let m = [];
// for (t of tsMap.entries()){
//   // k.push(t);
//   for (k of t){
//     m.push(k);
//   }
// }
// console.log(m);
let p = [];
days.forEach((value,index)=> p.push([index,value]));
// console.log(p);

let P_map = new Map(p);
// console.log(P_map.constructor.toString().indexOf("Map") > -1);

