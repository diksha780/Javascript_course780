
// *************LOGICAL OR
// eg 1
// let name="Diksha"

// if(name=="Diksha"){
//     console.log("You belongs to V")
// }
//You belongs to V


// eg2
// let age=21
// if(age> 18 || age<35){
//     console.log("You are eligibe for UPSC")
// }
// You are eligibe for UPSC

// eg3
// let hour=12
// let isWeekend=true;
// if(hour<10|| hour>18||isWeekend){
//     console.log('The Office is closed')

// }
// The Office is closed
// NOTE: the contro will ony goes indide if, ony if the any of the give conditions is evaluated to true
// if all are false conditions, then not enter into if blockk'
// In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.

// console.log(null|| undefined||0) //0
// console.log(null|| undefined||1) //1


// ********Getting the first truthy value from a list of variables or expressions.
 

// let fname="";
// let lname="";
// let nickname="Lavya"
// console.log(fname||lname||nickname||"Hero") //Lavya

// eg:
// console.log (console.log(1)|| 2|| console.log(3)) 
//1
112
/* The call to alert does not return a value. Or, in other words, it returns undefined.

The first OR || evaluates its left operand alert(1). That shows the first message with 1.
The alert returns undefined, so OR goes on to the second operand searching for a truthy value.
The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer alert.
There will be no 3, because the evaluation does not reach alert(3).*/

/* 
Short-circuit evaluation.

Another feature of OR || operator is the so-called “short-circuit” evaluation.

It means that || processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument.
*/

// // *************LOGICAL AND

// console.log(true && false)
// console.log(true && true)
// false
// true

/* 
=>The AND && operator does the following:

Evaluates operands from left to right.
For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were truthy), returns the last operand.
In other words, AND returns the first falsy value or the last value if none were found.

The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.

=>Precedence of AND && is higher than OR ||
The precedence of AND && operator is higher than OR ||.

So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).*/

// eg:
// console.log(console.log(1)&& console.log(2))
//1
// undefined


// // *************LOGICAL not (!)
/* 
The opera!!ntor accepts a single argument and does the following:

Converts the operand to boolean type: true/false.
Returns the inverse value.*/

// The operator accepts a single argument and does the following:

// =>Converts the operand to boolean type: true/false.
// Returns the inverse value.

// console.log(!!"My name is Diksha") //true
// console.log(null) //false

// => second method to do the same is using built-in Boolean funcrion

// console.log(Boolean("My name is Diksha")) //true

// console.log( Boolean(null)) //false

// =>The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.

