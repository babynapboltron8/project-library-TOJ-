import { books } from './data.js';

const listBooks = document.getElementById('list-books');

// Generate book title list items
const bookTitles = books
  .map(
    (book) => `
      <li>${book.title} - ${book.author}</li>
    `
  )
  .join('');

listBooks.innerHTML = bookTitles;

const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = () => {
    return `${Book.title}, ${Book.author}, ${Book.pages} not read yet.`;
  };
}

const book1 = new Book('The Stars', 'Ryan', 350);
const book2 = new Book('Bible', 'Jesus', 1000);

function addBookToLibrary() {
  // take params, create a book then store it in the array
}
