
// import CSS styling
import './style.css';

// import functions from other JS modules
import {
    setupGameBoard,
} from './domController.js';

import { createPlayer } from './player.js';

import { createShip } from './ship.js';

const BOARD_SIZE = 10;

const pageInterface = function pageInterface() {
    let P1;
    const CPU = createPlayer('CPU', true);

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
            console.log(P1);

            // create two boards in the DOM -- one for the user and one for the CPU
            setupGameBoard(BOARD_SIZE);
            setupGameBoard(BOARD_SIZE);

            // setup the boards in the default positions
            defaultShipPlacements(P1.getPlayerBoard());
            defaultShipPlacements(CPU.getPlayerBoard());

            // reset the form inputs
            startGameForm.reset(); 
        });
    }

    // helper / debug function that automatically sets up the default ship positions for the given board
    function defaultShipPlacements(board) {
        // default ships
        const battleship = createShip('Battleship', 5);
        const cruiser = createShip('Cruiser', 4);
        const sub = createShip('Sub', 3);
        const patrolBoat = createShip('Patrol Boat', 2);

        // battleship from (0, 0) to (0, 4)
        board.placeShip(battleship, 0, 0, false);

        // cruiser from (6, 9) to (9, 9)
        board.placeShip(cruiser, 6, 9, true);

        // sub from (0, 7) to (0, 9)
        board.placeShip(sub, 0, 7, false);

        // patrol boat from (8, 0) to (9, 0)
        board.placeShip(patrolBoat, 8, 0, true);
    }
    
    return {
        initalizePage
    }
}();

// page run / debug
pageInterface.initalizePage();