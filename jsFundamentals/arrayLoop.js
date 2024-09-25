// for of loop is appiicable on arrays, strings , objects
let greetings =["Namaste", "Hi", "Hello"]
// for (const greet of greetings ){

//     console.log(greet)
// }

/* 
Namaste
Hi
Hello
*/


//  ****** on string, to ignore space
// let myName="Diksha Rani"
// for (const pass of myName){
//     if(pass == " "){
//         continue
//     }
//     console.log(pass) 
    
// }
// console.log (myName.length)
/*
D
i
k
s
h
a
R
a
n
i
11
*/

// on string, to brea fow if space detected
let myName="Diksha Rani"
// for (const pass of myName){
//     if(pass == " "){
//         break;
//     }
//     console.log(pass) 
    
// }
// console.log (myName.length)
/* 
D
i
k
s
h
a
11
*/

// *************** MAP OBJECT
/*NOTE : 
Baseline Widely available
=> The Map object holds key-value pairs and remembers the original insertion order of the keys.
=> Any value (both objects and primitive values) may be used as either a key or a value.
=> A key in the Map may only occur once; it is unique in the Map's collection.
=>A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration.
=> Iteration happens in insertion order, which corresponds to the order in which each key-value pair was first inserted into the map by the set() method (that is, there wasn't a key with the (SAME VAUE) already in the map when set() was called).
*/

// *** LINK : difference btwn Map and Object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// ***********************OBJECT:  to check  size of objec, is a long process
let student={
    name: "Disha", 
    rollno: 4152
}

let keys= Object.keys(student)  //this will return thr array of keys
// console.log(keys) //[ 'name', 'rollno' ]

// console.log(keys.length) //2 //apply length property of array



for (const i in student){
    console.log(i)
}
// name
// rollno
for (const i in student){
    console.log(student[i])
}
//  Disha
// 4152

// ********************MAP 
const contact= new Map()

contact.set("Disha",{
    phone:4152,
    address:"Jadla"
})

// console.log(contact.has("Disha")) //true
// console.log(contact.get("Disha"))// { phone: 4152, address: 'Jadla' }

contact.set("Vishal",{
    phone:4222,
    address:"Ludhiana"
})

// console.log(contact.size) //2

// console.log(contact.get("Vishal"))  //{ phone: 4222, address: 'Ludhiana' }

// for (const i of contact){
//     console.log(i)
// }

/* 
[ 'Disha', { phone: 4152, address: 'Jadla' } ]
[ 'Vishal', { phone: 4222, address: 'Ludhiana' } ]
*/


// ******SUMMARY: 
// =>on map object, we use for..of loop
// => on object, we use for..in loop to iterate its keys