import * as cardsDataScript from '../data/cardsData.js';
export function createCard(cardName,container){
    // get the card we want to create through Normalization
    const card = cardsDataScript.plantCards.find(plantCard => plantCard.name === cardName);
    console.log(card);
    const cardTemplate = `<div class="card">
                <div class="card-image-container">
                    <img src = "${card.imgSrc}" class="card-image" alt="${card.imgAlt}">
                </div>
                <section class="card-content">
                    <h1 class="card-name">${card.name}</h1>
                    <details class="card-details">
                        <summary class="read-more-btn">Read More</summary>
                        <p class="color-white">
                            ${card.description}
                            <a href = "${card.pageLink}">Click here for more info.</a>
                        </p>
                    </details>
                </section>
            </div>`
    
    container.insertAdjacentHTML("beforeend",cardTemplate);        
}
export function createMultipleCards(cardNames, container) {
    let cardNum = 0;
    cardNames.forEach(cardName => {
        createCard(cardName, container)
        cardNum++;
    });
    console.log(`Number of cards is: ${cardNum}`);
}
export function updateCards(matchingCards, container) {
    // Remove all current cards
    container.innerHTML = '';

    // Generate only matching cards
    createMultipleCards(matchingCards.map(card => card.name), container);
}

export function resetCards(container) {
    container.innerHTML = '';
    // Restore original set of cards (from dataset)
    const cardNames = JSON.parse(container.dataset.cards);
    createMultipleCards(cardNames, container);
}
