
// import in the gameBoard factory
import {
    createGameBoard,
} from './gameBoard.js';

const BOARD_SIZE = 10;

// Player object factory function
const createPlayer = function createPlayer(playerName, isComputer) {
    const playerBoard = createGameBoard(BOARD_SIZE);

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