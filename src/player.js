
// import in the gameBoard factory
import {
    createGameBoard,
} from './gameBoard';

// Player object factory function
const createPlayer = function createPlayer(isComputer) {
    const playerBoard = createGameBoard(8);

    // getters
    const type = () => isComputer ? 'Computer' : 'User';
    const getPlayerBoard = () => playerBoard;

    return {
        type,
        getPlayerBoard
    }
};

export {
    createPlayer,
};