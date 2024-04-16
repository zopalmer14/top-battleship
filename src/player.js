
// import in the gameBoard factory
import {
    createGameBoard,
} from './gameBoard.js';

// Player object factory function
const createPlayer = function createPlayer(playerName, isComputer) {
    const playerBoard = createGameBoard(8);

    // getters
    const name = () => playerName;
    const type = () => isComputer ? 'Computer' : 'User';
    const getPlayerBoard = () => playerBoard;

    return {
        name,
        type,
        getPlayerBoard
    }
};

export {
    createPlayer,
};