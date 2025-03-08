import * as navbarScript from './navbar.js'
import * as createCardUtil from '../utils/createCard.js'
navbarScript.initializeNavbar();

const cardContainer = document.querySelector('.card-container');
if (cardContainer) {
    try {
        // Convert dataset string into an array
        const cardNames = JSON.parse(cardContainer.dataset.cards);

        // Call function to create cards dynamically
        createCardUtil.createMultipleCards(cardNames, cardContainer);
    } catch (error) {
        console.error("Error parsing data-cards:", error);
    }
}
