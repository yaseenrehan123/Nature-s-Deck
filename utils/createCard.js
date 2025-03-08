import * as cardsDataScript from '../data/cards.js';
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
                            <a href = "">Click here for more info.</a>
                        </p>
                    </details>
                </section>
            </div>`
    
    container.insertAdjacentHTML("beforeend",cardTemplate);        
}
export function createMultipleCards(cardNames, container) {
    cardNames.forEach(cardName => {
        createCard(cardName, container)
    });
}