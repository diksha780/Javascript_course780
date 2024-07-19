// *************indexOf() ---gives position of first occurence of string

let str1=" Practice is the key to success"
// console.log(str1.indexOf("key")) // gives the starting index position  where "key" starts

// *************lastIndexOf()
let str2=" brown dogy has brown fleece"
// console.log(str2.indexOf("brown")) // gives starting index of first given string
// console.log(str2.lastIndexOf("brown")) //gives starting index of last given string
// console.log(str2.indexOf("red")) //gives -1 if string not found
// console.log(str2.lastIndexOf("brownyy"))  // gives -1 if string not found


// ************ both above methods accept second parameter as starting position of search

// console.log(str2.indexOf("brown", 10))  //string is searched from index 10 onwards
// console.log(str2.lastIndexOf("brown", 100))  
// console.log(str2.length)
// console.log(str2.lastIndexOf("brown"))
// console.log(str2.lastIndexOf("brown", 27)) // in lastIndeOf(), string is searched from backward to beginning, means from index 27 to 0