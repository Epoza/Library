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


let myLibrary = []

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        // this.info = function(){
        //     return title + ' by ' + author + ', ' + pages + ' pages, ' + read
        // }
    }
}

function addBookToLibrary() {
    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
    pages = document.getElementById('pages').value;
    read = document.getElementById('read').checked;
    const newBook = new Book(title, author, pages, read) // takes form values and makes a new book
    myLibrary.push(newBook)
    for (let i=0; i<myLibrary.length; i++){
        console.log(i)
        createCard(myLibrary[i]); // figure out why i resets
    }
    console.log(myLibrary)
    form.reset()
}

function createCard(listNumber){
    const cardHolder = document.getElementById('card-holder');
    const newCard = document.createElement('div');
    const removeCard = document.createElement('button')
    const cardTitle =  document.createElement('div')
    const cardAuthor =  document.createElement('div')
    const cardPages =  document.createElement('div')
    const cardRead =  document.createElement('div')
    newCard.setAttribute('id', 'card' + myLibrary.indexOf(listNumber))

    cardTitle.setAttribute('id', 'card-title')
    cardTitle.innerHTML = listNumber.title
    newCard.appendChild(cardTitle)

    cardAuthor.setAttribute('id', 'card-author')
    cardAuthor.innerHTML = listNumber.author
    newCard.appendChild(cardAuthor)

    cardPages.setAttribute('id', 'card-pages')
    cardPages.innerHTML = listNumber.pages
    newCard.appendChild(cardPages)

    cardRead.setAttribute('id', 'card-read')
    cardRead.innerHTML = listNumber.read === true ? 'Read' : 'Not read' 
    newCard.appendChild(cardRead)

    removeCard.setAttribute('id', 'cards')
    cardHolder.appendChild(newCard)
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    addBookToLibrary();
});
// function removeFromLibrary() {}

// function editBook() {}

