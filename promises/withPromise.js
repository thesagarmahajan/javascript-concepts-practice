var p1 = new Promise((resolve, reject)=>{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        console.log(this.readyState)
        if (this.readyState == 4 && (this.status>200 && this.status<299)) {
            // Typical action to be performed when the document is ready:
            // console.log(xhr.responseText);
            resolve(JSON.parse(xhr.responseText).data)
        }
    };
    xhr.open("GET","https://reqres.in/api/users?page=1")
    xhr.send()
})

var p2 = new Promise((resolve, reject)=>{
    var xhr1 = new XMLHttpRequest();
    xhr1.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
        //    console.log(xhr1.responseText);
           resolve(JSON.parse(xhr1.responseText).data)
        }
        else{
            reject(false)
        }
    };
    xhr1.open("GET","https://reqres.in/api/users?page=2")
    xhr1.send()
})


function BothPagesLoaded(){
    document.write("BothPagesLoaded")
}

Promise.all([p1, p2]).then((data)=>{
    BothPagesLoaded()
    console.log("SUCCESS")
})

Promise.all([p3, p4]).then((data)=>{})

p1.then(data=>console.log(data)).catch(val=>console.log(val))
p2.then(data=>console.log(data))

document.write("Loading...")
