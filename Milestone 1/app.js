var ToggleExpButton = document.getElementById('exp_toggle_button');
var ExpToggle = document.getElementById('exp_section');
var ToggleExpVisible = function () {
    if (ExpToggle.style.display === "none") {
        ExpToggle.style.display = "block";
    }
    else {
        ExpToggle.style.display = "none";
    }
};
ToggleExpButton.addEventListener('click', ToggleExpVisible);
