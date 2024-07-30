const arr1=[1,2,3,4]  //add numbers in array
// console.log(arr1)
const arr2=["Diksha", "Nangla", 9, 8] // add multiple items  
// console.log(arr2)
arr2[2]= "Vishal" //can add more elements into array
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
 
// ****** sliec()
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
console.log(arr3)  //[ 4, 5, 6, 7 ]
console.log(arr4) //[ 'Diksha', 'Vishal', 'Sarisha' ]


console.log(arr3.push(arr4)) //5 returns length of the combined array
 //array arr4 is merged into arr1 as its element 
console.log(arr3)  //[ 4, 5, 6, 7, [ 'Diksha', 'Vishal', 'Sarisha' ] ]
// console.log(arr3[4]) //[ 'Diksha', 'Vishal', 'Sarisha' ]
// console.log(arr3[4][1]) //Vishal

// *******************concat()


let arr7=[1,2,3]
let arr8= ["Diksha", "Vishal"]
 arr7.concat(arr8)

