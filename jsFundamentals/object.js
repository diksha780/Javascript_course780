//  two ways to declare object: singleton(through constructor) and literal
// singleton method says that there is only that unique object 
// ie const obj = new Object()

// object literals: this type of object has many instances
// ie
//=> object is a collection of keyed elements having key value pair
// => associative array: values are accessed through keys
// =>call by reference,,,shallow copy
// =>key in the object is cnverted into string by the engine. Thus if we want to console.log object value element, then we have to do say..
// user["name"], if we'll do like this: user[name], then it will give error that name is not defined
// => we can give any type like string, number, boolean value, object, array etc as value of any key of object
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

// const user2={
//     name:"Diksha",

//     "full name" : "Diksha Rani", // this key will not be accesed by method 1 of accessing keys of object, thus method two is more better
//     roll_no: 4152,
//     program:"CSE",
//     address:"Jadla",
//     mysym:5, //this is not the actual symbol used as the key in the object // it will treated as string by the engine, however will return the corresonding value ie marks

// }
// console.log(user2["mysym"]) //marks
// console.log(typeof user2["mysym"]) //number
// console.log(typeof user2[mysym]) //undefined

// ___NOTE: type of mysym is not symbol here, it is string as treated by the engine, bcz it is not the right syntax to use symbol as key in object

// ****correct syntax

// const user3={
//     name:"Diksha",

//     "full name" : "Diksha Rani", // this key will not be accesed by method 1 of accessing keys of object, thus method two is more better
//     roll_no: 4152,
//     program:"CSE",
//     address:"Jadla",
//     [mysym]:76, //this is not the actual symbol used as the key in the object // it will treated as string by the engine, however will return the corresonding value ie marks

// }
// console.log(user3[mysym]) //76
// console.log(typeof user3[mysym]) //number
// console.log(typeof mysym)  //symbol


// ***************************************************

// *******to update the values of keys in object

const user4={
        name:"Diksha",
    
        "full name" : "Diksha Rani", // this key will not be accesed by method 1 of accessing keys of object, thus method two is more better
        roll_no: 4152,
        program:"CSE",
        address:"Jadla",
        [mysym]:76, //this is not the actual symbol used as the key in the object // it will treated as string by the engine, however will return the corresonding value ie marks
    
    }

user4.name="Diksha Rani"
// console.log(user4)

/*{
  name: 'Diksha Rani',
  'full name': 'Diksha Rani',
  roll_no: 4152,
  program: 'CSE',
  address: 'Jadla',
  [Symbol(key1)]: 76
} */

// ***********to freeze an object to prevent any further changes in it
// Object.freeze(user4)
// if we make any new change in object, then it will not give error, but no change will happen in the object
 
// ******* to add function in object

user4.myFunc=function greet() {
    // console.log("Hello Diksha")
}

// console.log(user4)

/* 
{
  name: 'Diksha Rani',
  'full name': 'Diksha Rani',
  roll_no: 4152,
  program: 'CSE',
  address: 'Jadla',
  myFunc: [Function: greet],
  [Symbol(key1)]: 76
}
  */
//  console.log(user4["myFunc"]) //[Function: greet]
//  console.log(user4.myFunc()) 
/* Hello Diksha
   undefined 
 */


 // *************this keyword
//  _NOTES
//  => this keyword is used to refer the same object or the properties of the same object
// => foe eg, if inside a function which is also an value of object say A ,  i want to access the any other key of the same object A, then we will access that key or the whole object usinh " this " keyword
 

user4.myFunc2= function myAccess(){
    // console.log(`My name is ${this.name}`)
}
// console.log(user4)
/*
{
  name: 'Diksha Rani',
  'full name': 'Diksha Rani',
  roll_no: 4152,
  program: 'CSE',
  address: 'Jadla',
  myFunc: [Function: greet],
  myFunc2: [Function: myAccess],
  [Symbol(key1)]: 76
}
   */

// console.log(user4.myFunc2())
/* 
My name is Diksha Rani
undefined
*/


user4.myFunc3= function myAccess(){
    // console.log(`My name is ${this.roll_no}`)
}
// console.log(user4.myFunc3())
/* 
My name is 4152
undefined
*/

// nested objects
const instaUser={
  name1:{
    fname:"Diksha",
    lname: "Rani",

    fatherName:{
      fname:"Amarjit",
      lname:"Nangla"
    }
  }
}
// console.log(instaUser)
// console.log(instaUser.name1)
// console.log(instaUser.name1.fatherName)
// console.log(instaUser.name1.fatherName.fname)
/* 
{
  name1: {
    fname: 'Diksha',
    lname: 'Rani',
    fatherName: { fname: 'Amarjit', lname: 'Nangla' }
  }
}
{
  fname: 'Diksha',
  lname: 'Rani',
  fatherName: { fname: 'Amarjit', lname: 'Nangla' }
}
{ fname: 'Amarjit', lname: 'Nangla' }
Amarjit
*/

// **************************************************************************

// ******** to combine multiple objects, to copy objects to other varibale,
// *** we use Object.assign method()

// ******method 1
//__NOTES:
// =>with this method, on combinig multiple objects into a variable,a new object is created,
// => BUT, the combined objects are stored as objects in new generated object, but not as its direct elements

 const obj2 ={1:"a", 2:"b"}
 const obj3={3:"c", 4:"d"}
 const comObj1={obj2,obj3}
//  console.log(comObj1) 
//  { obj2: { '1': 'a', '2': 'b' }, obj3: { '3': 'c', '4': 'd' } }
// console.log(obj2) //here obj2 is not treated as targeted object

// ******** METHOD 2: using Object.assign()

// const comObj2=Object.assign(obj2,obj3)
// console.log(comObj2)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj2)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// here 1st parameter of Object.assign() method i.e. obj2 is treated as the target object
// console.log(comObj2 === obj2) //true


// *** to prevent obj2 to become target object, do Object.assign({}, obj2, ob3)

const comObj3=Object.assign({},obj2,obj3)
// console.log(comObj3)
// console.log(obj2);
// console.log(comObj3===obj2)
/* 
{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
{ '1': 'a', '2': 'b' }
false
*/

// ********** IF MULTIPLE OBJECTS TO BE COMBINED, have same keys, then keys values are overwritten
// earlier keys values are overwritten by the later key values
/* => FROM MDN
Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources' properties overwrite earlier ones.*/






