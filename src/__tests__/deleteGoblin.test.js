import deleteGoblin from '../js/deleteGoblin.js';
import addGoblin from '../js/addGoblin.js';

test('Проверка удаления класса у объекта', () => {
  document.body.innerHTML = `
      <div class="container">
        <div class="fields">
          <div class="field"></div>
          <div class="field"></div>
          <div class="field"></div>
          <div class="field"></div>
          <div class="field"></div>
          <div class="field"></div>
          <div class="field"></div>
        </div>
      </div>
    `;

  addGoblin();

  const fieldHasGoblin = document.querySelector('.field_has-goblin');

  deleteGoblin();

  expect(fieldHasGoblin.classList).not.toContain('field_has-goblin');
});