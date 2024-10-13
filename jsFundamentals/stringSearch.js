// *************indexOf() ---gives position of first occurence of string

let str1=" Practice is the key to success"
 //console.log(str1.indexOf("key")) //17 // gives the starting index position  where "key" starts(start searching from left to right)

// *************lastIndexOf()
let str2=" it has been a wide range brown dogy has brown fleece"
// console.log(str2.indexOf("brown")) // gives starting index of first given string
 //console.log(str2.lastIndexOf("brown")) //16 //gives starting index of last given string(start desrching from left to right)
// console.log(str2.indexOf("red")) //gives -1 if string not found
// console.log(str2.lastIndexOf("brownyy"))  // gives -1 if string not found


// ************ both above methods accept second parameter as starting position of search

//console.log(str2.indexOf("brown", 10)) //16 //string is searched from index 10 onwards
// console.log(str2.lastIndexOf("brown", 100))  
//console.log(str2.length) //53
// console.log(str2.lastIndexOf("brown"))
//console.log(str2.lastIndexOf("brown", 27)) //26 // in lastIndeOf(), string is searched from beginnig to backward, means from index 0 to 27, and return the arting index of last string
console.log(str2.lastIndexOf("brown", 53)) //411 // in lastIndeOf(), string is searched from backward to beginning, means from index  10 to 53 " " " " "...