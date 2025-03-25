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
    const paginationContainer = document.querySelector('.pagination');

    if (!cardContainer) return;

    // Remove previous "No results" message if it exists
    const existingHeading = document.querySelector('.no-results-heading-container');
    if (existingHeading) existingHeading.remove();

    if (query === '') {
        // Reset search
        createCardUtil.resetCards(cardContainer);
        if (paginationContainer) paginationContainer.style.display = 'flex';
        return;
    }

    // Hide pagination when searching
    if (paginationContainer) paginationContainer.style.display = "none";

    // Find matching cards where the name starts with the query
    const matchingCards = plantCards.filter(card => 
        card.name.toLowerCase().startsWith(query)
    );

    createCardUtil.updateCards(matchingCards, cardContainer);

    // If no matches, show the warning message
    if (matchingCards.length === 0) {
        const headingElementTemplate = `
            <div class="no-results-heading-container">
                <h1>No Matching Items Found!</h1>
            </div>`;

        document.body.insertAdjacentHTML('afterbegin', headingElementTemplate);
    }
}



