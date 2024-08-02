//  two ways to declare object: singleton(through constructor) and literal
// singleton method says that there is only that unique object 
// ie Object.create

// object literals: this type of object has many instances
// ie
//=> object is a collection of keyed elements having key value pair
// => associative array: values are accessed trough keys
// =>call by reference,,,shallow copy
// =>key in the object is cnverted into string by the engine. Thus if we want to console.log object element, then we have to do say..
// user["name"]
// => we can give any type like string, number, boolean value, object, array elc as value of any key of object
 const user1={
    name:"Diksha",
    "full name" : "Diksha Rani", // this key will not be accesed by method 1 of accessing keys of object, thus method two is more better
    roll_no: 4152,
    program:"CSE",
    address:"Jadla",

}

// *** Method 1 to access object elements : using period
// console.log(user.name)
// console.log(user.program)
// console.log(typeof user)
// console.log(user.full name) //gives error

/* 
Diksha
CSE
object
*/

// *** Method 2 to access object elements : good syntax
// console.log(user[name]) //it gives an error bcz internally key is treated as string by the js engine

//  right syntax

// console.log(user["name"])
// console.log(user["full name"]) // method 2 is better
// console.log(user["roll_no"])
// console.log(user["address"])
// console.log(user["program"])
 /*Diksha
 Diksha Rani
4152
Jadla
CSE */

// console.log(typeof user["name"]) //string
// console.log(typeof user) //object


// *********************** to declare a symbol
// => symbol is a primitive datatype in js

const mysym= Symbol("key1"); // to declared symbol of key1

// if we want to use symbols as the key in our object

const user2={
    name:"Diksha",

    "full name" : "Diksha Rani", // this key will not be accesed by method 1 of accessing keys of object, thus method two is more better
    roll_no: 4152,
    program:"CSE",
    address:"Jadla",
    mysym:"marks", //this is not the actual symbol used as the key in the object // it will treated as string by the engine, however will return the corresonding value ie marks

}
// console.log(user2["mysym"]) //marks
// console.log(typeof user2["mysym"]) //string

// ___NOTE: type of mysym is not symbol here, it is string as treated by the engine, bcz it is not the right syntax to use symbol as key in object

// ****correct syntax

const user3={
    name:"Diksha",

    "full name" : "Diksha Rani", // this key will not be accesed by method 1 of accessing keys of object, thus method two is more better
    roll_no: 4152,
    program:"CSE",
    address:"Jadla",
    [mysym]:"marks", //this is not the actual symbol used as the key in the object // it will treated as string by the engine, however will return the corresonding value ie marks

}
console.log(user3[mysym]) 
console.log(typeof user3[mysym]) //symbol key is converted into string by the js engine 


