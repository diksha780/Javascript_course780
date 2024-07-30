const arr1=[1,2,3,4]  //add numbers in array
// console.log(arr1)
const arr2=["Diksha", "Nangla", 9, 8] // add multiple items  
// console.log(arr2)
arr2[2]= "Vishal" //can add more elements into array
// console.log(arr2)

// arr2= ["Vishal"] // can't change the original content of array



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
console.log(arr3)
arr3.shift()
// console.log(arr3) 
/*[
    1, 2, 3, 4,
    5, 6, 7
  ]
    */
  arr3.shift()
  arr3.shift()
  console.log(arr3.shift()) // length of removed elements from array using shift() or number of elements that have been removed
   console.log(arr3)



