// let balance = new Number(100)
// console.log(balance)
// console.log( typeof balance)

// ********************Math functions on numbers

// **************toString()
// let balance = 100  // |^number is declared above with object keyword new 
// let strBalance=balance.toString()
// console.log(balance.toString())
// console.log(strBalance)
// console.log(typeof balance)
// console.log(typeof strBalance)

// console.log(balance.toString().length)//return number of charcters in string
// console.log(strBalance.length)
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
// console.log(balance.toString.concat(100))

// _________________NOTES ON NUMBER AND STRING FUNCTION
/*  => number declared with new keyword is of object type
    =>when we apply math function like toString() on this object type number , its type is string
    =>when we apply abobe same operations on number declared normally, its type is number, rest all things are same as with object type number
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

let num4=179.678
let num5=num4.toPrecision(2)
let num7=num4.toPrecision(3)
let num8=num4.toPrecision(4)
let num9=num4.toPrecision(5)

// console.log(num5)
// console.log(num7)
// console.log(num8)
// console.log(num9)

/* 
1.8e+2
180
179.7
179.68*/
