import addGoblin from "../js/addGoblin.js";

test('should add the class field_has-goblin to a random field', () => {
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

  const fieldHasGoblin = document.querySelector('.field_has-goblin');
  //expect(fieldHasGoblin).toBeInTheDocument();
  expect(fieldHasGoblin.classList).toContain('field_has-goblin');
});