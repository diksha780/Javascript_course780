// *NOTES: => IIFE : Immediately Invoked Function Expressions
// IIFE is used when we want to immediately invoke the declared function 
// => it is used because there is problems caused by global scope pollution, so to remove or prevent that global scope pollution like globaly declared variable, IIFE is used


// **normal function call
function hello(){
    console.log("Hello")
}
// hello() //Hello

// ***** functioncall using IIFE
// normal syntax : ()()
// as () creates a block in which we can write code

// (
//     function hi(){
//         console.log("HI")
//     }
//  )() //HI

// => the function hi is blocked inside () and () excuted the function immediately


// NOTE: => if there are multipt IIFE functions used in a file, then we have to stop the context of the function execution using ";", otherwise it will give error
// example:

(
    function food(){
        console.log("Delicious")
    }
)
();

(
    function drink(){
        console.log("Drink")
    }
)
// ()
/*
/workspaces/Javascript_course780/jsFundamentals/iifi.js:32
)()
 ^

TypeError: (intermediate value)(...) is not a function
    at Object.<anonymous> (/workspaces/Javascript_course780/jsFundamentals/iifi.js:32:2)
    at Module._compile (node:internal/modules/cjs/loader:1546:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1691:10)
    at Module.load (node:internal/modules/cjs/loader:1317:32)
    at Module._load (node:internal/modules/cjs/loader:1127:12)
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:217:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:166:5)
    at node:internal/main/run_main_module:30:49

Node.js v22.6.0 */

// *** if I plaece ; after each function execution, then error will remove

// (
//     function food1(){
//         console.log("Delicious")
//     }
// )
// ();

// (
//     function drink1(){
//         console.log("Drink")
//     }
// )
// ();

/* 
Delicious
Drink
*/

// Note: 
// => 