// ========================================
// STEP 1: Implement Arithmetic Functions
// ========================================

// Addition function
function add(number1, number2) {
    return number1 + number2;
}

// Subtraction function
function subtract(number1, number2) {
    return number1 - number2;
}

// Multiplication function
function multiply(number1, number2) {
    return number1 * number2;
}

// Division function
function divide(number1, number2) {
    // Check for division by zero
    if (number2 === 0) {
        return 'Error: Division by zero';
    }
    return number1 / number2;
}

// ========================================
// STEP 2: Attach Event Listeners
// ========================================

// Addition button event listener
document.getElementById('add').addEventListener('click', function() {
    // Get input values and convert to numbers
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    
    // Perform calculation
    const result = add(number1, number2);
    
    // Display result
    document.getElementById('calculation-result').textContent = result;
});

// Subtraction button event listener
document.getElementById('subtract').addEventListener('click', function() {
    // Get input values and convert to numbers
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    
    // Perform calculation
    const result = subtract(number1, number2);
    
    // Display result
    document.getElementById('calculation-result').textContent = result;
});

// Multiplication button event listener
document.getElementById('multiply').addEventListener('click', function() {
    // Get input values and convert to numbers
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    
    // Perform calculation
    const result = multiply(number1, number2);
    
    // Display result
    document.getElementById('calculation-result').textContent = result;
});

// Division button event listener
document.getElementById('divide').addEventListener('click', function() {
    // Get input values and convert to numbers
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    
    // Perform calculation
    const result = divide(number1, number2);
    
    // Display result
    document.getElementById('calculation-result').textContent = result;
});
