
// import CSS styling
import './style.css';

// import functions from other JS modules
import {
    displayGameBoard,
} from './domController.js';

import { createPlayer } from './player.js';

const BOARD_SIZE = 10;

const pageInterface = function pageInterface() {
    // player references
    let P1;
    const CPU = createPlayer('CPU', true);
    let activePlayer = CPU;

    // DOM referencs
    const playerDOMBoard = document.querySelector('#P1');
    const cpuDOMBoard = document.querySelector('#CPU');
    let activeDOMBoard = cpuDOMBoard;

    const initalizePage = function initalizePage() {
        // To initialize the page . . . 
        // - setup the start game button / interaction
        setupStartGame();
    }

    // JS logic for the start game UI
    function setupStartGame() {
        // dom references
        const startGameButton = document.querySelector('header > button');
        const startGameDialog = document.querySelector('dialog');
        const startGameForm = document.querySelector('form'); 

        // open the start game form when the user clicks the button
        startGameButton.addEventListener('click', () => {
            startGameDialog.showModal();
        });

        // create the Players and start the game when the user submits the form
        startGameForm.addEventListener('submit', (event) => {
            // create a new Player with the form info
            P1 = createPlayer(event.target.playerName.value, false);

            // get the player gameBoards
            const playerGameBoard = P1.getPlayerBoard();
            const cpuGameBoard = CPU.getPlayerBoard();

            // show the game boards in the front-end
            playerDOMBoard.classList.remove('hidden');
            cpuDOMBoard.classList.remove('hidden');

            // update the two boards in the DOM with the back-end data
            displayGameBoard(playerDOMBoard, playerGameBoard.getBoard(), clickSpace, BOARD_SIZE);
            displayGameBoard(cpuDOMBoard, cpuGameBoard.getBoard(), clickSpace, BOARD_SIZE);

            // setup the boards in the default positions
            playerGameBoard.defaultShipPlacements();
            cpuGameBoard.defaultShipPlacements();

            // reset the form inputs
            startGameForm.reset(); 
        });
    }

    // switches the active board in the front and back end
    function switchActive() {
        // switch the active player
        activePlayer = (activePlayer === CPU) ? P1 : CPU;

        // remove 'active' status from the current active DOM board
        activeDOMBoard.classList.remove('active');

        // switch the active DOM board
        activeDOMBoard = (activeDOMBoard === cpuDOMBoard) ? playerDOMBoard : cpuDOMBoard;

        // add 'active' status to the newly active DOM board
        activeDOMBoard.classList.add('active');
    }

    // eventListener function that reacts to a grid space being clicked 
    function clickSpace(event) {
        const boardSpace = event.target;
        const boardGrid = boardSpace.parentNode;

        // only valid if the board is 'active'
        if (boardGrid.classList.contains('active')) {
            console.log(boardGrid);
            console.log(boardSpace);

            // send an attack to the active game board
            const activeGameBoard = activePlayer.getPlayerBoard();
            activeGameBoard.receiveAttack(boardSpace.dataset.row, boardSpace.dataset.col);

            // re-render the active board to reflect the change
            displayGameBoard (
                activeDOMBoard, 
                activeGameBoard.getBoard(), 
                clickSpace, 
                BOARD_SIZE
            );

            // switch the active player and DOM board
            switchActive();
        }
    }
    
    return {
        initalizePage
    }
}();

// page run / debug
pageInterface.initalizePage();