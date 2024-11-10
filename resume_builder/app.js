"use strict";
const ToggleHobbiesButton = document.getElementById('Hobbies_toggle_button');
const Hobbies = document.getElementById('Hobbies');
let ToggleHobbiesVisible = () => {
    if (Hobbies.style.display === "none") {
        Hobbies.style.display = "block";
    }
    else {
        Hobbies.style.display = "none";
    }
};
ToggleHobbiesButton.addEventListener('click', ToggleHobbiesVisible);
