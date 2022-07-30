const open = document.getElementById('open');
const modalContainer = document.getElementById('modal-container')
const close = document.getElementById('close');
const cardHolder = document.getElementById('card-holder');
const newCard = document.createElement('div');
const form = document.getElementById('my-form');



open.addEventListener('click', () => {
    modalContainer.classList.add('show')
})

close.addEventListener('click', () => {
    modalContainer.classList.remove('show')
})


let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    myLibrary.push(this)
    // this.info = function(){
    //     return title + ' by ' + author + ', ' + pages + ' pages, ' + read
    // }
}

function addBookToLibrary() {
    title = document.getElementById('book-title').value;
    author = document.getElementById('author').value;
    pages = document.getElementById('pages').value;
    read = document.getElementById('book-read').value;
    new Book(title, author, pages, read) // takes form values and makes a new book
    createCard();
    console.log(myLibrary)
}

function createCard(){
    newCard.setAttribute('id', 'cards')
    cardHolder.appendChild(newCard)
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    addBookToLibrary();
    form.reset();
});
// function removeFromLibrary() {}

// function editBook() {}

