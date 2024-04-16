
// import in the file with the actual functions
import {
    createPlayer,
} from './player';

// Testing the Player objects' functionality
// - name()
// - type()
// - getPlayerBoard()

// test for the name() function
test('Player object should return its name', () => {
    // setup
    const testComputer = createPlayer('CPU', true);
    const testUser = createPlayer('P1', false);

    expect(testComputer.name()).toBe('CPU');
    expect(testUser.name()).toBe('P1'); 
});

// test for the type() function
test('Player object should return whether it is a computer or user', () => {
    // setup
    const testComputer = createPlayer('CPU', true);
    const testUser = createPlayer('P1', false);

    expect(testComputer.type()).toBe('Computer');
    expect(testUser.type()).toBe('User'); 
});

// test for the getPlayerBoard() function
test('Each Player object should contain its own board', () => {
    // setup
    const testComputer = createPlayer('CPU', true);
    const testUser = createPlayer('P1', false);
    const expected = [
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],    
    ];

    expect(testComputer.getPlayerBoard().getBoard()).toEqual(expected);
    expect(testUser.getPlayerBoard().getBoard()).toEqual(expected);
});