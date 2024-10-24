//REVISION NOTES:
//=> to combine objects, we use normal method { obj1, obj2}, Object.assign(), spread method() ie. (..obj1, obj2)
//=> when we copy the object into another variable( or while cloning the object without {} as target element), the change in parent object is reflected  back to the child object(copied object) and vice versa // shallow copy
//=> when we copy the object into another variable( or while cloning the object with{} as target element), the change in parent object is NOT reflected  back to the child object(copied object) and vice versa // shallow copy

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
    "full name" : "Diksha Rani", // this key will not be accesed by method 1 of accessing keys of object(using .), thus method two is more better
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
    mysym:5, //this is not the actual symbol used as the key in the object // it will treated as string by the engine, however will return the corresonding value ie marks

}
//  console.log(user2["mysym"]) //5
// console.log(typeof user2["mysym"]) //number
// console.log(typeof user2[mysym]) //undefined
// console.log(typeof mysym) //symbol
// console.log(user2)
/* {
  name: 'Diksha',
  'full name': 'Diksha Rani',
  roll_no: 4152,
  program: 'CSE',
  address: 'Jadla',
  mysym: 5 //mysym is not treated as symbol
}*/

// ___NOTE: type of mysym is not symbol here, it is string as treated by the engine, bcz it is not the right syntax to use symbol as key in object

// ****correct syntax

const user3={
    name:"Diksha",

    "full name" : "Diksha Rani", // this key will not be accesed by method 1 of accessing keys of object, thus method two is more better
    roll_no: 4152,
    program:"CSE",
    address:"Jadla",
    [mysym]:76,

}
// console.log(user3[mysym]) //76
// console.log(typeof user3[mysym]) //number
// console.log(typeof mysym)  //symbol
// console.log(user3)
/* {
  name: 'Diksha',
  'full name': 'Diksha Rani',
  roll_no: 4152,
  program: 'CSE',
  address: 'Jadla',
  [Symbol(key1)]: 76  //mysym is treated as symbol
}*/

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
    console.log("Hello Diksha")
    return 1
}

user4.greet=function (){
  console.log("Hello")
  
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
// console.log(user4["myFunc()"]) //undefined
// console.log(user4[myFunc()]) //undefined
// console.log(user4.greet())
// Hello
// undefined

//  console.log(user4.myFunc()) 
/* Hello Diksha
   undefined //if nothing is return in the function
 */
///or
// Hello Diksha
// 1 //(if return 1 in the function)
// console.log(user4)
/*
{
  name: 'Diksha Rani',
  'full name': 'Diksha Rani',
  roll_no: 4152,
  program: 'CSE',
  address: 'Jadla',
  myFunc: [Function: greet],
  greet: [Function (anonymous)],
  [Symbol(key1)]: 76
}
*/

 // *************this keyword
//  _NOTES
//  => this keyword is used to refer the same object or the properties of the same object
// => for eg, if inside a function which is also a value of object say A ,  i want to access the any other key of the same object A, then we will access that key or the whole object using " this " keyword
 

user4.myFunc2= function myAccess(){
    console.log(`My name is ${this.name}`)
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
    console.log(`My name is ${this.roll_no}`)
}
// console.log(user4.myFunc3())

/* 
My name is 4152
undefined
*/
// user4.myFunc3() //My name is 4152


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
// *********MERGING OBJECTS
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
// console.log(obj2) //{ '1': 'a', '2': 'b' } //here obj2 is not treated as targeted object

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

// ***********MERGING OBJECTS WITH SAME PROPERTIES
// ********** IF MULTIPLE OBJECTS TO BE COMBINED, have same keys, then keys values are overwritten
// earlier keys values are overwritten by the later key values
/* => FROM MDN
Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources' properties overwrite earlier ones.*/

const obj4 ={1:"a", 2:"b"}
const obj5={1:"c", 2:"d"}// OBJECTS HAVING SAME PROPERTIES

const comObj4= Object.assign({},obj4, obj5)
// console.log(comObj4) //{ '1': 'c', '2': 'd' }
// console.log(obj4) //{ '1': 'a', '2': 'b' }


// **********SPREAD METHOD
const obj17={...obj4, ...obj5}
// console.log(obj17) //{ '1': 'c', '2': 'd' }

// ******** CLONING AN OBJECT : Object.assign()

// copy obj4 into other object
let obj6 ={1:"a", 2:"b" , num:"c"} //creating accessing wali problem with number as index(method 2 of access object key is better)
const copy = Object.assign(obj6) //
// console.log(copy) //{ '1': 'a', '2': 'b', num: 'c' }

// *** MODIFYING ORIGINAL OBJECT
// ***** modify original object
// obj6.num="Diksha";
// console.log(obj6)
// console.log(copy); 
/* 
{ '1': 'a', '2': 'b', num: 'Diksha' }
{ '1': 'a', '2': 'b', num: 'Diksha' }
 */

// ***** MODIFY COPY OBJECT
// copy.num="Diksha";
// console.log(obj6)
// console.log(copy); 
/* { '1': 'a', '2': 'b', num: 'Diksha' }
{ '1': 'a', '2': 'b', num: 'Diksha' }
 */

// ************ ADDING {} AS FIRST PARAMETR OF OBJECT.ASSIGN()

let obj7 ={1:"a", 2:"b" , num:"c"} //creating accessing wali problem with number as index(method 2 of access object key is better)
const copy1 = Object.assign({},obj7)
// console.log(copy1) //{ '1': 'a', '2': 'b', num: 'c' }


// *****MODIFY ORIGINAL OBJECT
// obj7.num="Diksha";
// console.log(obj7)
// console.log(copy1);

/* 
{ '1': 'a', '2': 'b', num: 'Diksha' }
{ '1': 'a', '2': 'b', num: 'c' }
 */

// *****MODIFY COPY OBJECT
// console.log(obj7)
// copy1.num="Diksha";
// console.log(obj7)
// console.log(copy1);

/* 
{ '1': 'a', '2': 'b', num: 'c' }
{ '1': 'a', '2': 'b', num: 'c' }
{ '1': 'a', '2': 'b', num: 'Diksha' }
 */

// *****************************************************

const obj9 = { a: 0, b: { c: 0 } }; 
const obj10 = Object.assign({}, obj9);
// console.log(obj10); //{ a: 0, b: { c: 0 } }

// *****modify embedded object key value
obj9.b.c = 3;
// console.log(obj9); // { a: 1, b: { c: 3 } }
// console.log(obj10); // { a: 2, b: { c: 3 } }

// ___NOTES: Cloning objects
// => if not adding {} as first paramter of object.assign(), then shallow copy of original object is created
// => any change made in original object ,is reflected into copy object and vice versa
// => if we add {} as first parameter i.e. Object.assign({}, obj1),
//  then, deep copy is generated...means changes made in original object or copy object are independet

// Warning for Deep Clone
const obj11 = { a: 0, b: { c: 0 } };
const obj12 = Object.assign({}, obj11);
// console.log(obj12); // { a: 0, b: { c: 0 } }


obj11.a = 1;
// console.log(obj11); // { a: 1, b: { c: 0 } }
// console.log(obj12); // { a: 0, b: { c: 0 } }

obj12.a = 2;
// console.log(obj11); // { a: 1, b: { c: 0 } }
// console.log(obj12); // { a: 2, b: { c: 0 } }

obj12.b.c = 3;
// console.log(obj11); // { a: 1, b: { c: 3 } }
// console.log(obj12); // { a: 2, b: { c: 3 } }
// here shallow copy is created
//For  Deep Clone : use structuredClone() instead of Object.assign()
const obj13 = { a: 0, b: { c: 0 } };
const obj14 = structuredClone(obj13);
obj13.a = 4;
obj13.b.c = 4;
// console.log(obj14); // { a: 0, b: { c: 0 } }


// *******************GETTER AND SETTER
// GET METHOD
/* ___NOTES:The get syntax binds an object property to a function that will be called when that property is looked up. 
=>Sometimes, it is desirable to allow access to a property that returns a dynamically computed value, or you may want to reflect the status of an internal variable without requiring the use of explicit method calls. In JavaScript, this can be accomplished with the use of a getter.


*/
const obj15={
  log:['a','b','c'],
  get latest(){
    return this.log[this.log.length-1]

  },
}
// console.log(obj15.latest) //c


// const obj16={
//   log:["Diksha", "Rani"],
//    latest(){
//     return this.log.at(-1);
//   }
// }
// console.log(obj16.latest) //[Function: latest]

//same function with get
const obj16={
  log:["Diksha", "Rani"],
   get latest(){
    return this.log.at(-1);
  }
}
console.log(obj16.latest) //Rani

// ********set keyword
/* _____NOTES:
=>The set syntax binds an object property to a function to be called when there is an attempt to set that property. 
*/

const language={
  set current(name){
    this.log.push(name);
  },
  log:[],
}

language.current="Diksha"
language.current="Vishal"
// console.log(language.log) //[ 'Diksha', 'Vishal' ]



// *****************ARRAY OF OBJECTS
const chatAppUser=[
  {
    id:1,
    mail:"diksha@gmail.com",

  },
  {
    id:2,
    mail:"vishal@gmail.com"
  },

]

// console.log(chatAppUser[1]["mail"]) //vishal@gmail.com
// console.log(chatAppUser[1].mail)//vishal@gmail.com

// ****** TO ACCESS ALL THE KEYS OF OBJECT
// => GIVEN KEYS WILL BE PROVIDED IN ARRAY 

let obj18 ={1:"a", 2:"b" , num:"c"}
// console.log(Object.keys(obj18))  //[ '1', '2', 'num' ]

// // ****** TO ACCESS ALL THE values OF OBJECT
// => GIVEN KEYS WILL BE PROVIDED IN ARRAY 

// console.log(Object.values(obj18)) //[ 'a', 'b', 'c' ]

// ***** hasOwnProperty: to check whether a key is present in the object or not
// console.log(obj18.hasOwnProperty("num")) //true

