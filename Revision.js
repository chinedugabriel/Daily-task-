
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
Strick (How to use strict)+
this Keyword+
Arrow Function+
Classes+
Json+
Debugging+
Style guide+
Best practices+
Performance+
Reserved words+
Javascript Modules+

Recusion

JS Objects
Object Definitions+
Object Properties+
Object Methods+
Object Display+
Object Accessors+
Object Constructors+
Object Prototypes+
Object Iterables+
Object Sets+
Object Maps+
Object Reference+

JS Functions
Function Definitions +
Function Parameters+
Function Invocation+
Function Call+
Function Apply+
Function Closures+

CallBack+
Asynchronous+
Promises+
Async / Await+
Fetch


*/




// Async and Await

// let showAnsConsole = (x) => console.log(x); 

// // async function myJade(){
// //   return "I am Jade";
// // }

// async function myJade(){
//   return Promise.resolve("I am Jade");
// }

// myJade().then(
//   result => showAnsConsole(result),
//   error => showAnsConsole(error)
// );


// let goal = new Promise((resolve,reject)=>{
//   return resolve(1);
// })

// let leo = async () => goal;
// async function leo(){
//   return goal;
// }

//  let leoSmart = () => Promise.resolve(goal); 
//  function leoSmart(){
//   return Promise.resolve(goal);
//  }

//  console.log(goal === leo());
//  console.log(goal === leoSmart());

 
//  let f = async () => 1;

//  f().then(
//   showAnsConsole
//  )

//  class bugfix{
//   constructor(_name){
//     this.name =_name;
//   }
//   then(resolve,reject){
//     resolve(`${this.name} you have no bugs`)
//   }
//  }


//  let nameChecker = (x) => new Promise((resolve, reject)=>{
//   let name = x;
//   typeof name === "string" ? resolve(`${x} is an actual string`):reject("not a string");
  
//  }).then(
//   result =>{
//      console.log(result)
//     return new Promise(resolve => resolve(result))
//     },
//   error => console.log(error)
//  ).then(
//   result => new bugfix(result)
//  ).then(
//   result => console.log(result)
//  )


//  nameChecker("Nedu");

// AWAIT
// await literally suspends the function execution until the promise settles, and then resumes it with the promise result.

// let show = (x)=> console.log(x);

// let vibe = async ()=> "I promise to know this";
// vibe().then(
//   result => console.log(result)
// )

// let vibe = async () => await new Promise(resolve => resolve("I promise to know this"));
// vibe().then(
//   result => console.log(result)
// )

// let boostVibe = async () => await Promise.resolve("Yes we Won");

// boostVibe().then(show);

// test await in a regular function to see the kind of error it produces

// let er = ()=>{await console.log("wow")};

// er(); //SyntaxError: await is only valid in async functions and the top level bodies of modules  

//------------------------------------------

// Fetch(): The global fetch() method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.

// it helps us to send network request and get information from the server.


// *NOTE* : A fetch() promise only rejects when a network error is encountered

// let request = fetch();
// the fetch API provides javascript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. 

// fetch(url).then(
//   // handle response
// ).catch(
//   // handle errors
// )

/* the following are methods that can be used to read r handle the respective data 
Response properties:

response.status – HTTP code of the response,
response.ok – true if the status is 200-299.
response.headers – Map-like object with HTTP headers.
Methods to get response body:

response.text() – return the response as text,
response.json() – parse the response as JSON object,
response.formData() – return the response as FormData object (multipart/form-data encoding, see the next chapter),
response.blob() – return the response as Blob (binary data with type),
response.arrayBuffer() – return the response as ArrayBuffer (low-level binary data),
Fetch options so far:

method – HTTP-method,
headers – an object with request headers (not any header is allowed),
body – the data to send (request body) as string, FormData, BufferSource, Blob or UrlSearchParams object.

*/

// let loadData = async () =>{
//   let url = "/link.json";
//   let request = await fetch(url);
//   let data = await request.json();
//   return data;
// };
// loadData().then(response => console.log(response))

//Javascript
/*
Create a function that takes two number strings and returns their sum as a string.

Note "none" or " " return "invalid".

Examples:
add("000","989") = "989"
add("111","222") = "333"
add("","1") = "invalid"
*/



/*

Simple GET request with the Fetch API
fetch('{url}')
    .then(response => console.log(response));
Simple POST request with the Fetch API
fetch('{url}', {
    method: 'post'
})
    .then(response => console.log(response));
GET with an authorization token (Bearer) in the Fetch API
fetch('{url}', {
    headers: {
        'Authorization': 'Basic {token}'
    }
})
    .then(response => console.log(response));
GET with querystring data in the Fetch API
fetch('{url}?var1=value1&var2=value2')
    .then(response => console.log(response));
GET with CORS in the Fetch API
fetch('{url}', {
    mode: 'cors'
})
    .then(response => console.log(response));
POST with authorization token and querystring data in the Fetch API
fetch('{url}?var1=value1&var2=value2', {
    method: 'post',
    headers: {
        'Authorization': 'Bearer {token}'
    }
})
    .then(response => console.log(response));
POST with form data in the Fetch API
let formData = new FormData();
formData.append('field1', 'value1');
formData.append('field2', 'value2');

fetch('{url}', {
    method: 'post',
    body: formData
})
    .then(response => console.log(response));
POST with JSON data in the Fetch API
fetch('{url}', {
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'field1': 'value1',
        'field2': 'value2'
    })
})
    .then(response => console.log(response));
POST with JSON data and CORS in the Fetch API
fetch('{url}', {
    method: 'post',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'field1': 'value1',
        'field2': 'value2'
    })
})
    .then(response => console.log(response));
How to process the results of the Fetch API request
The Fetch API returns a Promise. Thatʼs why Iʼm always using .then() and a callback function for processing the response:

fetch(...).then(response => {
    // process the response
}
But you can also await the result if youʼre in an async function:

async function getData(){
    let data = await fetch(...);
    // process the response
}
Now letʼs take a look at how we can extract the data from the response:

How to check the status code of the Fetch API response
When sending POST, PATCH, and PUT requests, we are typically interested in the return status code:

fetch(...)
    .then(response => {
        if (response.status == 200){
            // all OK
        } else {
            console.log(response.statusText);
        }
    });
How to get a simple value of the Fetch API response
Some API endpoints may send back an identifier of a new database record that was created using your data:

var userId;

fetch(...)
    .then(response => response.text())
    .then(id => {
        userId = id;
        console.log(userId)
    });
How to convert JSON data of the Fetch API response
But in most cases, youʼll receive JSON data in the response body:

var dataObj;

fetch(...)
    .then(response => response.json())
    .then(data => {
        dataObj = data;
        console.log(dataObj)
    });
Keep in mind that you can access the data only after both Promises are resolved. This is sometimes a bit confusing, so I always prefer to use async methods and await the results:

async function getData(){
    var dataObj;

    const response = await fetch(...);
    const data = await response.json();
    dataObj = data;
    console.log(dataObj);


*/


// let TestApi = async ()=>{
//   let url = "promise_load.json";
//   let request = fetch(url,{
//       method:"GET",
//       Headers:{"content-type": "application/json; charset=UTF-8"}
      
//   });
//   if(request.status === 200){
//       return await request.json();
//   }throw "Not found dude";
  
// };

// TestApi().then(
//   response=>console.log(response)
//   ).catch(
//       error => console.log(error)
//   );

// ========================================

// HTML Dom (Document Object Model)

/*

What is the DOM?

The DOM is a W3C (World Wide Web Consortium) standard.
The W3C DOM standard is separated into 3 different parts:

    Core DOM - standard model for all document types
    XML DOM - standard model for XML documents
    HTML DOM - standard model for HTML documents

    What is the HTML DOM?

The HTML DOM is a standard object model and programming interface for HTML

*/ 

// let test2 = /^#/gi;
let test2 = /[0-9]/gi;
// let test3 = /[^0-9]/gi;
// let test3 = /[^0-9]/gi;
let test3 = /[\b0-9]/gi;
// console.log(test.search(/e/gi))
// console.log(test2.test("#eye see# success 0"));
console.log(test2.test("#eye see# success 2"));


