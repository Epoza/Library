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