console.log('Hello World!')

let library = []


const mainParent = document.querySelector('#main-content')


// create an object constructor for our book object 
function Book(title, author, pages, readBook) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readBook = readBook
    this.id = crypto.randomUUID()
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

    return book.id
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
    event.preventDefault(); // it stops the page from refreshing that's what happens by defualt when you press a button within a form element
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
        console.log(readBook)
    } else {
        readBook = false
        console.log(readBook)
    }
    const func = addBookToLibrary(title, author, pages, readBook)


    
        const bookCard = document.createElement('div')
        bookCard.style.borderRadius = '24px'
        bookCard.textContent = title
        bookCard.style.padding = '24px'
        bookCard.style.height = '180px'
        bookCard.style.border = 'solid black'
        bookCard.style.backgroundColor = 'white'
        bookCard.style.display = 'flex'
        bookCard.style.flexDirection = 'column'
        bookCard.style.justifyContent = 'space-between'

        const p = document.createElement('p')
        p.textContent = `This book was written by ${author} and has a total of ${pages} pages.`
        p.style.fontSize = '24px'
        bookCard.appendChild(p)

        const div = document.createElement('div')
        div.style.display = 'flex'
        div.style.gap = '8px'
        div.style.justifyContent = 'end'
        bookCard.appendChild(div)

        const checkbox = document.createElement('img')
        checkbox.setAttribute('id', `checkbox-${func}`)
        if (readBook === true) {
            checkbox.src = 'assets/checkbox-check-svgrepo-com.svg'
        } else {
            checkbox.src = 'assets/checkbox-unchecked-svgrepo-com.svg'
        }
        checkbox.height = 32
        checkbox.style.cursor = 'pointer'
        div.appendChild(checkbox)

        const _delete = document.createElement('img')
        _delete.src = 'assets/trash-alt-svgrepo-com.svg'
        _delete.height = 32
        _delete.style.cursor = 'pointer'
        _delete.addEventListener('click', function () {
            const index = library.findIndex(book => book.id === func);
            library.splice(index, 1)
            bookCard.remove();                // remove from DOM
            console.log('Book deleted:', func);
        })
        div.appendChild(_delete)

        mainParent.appendChild(bookCard)

        const didReadCheckbox = document.querySelector(`#checkbox-${func}`)
        didReadCheckbox.addEventListener('click', function () {
            console.log('Button pressed')
            const target = library.find(book => book.id === func)
            if (didReadCheckbox.src.endsWith('assets/checkbox-check-svgrepo-com.svg')) {
                didReadCheckbox.src = 'assets/checkbox-unchecked-svgrepo-com.svg'
                target.readBook = false
                console.log(library)
            } else {
                didReadCheckbox.src = 'assets/checkbox-check-svgrepo-com.svg'
                target.readBook = true
                console.log(library)
            }
        })

        
    
    const form = document.querySelector('form')
    form.reset()
    dialog.close()
})


