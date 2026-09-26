const numberKeys = document.querySelectorAll(".number-key");
const operatorKeys = document.querySelectorAll(".operator-key")
const clearKey = document.getElementById("clear-key");
const backKey = document.getElementById("back-key");
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

function clearScreen(){
    displayScreen.innerText = "";
}

function backSpace(){
    var displayTest = displayScreen.innerText.slice(0, -1);
    console.log(displayTest);
    displayScreen.innerText = displayTest;
    

    

}

clearKey.addEventListener("click", clearScreen);

backKey.addEventListener("click", backSpace);

numberKeys.forEach(key => {
    key.addEventListener("click", handleClick);
    key.addEventListener("click", function(){
        console.log(this.innerText);
        displayScreen.innerText = displayScreen.innerText + this.innerText;
    })
})

operatorKeys.forEach(key => {
    key.addEventListener("click", handleClick);
    key.addEventListener("click", function(){
        console.log(this.innerText);
        displayScreen.innerText = displayScreen.innerText + this.innerText;
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

