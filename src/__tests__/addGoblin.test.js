import addGoblin from "../js/addGoblin";

let container;

beforeEach(() => {
  container = document.createElement('div');

  container.innerHTML = `
    <div class='field'></div>
    <div class='field'></div>
    <div class='field'></div>
  `;

  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
});

test('Проверка добавления класса "field_has-goblin" для рандомного элемента', () => {
  addGoblin();

  const fields = container.querySelectorAll('.field');
  const fieldHasGoblin = Array.from(fields).some(field => field.classList.contains('field_has-goblin'));

  expect(fieldHasGoblin).toBe(true);
})

test('Проверка добавления класса только к одному элементу', () => {
  addGoblin();
  addGoblin();

  const fields = container.querySelectorAll('.field');
  const fieldHasGoblinCount = Array.from(fields).filter(field => field.classList.contains('field_has - goblin')).length;

  expect(fieldHasGoblinCount).toBeGreaterThan(0);
  expect(fieldHasGoblinCount).toBeLessThanOrEqual(1);
});