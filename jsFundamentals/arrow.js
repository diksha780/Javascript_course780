// *******this keyword: it give reference to the current context
// a function expression assign as property of the object is actually called the "method " of the object
/* 
When we write our code using objects to represent entities, that’s called object-oriented programming, in short: “OOP”.

OOP is a big thing, an interesting science of its own. How to choose the right entities? How to organize the interaction between them? That’s architecture, and there are great books on that topic, like “Design Patterns: Elements of Reusable Object-Oriented Software” by E. Gamma, R. Helm, R. Johnson, J. Vissides or “Object-Oriented Analysis and Design with Applications” by G. Booch, and more.
*/
const student={
    name:"Diksha",
    rollNo:4152,
    message:function (){
        let name="Vishal";
        console.log(`welcome ${student.name}`)
        console.log(`welcome ${this.name}`)
        /*
         welcome Diksha 
        welcome Diksha*/

console.log(`welcome ${name}`)
/*
welcome Diksha
welcome Diksha
welcome Vishal
 */
        console.log(this)
        // { name: 'Diksha', rollNo: 4152, message: [Function: message] }
    }
}
// student.message() 
/* 
welcome Diksha
welcome Diksha
welcome Vishal
{ name: 'Diksha', rollNo: 4152, message: [Function: message] }
 */


// ********** Method shorthand
// we can neglect function 
// this method is more prefferable

let userData={
    name: "Diksha",
    message(){
        console.log(`Welecome ${userData.name}`)
    }
}
// userData.message() //Welecome Diksha

// NOTES:-
/* 
=> when we console.log(this ) in vs code or any standalone js compiler environement, then result is {}, an empty object
=> but when we console.log(this) in browser console(inspect), it gives result: Windows
=> Windows is a global object in the browser environment, earlier js was only executed b browser engine
=>node is javascript standalone engine that executes js code
    */


// ***** this inside a function
function marks(){
   
    // subject="Maths"
    // console.log(this.subject)
}
// marks() //Maths
/* 
****NOTES:
In JavaScript, when a variable is not declared using var, let, or const, it becomes a global variable by default. This happens because the variable is automatically attached to the global object, which is window in browsers.
*/
// test 1: using normal function
function marks1(){
   
    let subject1="Maths"
    console.log(this.subject1)
    console.log(this)
}
// marks1() //undefined
/* 
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}*/

/* NOTES: 
=> this keyword is not used for function context
=> this is used for object contexts*/

// ************ test 2: using function expression

let score = function(){
    let marks=40
    console.log(this.marks)
    console.log(this)
}
// score()
/* 
undefined
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}*/


// **** test 3: using ARROW FUNCTION
let subject= () => {
  let marks= 40
console.log(this.marks)
console.log( this)
  }

//   subject()
  /* 
  undefined
{}
  */

// ******** summary of this keyword in these 3 test:-
// => in normal and functinal expresion and arrow function,  console.log(this.marks) gives undefined
// => in normal and fuctional expression, console.log(this) gives global object and many morethings
// => but in arrow funciton, console.log(this) gives {}//empty object

// *********ARROW FUNCTION
// basic syntax
// () => {}

// we can assign it to a variablr

// let food= (...item) => {
//     console.log(item)
// }

// food('pasta', 'noodle') //[ 'pasta', 'noodle' ]

//******* two types of return: explicit return and implicit return

// let food= (...item) => {
//     return item
// }
// ****** if using {} then we have to use return keyword

// ****** implicit return

let add= (num1 , num2) => (num1 + num2)
// console.log(add(2,5)) //7

// *** if replaces {} with parenthesis () and write code in same single line, we dont need to write return keyword
// implicit retur is mostly used in react js
