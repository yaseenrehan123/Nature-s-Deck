import * as navbarScript from './navbar.js'
import * as createCardUtil from '../utils/createCard.js'
import * as paginationScript from './pagination.js';
import * as searchbarScript from './searchbar.js';
navbarScript.initializeNavbar();
searchbarScript.initializeSearchbar();

paginationScript.createPagination(".pagination", 5);

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
