//  let date=console.log(Date()) //sting type
//Mon Oct 14 2024 06:23:15 GMT+0000 (Coordinated Universal Time)

// let date= Date() //gives string type
// console.log(date) //Mon Oct 14 2024 06:24:27 GMT+0000 (Coordinated Universal Time)


// console.log(Date.Temporal.Now.instant()) //eror

let mydate= new Date() //object type 
// console.log(mydate) //2024-10-14T06:26:27.448Z
// console.log(typeof mydate) //object



// *******Different methods of date representation with different formats

//**************conevrting date into string
// console.log(mydate.toString()) //Sat Jul 27 2024 04:57:02 GMT+0000 (Coordinated Universal Time)


// ***********toDateString() : onnly give sthe date and ignore the time
// console.log(mydate.toDateString()) //Sat Jul 27 2024

// **************toLocaleString()
// console.log(mydate.toLocaleString()) //    7/27/2024, 4:58:19 AM

// ***************toJSON()
// console.log(mydate.toJSON()) //2024-07-27T04:59:12.145Z  //similar to Date() => object type


//************************* */ create any date
// let myCreatedDate = new Date(2023, 1, 16)     // yy-mm--dd : not prefered format in INdia //feb: 1
// console.log(myCreatedDate)   //2023-02-16T00:00:00.000Z //feb : 2
// let myCreatedDate = new Date(16,0,2023) //wrong format // jan :0
// console.log(myCreatedDate.toLocaleString())   //   2/16/2023, 12:00:00 AM //mm-dd-yy //fb : 2

// ******************* prefered method in INDIA
let myCreatedDate = new Date("01-16-2024") //mm-dd-yy //jan: 1
// console.log(myCreatedDate) //2024-01-16T00:00:00.000Z //jan : 1
// console.log(myCreatedDate.toLocaleString()) //1/16/2024, 12:00:00 AM
// NOTE: in US format: months are in n-1 order
// in india format, months are in natural order

// ******************to create timestamaps : now()
let myTimeStamp =  Date.now()
// let output1 = console.log(myTimeStamp) //1722068929148 : time in milliseconsd from Jan 1, 1970

// **************to find timestamps from a specific date :  getTime()

let output2 = myCreatedDate.getTime() //1705363200000 time in ms from  jan 1, 2024
// console.log(output2) //1705363200000
// 
// ********************to find time in seconds instaed of millisec
// console.log(myTimeStamp/1000)  // 1728888530.384//gives values in seconds

// *************to find integer value instead of decimal value
 
// console.log(Math.floor(myTimeStamp/1000)) //1728888573
// console.log(Math.round(myTimeStamp/1000))  //1728888594

// another eg

// let time=Date.now() //gives time stamp from jan 1 1970
// console.log(Math.round(time/1000))

// ******to exract only month/ date, day, year, time in hrs , minutes, seconds from a date/time string
// let time=Date.now()
// console.log(time) //1722071391723
// let date=new Date();
// console.log(date.toLocaleString())  //7/27/2024, 9:09:51 AM
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


// ******************** javascript.info

// let date= new Date(0); //gives date from jan 1, 1970
// console.log(date)  //1970-01-01T00:00:00.000Z
let date1= new Date(); //gives current date
// console.log(date1) //2024-07-28T08:25:47.738Z

let date2= new Date(-24*3600*1000) //negative timestamp gives date before jan 1 1970
// console.log(date2) //1969-12-31T00:00:00.000Z


//****************** getTimezoneOffset()
// console.log(date1.getTimezoneOffset()) 


