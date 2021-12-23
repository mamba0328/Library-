//constructor and array in which new books will be stored 
const booksList = [];

const book = function (name, author, year, pages, description) { 
    this.name = name; 
    this.author = author; 
    this.year = year; 
    this.pages = pages; 
    this.description = description; 
}

const Dune = new book ("Dune","Dune","Dune","Dune","Dune"); 
booksList.push(Dune);

//add a book to the list 
const list = document.getElementById('list');
const pattern = document.querySelector('.book')//needed to display new books
const newBook = document.getElementById('newBook')//button
const nameInput = document.getElementById('Name');
const authorInput = document.getElementById('Author');
const descriptionInput = document.getElementById('Description');
const yearInput = document.getElementById('Year');
const pagesInput = document.getElementById('Pages');

newBook.addEventListener('click', () => { 
    const theBook = new book(nameInput.value, authorInput.value, yearInput.value, pagesInput.value, descriptionInput.value)
    console.log(theBook)
})

//add a new book window pops up
const addBook = document.querySelector('#add')
const creator = document.getElementById('creator')
addBook.addEventListener('click', () => {
    if (creator.style.display === 'flex') {
        creator.style.display = 'none'
     } else creator.style.display = 'flex'
    
})


