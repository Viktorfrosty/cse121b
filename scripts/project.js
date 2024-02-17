// Declaring and initializing global variables
const cardsElement = document.getElementById("cards");

// Array.
let cardList = [];

// async displayCards Function
function displayCards(cards) {

    // Array iteration.
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

// Reset function, this will clean the list.
const reset = () => {
    cardsElement.innerHTML = "";
};

// Cards filters.
const filterCards = (cards) => {

    // Reset function caller.
    reset();

    // Internal variables of the function, these are modified by the eventlisteners.
    var filterbycolor = document.getElementById("filteredbycolor").value;
    var filterbytype = document.getElementById("filteredbytype").value;
    var filterbyrarity = document.getElementById("filteredbyrarity").value;

    // Conditional branching.
    switch (true) {
        
        // Case evaluators for the different possible combinations obtained from the selectors.
        case (filterbycolor == "all" && filterbytype == "all" && filterbyrarity == "all"):
            displayCards(cards)
            break;
        
        case (filterbycolor == "W" && filterbytype == "all" && filterbyrarity == "all"):
            var white = cards.filter(card => card.colorIdentity.includes("W"));
            displayCards(white);
            break;

        case (filterbycolor == "W" && filterbytype == "Creature" && filterbyrarity == "all"):
            var white = cards.filter(card => card.colorIdentity.includes("W"));
            var white_creature = white.filter(card => card.type.includes("Creature"));
            displayCards(white_creature);
            break;

        case (filterbycolor == "W" && filterbytype == "Creature" && filterbyrarity == "Common"):
            var white = cards.filter(card => card.colorIdentity.includes("W"));
            var white_creature = white.filter(card => card.type.includes("Creature"));
            var white_creature_common = white_creature.filter(card => card.rarity.includes("Common"));
            displayCards(white_creature_common);
            break;

        case (filterbycolor == "W" && filterbytype == "Creature" && filterbyrarity == "Uncommon"):
            var white = cards.filter(card => card.colorIdentity.includes("W"));
            var white_creature = white.filter(card => card.type.includes("Creature"));
            var white_creature_uncommon = white_creature.filter(card => card.rarity.includes("Uncommon"));
            displayCards(white_creature_uncommon);
            break;
        
        case (filterbycolor == "W" && filterbytype == "Creature" && filterbyrarity == "Rare"):
            var white = cards.filter(card => card.colorIdentity.includes("W"));
            var white_creature = white.filter(card => card.type.includes("Creature"));
            var white_creature_rare = white_creature.filter(card => card.rarity.includes("Rare"));
            displayCards(white_creature_rare);
            break;

        case (filterbycolor == "W" && filterbytype == "Sorcery" && filterbyrarity == "all"):
            var white = cards.filter(card => card.colorIdentity.includes("W"));
            var white_sorcery = white.filter(card => card.type.includes("Sorcery"));
            displayCards(white_sorcery);
            break;

        case (filterbycolor == "W" && filterbytype == "Sorcery" && filterbyrarity == "Common"):
            var white = cards.filter(card => card.colorIdentity.includes("W"));
            var white_sorcery = white.filter(card => card.type.includes("Sorcery"));
            var white_sorcery_common = white_sorcery.filter(card => card.rarity.includes("Common"));
            displayCards(white_sorcery_common);
            break;

        case (filterbycolor == "W" && filterbytype == "Sorcery" && filterbyrarity == "Uncommon"):
            var white = cards.filter(card => card.colorIdentity.includes("W"));
            var white_sorcery = white.filter(card => card.type.includes("Sorcery"));
            var white_sorcery_uncommon = white_sorcery.filter(card => card.rarity.includes("Uncommon"));
            displayCards(white_sorcery_uncommon);
            break;
        
        case (filterbycolor == "W" && filterbytype == "Sorcery" && filterbyrarity == "Rare"):
            var white = cards.filter(card => card.colorIdentity.includes("W"));
            var white_sorcery = white.filter(card => card.type.includes("Sorcery"));
            var white_sorcery_rare = white_sorcery.filter(card => card.rarity.includes("Rare"));
            displayCards(white_sorcery_rare);
            break;

        case (filterbycolor == "W" && filterbytype == "Instant" && filterbyrarity == "all"):
            var white = cards.filter(card => card.colorIdentity.includes("W"));
            var white_instant = white.filter(card => card.type.includes("Instant"));
            displayCards(white_instant);
            break;

        case (filterbycolor == "W" && filterbytype == "Instant" && filterbyrarity == "Common"):
            var white = cards.filter(card => card.colorIdentity.includes("W"));
            var white_instant = white.filter(card => card.type.includes("Instant"));
            var white_instant_common = white_instant.filter(card => card.rarity.includes("Common"));
            displayCards(white_instant_common);
            break;

        case (filterbycolor == "W" && filterbytype == "Instant" && filterbyrarity == "Uncommon"):
            var white = cards.filter(card => card.colorIdentity.includes("W"));
            var white_instant = white.filter(card => card.type.includes("Instant"));
            var white_instant_uncommon = white_instant.filter(card => card.rarity.includes("Uncommon"));
            displayCards(white_instant_uncommon);
            break;
        
        case (filterbycolor == "W" && filterbytype == "Instant" && filterbyrarity == "Rare"):
            var white = cards.filter(card => card.colorIdentity.includes("W"));
            var white_instant = white.filter(card => card.type.includes("Instant"));
            var white_instant_rare = white_instant.filter(card => card.rarity.includes("Rare"));
            displayCards(white_instant_rare);
            break;

        case (filterbycolor == "W" && filterbytype == "Enchantment" && filterbyrarity == "all"):
            var white = cards.filter(card => card.colorIdentity.includes("W"));
            var white_enchantment = white.filter(card => card.type.includes("Enchantment"));
            displayCards(white_enchantment);
            break;

        case (filterbycolor == "W" && filterbytype == "Enchantment" && filterbyrarity == "Common"):
            var white = cards.filter(card => card.colorIdentity.includes("W"));
            var white_enchantment = white.filter(card => card.type.includes("Enchantment"));
            var white_enchantment_common = white_enchantment.filter(card => card.rarity.includes("Common"));
            displayCards(white_enchantment_common);
            break;

        case (filterbycolor == "W" && filterbytype == "Enchantment" && filterbyrarity == "Uncommon"):
            var white = cards.filter(card => card.colorIdentity.includes("W"));
            var white_enchantment = white.filter(card => card.type.includes("Enchantment"));
            var white_enchantment_uncommon = white_enchantment.filter(card => card.rarity.includes("Uncommon"));
            displayCards(white_enchantment_uncommon);
            break;
        
        case (filterbycolor == "W" && filterbytype == "Enchantment" && filterbyrarity == "Rare"):
            var white = cards.filter(card => card.colorIdentity.includes("W"));
            var white_enchantment = white.filter(card => card.type.includes("Enchantment"));
            var white_enchantment_rare = white_enchantment.filter(card => card.rarity.includes("Rare"));
            displayCards(white_enchantment_rare);
            break;
        
        case (filterbycolor == "all" && filterbytype == "Creature" && filterbyrarity == "all"):
            var creature = cards.filter(card => card.type.includes("Creature"));
            displayCards(creature);
            break;

        case (filterbycolor == "all" && filterbytype == "Creature" && filterbyrarity == "Common"):
            var creature = cards.filter(card => card.type.includes("Creature"));
            var creature_common = creature.filter(card => card.rarity.includes("Common"));
            displayCards(creature_common);
            break;

       case (filterbycolor == "all" && filterbytype == "Creature" && filterbyrarity == "Uncommon"):
            var creature = cards.filter(card => card.type.includes("Creature"));
            var creature_uncommon = creature.filter(card => card.rarity.includes("Uncommon"));
            displayCards(creature_uncommon);
            break;

        case (filterbycolor == "all" && filterbytype == "Creature" && filterbyrarity == "Rare"):
            var creature = cards.filter(card => card.type.includes("Creature"));
            var creature_rare = creature.filter(card => card.rarity.includes("Rare"));
            displayCards(creature_rare);
            break;

        case (filterbycolor == "all" && filterbytype == "Sorcery" && filterbyrarity == "all"):
            var sorcery = cards.filter(card => card.type.includes("Sorcery"));
            displayCards(sorcery);
            break;
        
        case (filterbycolor == "all" && filterbytype == "Sorcery" && filterbyrarity == "Common"):
            var sorcery = cards.filter(card => card.type.includes("Sorcery"));
            var sorcery_common = sorcery.filter(card => card.rarity.includes("Common"));
            displayCards(sorcery_common);
            break;

        case (filterbycolor == "all" && filterbytype == "Sorcery" && filterbyrarity == "Uncommon"):
            var sorcery = cards.filter(card => card.type.includes("Sorcery"));
            var sorcery_uncommon = sorcery.filter(card => card.rarity.includes("Uncommon"));
            displayCards(sorcery_uncommon);
            break;

        case (filterbycolor == "all" && filterbytype == "Sorcery" && filterbyrarity == "Rare"):
            var sorcery = cards.filter(card => card.type.includes("Sorcery"));
            var sorcery_rare = sorcery.filter(card => card.rarity.includes("Rare"));
            displayCards(sorcery_rare);
            break;

        case (filterbycolor == "all" && filterbytype == "Instant" && filterbyrarity == "all"):
            var instant = cards.filter(card => card.type.includes("Instant"));
            displayCards(instant);
            break;

        case (filterbycolor == "all" && filterbytype == "Instant" && filterbyrarity == "Common"):
            var instant = cards.filter(card => card.type.includes("Instant"));
            var instant_common = instant.filter(card => card.rarity.includes("Common"));
            displayCards(instant_common);
            break;

        case (filterbycolor == "all" && filterbytype == "Instant" && filterbyrarity == "Uncommon"):
            var instant = cards.filter(card => card.type.includes("Instant"));
            var instant_uncommon = instant.filter(card => card.rarity.includes("Uncommon"));
            displayCards(instant_uncommon);
            break;

        case (filterbycolor == "all" && filterbytype == "Instant" && filterbyrarity == "Rare"):
            var instant = cards.filter(card => card.type.includes("Instant"));
            var instant_rare = instant.filter(card => card.rarity.includes("Rare"));
            displayCards(instant_rare);
            break;

        case (filterbycolor == "all" && filterbytype == "Enchantment" && filterbyrarity == "all"):
            var enchantment = cards.filter(card => card.type.includes("Enchantment"));
            displayCards(enchantment);
            break;

        case (filterbycolor == "all" && filterbytype == "Enchantment" && filterbyrarity == "Common"):
            var enchantment = cards.filter(card => card.type.includes("Enchantment"));
            var enchantment_common = enchantment.filter(card => card.rarity.includes("Common"));
            displayCards(enchantment_common);
            break;

        case (filterbycolor == "all" && filterbytype == "Enchantment" && filterbyrarity == "Uncommon"):
            var enchantment = cards.filter(card => card.type.includes("Enchantment"));
            var enchantment_uncommon = enchantment.filter(card => card.rarity.includes("Uncommon"));
            displayCards(enchantment_uncommon);
            break;

        case (filterbycolor == "all" && filterbytype == "Enchantment" && filterbyrarity == "Rare"):
            var enchantment = cards.filter(card => card.type.includes("Enchantment"));
            var enchantment_rare = enchantment.filter(card => card.rarity.includes("Rare"));
            displayCards(enchantment_rare);
            break;

        case (filterbycolor == "all" && filterbytype == "all" && filterbyrarity == "Common"):
            var common = cards.filter(card => card.rarity.includes("Common"));
            displayCards(common);
            break;

        case (filterbycolor == "all" && filterbytype == "all" && filterbyrarity == "Uncommon"):
            var uncommon = cards.filter(card => card.rarity.includes("Uncommon"));
            displayCards(uncommon);
            break;

        case (filterbycolor == "all" && filterbytype == "all" && filterbyrarity == "Rare"):
            var rare = cards.filter(card => card.rarity.includes("Rare"));
            displayCards(rare);
            break;

        case (filterbycolor == "U" && filterbytype == "all" && filterbyrarity == "all"):
            var blue = cards.filter(card => card.colorIdentity.includes("U"));
            displayCards(blue);
            break;

        case (filterbycolor == "U" && filterbytype == "Creature" && filterbyrarity == "all"):
            var blue = cards.filter(card => card.colorIdentity.includes("U"));
            var blue_creature = blue.filter(card => card.type.includes("Creature"));
            displayCards(blue_creature);
            break;

        case (filterbycolor == "U" && filterbytype == "Creature" && filterbyrarity == "Common"):
            var blue = cards.filter(card => card.colorIdentity.includes("U"));
            var blue_creature = blue.filter(card => card.type.includes("Creature"));
            var blue_creature_common = blue_creature.filter(card => card.rarity.includes("Common"));
            displayCards(blue_creature_common);
            break;

        case (filterbycolor == "U" && filterbytype == "Creature" && filterbyrarity == "Uncommon"):
            var blue = cards.filter(card => card.colorIdentity.includes("U"));
            var blue_creature = blue.filter(card => card.type.includes("Creature"));
            var blue_creature_uncommon = blue_creature.filter(card => card.rarity.includes("Uncommon"));
            displayCards(blue_creature_uncommon);
            break;
        
        case (filterbycolor == "U" && filterbytype == "Creature" && filterbyrarity == "Rare"):
            var blue = cards.filter(card => card.colorIdentity.includes("U"));
            var blue_creature = blue.filter(card => card.type.includes("Creature"));
            var blue_creature_rare = blue_creature.filter(card => card.rarity.includes("Rare"));
            displayCards(blue_creature_rare);
            break;

        case (filterbycolor == "U" && filterbytype == "Sorcery" && filterbyrarity == "all"):
            var blue = cards.filter(card => card.colorIdentity.includes("U"));
            var blue_sorcery = blue.filter(card => card.type.includes("Sorcery"));
            displayCards(blue_sorcery);
            break;

        case (filterbycolor == "U" && filterbytype == "Sorcery" && filterbyrarity == "Common"):
            var blue = cards.filter(card => card.colorIdentity.includes("U"));
            var blue_sorcery = blue.filter(card => card.type.includes("Sorcery"));
            var blue_sorcery_common = blue_sorcery.filter(card => card.rarity.includes("Common"));
            displayCards(blue_sorcery_common);
            break;

        case (filterbycolor == "U" && filterbytype == "Sorcery" && filterbyrarity == "Uncommon"):
            var blue = cards.filter(card => card.colorIdentity.includes("U"));
            var blue_sorcery = blue.filter(card => card.type.includes("Sorcery"));
            var blue_sorcery_uncommon = blue_sorcery.filter(card => card.rarity.includes("Uncommon"));
            displayCards(blue_sorcery_uncommon);
            break;
        
        case (filterbycolor == "U" && filterbytype == "Sorcery" && filterbyrarity == "Rare"):
            var blue = cards.filter(card => card.colorIdentity.includes("U"));
            var blue_sorcery = blue.filter(card => card.type.includes("Sorcery"));
            var blue_sorcery_rare = blue_sorcery.filter(card => card.rarity.includes("Rare"));
            displayCards(blue_sorcery_rare);
            break;

        case (filterbycolor == "U" && filterbytype == "Instant" && filterbyrarity == "all"):
            var blue = cards.filter(card => card.colorIdentity.includes("U"));
            var blue_instant = blue.filter(card => card.type.includes("Instant"));
            displayCards(blue_instant);
            break;

        case (filterbycolor == "U" && filterbytype == "Instant" && filterbyrarity == "Common"):
            var blue = cards.filter(card => card.colorIdentity.includes("U"));
            var blue_instant = blue.filter(card => card.type.includes("Instant"));
            var blue_instant_common = blue_instant.filter(card => card.rarity.includes("Common"));
            displayCards(blue_instant_common);
            break;

        case (filterbycolor == "U" && filterbytype == "Instant" && filterbyrarity == "Uncommon"):
            var blue = cards.filter(card => card.colorIdentity.includes("U"));
            var blue_instant = blue.filter(card => card.type.includes("Instant"));
            var blue_instant_uncommon = blue_instant.filter(card => card.rarity.includes("Uncommon"));
            displayCards(blue_instant_uncommon);
            break;
        
        case (filterbycolor == "U" && filterbytype == "Instant" && filterbyrarity == "Rare"):
            var blue = cards.filter(card => card.colorIdentity.includes("U"));
            var blue_instant = blue.filter(card => card.type.includes("Instant"));
            var blue_instant_rare = blue_instant.filter(card => card.rarity.includes("Rare"));
            displayCards(blue_instant_rare);
            break;

        case (filterbycolor == "U" && filterbytype == "Enchantment" && filterbyrarity == "all"):
            var blue = cards.filter(card => card.colorIdentity.includes("U"));
            var blue_enchantment = blue.filter(card => card.type.includes("Enchantment"));
            displayCards(blue_enchantment);
            break;

        case (filterbycolor == "U" && filterbytype == "Enchantment" && filterbyrarity == "Common"):
            var blue = cards.filter(card => card.colorIdentity.includes("U"));
            var blue_enchantment = blue.filter(card => card.type.includes("Enchantment"));
            var blue_enchantment_common = blue_enchantment.filter(card => card.rarity.includes("Common"));
            displayCards(blue_enchantment_common);
            break;

        case (filterbycolor == "U" && filterbytype == "Enchantment" && filterbyrarity == "Uncommon"):
            var blue = cards.filter(card => card.colorIdentity.includes("U"));
            var blue_enchantment = blue.filter(card => card.type.includes("Enchantment"));
            var blue_enchantment_uncommon = blue_enchantment.filter(card => card.rarity.includes("Uncommon"));
            displayCards(blue_enchantment_uncommon);
            break;
        
        case (filterbycolor == "U" && filterbytype == "Enchantment" && filterbyrarity == "Rare"):
            var blue = cards.filter(card => card.colorIdentity.includes("U"));
            var blue_enchantment = blue.filter(card => card.type.includes("Enchantment"));
            var blue_enchantment_rare = blue_enchantment.filter(card => card.rarity.includes("Rare"));
            displayCards(blue_enchantment_rare);
            break;

    }
}

// Event Listeners.
document.getElementById("filteredbycolor").addEventListener("change", () => {filterCards(cardList.cards)});
document.getElementById("filteredbytype").addEventListener("change", () => {filterCards(cardList.cards)});
document.getElementById("filteredbyrarity").addEventListener("change", () => {filterCards(cardList.cards)});

// Function Caller
getCards();