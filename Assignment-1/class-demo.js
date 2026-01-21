class Book {
    title;
    author;
    pages;
    isAvailable=true;

    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    borrow() {
        this.isAvailable = false;
    }

    returnBook() {
        this.isAvailable = true;
    }

    getInfo() {
        return `${this.title} by ${this.author} (${this.pages} pages)`;
    }

    isLongBook() {
        return this.pages > 300;
    }
}

let book1= new Book("Reverend Insanity", "Gu Zhen Ren", 350);
let book2= new Book("Lord of the Mysteries", "Cuttlefish That Loves Diving", 400);
let book3= new Book("Regressor's Tale of Cultivation", "Moonlight Blade", 280);
let book4= new Book("Harry Potter", "J.K. Rowling", 500);
let book5= new Book("Atomic Habits", "James Clear", 320);

//Display info of all books
console.log(book1.getInfo());
console.log(book2.getInfo());
console.log(book3.getInfo());
console.log(book4.getInfo());
console.log(book5.getInfo());

//Borrow 2 books and show their availability status
book1.borrow();
book2.borrow();

console.log(`\nIs "${book1.title}" available? ${book1.isAvailable ? 'Yes' : 'No'}`);
console.log(`Is "${book2.title}" available? ${book2.isAvailable ? 'Yes' : 'No'}`);

//Return 1 book and show updated status
book2.returnBook();
console.log(`\nIs "${book2.title}" available? ${book2.isAvailable ? 'Yes' : 'No'}`);

//Count how many books are "long books" (more than 300 pages)
console.log(`\nNo. of long books: ${
    [book1, book2, book3, book4, book5].filter(book => book.isLongBook()).length
}`);

//List all available books
console.log(`\nList of all available books:\n${
    [book1, book2, book3, book4, book5].filter(book => book.isAvailable).map(book => book.getInfo()).join("\n")
}`);