import { books } from './data.js';

// Generate list dynamically
const listBooks = document.getElementById('list-books');
const bookTitles = books
  .map(
    (book) => `
      <li>${book.title} - ${book.author}</li>
    `
  )
  .join('');

listBooks.innerHTML = bookTitles;

// Generate form dynamically
document.addEventListener('DOMContentLoaded', () => {
  const formContainer = document.getElementById('form-container');
  const formTemplate = `
    <form id="book-form" action="">
      <div class="label-grid">
        <div>
          <h2>Submit Your Choosen Books</h2>
          <label for="fname">Title:</label><br />
          <input type="text" id="fname" name="fname" value="" /><br />
          <label for="lname">Authors:</label><br />
          <input type="text" id="lname" name="lname" value="" /><br /><br />
        </div>
      </div>
      <input type="submit" value="Submit" />
    </form>
  `;
  formContainer.innerHTML = formTemplate;

  const bookForm = document.getElementById('book-form');
  bookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('fname').value;
    const author = document.getElementById('lname').value;
    addBookToLibrary(title, author, 'Unknown');
    displayAddedBooks();
  });
});

// Logic here
const myLibrary = [];
const addedBooks = [];

function Book({ title, author, pages }) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = () => {
    return `${this.title}, ${this.author}, ${this.pages} not read yet.`;
  };
}

// Create Book instances from imported data
books.forEach((bookData) => {
  const book = new Book(bookData);
  myLibrary.push(book);
});

function addBookToLibrary(title, author, pages) {
  const book = new Book({ title, author, pages });
  addedBooks.push(book);
}

function displayAddedBooks() {
  const addedBooksContainer = document.getElementById('added-books');
  addedBooksContainer.innerHTML = addedBooks
    .map(
      (book) => `
        <div>
          <p>${book.title} - ${book.author}</p>
        </div>
      `
    )
    .join('');
}

// Initial display of added books
displayAddedBooks();
