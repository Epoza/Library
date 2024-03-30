// Use for sending messages to user about forms
console.log('test');
const title = document.getElementById('title');
const titleError = document.getElementById('title-error')


title.addEventListener("input", (event) => {
    // check if the form fields are valid.
  
    if (title.validity.valid) {
      // if the field is valid, we remove the error message.
      titleError.textContent = ""; // Reset the content of the message
      titleError.className = "error"; // Reset the visual state of the message
    } else {
      // If there is still an error, show the correct error
      showError();
    }
});

function showError() {
    console.log('title error')
    if (title.validity.valueMissing) {
        // If the field is empty
        titleError.textContent = 'You need to enter a book title';
    }
    titleError.className = 'error active';
}