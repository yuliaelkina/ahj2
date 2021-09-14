 import getRandomNumber from "./getRandomNumber";

 export default class Game {
   constructor(element) {
      if (typeof element === 'string') {
        element = document.querySelector(element);
      }
      this._element = element;
   }

   startGame() {
    const goblin = document.createElement('img');
    goblin.setAttribute('alt', 'goblin picture');
    goblin.setAttribute('src', 'img/goblin.png');
    const cells = this._element.querySelectorAll('.field__cell');
    const cellWithGoblin = cells[getRandomNumber(0, cells.length - 1)];
    cellWithGoblin.appendChild(goblin);
   }
 }