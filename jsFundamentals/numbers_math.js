//quick notes
/*toString(),,toFixed(),,toPrecision(),,toLocaleString(),,
Math*/









// let balance = new Number(100) //declare a nummber with new keyword as an object
// console.log(balance)
// console.log( typeof balance)
// [Number: 100]
// object

// ********************Math functions on numbers

// **************toString()
let balance = 100  // |^number is declared above with object keyword "new" 
let strBalance=balance.toString() 
// console.log(balance.toString()) //100
// console.log(strBalance) //100
// console.log(typeof balance) //number
// console.log(typeof strBalance) //string

// console.log(balance.toString().length) //3//return number of charcters in string
// console.log(strBalance.length) //3
// console.log(balance.length)// gives undefined,,,, as length function is only applicable on strings but not on numbers

/* ________OUTPUT____
100
100
object
string
3
3
undefined

*/
// console.log(balance.toString().concat(100)) //100100

// _________________NOTES ON NUMBER AND STRING FUNCTION
/*  => number declared with new keyword is of object type
    =>when we apply math function like toString() on this object type number , its type is string
    =>when we apply above same operations on number declared normally, its type is number, rest all things are same as with object type number
 */

// ********************toFixed()

// let num1=1000
// let num2=num1.toFixed(2)//number of decimal value after decimal
// let num3=num1.toFixed(3)

// console.log(num1)
// console.log(num2)
// console.log(num3)


/*____________OUTPUT_______
1000
1000.00
1000.000

*/


// *******************toPrecision()=> gives precise and exact value
// let num1= 79.373
// let num2=num1.toPrecision(2)
// let num3=num1.toPrecision(3)
// console.log(num2)
// console.log(num3)
/*_________-OUTPUT______
79
79.4
*/

// let num4=179.678
// let num5=num4.toPrecision(2) //gives answer in exponential
// let num7=num4.toPrecision(3)
// let num8=num4.toPrecision(4)
// let num9=num4.toPrecision(5)

// console.log(num5)
// console.log(num7)
// console.log(num8)
// console.log(num9)

/* 
1.8e+2
180
179.7
179.68*/

// ********************************* toLocaleString()*************
// let num1=1000000000
// let num2=num1.toLocaleString();
// console.log(num2) // giving me value acc to US number system

// let num3=num1.toLocaleString('en-IN') //Indian number system
// console.log(num3)
/*__________output
1,000,000,000
1,00,00,00,000
*/


// *********************************MATH
// console.log(Math) //Math is a library in javascript
// ______output
// Object [Math] {}

// *************************** abs()
// let num1=-4
// console.log(Math.abs(num1)) //  4  gives positive value

// ************round()
// let num2
// console.log(Math.round(num2))  // 168  roundoff values

// **************ceil() and floor()

// let num=4.1
// let num2=4.9
// console.log(Math.ceil(num)) // 5 gives upper values always i.e. 5 (evenif  value is just greater than 4)  )
// console.log(Math.floor(num2)) // 4 gives lower value i.e. 4 evenif value is too closer to 5


// *********************sqrt()
// let num=4
// console.log(Math.sqrt(num)) // 2 gives square rrot



// ***************pow() => gives power
// **************************random()
const min=10
const max=20
// 

