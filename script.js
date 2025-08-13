console.log('Hello World!')

// initiate our library 
const library = ['Harry Potter', 'The Hunger Games', 'The Lego Movie Book']


// create an object constructor for our book object 
function Book(title, author, pages, readBook) {
    this.title = title
    this.author = author
    this.pages = pages
    this.info = function () {
        if (readBook === true) {
            console.log(`${title} by ${author}, is ${pages} pages long and I read the book.`)
        } else {
            console.log(`${title} by ${author}, is ${pages} pages long and I did not read the book yet.`)
        }
    }
}

// create function to create and append a book to the library array
function addBookToLibrary(title, author, pages, readBook) {
    // create the book object
    const book = new Book(title, author, pages, readBook)

    // append book object in the library
    library.push(book)
    console.log(library)
}


const mainParent = document.querySelector('#main-content')

for (book of library) {
    const bookCard = document.createElement('div')
    bookCard.style.borderRadius = '24px'
    bookCard.textContent = book
    bookCard.style.padding = '24px'
    bookCard.style.border = 'solid black'
    bookCard.style.backgroundColor = 'white'
    mainParent.appendChild(bookCard)
    console.log(book)
}

const moreButton = document.querySelector('#more')
const dialog = document.querySelector('dialog')
const closeButton = document.querySelector('dialog > button')

moreButton.addEventListener('click', function () {
    console.log('Button pressed')
    dialog.showModal()
})

closeButton.addEventListener('click', function () {
    dialog.close()
})

const submitButton = document.querySelector('#submit')


submitButton.addEventListener('click', function () {
    event.preventDefault();
    const titleInput = document.querySelector('#title')
    let title = titleInput.value

    const authorInput = document.querySelector('#author')
    let author = authorInput.value

    const pagesInput = document.querySelector('#pages')
    let pages = pagesInput.value

    const yes_or_no = document.querySelector('input[name="read"]:checked')
    let readBook
    if (yes_or_no.value === 'yes') {
        readBook = true
    } else {
        readBook = false
    }
    const book = new Book(title, author, pages, readBook)
    console.log(book)
    console.log(book.info())
    dialog.close()
})

