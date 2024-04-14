
// import in the file with the actual functions
const gameBoard = require('./gameBoard');

// import in the Ship file for testing
const Ship = require('./ship');

// Testing the gameBoard objects' functionality 
// - getShips()
// - getBoard()
// - placeShip(ship, row, col)

// test for the getShips() function
test('a new board should have no ships (empty array)', () => {
    // setup
    const testBoard = gameBoard.createGameBoard(8);

    expect(testBoard.getShips()).toEqual([]); 
});

// test for the getBoard() function
test('a new 8x8 board should return an 8x8 2-D array filled with empty strings', () => {
    // setup
    const testBoard = gameBoard.createGameBoard(8);

    expect(testBoard.getBoard()).toEqual([
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],    
    ]); 
});

// test for the placeShip(ship, row, col) function
test('after a ship is placed on a board it should on its ship list', () => {
    // setup
    const testBoard = gameBoard.createGameBoard(8);
    const testShip = Ship.createShip(5);
    testBoard.placeShip(testShip, 0, 0);

    expect(testBoard.getShips().includes(testShip)).toBeTruthy(); 
});