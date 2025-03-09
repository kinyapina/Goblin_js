import './style.css';

import addGoblin from './js/addGoblin';
import deleteGoblin from './js/deleteGoblin';
import { GoblinCounter } from './js/counter';

const fields = document.querySelector('.fields');

for (let i = 0; i < 16; i++) {
  const field = document.createElement('div');

  field.classList.add('field');
  field.setAttribute('data-id', i);

  fields.appendChild(field);
}

document.addEventListener('DOMContentLoaded', () => {
  const goblinInterval = setInterval(() => {
    deleteGoblin();
    addGoblin();
  }, 1000)
});

const goblinCounter = new GoblinCounter();

