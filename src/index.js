
// import CSS styling
import './style.css';

import {
    setupGameBoard,
} from './domController';

const pageInterface = function pageInterface() {
    const iniitalizePage = function iniitalizePage() {
        // To initialize the page . . . 
        // - setup / display the game board
        setupGameBoard(8);
    }
    
    return {
        iniitalizePage
    }
}();

// page run / debug
pageInterface.iniitalizePage();