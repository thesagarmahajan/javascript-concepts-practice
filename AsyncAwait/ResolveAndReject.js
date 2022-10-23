async function someFun(){
    let val = false
    if(val)
    {
        return "Resolved"
    }
    else{
        return Promise.reject("Rejected")
    }
}

someFun().then(val=>console.log(val)).catch(val=>console.log(val))