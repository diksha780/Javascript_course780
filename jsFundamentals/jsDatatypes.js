// 1. Number
 //let result= console.log(9/0);
// console.log(typeof result) //Infinity
 //console.log(typeof Infinity)  //number
// console.log("diksha"/9); //NaN
//console.log(typeof NaN)//number
//let age=NaN;
//console.log(typeof age) //number
//let name="Diksha"
//console.log(typeof name) //string
 //let range=5n;
 //console.log(typeof range) //bigint
// let isStudent=true;
// console.log(`Diksha is a student : ${isStudent}`)
// console.log(`sum of 2 and 3 is ${2+3}`)

 let balance=null;
 //console.log(typeof balance); //object
//console.log(typeof Math) //object
//  console.log(typeof undefined)
//  console.log(typeof(balance))
//  undefined
 //object

// ************************************************************************************
//*****************************type conversion*****************************************
// let name1="diksha" //string-> converted into number datatype, its type is converted into number and its value is now NaN(Not a Number ) but not a string
// let valueInNumber=Number(name1);
// console.log(typeof name1)// string
// console.log(typeof valueInNumber) // number
// console.log(valueInNumber) // NaN




// let name2=33//when a number is converted into number datatype, its value remains number , unlike string to number data conversion
// let valueInNumber2=Boolean(name2);
// console.log(typeof name2)
// console.log(typeof valueInNumber2)
// console.log(valueInNumber2)

/*
number
boolean
true */

// ______________________into number conversion______________
//33-> 33
//"33abs" -> NaN
// null -> 0
//undefined -> NaN
// boolean : true-> 1 ; false-> 0;


// _______________________into boolean conversion value____________
//1-> true; 0-> false
// ""(empty atring) ->false
//"diksha" -> true
// undefined -> false
// null-> false

//**********************into string conversion ***************************

let num=616
// let string=String(num);
// console.log(string)
// console.log(typeof string)
/* 
616
string*/

// let num2=undefined //undefined
// let string2=String(num2);
// console.log(string2) //undefined
// console.log(typeof string2) //string

// let num3=null//null
// let string3=String(num3);
// console.log(string3) //null
// console.log(typeof string3) //string



//_______NOTES_______________into string conversion values___________________
// number -> string(value is that number)
// undefined -> undefined
// null -> null


// ****************************************************************************************
// ***************************** static and heap memory in js**************************

// primitive datatypes stored in static memory
//call by reference
//copy of original value is refernced

// let name1="diksha"
// let name2=name1;
// console.log(name2) //diksha
// name2="diksha rani"
// console.log(name2) //diksha rani



//***************dynamic datatypes are stored in heap memory 
//call by reference 
// changes made in data are reflected back

let user1={
    usrname:"Diksha",
    rollno:4152

}
// console.log(user1) //{ usrname: 'Diksha', rollno: 4152 }

 //console.log(user1.rollno) //4152

let user2= user1
//  console.log(user2) //{ usrname: 'Diksha', rollno: 4152 }

user2.rollno=4222
// console.log(user2) //{ usrname: 'Diksha', rollno: 4222 }



user2.email="kjm"
// console.log(user2) //{ usrname: 'Diksha', rollno: 4222, email: 'kjm' }

// console.log(user1) //{ usrname: 'Diksha', rollno: 4222, email: 'kjm' }
user1.phn=63783638
// console.log(user1)
// console.log(user2)
/*
{ usrname: 'Diksha', rollno: 4222, email: 'kjm', phn: 63783638 }
{ usrname: 'Diksha', rollno: 4222, email: 'kjm', phn: 63783638 }
  */