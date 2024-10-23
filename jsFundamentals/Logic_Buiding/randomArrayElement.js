//eg 1:random Array Element

let arr=["Diksha", "Vishal", "Sarisha", "Ivaan"]
let arrLength= arr.length
// console.log(arrLength) //4
let randomNum = Math.round(Math.random() * 10)// if multiply with 100 also, same result
// console.log(randomNum)//35
let randomElement = randomNum % arrLength //so that number is within the array range
// console.log (randomElement)//3
// console.log (arr[randomElement])//Ivaan

//********* EG 2: find rray elements sum using reduce() */
// let arr2=[1,2,3,4]
let arr2=[8,8,8,8,8,8,8,8,8,8]
let initialValue=0;
let sum= arr2.reduce((accumulator, currentValue) => {
    let result= accumulator + currentValue, initialValue ;
    return result;
})
// console.log (sum) //10
// console.log (sum) //80

// ****** eg 3: Capitalize first letter of all words in a string
let str1= "diksha rani"
// let str2= "kbhi jo badal barse mai dekhu tuje aankhe bharke tu lage muje pehli barish ki duya"


const resultStr = (input) => {
let r1= input.split(" ")
console.log(r1) //[ 'diksha', 'rani' ];
let r2= r1.map((item) => (item[0].toUpperCase() + item.slice(1)));
console.log (r2) //[ 'Diksha', 'Rani' ]
let r3 = r2.join(" ")
console.log (r3) //Diksha Rani
}
// resultStr(str1);
// resultStr(str2); //Kbhi Jo Badal Barse Mai Dekhu Tuje Aankhe Bharke Tu Lage Muje Pehli Barish Ki Duya

// **********************
// eg 4  Insert something in the middle of an array

// let arr3=[1,2,4,5]
let arr4=[1,2,4,5]
let str="Diksha"

let addElement = (input, str) => {
let arr3Length= input.length 
console.log (arr3Length)//5
let arrHalf = Math.floor(arr3Length/2 )
console.log(arrHalf) //2
let newArr= [...input.slice(0,arrHalf) ,str , ...input.slice(arrHalf)]

console.log(newArr) //[ 1, 2, 'Diksha', 3, 4, 5 ]
}

// addElement(arr3, str)
addElement(arr4, str) // [ 1, 2, 'Diksha', 4, 5 ]
