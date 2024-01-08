const open = document.getElementById('open');
const modalContainer = document.getElementById('modal-container')
const close = document.getElementById('close');
const form = document.getElementById('my-form');

open.addEventListener('click', () => {
    modalContainer.classList.add('show')
})

close.addEventListener('click', () => {
    modalContainer.classList.remove('show')
})


// Load data from local storage when the page is loaded
let myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary() {
    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
    pages = document.getElementById('pages').value;
    read = document.getElementById('read').checked;
    const newBook = new Book(title, author, pages, read) // takes form values and makes a new book
    myLibrary.push(newBook)
    saveToLocalStorage();
    updateCards()
    form.reset()

}

function updateCards() {
    const display = document.getElementById('card-holder');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book)); // changes whenever book is added or removed
    for (let i=0; i<myLibrary.length; i++){
        createCard(myLibrary[i]);
    }
}

function createCard(listNumber){
    const cardHolder = document.getElementById('card-holder');
    const newCard = document.createElement('div');
    const cardTitle =  document.createElement('div')
    const cardAuthor =  document.createElement('div')
    const cardPages =  document.createElement('div')
    const cardButtons =  document.createElement('div')
    const cardRead =  document.createElement('button')
    const cardRemove = document.createElement('button')
    newCard.classList.add('book')
    newCard.setAttribute('id', 'card' + myLibrary.indexOf(listNumber))
    newCard.setAttribute('data-book', myLibrary.indexOf(listNumber))

    cardTitle.classList.add('card-title')
    cardTitle.setAttribute('data-name', 'Title')
    cardTitle.innerHTML = listNumber.title
    newCard.appendChild(cardTitle)

    cardAuthor.classList.add('card-author')
    cardAuthor.setAttribute('data-name', 'Author')
    cardAuthor.innerHTML = listNumber.author
    newCard.appendChild(cardAuthor)

    cardPages.classList.add('card-pages')
    cardPages.setAttribute('data-name', 'Pages')
    cardPages.innerHTML = listNumber.pages
    newCard.appendChild(cardPages)
    

    cardButtons.classList.add('button-container')
    newCard.appendChild(cardButtons)

    cardRead.classList.add('card-read')
    cardRead.innerHTML = listNumber.read === true ? 'Read' : 'Not read';
    cardRead.setAttribute('data-read', myLibrary.indexOf(listNumber))
    listNumber.read === true ? cardRead.classList.add('book-read') : false
    cardButtons.appendChild(cardRead)
    cardRead.addEventListener('click', toggleRead)

    cardRemove.setAttribute('data-remove', myLibrary.indexOf(listNumber))
    cardRemove.innerHTML = 'remove book'
    cardButtons.appendChild(cardRemove)
    cardRemove.addEventListener('click', removeCard)

    newCard.appendChild(cardButtons)
    cardHolder.appendChild(newCard)
}

function toggleRead(e) {
    let currentCard = myLibrary[e.currentTarget.getAttribute('data-read')]
    currentCard.read = !currentCard.read
    e.currentTarget.classList.toggle('book-read')
    e.currentTarget.innerHTML = currentCard.read ? 'Read' : 'Not read'
    saveToLocalStorage();
}

function removeCard(e) {
    myLibrary.splice(e.target.getAttribute('data-remove'), 1)
   updateCards()
   saveToLocalStorage();
}

function saveToLocalStorage() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function retrieveFromLocalStorage() {
    const display = document.getElementById('card-holder');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book)); // changes whenever book is added or removed
    for (let i = 0; i < myLibrary.length; i++) {
        createCard(myLibrary[i]);
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    addBookToLibrary();
});

// load data from local storage when the page is loaded
retrieveFromLocalStorage();