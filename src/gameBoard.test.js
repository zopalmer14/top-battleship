
// import in the file with the actual functions
import {
    createGameBoard,
} from './gameBoard';

// import in the Ship file for testing
import {
    createShip,
} from './ship';

// Testing the gameBoard objects' functionality 
// - getShips()
// - getBoard()
// - placeShip(ship, row, col, isVert)
// - receiveAttack(row, col)
// - anyShipsRemaining()

// test for the getShips() function
test('a new board should have no ships (empty array)', () => {
    // setup
    const testBoard = createGameBoard(8);

    expect(testBoard.getShips()).toEqual([]); 
});

// test for the getBoard() function
test('a new 8x8 board should return an 8x8 2-D array filled with empty strings', () => {
    // setup
    const testBoard = createGameBoard(8);

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

// tests for the placeShip(ship, row, col, isVert) function
test('after a ship is placed on a board it should on its ship list', () => {
    // setup
    const testBoard = createGameBoard(8);
    const testShip = createShip('test', 5);
    testBoard.placeShip(testShip, 0, 0, false);

    expect(testBoard.getShips().includes(testShip)).toBeTruthy(); 
});

test('if a ship is placed at (0, 0) its callsign should be found there', () => {
    // setup
    const testBoard = createGameBoard(8);
    const testShip = createShip('test', 5);
    testBoard.placeShip(testShip, 0, 0, false);

    const actual = testBoard.getBoard()[0][0];
    const expected = 'test';

    expect(actual).toBe(expected); 
});

test('if a ship of length 3 is placed vertically at (1, 2) its callsign should be at (1, 2), (2, 2), and (3, 2)', () => {
    // setup
    const testBoard = createGameBoard(8);
    const testShip = createShip('Sub', 3);
    testBoard.placeShip(testShip, 1, 2, true);

    const board = testBoard.getBoard();
    expect(board[1][2]).toBe('Sub');
    expect(board[2][2]).toBe('Sub');
    expect(board[3][2]).toBe('Sub'); 
});

test('if a ship is placed in an invalid location it should not be added and an error message should be returned', () => {
    // setup
    const testBoard = createGameBoard(8);
    const testShip = createShip('Sub', 3);

    const result = testBoard.placeShip(testShip, 7, 7, true);
    const errorMessage = 'Error: invalid position, ship does not fit within board dimensions';

    expect(testBoard.getShips().includes(testShip)).toBeFalsy();
    expect(result).toBe(errorMessage); 
});

// tests for the receiveAttack(row, col) function
test('if (0, 0) receives an attack the board should contain an "X" at (0, 0)', () => {
    // setup
    const testBoard = createGameBoard(8);
    testBoard.receiveAttack(0, 0);

    const board = testBoard.getBoard();
    expect(board[0][0]).toBe('X');
});

test('if a ship is at (0, 0) and an attack is received here the ship should take damage', () => {
    // setup
    const testBoard = createGameBoard(8);
    const testShip = createShip('Sub', 3);
    testBoard.placeShip(testShip, 0, 0, false);

    testBoard.receiveAttack(0, 0);
    const actualDamage = testShip.damage();

    expect(actualDamage).toBe(1);
});

test('if a ship is at (0, 0) and two attacks are received here the ship should only take one damage', () => {
    // setup
    const testBoard = createGameBoard(8);
    const testShip = createShip('Sub', 3);
    testBoard.placeShip(testShip, 0, 0, false);

    testBoard.receiveAttack(0, 0);
    testBoard.receiveAttack(0, 0);
    const actualDamage = testShip.damage();

    expect(actualDamage).toBe(1);
});

test('if a ship of length 3 is at (0, 0) and attacks are received at (0, 0) and (0, 1), the ship should take two damage', () => {
    // setup
    const testBoard = createGameBoard(8);
    const testShip = createShip('Sub', 3);
    testBoard.placeShip(testShip, 0, 0, false);

    testBoard.receiveAttack(0, 0);
    testBoard.receiveAttack(0, 1);
    const actualDamage = testShip.damage();

    expect(actualDamage).toBe(2);
});

test('if a ship of length 3 is at (0, 0) and attacks are received at (0, 0), (0, 1), and (0, 2), the ship should be sunk', () => {
    // setup
    const testBoard = createGameBoard(8);
    const testShip = createShip('Sub', 3);
    testBoard.placeShip(testShip, 0, 0, false);

    testBoard.receiveAttack(0, 0);
    testBoard.receiveAttack(0, 1);
    testBoard.receiveAttack(0, 2);

    expect(testShip.isSunk()).toBeTruthy();
});

test('if an attack is received outside of the board bounds, an error message should be returned', () => {
    // setup
    const testBoard = createGameBoard(8);

    const result = testBoard.receiveAttack(-1, 0);
    const errorMessage = 'Error: attack position outside of board bounds';

    expect(result).toBe(errorMessage); 
});

// tests for anyShipsRemaining()
test('if a board has a ship of length 3 at (0, 0), there should be ships remaining', () => {
    // setup
    const testBoard = createGameBoard(8);
    const testShip = createShip('Sub', 3);
    testBoard.placeShip(testShip, 0, 0, false);

    expect(testBoard.anyShipsRemaining()).toBeTruthy();
});

test('if a board has a ship of length 3 at (0, 0) and it is sunk, there should be no ships remaining', () => {
    // setup
    const testBoard = createGameBoard(8);
    const testShip = createShip('Sub', 3);
    testBoard.placeShip(testShip, 0, 0, false);

    testBoard.receiveAttack(0, 0);
    testBoard.receiveAttack(0, 1);
    testBoard.receiveAttack(0, 2);

    expect(testBoard.anyShipsRemaining()).toBeFalsy();
});

test('if a board has two ships and one is sunk, there should be ships remaining', () => {
    // setup
    const testBoard = createGameBoard(8);
    const testShip = createShip('Sub', 3);
    const patrolBoat = createShip('Patrol', 2);
    testBoard.placeShip(testShip, 0, 0, false);
    testBoard.placeShip(patrolBoat, 1, 0, false);

    testBoard.receiveAttack(0, 0);
    testBoard.receiveAttack(0, 1);
    testBoard.receiveAttack(0, 2);

    expect(testBoard.anyShipsRemaining()).toBeTruthy();
});

test('if a board has two ships and both are sunk, there should be no ships remaining', () => {
    // setup
    const testBoard = createGameBoard(8);
    const testShip = createShip('Sub', 3);
    const patrolBoat = createShip('Patrol', 2);
    testBoard.placeShip(testShip, 0, 0, false);
    testBoard.placeShip(patrolBoat, 1, 0, false);

    testBoard.receiveAttack(0, 0);
    testBoard.receiveAttack(0, 1);
    testBoard.receiveAttack(0, 2);

    testBoard.receiveAttack(1, 0);
    testBoard.receiveAttack(1, 1);

    expect(testBoard.anyShipsRemaining()).toBeFalsy();
});
