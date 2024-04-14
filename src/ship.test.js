
// import in the file with the actual functions
const ship = require('./ship');

// 1. Testing the Ship objects' functionality 
// - shipLength
// - shipDamage
// - hit()
// - isSunk()

// test for the shipLength() function
test('a ship of length 5 should return length 5', () => {
    // setup
    const testShip = ship.createShip(5);

    expect(testShip.shipLength()).toBe(5); 
});

// test for the shipDamage() function
test('a ship that has been hit 3 times should have taken 3 damage', () => {
    // setup
    const testShip = ship.createShip(5);
    for (let i = 0; i < 3; i+=1) {
        testShip.hit();
    }

    expect(testShip.shipDamage()).toBe(3); 
});

// test for the hit() function
test('a ship that has been hit should take 1 damage', () => {
    // setup
    const testShip = ship.createShip(5);
    testShip.hit();

    expect(testShip.shipDamage()).toBe(1); 
});

// test for the isSunk() function
test('a length 5 ship that has been hit 5 times should be sunk', () => {
    // setup
    const testShip = ship.createShip(5);
    for (let i = 0; i < 5; i+=1) {
        testShip.hit();
    }

    expect(testShip.isSunk()).toBeTruthy(); 
});