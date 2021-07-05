// Set initial count
let count = 0;

// Select value and buttons
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".button");

// Functionality
buttons.forEach(function (button) {
    button.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;
    });
});