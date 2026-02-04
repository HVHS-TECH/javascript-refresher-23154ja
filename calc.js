const one = document.getElementById("one");
const two = document.getElementById("two");

var output = document.getElementById("output");

console.log(String(1+2));

function add() {
    output.innerHTML=(one+two);
};

function subtract() {
    output.innerHTML=String(one-two);
};

function times() {
    output.innerHTML=one*two;
};

function divide() {
    output.innerHTML=one/two;
}; 