function isEmail(str,someCallback){
    if(true){
        someCallback(1)
    }
    else{
        someCallback(0)
    }
}

isEmail("sagar@gmail.com", (val)=>{
    if(val!=1){
        // Disable the submit button
    }
})



