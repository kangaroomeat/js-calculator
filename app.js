const numberKeys = document.querySelectorAll(".number-key");
const operatorKeys = document.querySelectorAll(".operator-key")
const clearKey = document.getElementById("clear-key");
const backKey = document.getElementById("back-key");
const equalsKey = document.getElementById("equals-key");

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

function evaluate() {
   const numStr = displayScreen.innerText;
   var evaluation = eval(numStr);
   displayScreen.innerText = evaluation;
}

clearKey.addEventListener("click", clearScreen);

backKey.addEventListener("click", backSpace);

equalsKey.addEventListener("click", evaluate);

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








function addition(a,b){
    return a + b;
}

console.log(addition(5,6));

//const numStr = "77+8" ;




//console.log(eval(numStr));

let regex = /hello/i;

let regexTwo = /[+]/;

console.log(regex.test("hello world"));

console.log(/dog/i.test("dogs are cool"));

console.log(regexTwo.test("dogs + cats"));

console.log(/[*]/.test("dogs * lizards"));

console.log(/[/]/.test("7/8"));

/*if previous input is an operator key or decimal key, do not allow user input
another decimal key or operator key*/

function checkForReoccurringOperator(){
  var lastChar =  displayScreen.innerText.slice(-1);
  //console.log(lastChar);

  if(lastChar === "2") {
    console.log("this is 2");
  } else {
    console.log(lastChar);
  }
}

const testButton = document.getElementById("test")

testButton.addEventListener("click", checkForReoccurringOperator);


