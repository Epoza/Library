// Use for sending messages to user about forms
const titleInput = document.getElementById('title');
const titleError = document.getElementById('title-error')
const authorInput = document.getElementById('author');
const authorError = document.getElementById('author-error')
const pagesInput = document.getElementById('pages');
const pagesError = document.getElementById('pages-error')

titleInput.addEventListener("input", (event) => {
    // check if the form fields are valid.
    if (titleInput.validity.valid) {
      // if the field is valid, we remove the error message.
      titleError.textContent = ""; // Reset the content of the message
      titleError.className = "error"; // Reset the visual state of the message
    } else {
      // If there is still an error, show the correct error
      showError();
    }
});

authorInput.addEventListener("input", (event) => {
  // check if the form fields are valid.
  if (authorInput.validity.valid) {
    // if the field is valid, we remove the error message.
    authorError.textContent = ""; // Reset the content of the message
    authorError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

pagesInput.addEventListener("input", (event) => {
  // check if the form fields are valid.
  if (pagesInput.validity.valid) {
    // if the field is valid, we remove the error message.
    pagesError.textContent = ""; // Reset the content of the message
    pagesError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

function showError() {
    if (titleInput.validity.valueMissing) {
      // If the field is empty
      titleError.textContent = 'You need to enter a book title';
      titleError.className = 'error active';
    }
    if(authorInput.validity.valueMissing){
      // If the field is empty
      authorError.textContent = 'You need to enter an author';
      authorError.className = 'error active';
    }
    if(pagesInput.validity.valueMissing){
      // If the field is empty
      pagesError.textContent = 'You need to enter the amount of pages';
      pagesError.className = 'error active';
    } else if (pagesInput.validity.rangeOverflow){
      // If the number > 9999
      pagesError.textContent = 'Woah! Too many pages!';
      pagesError.className = 'error active';
    }
}