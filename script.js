

// Example: Wait for the DOM to load before running scripts
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    const messageElement = document.getElementById('message');

    button.addEventListener('click', () => {
        messageElement.textContent = "JavaScript successfully integrated!";
        messageElement.style.color = "green";
    });
});