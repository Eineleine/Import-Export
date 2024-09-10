import defaultCharacter from './domain.js';

export class GameSavingData{};
const defaultGame = new Game();
export default defaultGame;

class Game {
    start() {
        console.log('game started');
    }
}
  
class GameSavingData {
}
  
function readGameSaving() {
}
  
function writeGameSaving() {
}

export {readGameSaving, writeGameSaving}