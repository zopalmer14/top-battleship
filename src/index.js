
// import CSS styling
import './style.css';

// import functions from other JS modules
import {
    setupGameBoard,
} from './domController.js';

import { createPlayer } from './player.js';

const pageInterface = function pageInterface() {
    let P1;
    const CPU = createPlayer('CPU', true);

    const initalizePage = function initalizePage() {
        // To initialize the page . . . 
        // - setup the start game button / interaction
        setupStartGame();
    }

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

            // create two boards in the DOM -- one for the user and one for the CPU
            setupGameBoard(8);
            setupGameBoard(8);

            // reset the form inputs
            startGameForm.reset(); 
        });
    }
    
    return {
        initalizePage
    }
}();

// page run / debug
pageInterface.initalizePage();