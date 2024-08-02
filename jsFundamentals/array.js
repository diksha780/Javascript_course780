const arr1=[1,2,3,4]  //add numbers in array
// console.log(arr1)
const arr2=["Diksha", "Nangla", 9, 8] // add multiple items  
// console.log(arr2)
arr2[2]= "Vishal" //can add more elements into array(initial values at that index will be overridden)
// console.log(arr2)

// arr2= ["Vishal"] // can't change the original content of array

// ************** type of array is object

// console.log(typeof arr1) //object



// **************array methods/ properties
// *********push()
arr1.push("Diksha") //add elements into array
// console.log(arr1)

// *****pop() // used empty, remove element at last index of array
arr2.pop()
// console.log(arr2)

arr2.pop()
// console.log(arr2)

//****   unshift(): insert an element at begining of array

let arr3=[1,2,3,4,5,6,7]
// console.log(arr3.unshift(2)) //8 new length of array
// console.log(arr3) 
/* [
    2, 1, 2, 3,
    4, 5, 6, 7
  ]*/

// ********shift() : it removes the element at beginning  from array
// console.log(arr3)
arr3.shift()
// console.log(arr3) 
/*[
    1, 2, 3, 4,
    5, 6, 7
  ]
    */
  arr3.shift()
  arr3.shift()
  // console.log(arr3.shift()) // length of removed elements from array using shift() or number of elements that have been removed
  //  console.log(arr3)

// .*********array methods



// ****************.include() : tells whether the given element is present in the array or not 
// gives boolean value as result

// console.log(arr3.includes(6)) //true
// console.log(arr3.includes(9)) //false

// *********indexOf() : gives index of the gievn element in a array
let arr4=["Diksha", "Vishal","Sarisha"]
// console.log(arr4.indexOf("Diksha")) //0
// console.log(arr4.indexOf("Vishal")) //1


// *************join() : method that combines an array into a string 
// type of array from an object is changed to string
let newarr= arr4.join()
// console.log(arr4) //[ 'Diksha', 'Vishal', 'Sarisha' ]
// console.log(newarr) //Diksha,Vishal,Sarisha
// console.log(typeof arr4) //object
// console.log(typeof newarr)  //string



// **************** slice() and splice() method
 
// ****** slice()
let arr5 =[1,2,3,4,5,6,7,8]
// console.log( "a :", arr5) 
/* a : [
  1, 2, 3, 4,
  5, 6, 7, 8
] */

// console.log("b: ", arr5.slice(1,4)) // slice the array elements from the given index 1 but ignore the last index 4
/* b:  [ 2, 3, 4 ] */

//  console.log(arr5) 
/*   it does not affect the original array 
 [
  1, 2, 3, 4,
  5, 6, 7, 8
]
*/

// ***********splice method

let arr6=[1,2,3,4,5,6,7,8,9]
// console.log("a: " ,arr6)
/* 
[
  1, 2, 3, 4,
  5, 6, 7, 8
]
*/

// console.log("b", arr6.splice(1,4)) 
/* b [ 2, 3, 4, 5 ]
*/
// it slice out/ print the elements from index 1 to 4( yes last index is also included in the sliced elements)
// console.log("c", arr6) 
/*
c [ 1, 6, 7, 8, 9 ] */

// it change the concent of original array, it removes the sliced elements from index 1 to 4 from the origin array also


// ******************** to combine multiple arrays into one array

// ***********push ()
// console.log(arr3)  //[ 4, 5, 6, 7 ]
// console.log(arr4) //[ 'Diksha', 'Vishal', 'Sarisha' ]
let arr9= ["Ivaan", "Sarisha"]
arr3.push(arr4, arr9)
// console.log(arr3) // (here arr4 is pushed into arr3)

// console.log(arr3.push(arr4)) //5 returns length of the combined array
 //array arr4 is merged into arr3 as its element 
// console.log(arr3)  //[ 4, 5, 6, 7, [ 'Diksha', 'Vishal', 'Sarisha' ] ]
// console.log(arr3[4]) //[ 'Diksha', 'Vishal', 'Sarisha' ]
// console.log(arr3[4][1]) //Vishal


// *******************concat()
let arr7=[1,2,3]
let arr8= ["Diksha", "Vishal"]
// let arr9= ["Ivaan", "Sarisha"]

//  arr7.concat(arr8) // we need to store combined array into new variable yo see thr combined array output
//  console.log(arr7) //[ 1, 2, 3 ]
//  console.log(arr8) //[ 'Diksha', 'Vishal' ]
  let newarr1= arr7.concat(arr8,)
  // console.log(newarr1) //  [ 1, 2, 3, 'Diksha', 'Vishal' ]


  // let newarr3= arr7.concat(arr8,arr9)
  // console.log(newarr3)

  // 


  // ****************** spread method
  // console.log(arr7)
  // console.log(arr8)
  /* 
  [ 1, 2, 3 ]
[ 'Diksha', 'Vishal' ]
 */
 let newarr2= [...arr7, ...arr8]
//  console.log(newarr2) //[ 1, 2, 3, 'Diksha', 'Vishal' ]

 
/* _______NOTE:  
=> we can combine multiple arrays using cancat, spread and push method

=> difference between push() and concat()
--push() add oher array as an element of array //[ 4, 5, 6, 7, [ 'Diksha', 'Vishal', 'Sarisha' ] ]
--concate add elements of other array directly  // [ 1, 2, 3, 'Diksha', 'Vishal' ]
*/ 


// ********************** flat() : used to get all the embedded arrays into array as a new array
// flat() method parameter is the depth to which we wand to get the embedded arrays
let arr10= [1,2,[3,4],[5,4,4,[6,7]]]
let arr11= arr10.flat(Infinity)
// console.log(arr11)
 /*

[
  1, 2, 3, 4, 5,
  4, 4, 6, 7
]
*/


// used for data scraping
// ******************isArray() : tells whwther an element is an array or not
// returns boolean value
let str1="Diksha"
// console.log(Array.isArray(str1)) ///false
// console.log(Array.isArray(arr10));  //true


// **************from() : used to convert any data format (like string, object) into array format
let num =34253
// console.log(Array.from(str1)) //[ 'D', 'i', 'k', 's', 'h', 'a' ]
// console.log(Array.from(num))  //[]
// console.log(Array.from(String(num)))  //by converting  number into String data type, we can use from () on numbers
// console.log(typeof  num)
let obj1={
  "name": "Diksha"
}

// console.log(Array.from(obj1)); //[] we have to define that we want to conver key/ values of the object into arry

// **********************of()
let num2=6
let num3=16
let arr12 = Array.of(num2,num3)

// console.log(arr12)
// *******************************************************************************************

// *********************More About Arrays

/* *************difference between array and object:
=>object is the collection of keyed elements where we cant insert more properties in between the existing elements
=> in obects , you cant manage the order of the elements
=> arrays are the collection of ordered elements, in which we an access elements by their order
  */


// arrays is the collection of multiple data items i.e.
let arr13= ["Diksha", 1,3, {"name":"Vishal"}, function (){console.log("Hi");

}]


// console.log(arr13[3].name) //access object key  //Vishal
// arr13[4]() //Hi
// console.log(arr13[4]()) //access function  //Hi 
                                            // undefined 


// *********************GET LAST ELEMENT OF THE ARRAYS
/*________ NOTES 
=> last element can't be get by using negative index ie. arr[-1]
=> we can explicitly access last element of array by 2 mothods: arr[arr.length-1] or using at()
*/


// **********length-1
let arr14=[1,2,3,4,5,6,7,] //trailing comma
// console.log(arr14.length); //7
// console.log(arr14[arr14.length-1]) //7



// ************at()
// => at() also accepts negative index to access last element of array

// console.log(arr14.at(-1)); //7
// console.log(arr14.at(-3)); //5
// console.log(arr14.at(1)); //2

// ************************** arrays loops

// let arr15=["Diksha", 1,2,{"address": "Jadla",}, function greet() {console.log("hi");}]
// for (let i=0;i<arr15.length;i++){
//   // console.log(arr15[i])
// }

/*Diksha
1
2
{ address: 'Jadla' }
[Function: greet] */
// ************** for...of loop

// for(let i of arr15){
//   // console.log(i)
// }
/* Diksha
1
2
{ address: 'Jadla' }
[Function: greet]*/

// _________NOTES on for..in
/*  => as arrays are objects, we can also use for..in method of looping, but there are array-like objects in javacsript that have properties like length and index properties
just like arrays do, but also have other properties too which arrays dont have
=> for..in is mainly for regular objects , not of arrays*/

// ********** EXCERCISE 
// ***** ques 1
// let styles=["Jazz","Blues"]
// styles.push("Rock-n-Roll")
// console.log(styles)
// let mid=(Math.floor(styles.length-1))/2
// console.log(mid)
// styles[mid]="Classics"
// console.log(styles)
// console.log(styles.shift())
// console.log(styles)
// styles.unshift("Rap","Reggae")
// console.log(styles)

/* [ 'Jazz', 'Blues', 'Rock-n-Roll' ]
1
[ 'Jazz', 'Classics', 'Rock-n-Roll' ]
Jazz
[ 'Classics', 'Rock-n-Roll' ]
[ 'Rap', 'Reggae', 'Classics', 'Rock-n-Roll' ]*/


// *******ques 2

// let arr = ["a", "b"]; 

// arr.push(function() {
//   console.log( this ); //
// })

// arr[2](); //[ 'a', 'b', [Function (anonymous)] ]

/* 
The call arr[2]() is syntactically the good old obj[method](), in the role of obj we have arr, and in the role of method we have 2.

So we have a call of the function arr[2] as an object method. Naturally, it receives this referencing the object arr and outputs the array:
*/

const input =process.argv[2];
if(input){
console.log(`your name is ${input}`)
}
else {
  console.log('No input provided.');
}