const display = document.getElementById("display");

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    if (display.value === "") return;
    const lastChar = display.value[display.value.length - 1];
    if (["+", "-", "*", "/"].includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Optional: Keyboard input
document.addEventListener("keydown", function(e) {
    if ((e.key >= 0 && e.key <= 9) || e.key === "." || "+-*/".includes(e.key)) {
        display.value += e.key;
    } else if (e.key === "Enter") {
        calculate();
    } else if (e.key === "Backspace") {
        display.value = display.value.slice(0, -1);
    } else if (e.key === "Escape") {
        clearDisplay();
    }
});