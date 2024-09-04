// *******Rest/spread operator
function cart(val1, valu2,...order){
    console.log(order)
} 
// cart(200,400,600) //[ 200, 400, 600 ]
// cart(200,330,800,9000) //[ 800, 9000 ]

// ******** scope inside a scope( same for functions and if )

function one(){
    let name="Diksha"
    function two(){
        console.log(name) // it can access the name variable as for two(), it acts as global variable
        let program="btech" // program cannt be accessed aot of two()
    }
two()
    // console.log(program)
  
}

one()