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
