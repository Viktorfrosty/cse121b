/* Declare and initialize global variables */
const cardsElement = document.getElementById("cards");
let cardList = [];

/* async displayCards Function */
const displayCards = (cards => {
    cards.forEach(card => {
        if (card.imageUrl != null) {
            let article = document.createElement("article");
            let h3 = document.createElement("h3");
            h3.textContent = card.name;
            let img = document.createElement("img");
            img.setAttribute("src", card.imageUrl);
            img.setAttribute("id", "cardimg")
            img.setAttribute("alt", `${card.name} card image`);
            article.appendChild(h3);
            article.appendChild(img);
            cardsElement.appendChild(article);
        }
    });
});

/* async getCards Function using fetch()*/
const getCards = async () => {
    const response = await fetch("https://api.magicthegathering.io/v1/cards")
    if (response.ok) {
        cardList = await response.json();
        console.log(cardList);
        displayCards(cardList.cards)
    }
};

/* Function Caller */
getCards();