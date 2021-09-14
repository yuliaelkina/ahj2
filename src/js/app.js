// TODO: write code here
import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  const goblinGame = new Game('.game');
  goblinGame.startGame();
  goblinGame.moveYourGoblin();
});
