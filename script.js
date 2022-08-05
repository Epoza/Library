const open = document.getElementById('open');
const modalContainer = document.getElementById('modal-container')
const close = document.getElementById('close');
const form = document.getElementById('my-form');
let i = 0;



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
    for (i; i<myLibrary.length; i++){
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

    cardRemove.classList.add('card-remove')
    cardRemove.innerHTML = 'remove book'
    cardButtons.appendChild(cardRemove)

    newCard.appendChild(cardButtons)

    removeCard.setAttribute('id', 'cards')
    cardHolder.appendChild(newCard)
}

function toggleRead(e) {
    let currentCard = myLibrary[e.currentTarget.getAttribute('data-read')]
    currentCard.read = !currentCard.read
    e.currentTarget.classList.toggle('book-read')
    e.currentTarget.innerHTML = currentCard.read ? 'Read' : 'Not read'
    console.log(currentCard)
}



// Eventlisteners



form.addEventListener('submit', (event) => {
    event.preventDefault();
    addBookToLibrary();
});


// function removeFromLibrary() {}

// function editBook() {}

