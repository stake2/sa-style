// ==UserScript==
// @name         Stake2's Test Script
// @namespace    https://github.com/stake2/
// @version      1.0
// @description  This is my script to change the title of the page
// @author       Stake2
// @match        https://www.superanimes.org/*
// @include      https://*.superanimes.*/
// @run-at		 document-end
// @grant        Type
// ==/UserScript==

var input_box = document.getElementsByClassName("friend_sms_text")[0];
var perfil_sms_btn = document.getElementsByClassName("perfil_sms_btn");

function Type() {
    var key = window.event.keyCode;

    // If the user has pressed enter
    if (key === 13) {
		console.log("Enter key was pressed, clicking on send button.");
		input_box.click();
    }

    else {
		console.log("Enter key was not pressed.");
    }
}

let e = document.createElement('script');
e.innerText = `
function Type() {
    var key = window.event.keyCode;

    // If the user has pressed enter
    if (key === 13) {
		console.log("Enter key was pressed, clicking on send button.");
		input_box.click();
    }

    else {
		console.log("Enter key was not pressed.");
    }
}
`;
document.head.appendChild(e);

console.log("Type function was defined.");

input_box.setAttribute('onkeypress', 'Type();')

document.body.setAttribute('onload', 'Type();')

//ChangeTitleTo("The new title");
//ChangeTitleTo("is");
//setTimeout(2000);
//ChangeTitleTo(newtitle);
//setTimeout(2000);
//ChangeTitleTo(originaltitle);
