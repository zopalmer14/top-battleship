
// import in the file with the actual functions
const Ship = require('./ship');

// Testing the Ship objects' functionality
// - callsign 
// - length
// - damage
// - hit()
// - isSunk()

// test for the callsign() function
test('callsign should return the appropriate ship name', () => {
    // setup
    const testShip = Ship.createShip('test', 5);

    expect(testShip.callsign()).toBe('test'); 
});

// test for the length() function
test('a ship of length 5 should return length 5', () => {
    // setup
    const testShip = Ship.createShip('test', 5);

    expect(testShip.length()).toBe(5); 
});

// test for the damage() function
test('a ship that has been hit 3 times should have taken 3 damage', () => {
    // setup
    const testShip = Ship.createShip('test', 5);
    for (let i = 0; i < 3; i+=1) {
        testShip.hit();
    }

    expect(testShip.damage()).toBe(3); 
});

// test for the hit() function
test('a ship that has been hit should take 1 damage', () => {
    // setup
    const testShip = Ship.createShip('test', 5);
    testShip.hit();

    expect(testShip.damage()).toBe(1); 
});

// test for the isSunk() function
test('a length 5 ship that has been hit 5 times should be sunk', () => {
    // setup
    const testShip = Ship.createShip('test', 5);
    for (let i = 0; i < 5; i+=1) {
        testShip.hit();
    }

    expect(testShip.isSunk()).toBeTruthy(); 
});