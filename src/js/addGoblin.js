export default function addGoblin() {
  const field = document.querySelectorAll('.field');
  const randomId = Math.floor(Math.random() * field.length);

  const newFieldHasGoblin = field[randomId];
  newFieldHasGoblin.classList.add('field_has-goblin');
}