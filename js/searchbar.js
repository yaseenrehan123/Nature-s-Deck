import * as createCardUtil from '../utils/createCard.js';
import { plantCards } from '../data/cardsData.js';

export function initializeSearchbar() {
    const searchbarContainer = document.querySelector('.searchbar-container');
    if (!searchbarContainer) return;

    searchbarContainer.innerHTML = `<input type="text" class="searchbar" placeholder="Search plants...">`;

    const searchbar = document.querySelector('.searchbar');
    searchbar.addEventListener('input', handleSearch);
}

function handleSearch(event) {
    const query = event.target.value.toLowerCase().trim();
    const cardContainer = document.querySelector('.card-container');

    if (!cardContainer) return;

    if (query === '') {
        // If search is cleared, reset pagination and restore default cards
        createCardUtil.resetCards(cardContainer);
        return;
    }

    // Find matching cards where the name starts with the query
    const matchingCards = plantCards.filter(card => 
        card.name.toLowerCase().startsWith(query) // <-- Only matches names that start with the query
    );

    createCardUtil.updateCards(matchingCards, cardContainer);
}


