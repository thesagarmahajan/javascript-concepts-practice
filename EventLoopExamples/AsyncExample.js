console.log("Start")

// Proof of: There is a Callback Queue in between WebApi Environment
setTimeout(function(){
    console.log("After some time")
}, 0)

console.log("End")