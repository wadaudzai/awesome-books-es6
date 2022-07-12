import { sections } from './htmlele.js';

const switchSection = (event) => {
  const { target } = event.currentTarget.dataset;
  Object.keys(sections).forEach((key) => {
    if (key === target) sections[key].classList.add('active');
    else sections[key].classList.remove('active');
  });
};

export default switchSection;