export class GoblinCounter {
  constructor(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }

    this.goblinCounter = document.querySelector('.counter'); 
    this.onClick = this.onClick.bind(this);

    this.counterOnClick = 0;
    this.counterOutClick = 0;

    document.documentElement.addEventListener('click', this.onClick, true);
  }

  onClick(e) {
    const target = e.target;

    if (target.classList.contains('field_has-goblin')) {
      this.counterOnClick++;
      return;
    } else {
      this.counterOutClick++;
      if (this.counterOutClick === 5) {
        alert('GAME OVER! You FAILED!');
        this.counterOutClick = 0;
      }
      return;
    }    
  }
}

