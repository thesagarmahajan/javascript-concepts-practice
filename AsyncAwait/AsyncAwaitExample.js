

async function asyncOp()
{
    await fetch("https://api.rapidmock.com/mocks/89mEw", {headers:{"x-rapidmock-delay":"2000"}}).then(res=>res.json()).then(data=>console.log(data))
    await fetch("https://api.rapidmock.com/mocks/89mEw", {headers:{"x-rapidmock-delay":"5000"}}).then(res=>res.json()).then(data=>console.log(data))
}

asyncOp()
// console.log(getData())
// getData().then((res)=>{
//     console.log(res)
// })