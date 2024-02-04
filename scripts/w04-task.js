/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Victor Malpica",
    photo: "images/FB_IMG_1694285043288.jpg",
    favoriteFoods: ["Garlic Bread", "Brownie", "Cordon Bleu"],
    hobbies: ["Reading", "Cooking", "Writing"],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push (
    {place: "Barquisimeto, Lara, VE", length: "27 years"}
);

/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").innerHTML = myProfile.name;
/* Photo with attributes */
document.getElementById("photo").setAttribute("src", myProfile.photo)
document.getElementById("photo").setAttribute("alt", `Profile image of ${myProfile.name}`);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.getElementById("favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement("li");
    li.textContent = hobbie;
    document.getElementById("hobbies").appendChild(li);
});

/* Places Lived DataList */
function livedDatalist() {
    let datalistElement = document.getElementById("places-lived");
    for(let i = 0; i < myProfile.placesLived.length; i++) {
        let dt = document.createElement('dt');
        dt.textContent = myProfile.placesLived[i].place;
        datalistElement.appendChild(dt);
        let dd = document.createElement('dd');
        dd.textContent = myProfile.placesLived[i].length;
        datalistElement.appendChild(dd);
    }
};

livedDatalist();
