var xhr = new XMLHttpRequest();
var c = 0;
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       console.log(xhr.responseText);
        c++;
    }
};
xhr.open("GET","https://reqres.in/api/users?page=1")
xhr.send()


var xhr1 = new XMLHttpRequest();
xhr1.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       console.log(xhr1.responseText);
        c++;
    }
};
xhr1.open("GET","https://reqres.in/api/users?page=2")
xhr1.send()

function BothPagesLoaded(){
    document.write("BothPagesLoaded")
}

document.write("Loading...")

var interval = setInterval(() => {
    console.log(c)
    if(c==2){
        BothPagesLoaded()
        clearInterval(interval)
    }
}, 1);