import defaultCharacter from './domain.js';

export default class Game {
    start() {
        console.log('game started');
    }
}
  
export class GameSavingData {
}
  
function readGameSaving() {
}
  
function writeGameSaving() {
}

export {readGameSaving, writeGameSaving}