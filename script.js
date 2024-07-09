
let name = "John Doe";  // string
let age = 30;           // number
let isStudent = false;  // boolean

console.log("Variables:");
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);


// Define functions to perform simple operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        console.log("Error: Division by zero");
        return null;
    }
    return a / b;
}

// Call functions and log results
console.log("\nFunction results:");
console.log("Addition (5 + 3):", add(5, 3));
console.log("Subtraction (10 - 4):", subtract(10, 4));
console.log("Multiplication (6 * 7):", multiply(6, 7));
console.log("Division (20 / 5):", divide(20, 5));
console.log("Division by zero (10 / 0):", divide(10, 0));