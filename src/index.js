import './style.css';

//Реализация поля 4*4 через js
const fields = document.querySelector('.fields');

for (let i = 0; i < 16; i++) {
  const field = document.createElement('div');

  field.classList.add('field');
  field.setAttribute('data-id', i);

  fields.appendChild(field);
}

import addGoblin from './js/addGoblin';
import deleteGoblin from './js/deleteGoblin';

document.addEventListener('DOMContentLoaded', () => {
  const goblinInterval = setInterval(() => {
    deleteGoblin();
    addGoblin();
  }, 1000)
});