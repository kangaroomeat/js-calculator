const keys = document.querySelectorAll(".key");
var header = document.querySelector("h1");

/*key.addEventListener('click', ()=> {
    console.log(this.innerText);
})*/

function handleClick(){
    console.log("key clicked");
}

function test() {
    console.log(keys);
}

keys.forEach(key => {
    key.addEventListener("click", handleClick);
    key.addEventListener("click", function(){
        console.log(this.innerText);
    })
})

header.onclick=function(){
    console.log("header");
}

function operation(var1, var2) {
    console.log(var1 + var2);
}

operation(1,2);