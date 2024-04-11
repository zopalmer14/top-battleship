
// Ship Factory
const createShip = function createShip(length) {
    let times_hit = 0;

    // getters 
    const shipDamage = () => times_hit;
    const shipLength = () => length;

    // setters 
    const hit = () => times_hit++;

    const isSunk = () => times_hit >= length;

    return {  
        shipDamage, 
        shipLength,
        hit,
        isSunk,
    }
}