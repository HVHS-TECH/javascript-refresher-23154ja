const header =document.getElementById("welcomeMessage");

const imput =document.getElementById("imput");

var tab =document.getElementById("tab");

var textMessage = "Welcome to the JavaScript Refresher page! - code is working!!!";

function callAlert() {
    header.innerHTML=textMessage;

}; 


function customText () {

    tab.innerHTML=imput.value;

};