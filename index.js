/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
import { addButton, navLinks } from './modules/htmlele.js';
import Booklist from './modules/booklist.js';
import switchSection from './modules/navchange.js';
import { DateTime } from './modules/luxon.js';

document.getElementById('date').innerText = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
navLinks.forEach((element) => {
  element.addEventListener('click', switchSection);
});

const booklist = new Booklist();
booklist.refreshBookList();
addButton.addEventListener('click', () => {
  booklist.addBook();
});
