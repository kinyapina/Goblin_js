export default function deleteGoblin() {
  const fieldHasGoblin = document.querySelector('.field_has-goblin');

  if (fieldHasGoblin) {
    fieldHasGoblin.classList.remove('field_has-goblin');
  }
}