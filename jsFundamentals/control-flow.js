let marks=5
// switch(marks){
//     case 0 : console.log("false")
//     break;
//     case 1: console.log ("true")
//     break;
//     default:
//         console.log ("Invalid value")
// }
// Invalid value

// NOTE: 
// falsy values: 0, -0, false, BigInt 0n, null, undefined, NaN, ""
// truthy values: "0" , "-0", " ", "false" , []//empty array, {}//empty object, function(){}h


// to chec whether object is empyt or not
let studentInfo={}
keyArray=Object.keys(studentInfo)
if(keyArray.length === 0){

    console.log("Object is empty")


}