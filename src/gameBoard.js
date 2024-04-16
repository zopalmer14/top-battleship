
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
    const placeShip = function placeShip(ship, row, col, isVert) {
        // determine the bounds to check based on the ship direction
        const start = isVert ? row : col
        const end = start + ship.length();

        // check that the ship fits
        if (end < dimensions) {
            // mark the appropriate spaces on the board with the ship's callsign
            for (let pos = start; pos <= end; pos+=1) {
                if (isVert) {
                    board[pos][col] = ship.callsign();
                } else {
                    board[row][pos] = ship.callsign();
                }
            }

            // add the ship to the board's ship list
            ships.push(ship);
        } else {
            // return an error message otherwise
            return 'Error: invalid position, ship does not fit within board dimensions';
        }
    }

    const receiveAttack = function receiveAttack(row, col) {
        // check that the attack is within the board bounds
        if (row < dimensions && row >= 0 && col < dimensions && col >= 0) {
            // grab the current value at the space
            const currVal = board[row][col];

            // check if a ship is there
            if (currVal != '' && currVal != 'X') {
                // iterate over the ships and call hit() on the appropriate one
                for (let i = 0; i < ships.length; i+=1) {
                    if (currVal === ships[i].callsign()) {
                        ships[i].hit();
                    }
                }
            }

            // mark the space on the board with an 'X'
            board[row][col] = 'X';
        } else {
            // return an error message otherwise
            return 'Error: attack position outside of board bounds';
        }
    }

    // returns whether or not all of the ships on the Gameboard have been sunk
    const anyShipsRemaining = function anyShipsRemaining() {
        return ships.some((ship) => !ship.isSunk());
    };

    return {
        getShips,
        getBoard,
        placeShip,
        receiveAttack,
        anyShipsRemaining,
    }
};

module.exports = {
    createGameBoard,
};