const keys = document.querySelectorAll(".key");
var header = document.querySelector("h1");
var oneKey = document.getElementById("1-key");
var displayScreen = document.getElementById("display-screen");

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



function addition(var1, var2) {
    return var1 + var2;
}

function subtraction(var1, var2) {
    return var1 - var2;
}

var kii1 = 3;
var kii2 = 5;

console.log(addition(kii1, kii2));
console.log(subtraction(kii1, kii2));

oneKey.onclick=function(){
    var animal = "goose"
    displayScreen.appendChild(animal);
}

const numbersString = 12222

