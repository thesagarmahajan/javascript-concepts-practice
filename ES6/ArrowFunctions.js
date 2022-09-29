let myfunc = function(){

}

function oldfunction(){

}


// No need to use return keyword to return a value
let arrowfunc = ()=>0

let arrowfunc2 = ()=>{

}

let arr = [1,2,3,4,5,6,7,8,9,10]
// In case of only one parameter no need to use parenthesis ()
// And in case of only one line in function body no need to use curly brackets {} either.  
arr.forEach(num=>num%2 ? console.log(num) : console.log())

/* 
Why arrow functions?
- It's much shorter
- Flexible syntax
*/