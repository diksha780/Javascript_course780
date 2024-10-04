// for of loop is appiicable on arrays, strings , map objects
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
=> The Map object holds key-value pairs and remembers the original insertion order of the keys.
=> Any value (both objects and primitive values) may be used as either a key or a value.
=> an array can cave number or string as key...
=> an object can have only strings or symbols as keys
=> A key in the Map may only occur once; it is unique in the Map's collection.
=> a same key can be repreated , but must have a different value
=>A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration.
=> Iteration happens in insertion order, which corresponds to the order in which each key-value pair was first inserted into the map by the set() method (that is, there wasn't a key with the (SAME VAUE) already in the map when set() was called).
*/

// *** LINK : difference btwn Map and Object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// ***********************OBJECT:  to check  size of object, is a long process
let student={
    name: "Disha", 
    rollno: 4152
}

let keys= Object.keys(student)  //this will return thr array of keys
// console.log(keys) //[ 'name', 'rollno' ]

// console.log(keys.length) //2 //apply length property of array


/*************for..in loop on object */
for (const i in student){
    // console.log(i)
}
// name
// rollno
for (const i in student){
    // console.log(student[i])
}
//  Disha
// 4152

//for (const [key,value] of student){
    //console.log(key, ":-", value)
//}
//TypeError: student is not iterable

/*
for (const [key,value] in student){
    console.log(key, ":-", value)
}
    */
/* n :- a
r :- o
*/

//NOTE: for...in loop  returns only keys, on printing interation variable

// ************ for in loop on array
let myarr=[1,2,3,45]
//  for ( const i in myarr){
//     // console.log(myarr[i])
//  }
 /* 
1
2
3
4
 */

for (const i in myarr){
   // console.log(i)
   }
   /* 
   0
1
2
3
   */
   



for (const i of myarr){
    // console.log(myarr)
}
/* 
[ 1, 2, 3, 4 ]
[ 1, 2, 3, 4 ]
[ 1, 2, 3, 4 ]
[ 1, 2, 3, 4 ]
 */




for (const i of myarr){
    // console.log(i)
}
/* 
1
2
3
45*/

//******NOTE: 
//=> on arrays, using for..in loop, printing i will return only index of the array that starts from zero
// => on arrays, using for..of loop,and printing i will return the values of the array
//=> Thus for..of is better

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
// contact.delete("...")
// console.log(contact.get("Vishal"))  //{ phone: 4222, address: 'Ludhiana' }


// console.log(contact)
/* Map(2) {
  'Disha' => { phone: 4152, address: 'Jadla' },
  'Vishal' => { phone: 4222, address: 'Ludhiana' }
}*/

// for (const i of contact){
//     console.log(i)
// }



/* 
[ 'Disha', { phone: 4152, address: 'Jadla' } ]
[ 'Vishal', { phone: 4222, address: 'Ludhiana' } ]
*/

for (const [key, value] of contact){
    //console.log(key, ";-", value)
} 
/* 
Disha ;- { phone: 4152, address: 'Jadla' }
Vishal ;- { phone: 4222, address: 'Ludhiana' }
*/


// ******SUMMARY: 
// =>on map object, array, strings, we use for..of loop
// => on object and arrays, we use for..in loop to iterate its keys
// => for..in loop returns only keys, on printing iteration variable
//=> for..of loop print whole map object or an array on printing iteration variable

// ********************* forEach loop on array

let coding=['js', 'java','cpp','python','react']
// *** using normal function
////no name of functionn

// coding.forEach( function (item) { 

//     console.log(item)
// } )
/* 
js
java
cpp
python
react
*/

// ************using arrow function

coding.forEach( (item) => {
    //console.log(item)
})
/* 
js
java
cpp
python
react
*/

//**declaring and defining function elsewhere and use it in forEach */
//function printMe(pass_item){
  //  console.log(pass_item)
//}
// we only need to give the reference to the function , istead of executing it
//coding.forEach(printMe)
/* 
js
java
cpp
python
react
*/




// additional features of forEach
// function printMe(pass_item, ind, arr1){
//       console.log(pass_item, ind, arr1)
// }
//ind: gives index of array coding
//arr1: gives whole array coding 
//coding.forEach(printMe)
/*
js 0 [ 'js', 'java', 'cpp', 'python', 'react' ]
java 1 [ 'js', 'java', 'cpp', 'python', 'react' ]
cpp 2 [ 'js', 'java', 'cpp', 'python', 'react' ]
python 3 [ 'js', 'java', 'cpp', 'python', 'react' ]
react 4 [ 'js', 'java', 'cpp', 'python', 'react' ]
 */


//******  when array is a collection of objects

let myCoding=[
    {
        name:"Diksha",
        rollNo:4152
    },
    {
        name:"Vishal",
        rollNo:4152
    },
    {
        name:"Sarisha",
        rollNo:4152
    }
]

// myCoding.forEach( (item) => {

//     console.log(item)

// })
/* 
{ name: 'Diksha', rollNo: 4152 }
{ name: 'Vishal', rollNo: 4152 }
{ name: 'Sarisha', rollNo: 4152 }*/

// myCoding.forEach( (item) => {

//     console.log(item.name)

// })
/* 
Diksha
Vishal
Sarisha
*/

// ************** Do forEach "return" values???? :
let myNums=[1,2,3,4,5,6,7,8,9,10]
let result= myNums.forEach( (num) => {
    return num;
})

// console.log(result) //undefined

// NOTE: forEach loop does not return any value. 
// => so if we instead of printing the items, we need to return that items in order to perform some operation , we cant use forEach loop, we neend to use "filter"
// => Filter can return values of any array


let result2= myNums.filter( (num) => {
    return num;
})
// console.log(result2)
/* 
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
  */

// NOTE: 
// => when we want to "print" values , we use "forEach" loop on arrays
// => when we want to "return" values , we use "filter" on arrays
let result3= myNums.filter( (num) => {
    return num >4
})
// console.log(result3) //[ 5, 6, 7, 8, 9, 10 ]
// IMPORTANT NOTE: 
// =>in arrow funcrions , we can use use ( ) for call back, and () or {} for function ddefinition or body
// => for function body, if () is used, it does implicit return, means we dont need to return values by writing return keyword..values are return implicitly
// => IS USING {} ,then return keyword is required to return thre vaues


// or if dont want to use filter for array, and want to use forEach , then we do like this

let anotherArray=[]
myNums.forEach( (num)=> {
    if (num > 4){
        return anotherArray.push(num)
    }
})
// console.log(anotherArray) //[ 5, 6, 7, 8, 9, 10 ]


// eg: 
let fruit=[
    {name: "Apple", color: "red", taste: "sour"},
    {name: "Banana", color: "yellow", taste:"sweet"},
    {name:"Mango", color: "yellow", taste: "sweet"}
]
// *******using forEach : it will not return values
// const getFruit= fruit.forEach( (item) => item.taste ==="sweet")
// console.log(getFruit) //undefined

// ****** using fiter : it will return values
// const getFruit= fruit.filter( (item) => item.taste ==="sweet")
// console.log(getFruit)
/* 
[
  { name: 'Banana', color: 'yellow', taste: 'sweet' },
  { name: 'Mango', color: 'yellow', taste: 'sweet' }
]
*/

// *******another way
// const getFruit= fruit.forEach( (item) =>{
//     if (item.taste ==="sweet")
//         return item
// })
// console.log(getFruit) //undefined


// ****another try
const newArr=[]
//  fruit.forEach( (item) =>{
//         if (item.taste ==="sweet")
//             return newArr.push(item)
//     })

    // console.log(newArr)
    /* [
  { name: 'Banana', color: 'yellow', taste: 'sweet' },
  { name: 'Mango', color: 'yellow', taste: 'sweet' }
]*/



//********** map (): that we used in the react */

let marks=[1,2,3,4,5,6,7,8]

let result1 = marks.map((item) => {
    return item +1
})
// console.log(result1)
/* 

[
  2, 3, 4, 5,
  6, 7, 8, 9
]
  */


// on arrayas , we can use for..in, for..of,,forEach loop, filter(), map()
//if in arraow function, if sscope is opened , then use rertun keyword

//**************** chaining: using multiple map() anf filter on a sinle array to perform multiple operations */

let result4 = marks
                .map( (item) => item * 10)
                .map( (item) => item +1)
                .filter( (item ) => item >= 40)

                 //console.log(result4)  //[ 41, 51, 61, 71, 81 ]
            

// reduce() method
//NOTE: => when initialValue is given by user, then avluae of accumulator for first time is = initialValue and currentvalue stsrts from array[0]
//=> if initailValue is not given by user , then accumulator= array[0] and currentValue starts from array[1]



let arr1=[1,2,3,4]
//********when initialValue is given by user */
//let initialValue=1;
//let result5= arr1.reduce( (accumulator, currentValue) =>accumulator + currentValue,initialValue,)

//console.log(result5) //11

//******when initailValue is not given by user */
let result6= arr1.reduce( (accumulator,currentValue) => accumulator+ currentValue
)

//console.log(result6) //10

//How reduce() works without an initial value


const arr2=[1,2,3,4,5]

function reducer(accumulator, currentValue,indexee){
    let result=accumulator+currentValue;
    console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}, index:${indexee}, result:${result}`
       
    );
    return result;
}

//arr2.reduce(reducer)

/* 
accumulator: 1, currentValue: 2, index:1, result:3
accumulator: 3, currentValue: 3, index:2, result:6
accumulator: 6, currentValue: 4, index:3, result:10
accumulator: 10, currentValue: 5, index:4, result:15
*/


// eg: Cart billing  sum
  let bill=[1,2,3,4] 
//   let totalBill= bill.reduce( (accumulator, currentValue, index) => {
//       let printBill=accumulator +currentValue;
//       console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, printBill: ${printBill}`)
//       return printBill;
// })

//   console.log ( totalBill)
/*
accumulator: 1, currentValue: 2, index: 1, printBill: 3
accumulator: 3, currentValue: 3, index: 2, printBill: 6
accumulator: 6, currentValue: 4, index: 3, printBill: 10
10
*/

// NOTE: intead of {} scope, we can aso use implcit scope () in which we dont need to write return
// => we can do the same task in for..of,   or other normal loops 

// eg: array of objects
let shoppingCart = [
    {course: "js course",
        price: 499
    },
    {course: "java course",
        price: 599
    },
    {course: "py course",
        price: 399
    },
    {course: "react course",
        price: 1499
    },
]

let totalBill= shoppingCart.reduce((accumulator, item) => (accumulator + item.price), 0);
// console.log(totalBill) //2996