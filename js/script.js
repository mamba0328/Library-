//constructor and array in which new books will be stored 
const booksList = [];

class book {
    constructor (name, author, year, pages, description) { 
    this.name = name; 
    this.author = author; 
    this.year = year; 
    this.pages = pages; 
    this.description = description; 
    }
    
    addBookToList() { //shows books on the page 
        const showBook = document.createElement('div');
        showBook.classList.add('showBook');
    
        //creates button section and add buttons into it 
        const buttonSection = document.createElement('div');
        buttonSection.classList.add('bookButtons'); 
    
        const deleteBtn = document.createElement('button'); 
        deleteBtn.innerText = 'delete';
        deleteBtn.classList.add('delete');
    
        const readBtn = document.createElement('button'); 
        readBtn.innerText = 'read';
        readBtn.classList.add('readBtn');
    
        buttonSection.appendChild(deleteBtn);
        buttonSection.appendChild(readBtn);
        
    
        //makes a section for info inside showBook
        const infoSection = document.createElement('div');
        infoSection.classList.add('bookInfo');
    
        //fills propetries with in input values
        const bookName = document.createElement('h1');
        if(this.author){ //different outupts for non mentioned author
         bookName.innerText = this.name + ' by ' + this.author;
        } else bookName.innerText = this.name;
    
        const bookDescription = document.createElement('p');
        bookDescription.innerText = this.description;
        bookDescription.classList.add('bookDescription');
    
        const bookYear = document.createElement('p');
        if (!this.year){ 
            this.year = 'unknown';
        }
        bookYear.innerText = 'Date of publishing: ' + this.year;
    
        const bookPages = document.createElement('p');
        if (!this.pages){ 
            this.pages = 'unknown';
        }
        bookPages.innerText = 'Pages: ' + this.pages;
    
    
        infoSection.appendChild(bookName);
        infoSection.appendChild(bookDescription);
        infoSection.appendChild(bookYear);
        infoSection.appendChild(bookPages);
    
        //appends section to book's card and append the card to the list
        showBook.appendChild(infoSection);
        showBook.appendChild(buttonSection);
        booksSection.appendChild(showBook);
    
        //makes random blue background 
        var max = 200;
        var min = 100;
        var blue = Math.floor(Math.random() * (max - min + 1)) + min;
        showBook.style.backgroundColor = "rgb(25," + blue + ",255)"
    }
}


//add a book to the list 
const list = document.getElementById('list');
const newBook = document.getElementById('newBook')//button

const bookCount = document.getElementById('bookCount')//changes bookCount basing on book array
let myBad = 0; //remove buttons deletes only childs, so this variable will count hom much key of the arrays need to be extracted to show correct answer

const readCount = document.getElementById('readCount')//counst how many book have you read
let booksReaded = 0;
 
const nameInput = document.getElementById('Name'); //input properties 
const authorInput = document.getElementById('Author');
const descriptionInput = document.getElementById('Description');
const yearInput = document.getElementById('Year');
const pagesInput = document.getElementById('Pages');

newBook.addEventListener('click', () => { //takes inpue values and create a new book
    if (nameInput.value) {
        let sameBook = chekForSameBook(); 
        if(sameBook === true) {
            alert('You already added ' + nameInput.value)
        } else { 
            const theBook = new book(nameInput.value, authorInput.value, yearInput.value, pagesInput.value, descriptionInput.value)
            booksList.push(theBook)
            theBook.addBookToList();
            //changes values of counters
            bookCount.textContent = booksList.length;
        }
       
    } else alert('You need to enter at least name of the book');
})

function chekForSameBook(){ //cheks either book has been already created and return true if it's
    for (i=0;i<booksList.length;i++){
        if(nameInput.value == booksList[i].name){
            console.log(nameInput.value + '' + booksList[i].name)
            return true
        }
    }
}

//add a new book window pops up
const addBook = document.querySelector('#add')
const creator = document.getElementById('creator')
addBook.addEventListener('click', () => {
    if (creator.style.display === 'flex') {
        creator.style.display = 'none'
     } else creator.style.display = 'flex'
})

//adds functionality to the books buttons 
const booksSection = document.getElementById('books')
booksSection.addEventListener('click', deleteBook)

function deleteBook(e) { 
    if (e.target.classList.contains('delete')){
        if (confirm("Are you sure?")) {
        var key = e.target.parentElement.parentElement;
        booksSection.removeChild(key);

        //changes values of book counter
        
        let cardName = e.target.parentElement.parentElement.firstChild.firstChild.textContent;//finds name of the card to find later similar in the list to be deleted

        for(i=0; i<booksList.length; i++){//finds the match and removes it from array
            console.log(booksList.length)
            if(cardName === booksList[i].name){
             booksList.splice(i,1);
             console.log(booksList.length)
            }
        }

        bookCount.textContent = booksList.length;

        let readList = booksList.filter(obj => obj.read == 1)
         readCount.textContent = readList.length;
    }

    
 }
} 
booksSection.addEventListener('click', readBook)

function readBook(e) { 
 var key = e.target.parentElement.parentElement;


    if (e.target.classList.contains('readBtn')){
        var max = 150;
        var min = 100;
        var green = Math.floor(Math.random() * (max - min + 1)) + min;
        key.style.backgroundColor = "rgb(0," + green + ",0)";
        
        e.target.classList.remove('readBtn');

        e.target.innerText = 'unread';

        e.target.classList.add('unread');
      
        //count how many books readed
        let cardName = e.target.parentElement.parentElement.firstChild.firstChild.textContent;//finds name of the card to find later similar in the list

        for(i=0; i<booksList.length; i++){//finds the match and add read property to it  
            if(cardName === booksList[i].name){
             booksList[i].read = 1; 
            }
        }

    } else if (e.target.classList.contains('unread')){
        var max = 200;
        var min = 100;
        var blue = Math.floor(Math.random() * (max - min + 1)) + min;
        key.style.backgroundColor = "rgb(25," + blue + ",255)";

        e.target.classList.remove('unread');

        e.target.innerText = 'read';

        e.target.classList.add('readBtn');

        

        let cardName = e.target.parentElement.parentElement.firstChild.firstChild.textContent;

        for(i=0; i<booksList.length; i++){//finds the match and add read property to it  
            if(cardName === booksList[i].name){
             booksList[i].read = 0; 
            }
        }
    }

    //changes counters value
    let readList = booksList.filter(obj => obj.read == 1)
    readCount.textContent = readList.length;
    
}

//changes color of button when mouseover
addBook.addEventListener('mouseover', changeColor)

addBook.addEventListener('mouseleave', changeColorBack)

newBook.addEventListener('mouseleave', changeColorBack)

newBook.addEventListener('mouseover', changeColor)

booksSection.addEventListener('mouseover', function (e) { 
    if (e.target.classList.contains('readBtn')){ 
        changeColor(e);
    }
})

booksSection.addEventListener('mouseover', function (e) { 
    if (e.target.classList.contains('delete')) { 
        changeColor(e);
    }
})

booksSection.addEventListener('mouseout', function (e) { 
    if (e.target.classList.contains('delete')) { 
        e.target.style.border = 'white 2px solid';
        e.target.style.color = 'white';
    }
})


booksSection.addEventListener('mouseover', function (e) { 
    if (e.target.classList.contains('unread')) { 
        changeColor(e);
    }
})

booksSection.addEventListener('mouseout', function (e) { 
    if (e.target.classList.contains('unread')){ 
        e.target.style.border = 'white 2px solid';
        e.target.style.color = 'white';
    }
})

booksSection.addEventListener('mouseout', function (e) { 
    if (e.target.classList.contains('readBtn')){ 
        e.target.style.border = 'white 2px solid';
        e.target.style.color = 'white';
    }
})

function changeColor(e) { 
    e.target.style.border = '2px solid blueviolet';
    e.target.style.color = 'blueviolet';
}

function changeColorBack(e) { 
    e.target.style.border = 'rgb(0, 119, 255) solid 2px';
    e.target.style.color = 'rgb(0, 119, 255)';
}


//filter books 
const filter = document.getElementById('filter');
const books = booksSection.children;


filter.addEventListener('keyup', filterBooks);

function filterBooks(e) { 

    let inputValue = e.target.value.toLowerCase();
    let booksArrayed = Array.from(books);
    console.log(inputValue)
    booksArrayed.forEach(function(key) { 
        let keyName = key.firstChild.firstChild.textContent;

        if (keyName.toLowerCase().indexOf(inputValue) != -1) { 
            key.style.display = 'flex';
        } else { 
            key.style.display = 'none';
        }
    })
}
