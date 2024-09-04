// *******this keyword: it give reference to the current context
// a function expression assign as property of the object is actually called the "method " of the object
/* 
When we write our code using objects to represent entities, that’s called object-oriented programming, in short: “OOP”.

OOP is a big thing, an interesting science of its own. How to choose the right entities? How to organize the interaction between them? That’s architecture, and there are great books on that topic, like “Design Patterns: Elements of Reusable Object-Oriented Software” by E. Gamma, R. Helm, R. Johnson, J. Vissides or “Object-Oriented Analysis and Design with Applications” by G. Booch, and more.
*/
const student={
    name:"Diksha",
    rollNo:4152,
    message:function (){
        let name="Vishal";
        console.log(`welcome ${student.name}`)
        console.log(`welcome ${this.name}`)
        /*
         welcome Diksha 
        welcome Diksha*/

console.log(`welcome ${name}`)
/*
welcome Diksha
welcome Diksha
welcome Vishal
 */
        console.log(this)
        // { name: 'Diksha', rollNo: 4152, message: [Function: message] }
    }
}
// student.message() 
/* 
welcome Diksha
welcome Diksha
welcome Vishal
{ name: 'Diksha', rollNo: 4152, message: [Function: message] }
 */


// ********** Method shorthand
// we can neglect function 
// this method is more prefferable

let userData={
    name: "Diksha",
    message(){
        console.log(`Welecome ${userData.name}`)
    }
}
userData.message() //Welecome Diksha