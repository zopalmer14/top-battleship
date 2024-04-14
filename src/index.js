
// import CSS styling
import './style.css';

const DOMController = function DOMController() {
    const setupGameBoard = function setupGameBoard(dimensions) {
        // DOM references 
        const mainSection = document.querySelector('main');

        // create the grid for the board
        const boardGrid = document.createElement('div');
        boardGrid.classList.add('board-grid');
        boardGrid.style.gridTemplate = `repeat(${dimensions}, 1fr) / repeat(${dimensions}, 1fr)`;

        // create the grid spaces / tiles
        for (let i = 0; i < dimensions; i+=1) {
            for (let j = 0; j < dimensions; j+=1) {
                const gridSpace = document.createElement('div');
                gridSpace.classList.add('grid-space');
                boardGrid.appendChild(gridSpace);
            }
        }

        // append the game board to the main section
        mainSection.appendChild(boardGrid);
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