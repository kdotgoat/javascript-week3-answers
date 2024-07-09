const submitButton = document.getElementById('submitButton');
const userInput = document.getElementById('userInput');
const outputText = document.getElementById('outputText');

submitButton.addEventListener('click', function() {
    const userName = userInput.value;
    outputText.textContent = `Hello, ${userName}! Thank you for interacting.`;
});