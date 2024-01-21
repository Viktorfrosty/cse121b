/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Victor Malpica";
let currentYear = "2024";
let profilePicture = "images/FB_IMG_1694285043288.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
let yearElement = document.querySelector("#year");
let imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}<strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
let favFoods = ["Garlic Bread", "Brownie", "Cordon Bleu"];
foodElement.innerHTML = favFoods;
let singleFood = "lassagna";
favFoods.push(singleFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift()
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop()
foodElement.innerHTML += `<br>${favFoods}`;




