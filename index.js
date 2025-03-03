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
    <form action="">
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
});

// Logic here
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
