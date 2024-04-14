
// Ship Factory
const createShip = function createShip(length) {
    let timesHit = 0;

    // getters 
    const shipDamage = () => timesHit;
    const shipLength = () => length;

    // setters 
    const hit = () => {timesHit += 1};

    const isSunk = () => timesHit >= length;

    return {  
        shipDamage, 
        shipLength,
        hit,
        isSunk,
    }
}

// exports
module.exports = {
    createShip,
};