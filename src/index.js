
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

const DOMController = function DOMController() {
    const setupGameBoard = function setupGameBoard(dimensions) {
        // DOM references 
        const main_section = document.querySelector('main');

        // create the grid for the board
        const board_grid = document.createElement('div');
        board_grid.classList.add('board-grid');
        board_grid.style.gridTemplate = `repeat(${dimensions}, 1fr) / repeat(${dimensions}, 1fr)`;

        // create the grid spaces / tiles
        for (let i = 0; i < dimensions; i++) {
            for (let j = 0; j < dimensions; j++) {
                const grid_space = document.createElement('div');
                grid_space.classList.add('grid-space');
                board_grid.appendChild(grid_space);
            }
        }

        // append the game board to the main section
        main_section.appendChild(board_grid);
    }

    return {
        setupGameBoard
    }
}();

const pageInterface = function pageInterface() {
    const iniitalizePage = function iniitalizePage() {
        // To initialize the page . . . 
        // - setup / display the game board
        DOMController.setupGameBoard(8);
    }
    
    return {
        iniitalizePage
    }
}();

// page run / debug
pageInterface.iniitalizePage();