// ========================================
// STEP 1: Function Declaration
// ========================================
// Define the checkAnswer function
function checkAnswer() {
    
    // ========================================
    // STEP 2: Identify the Correct Answer
    // ========================================
    // Declare the correct answer
    const correctAnswer = "4";
    
    // ========================================
    // STEP 3: Retrieve the User's Answer
    // ========================================
    // Select the checked radio button using querySelector
    const userAnswerElement = document.querySelector('input[name="quiz"]:checked');
    
    // Get the value of the selected radio button
    const userAnswer = userAnswerElement.value;
    
    // ========================================
    // STEP 4: Compare Answers and Display Feedback
    // ========================================
    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');
    
    // Compare user's answer with correct answer
    if (userAnswer === correctAnswer) {
        // User answered correctly
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        // User answered incorrectly
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// ========================================
// STEP 5: Add Event Listener to Submit Button
// ========================================
// Select the submit button by its ID
const submitButton = document.getElementById('submit-answer');

// Add click event listener that calls checkAnswer function
submitButton.addEventListener('click', checkAnswer);
