const open = document.getElementById('open');
const modalContainer = document.getElementById('modal-container')
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modalContainer.classList.add('show')
})

close.addEventListener('click', () => {
    modalContainer.classList.remove('show')
})




function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return title + ' by ' + author + ', ' + pages + ' pages, ' + read
    }
}

const animalFarm = new Book('Animal Farm', 'George Orwell', '289', 'not read yet')
console.log(animalFarm.info())