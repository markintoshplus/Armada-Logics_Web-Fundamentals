// Exercise 1
function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

console.log(calculate(5, 3, add));      // Output: 8
console.log(calculate(4, 2, multiply)); // Output: 8
console.log(calculate(18, 10, subtract));
console.log(calculate(16, 2, divide));

// Exercise 2
function delayedMessage(message, delay, beforeCallback, callback) {
    beforeCallback();
    setTimeout(() => {
        callback(message);
    }, delay);
}

delayedMessage("Hello, world!", 2000, function () {
    console.log("Delay is starting...");
}, function (msg) {
    console.log(msg);
});

// Exercise 3
function repeatTask(times, callback) {
    for (let i = 0; i < times; i++) {
        const shouldContinue = callback(i);
        if (shouldContinue === false) {
            break;
        }
    }
}

repeatTask(5, function (index) {
    console.log("Iteration:", index);
    if (index === 2) {
        return false;
    }
});


// Estimate Time of Completion: 30 mins