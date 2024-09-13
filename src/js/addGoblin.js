let currentRandomId = 0;

export default function addGoblin() {
  const field = document.querySelectorAll('.field');

  let newRandomId;

  do {
    newRandomId = Math.floor(Math.random() * field.length);
  }
  while (currentRandomId === newRandomId);

  const newFieldHasGoblin = field[newRandomId];
  newFieldHasGoblin.classList.add('field_has-goblin');
}