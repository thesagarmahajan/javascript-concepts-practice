function setTimeOutFunc(timeout){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Timeout Complete"+timeout)
            resolve("Hi"+timeout)
        }, timeout);
    })
}

async function asyncProcesses(){
    
    await setTimeOutFunc(3000).then(res=>console.log(res))
    await setTimeOutFunc(2000).then(res=>console.log(res))
    
    
    // await fetch("https://reqres.in/api/users?page=2").then(res=>res.json()).then(data=>console.log(data))
    // await fetch("https://reqres.in/api/users?page=1").then(res=>res.json()).then(data=>console.log(data))
}

asyncProcesses()
