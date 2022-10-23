// async function asyncOp()
// {
//     fetch("https://api.rapidmock.com/mocks/89mEw", {headers:{"x-rapidmock-delay":"5000"}}).then(res=>res.json()).then(data=>{console.log(data)}).catch(err=>{console.log(err)})
// }

// asyncOp()

async function someAsync(){
    // await fetch("https://api.rapidmock.com/mocks/89mEw", {headers:{"x-rapidmock-delay":"5000"}}).then(res=>res.json()).then(data=>{console.log(data)}).catch(err=>{console.log(err)})

    let p1 = new Promise((resolve, reject)=>setTimeout(()=>{console.log("Timeout Complete 1")}, 2000))
    
    await p1.then(val=>console.log(val))
    console.log("Hi")
    setTimeout(()=>{console.log("Timeout Complete 2")}, 1000)
}

someAsync()

// console.log(getData())
// getData().then((res)=>{
//     console.log(res)
// })