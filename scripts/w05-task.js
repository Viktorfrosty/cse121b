/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples => {
    temples.forEach(temple => {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        let img = document.createElement("img");
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", temple.location);
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
});

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    if (response.ok) {
        templeList = await response.json();
        console.log(templeList);
        displayTemples(templeList)
    }
};

/* reset Function */
function reset() {
    templesElement.innerHTML = "";
};

/* filterTemples Function */
function filterTemples(temples) {
    reset();
    var filter = document.getElementById("filtered").value;
    switch (filter) {
        case "utah":
            var utah = temples.filter(temple => temple.location.toLowerCase().includes("utah"));
            displayTemples(utah);
            break;
        case "notutah":
            var notutah = temples.filter(temple => !temple.location.toLowerCase().includes("utah"));
            displayTemples(notutah);
            break;
        case "older":
            var older = temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            displayTemples(older);
            break;
        case "all":
            displayTemples(temples)
            break;
    };
};

/* Event Listener */
document.getElementById("filtered").addEventListener("change", () => {filterTemples(templeList)});

getTemples();

