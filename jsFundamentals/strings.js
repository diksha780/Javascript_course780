let name1="Diksha Rani"
// *****************at()
///console.log(name1.at(2)) //k //at index2

// ************slice()
//console.log(name1.slice(2,8)) //ksha R //starting from 2 , 8TH index doesnt included and eturn the sliced sring
 //console.log(name1.slice(2)) //ksha Rani //one parameter, will slice out rest of the string and return the sliced string
//console.log(name1.slice(-2))// ni  //gives last two characters of string
 //console.log(name1.slice(-4)) // Rani//slice out and give  last four characters of string

//console.log(name1.slice(2,-4)) //ksha  //start from 2nd index and cut last 4  chars or ( start from index 2 till last 4th index)
 //console.log(name1.slice(2,-7)) //ks   //start from 2nd index and cut last 7  chars
// console.log(name1.slice(2,-3))  //start from 2nd index and cut last 3 chars

 //console.log(name1.slice(-6,-3)) //a R // start from  6th char (from last) and cut last 3chars
// console.log(name1.slice(-5,-3)) // start from    5th char (from last) and cut last 3chars
// console.log(name1.slice(-7,-2)) // start from  7th char (from last) and cut last 3chars
// console.log(name1.slice(-8,-3)) // start from  8th char (from last) and cut last 3chars
// console.log(name1.slice(-4,-3))
 //console.log(name1.slice(-8,5)) //sh //start from last 8th char till index 5 from start but 5 index char not included
// console.log(name1.slice(-4,8))//start from last 4th char till index 8 from start but 8 index char not included
// console.log(name1.slice(-9,8))//start from last 9th char till index 8 from start but 8 index char not included
// 




// ************substring()

 //console.log(name1.substring(2,5)); //ksh //similar to slice()..start from 2nd index and 5th index doesn't included
//negative values are treated as 0
// console.log(name1.substring(-8,5));//treated -8 index as 0 till index 5 but 5th index doesnt included



// *********************concat()

let str1="Diksha"
let str2="Rani"
// console.log(str1.concat(" ",str2))

let fname="Vishal"
let lname="Suri"
// console.log(fname.concat(" ", lname))


// **********************trim()
let str3="      Hello     "
//console.log(str3.length) //16
  //console.log(str3) //      Hello     
 //console.log(str3.trim()) //Hello
//console.log(str3.trimStart()) //Hello     .....
 //console.log(str3.trimEnd()) //      Hello

//******************string padding */

// *********padStart()
let str4="Diksha"
let str44="Diksha"
let strpad1= str4.padStart(100, "Vishal")
//console.log(strpad1)
//console.log(str44.padStart(100, "Vishal"))
//VishalVishalVishalVishalVishalVishalVishalVishalVishalVishalVishalVishalVishalVishalVishalVishDiksha

// ***************replaceAll()
 //let repStr1=strpad1.replaceAll("Vishal", "Diksha")//replace all vishal with diksha
  //console.log(repStr1)
//DikshaDikshaDikshaDikshaDikshaDikshaDikshaDikshaDikshaDikshaDikshaDikshaDikshaDikshaDikshaVishDiksha
 

//********************replace() */
 let repStr2= strpad1.replace(/VISHAL/i,"Diksha") // replace only first vishal with diksha with (i flag) insensitive

 //console.log(repStr2)
//DikshaVishalVishalVishalVishalVishalVishalVishalVishalVishalVishalVishalVishalVishalVishalVishDiksha


let repStr3= strpad1.replace(/Vishal/g, "Diksha") //replace all Vishal with Diksha by using (/g flag ) global match
 //console.log(repStr3)
//DikshaDikshaDikshaDikshaDikshaDikshaDikshaDikshaDikshaDikshaDikshaDikshaDikshaDikshaDikshaVishDiksha


// ******************************padEnd
let strpad2= str4.padEnd(100,"Vishal")
 //console.log(strpad2)
 //DikshaVishalVishalVishalVishalVishalVishalVishalVishalVishalVishalVishalVishalVishalVishalVishalVish


let str5=1
let newString= String(str5)
// console.log(typeof newString)
let strpad3= newString.padEnd(100,"0")
//let strpad3= str5.padEnd(100,"0") //error
 //console.log(strpad3)
 //1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

// ******************* string repeat()
let str6= "Practice is the key to success \n"  
let newstr4= str6.repeat(5)
//console.log(newstr4)
/* 
Practice is the key to success 
Practice is the key to success 
Practice is the key to success 
Practice is the key to success 
Practice is the key to success 

*/


// **************************split() => string is converted into array
let str7="apple,banana, orange, mango" // right
let arr1 = str7.split(",") //
// console.log(arr1) //[ 'apple', 'banana', ' orange', ' mango' ]
//console.log(arr1[2])  // orange
//console.log(str6.split(" ")) //[ 'Practice', 'is', 'the', 'key', 'to', 'success', '\n' ]
