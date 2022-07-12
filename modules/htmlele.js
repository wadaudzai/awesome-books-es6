const sections = {
  booklist: document.getElementById('booklist'),
  addbook: document.getElementById('addbook'),
  contact: document.getElementById('contact'),
};
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const addButton = document.getElementById('submit');
const booksSection = document.getElementById('books-section');
const navLinks = document.querySelectorAll('.nav-link');

export {
  sections, titleInput, authorInput, addButton, booksSection, navLinks,
};