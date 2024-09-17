import addGoblin from "../js/addGoblin.js";
import deleteGoblin from '../js/deleteGoblin.js';

test('Проверка добавления класса к рандомному элементу', () => {
  document.body.innerHTML = `
      <div class="container">
        <div class="fields">
          <div class="field" data-id="1"></div>
          <div class="field" data-id="2"></div>
          <div class="field" data-id="3"></div>
          <div class="field" data-id="4"></div>
          <div class="field" data-id="5"></div>
          <div class="field" data-id="6"></div>
          <div class="field" data-id="7"></div>
          <div class="field" data-id="8"></div>
          <div class="field" data-id="9"></div>
          <div class="field" data-id="10"></div>
          <div class="field" data-id="11"></div>
          <div class="field" data-id="12"></div>
          <div class="field" data-id="13"></div>
          <div class="field" data-id="14"></div>
          <div class="field" data-id="15"></div>
          <div class="field" data-id="16"></div>
        </div>
      </div>
    `;

  addGoblin();

  const fields = document.querySelectorAll('.field');
  const fieldHasGoblin = Array.from(fields).find(field => field.classList.contains('field_has-goblin'));

  expect(fieldHasGoblin).not.toBeNull();
});

test('Проверка новый индекс не равен предыдущему индексу', () => {
  document.body.innerHTML = `
      <div class="container">
        <div class="fields">
          <div class="field" data-id="1"></div>
          <div class="field" data-id="2"></div>
          <div class="field" data-id="3"></div>
          <div class="field" data-id="4"></div>
          <div class="field" data-id="5"></div>
          <div class="field" data-id="6"></div>
          <div class="field" data-id="7"></div>
          <div class="field" data-id="8"></div>
          <div class="field" data-id="9"></div>
          <div class="field" data-id="10"></div>
          <div class="field" data-id="11"></div>
          <div class="field" data-id="12"></div>
          <div class="field" data-id="13"></div>
          <div class="field" data-id="14"></div>
          <div class="field" data-id="15"></div>
          <div class="field" data-id="16"></div>
        </div>
      </div>
    `;

  addGoblin();

  const fields = document.querySelectorAll('.field');
  const firstGoblinField = Array.from(document.querySelectorAll('.field')).find(field => field.classList.contains('field_has-goblin'));

  deleteGoblin();

  addGoblin();

  const secondGoblinField = Array.from(document.querySelectorAll('.field')).find(field => field.classList.contains('field_has-goblin'));

  expect(secondGoblinField).not.toBe(firstGoblinField);
});