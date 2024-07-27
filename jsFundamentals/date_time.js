// let date=console.log(Date()) //sting type

// console.log(Date.Temporal.Now.instant())
// let mydate= new Date()
// console.log(mydate)
// console.log(typeof mydate)



// *******Different methods of date representation with different formats

//**************conevrting adte into string
// console.log(mydate.toString()) //Sat Jul 27 2024 04:57:02 GMT+0000 (Coordinated Universal Time)


// ***********toDateString()
// console.log(mydate.toDateString()) //Sat Jul 27 2024

// **************toLocaleString()
// console.log(mydate.toLocaleString()) //7/27/2024, 4:58:19 AM

// ***************toJSON()
// console.log(mydate.toJSON()) //2024-07-27T04:59:12.145Z  //similar to Date() => object type


// create any date
let myCreatedDate = new Date(2023, 0, 16)
// let myCreatedDate = new Date(16,0,2023) //wrong format
console.log(myCreatedDate.toLocaleString())