// Select elements
const increaseButtonE1 = document.querySelector(".counter__button--increase");
const decreaseButtonE1 = document.querySelector(".counter__button--decrease");
const resetButtonE1 = document.querySelector(".counter__reset-button");
const counterValueE1 = document.querySelector(".counter__value");
const counterTitleE1 = document.querySelector(".counter__title");

const MAX_VALUE = 5; // Maximum counter limit

// Reset button functionality
resetButtonE1.addEventListener("click", function() {
    counterValueE1.textContent = 0;
    counterTitleE1.textContent = "Fancy Counter";
});

// Decrease button functionality
decreaseButtonE1.addEventListener("click", function() {
    let currentValue = +counterValueE1.textContent; // Convert text to number
    let newValue = currentValue - 1;

    if (newValue < 0) newValue = 0; // Prevent going below 0

    counterValueE1.textContent = newValue;

    // Restore title if decreasing below MAX_VALUE
    if (newValue < MAX_VALUE) {
        counterTitleE1.textContent = "Fancy Counter";
    }
});

// Increase button functionality
increaseButtonE1.addEventListener("click", function() {
    let currentValue = +counterValueE1.textContent;

    if (currentValue < MAX_VALUE) {
        let newValue = currentValue + 1;
        counterValueE1.textContent = newValue;

        // Change title if limit reached
        if (newValue === MAX_VALUE) {
            counterTitleE1.textContent = "You have reached the limit";
        }
    }
});

// Optional: Keyboard support (ArrowUp to increase, ArrowDown to decrease)
document.addEventListener("keyup", function(event) {
    let currentValue = +counterValueE1.textContent;

    if (event.key === "ArrowUp" && currentValue < MAX_VALUE) {
        let newValue = currentValue + 1;
        counterValueE1.textContent = newValue;

        if (newValue === MAX_VALUE) {
            counterTitleE1.textContent = "You have reached the limit";
        }
    }

    if (event.key === "ArrowDown") {
        let newValue = currentValue - 1;
        if (newValue < 0) newValue = 0;
        counterValueE1.textContent = newValue;

        if (newValue < MAX_VALUE) {
            counterTitleE1.textContent = "Fancy Counter";
        }
    }
});   