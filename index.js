/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
import { Book } from './modules/book.js';
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const addButton = document.getElementById('submit');

class Booklist {
  constructor() {
    this.books = [];
    if (localStorage.books) this.books = JSON.parse(localStorage.getItem('books'));
  }

  refreshBookList() {
    let listItems = '';
    const booksSection = document.getElementById('books-section');
    this.books.forEach((element, i) => {
      const book = `<li class="single-book">
                                 <p>"${this.books[i].title}" by ${this.books[i].author}</p>
                                 <button type="button" class="remove" data-index = "${i}" onclick="booklist.removeButton(event)">Remove</button>
                    </li>`;
      listItems += book;
    });

    booksSection.innerHTML = listItems;
  }

  addBook() {
    const book = new Book(titleInput.value, authorInput.value);
    this.books.push(book);
    this.refreshBookList();
    localStorage.setItem('books', JSON.stringify(this.books));
    titleInput.value = '';
    authorInput.value = '';
  }

  removeButton(event) {
    const indexBook = event.currentTarget.dataset.index;
    this.books.splice(parseInt(indexBook, 10), 1);
    this.refreshBookList();
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}

const sections = {
  booklist: document.getElementById('booklist'),
  addbook: document.getElementById('addbook'),
  contact: document.getElementById('contact'),
};

const switchSection = (event) => {
  const { target } = event.currentTarget.dataset;
  Object.keys(sections).forEach((key) => {
    if (key === target) sections[key].classList.add('active');
    else sections[key].classList.remove('active');
  });
};

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((element) => {
  element.addEventListener('click', switchSection);
});

const booklist = new Booklist();
booklist.refreshBookList();
addButton.addEventListener('click', () => {
  booklist.addBook();
});