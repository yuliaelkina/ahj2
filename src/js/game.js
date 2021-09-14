/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import getRandomNumber from './getRandomNumber';

export default class Game {
  constructor(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    this._element = element;
  }

  cellChoosing() {
    const cells = this._element.querySelectorAll('.field__cell');
    const cellWithGoblin = cells[getRandomNumber(0, cells.length - 1)];
    return cellWithGoblin;
  }

  startGame() {
    const goblin = document.createElement('img');
    goblin.setAttribute('alt', 'goblin picture');
    goblin.setAttribute('src', 'img/goblin.png');
    goblin.classList.add('goblin');
    this.cellChoosing().appendChild(goblin);
  }

  moveYourGoblin() {
    const Timer = setInterval(() => {
      const goblin = this._element.querySelector('.goblin');
      goblin.closest('.field__cell').innerText = '';
      this.cellChoosing().appendChild(goblin);
    }, 3000);
  }
}
