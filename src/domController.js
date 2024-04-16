

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

export {
    setupGameBoard,
};
