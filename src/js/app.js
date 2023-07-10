import goblinImg from '../img/goblin.png';

export default class Rungoblin {
  constructor(field, hole) {
    this.field = document.getElementById(`${field}`);
    this.boxes = [...this.field.querySelectorAll(`.${hole}`)];
    this.activeBox = null;
  }

  getRandom() {
    const random = Math.floor(Math.random() * this.boxes.length);
    if (random === this.activeBox) {
      this.getRandom();
    } else {
      this.activeBox = random;
    }
  }

  showGoblin() {
    if (document.getElementById('goblin')) {
      document.getElementById('goblin').remove();
    }

    this.getRandom();
    const goblin = new Image();
    goblin.src = goblinImg;
    goblin.id = 'goblin';
    goblin.classList.add('goblin');
    this.boxes[this.activeBox].appendChild(goblin);
  }

  showGoblinInterval(speed) {
    setInterval(() => {
      this.showGoblin();
    }, speed);
  }
}