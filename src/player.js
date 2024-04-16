
// import in the gameBoard factory
const gameBoard = require('./gameBoard');

// Player object factory function
const createPlayer = function createPlayer(isComputer) {
    const playerBoard = gameBoard.createGameBoard(8);

    // getters
    const type = () => isComputer ? 'Computer' : 'User';
    const getPlayerBoard = () => playerBoard;

    return {
        type,
        getPlayerBoard
    }
};

module.exports = {
    createPlayer,
};