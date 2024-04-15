
// Ship Factory
const createShip = function createShip(name, len) {
    let timesHit = 0;

    // getters 
    const callsign = () => name;
    const damage = () => timesHit;
    const length = () => len;

    // setters 
    const hit = () => {timesHit += 1};

    const isSunk = () => timesHit >= len;

    return { 
        callsign,
        damage, 
        length,
        hit,
        isSunk,
    }
}

// exports
module.exports = {
    createShip,
};