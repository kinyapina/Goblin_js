import './style.css';

import addGoblin from './js/addGoblin';
import deleteGoblin from './js/deleteGoblin';

document.addEventListener('DOMContentLoaded', () => {
  const goblinInterval = setInterval(() => {
    deleteGoblin();
    addGoblin();
  }, 1000)
});