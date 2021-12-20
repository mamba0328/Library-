//add a book to the list 
const list = document.getElementById('list')
const addBook = document.querySelector('#add')

addBook.addEventListener('click', () => {
const div = document.createElement('div')
list.appendChild(div)
})

//creats a book with a entered  properties and stores it in the array
const booksList = [];

const book = function (name, author, year, pages, description) { 
    this.name = name; 
    this.author = author; 
    this.year = year; 
    this.pages = pages; 
    this.description = description; 
}

