// Declaring and initializing global variables
const cardsElement = document.getElementById("cards");
let cardList = null;

// async displayCards Function
function displayCards(cards) {
    cards.forEach(card => {

        // some info was forbidden, so I put an "if" to remove the inaccesible data.
        if (card.imageUrl != null) {

            // Getting the data for each card.
            let article = document.createElement("article");

            let h3 = document.createElement("h3");
            h3.textContent = `${card.name}`;

            let h4_art = document.createElement("h4");
            h4_art.textContent = `Card Artist: ${card.artist}`;

            let h4_cardcolors = document.createElement("h4");
            h4_cardcolors.textContent = `Colors: ${card.colors}`;

            let h4_colorIdentity = document.createElement("h4");
            h4_colorIdentity.textContent = `Color Identity: ${card.colorIdentity}`;

            let h4_manacost = document.createElement("h4");
            h4_manacost.textContent = `Mana Cost: ${card.manaCost}`;

            let h4_convertedmanacost = document.createElement("h4");
            h4_convertedmanacost.textContent = `Converted Mana Cost: ${card.cmc}`;
            
            let h4_power = document.createElement("h4");
            h4_power.textContent = `Power: ${card.power}`;

            let h4_toughness = document.createElement("h4");
            h4_toughness.textContent = `Toughness: ${card.toughness}`;

            let h4_layout = document.createElement("h4");
            h4_layout.textContent = `Card Layout: ${card.layout}`;

            let h4_type = document.createElement("h4");
            h4_type.textContent = `Card Type: ${card.type}`;

            let h4_rarity = document.createElement("h4");
            h4_rarity.textContent = `Card Rarity: ${card.rarity}`;
            
            let h4_set = document.createElement("h4");
            h4_set.textContent = `Card Set: ${card.setName}`;

            let h4_text = document.createElement("h4");
            h4_text.innerHTML = `Card Text: ${card.text}`;

            // Getting the image file and setting the attributes.
            let img = document.createElement("img");
            img.setAttribute("src", card.imageUrl);
            img.setAttribute("alt", `${card.name} card image`);

            // Appending the childs to the DOM.
            article.appendChild(h3);
            article.appendChild(img);
            article.appendChild(h4_colorIdentity);
            article.appendChild(h4_cardcolors);
            article.appendChild(h4_manacost);
            article.appendChild(h4_convertedmanacost);
            article.appendChild(h4_power);
            article.appendChild(h4_toughness);
            article.appendChild(h4_layout);
            article.appendChild(h4_type);
            article.appendChild(h4_rarity);
            article.appendChild(h4_set);
            article.appendChild(h4_art);
            article.appendChild(h4_text);
            cardsElement.appendChild(article);
        }
    });
};

// async getCards Function using fetch().
async function getCards() {
    const response = await fetch("https://api.magicthegathering.io/v1/cards")
    if (response.ok) {
        cardList = await response.json();
        displayCards(cardList.cards)
    }
};

// reset function.
const reset = () => {
    cardsElement.innerHTML = "";
};

// Cards filters.
const filterCardsbycolor = (cards) => {
    reset();
    var filterbycolor = document.getElementById("filteredbycolor").value;
    switch (filterbycolor) {
        case "all":
            displayCards(cards);
            break;
        case "W":
            var white = cards.filter(card => card.colorIdentity.includes("W"));
            displayCards(white);
            break;
        case "U":
            var blue = cards.filter(card => card.colorIdentity.includes("U"));
            displayCards(blue);
            break;
    }
}
const filterCardsbytype = (cards) => {
    reset();
    var filterbytype = document.getElementById("filteredbytype").value;
    switch (filterbytype) {
        case "all":
            displayCards(cards);
            break;
        case "Creature":
            var creature = cards.filter(card => card.type.includes("Creature"));
            displayCards(creature);
            break;
        case "Sorcery":
            var sorcery = cards.filter(card => card.type.includes("Sorcery"));
            displayCards(sorcery);
            break;
        case "Instant":
            var instant = cards.filter(card => card.type.includes("Instant"));
            displayCards(instant);
            break;
        case "Enchantment":
            var enchantment = cards.filter(card => card.type.includes("Enchantment"));
            displayCards(enchantment);
            break;
    }
}
const filterCardsbyrarity = (cards) => {
    reset();
    var filterbyrarity = document.getElementById("filteredbyrarity").value;
    switch (filterbyrarity) {
        case "all":
            displayCards(cards);
            break;
        case "Common":
            var common = cards.filter(card => card.rarity.includes("Common"));
            displayCards(common);
            break;
        case "Uncommon":
            var uncommon = cards.filter(card => card.rarity.includes("Uncommon"));
            displayCards(uncommon);
            break;
        case "Rare":
            var rare = cards.filter(card => card.rarity.includes("Rare"));
            displayCards(rare);
            break;
    }
}

// Event Listeners.
document.getElementById("filteredbycolor").addEventListener("change", () => {filterCardsbycolor(cardList.cards)});
document.getElementById("filteredbytype").addEventListener("change", () => {filterCardsbytype(cardList.cards)});
document.getElementById("filteredbyrarity").addEventListener("change", () => {filterCardsbyrarity(cardList.cards)});

// Function Caller
getCards();