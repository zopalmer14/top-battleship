
// import in the Ship factory
const Ship = require('./ship');

// gameBoard factory function
const createGameBoard = function createGameBoard(dimensions) {
    // member variables
    const ships = [];
    const board = setupBoard([], dimensions);

    // getters
    const getShips = () => ships;
    const getBoard = () => board;

    // function to setup an empty board 
    function setupBoard(board, dimensions) {
        for (let row = 0; row < dimensions; row+=1) {
            const boardRow = [];
            for (let col = 0; col < dimensions; col+=1) {
                boardRow.push('');
            }
            board.push(boardRow);
        }
        return board;
    }

    // place a ship on the board
    const placeShip = function placeShip(ship, row, col) {
        // add the ship to the board's ship list
        ships.push(ship);

        return '';
    }

    return {
        getShips,
        getBoard,
        placeShip,
    }
};

module.exports = {
    createGameBoard,
};