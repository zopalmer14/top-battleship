
// setup and display the game board
// - boardGrid: front-end representation of the board
// - boardInfo: back-end 2-D array of board contents 
// - clickFn: function to execute upon a valid board space being clicked
// - dimensions: the size of the game board 
const displayGameBoard = function displayGameBoard(boardGrid, boardInfo, clickFn, dimensions) {
    // empty the grid 
    boardGrid.replaceChildren();

    boardGrid.style.gridTemplate = `repeat(${dimensions}, 1fr) / repeat(${dimensions}, 1fr)`;

    // create the grid spaces / tiles
    for (let i = 0; i < dimensions; i+=1) {
        for (let j = 0; j < dimensions; j+=1) {
            const gridSpace = document.createElement('div');
            gridSpace.classList.add('grid-space');
            gridSpace.dataset.row = i;
            gridSpace.dataset.col = j;

            // check if the space has already been attacked
            if (boardInfo[i][j] === 'X') {
                gridSpace.style.backgroundColor = 'red';
                gridSpace.style.pointerEvents = 'none';
            } else if (boardInfo[i][j] === 'O') {
                gridSpace.textContent = 'X';
                gridSpace.style.backgroundColor = 'green';
                gridSpace.style.pointerEvents = 'none';
            } else {
                gridSpace.addEventListener('click', (event) => clickFn(event));

            }

            boardGrid.appendChild(gridSpace);
        }
    }
}

export {
    displayGameBoard,
};
