// ********* object de-structure
// =>we can directly use the object keys after de-structuring the object
// ==>dont need to use object reference
const obj1={
    id:1,
    name:"diksha",
}
// console.log(obj1) //{ id: 1, name: 'diksha' }
// object de-structure: it is used in react in place of props.key_name
const {name}=obj1
// console.log(name) //diksha
// we can also give new shorter name to the key
const {name:n}=obj1
// console.log(n) //diksha



// ****JSON API INTRODUCTION
// similar to object
// dont have any name
// keys must be string
// values can or cannot be string