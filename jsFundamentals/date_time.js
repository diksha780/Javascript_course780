// let date=console.log(Date()) //sting type

// console.log(Date.Temporal.Now.instant())
// let mydate= new Date() //object type
// console.log(mydate)
// console.log(typeof mydate) //object



// *******Different methods of date representation with different formats

//**************conevrting adte into string
// console.log(mydate.toString()) //Sat Jul 27 2024 04:57:02 GMT+0000 (Coordinated Universal Time)


// ***********toDateString()
// console.log(mydate.toDateString()) //Sat Jul 27 2024

// **************toLocaleString()
// console.log(mydate.toLocaleString()) //    7/27/2024, 4:58:19 AM

// ***************toJSON()
// console.log(mydate.toJSON()) //2024-07-27T04:59:12.145Z  //similar to Date() => object type


//************************* */ create any date
// let myCreatedDate = new Date(2023, 1, 16)  //   1/16/2023, 12:00:00 AM   // yy-mm--dd : not prefered format in INdia
// let myCreatedDate = new Date(16,0,2023) //wrong format
// console.log(myCreatedDate.toLocaleString())   //   2/16/2023, 12:00:00 AM //mm-dd-yy

// ******************* prefered method in INDIA
// let myCreatedDate = new Date("01-16-2024") //mm-dd-yy
// console.log(myCreatedDate.toLocaleString()) //1/16/2024, 12:00:00 AM

// ******************to create timestamaps : now()
let myTimeStamp =  Date.now()
// let output1 = console.log(myTimeStamp) //1722068929148 : time in milliseconsd from Jan 1, 1970

// **************to find timestamps from a specific date :  getTime()

// let output2 = myCreatedDate.getTime() //1705363200000 time in ms from jav 1 1920
// console.log(output2)

// ********************to find time in seconds instaed of millisec
// console.log(myTimeStamp/1000) //gives values in seconds

// *************to find integer value instead of decimal value

// console.log(Math.floor(myTimeStamp/1000))
// console.log(Math.round(myTimeStamp/1000)) 

// another eg

// let time=Date.now()
// console.log(Math.round(time/1000))

// ******to exract only month/ date, day, year, time in hrs , minutes, seconds from a date/time string
let time=Date.now()
// console.log(time) //1722071391723
let date=new Date();
console.log(date.toLocaleString())  //7/27/2024, 9:09:51 AM
// console.log(date.getDate()) //27
// console.log(date.getDay())  //6 mon, tes, wed.....
// console.log(date.getFullYear())  //2024
// console.log(date.getHours())  //9
// console.log(date.getMinutes())  //12
//************ */ console.log(date.getMonth())  //6 ??why 6
//************ */ answer: bcz in js months start from 0 (january) and 6 means july
//  for easy user underatanding, add 1 like following
// console.log(date.getMonth()+1)
// console.log(date.getTime())  //6 1722071759285







