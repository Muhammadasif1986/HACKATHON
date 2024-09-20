var form = document.getElementById("resumeForm");
form.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault(); // Prevent default form submission
    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var facebook = document.getElementById("facebook")
        .value;
    var linkedin = document.getElementById("linkedin")
        .value;
    var discord = document.getElementById("discord")
        .value;
    var whatsapp = document.getElementById("whatsapp")
        .value;
    var instagram = document.getElementById("instagram")
        .value;
    var X = document.getElementById("X").value;
    var medium = document.getElementById("medium").value;
    var github = document.getElementById("github").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills")
        .value;
    var experience = document.getElementById("experience").value;
    var profilePicInput = document.getElementById("profilePic");
    var file = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0]; // Get the selected file
    var profilePicDataUrl = "";
    if (file) {
        var reader = new FileReader();
        // Load the image as a Data URL
        reader.onload = function (e) {
            var _a;
            profilePicDataUrl = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            // Build the resume HTML only after the image is loaded
            var resumeHTML = "\n      <div class= \"resume-content\">\n        <div class=\"main-page\">\n          <div class=\"header\"><P>Dynamic Builder Editable Resume</P>\n            <p>Milestone 4</p>\n          </div>\n          <div class=\"main\">\n            <div class=\"left-colum\">\n              <section class=\"info\">\n                <h1 class=\"heading\" contenteditable=\"true\"><b><u>".concat(name, "</u></b></h1> \n                <div class=\"picture\">\n                  <img src=\"").concat(profilePicDataUrl, "\" alt=\"profile pic\" style=\"width:200px;height:250px;border-radius:50%\">\n                </div>\n                <h1 class=\"heading\">Personal info</h1>\n                <ul>\n                  <li class=\"infotext\"><b><u>Email:</u></b> <span contenteditable=\"true\">").concat(email, "</span></li>\n                  <li class=\"infotext\"><b><u>Contact No:</u></b> <span contenteditable=\"true\">").concat(phone, "</span></li>\n                </ul>\n              </section>\n              <section class=\"info\">\n                <h2 class=\"heading\">Social Accounts</h2>\n                <ul>\n                  ").concat(facebook
                ? "<li><a href=\"".concat(facebook, "\" target=\"_blank\" contenteditable=\"true\">Facebook</a></li>")
                : "", "<br>\n                  ").concat(linkedin
                ? "<li><a href=\"".concat(linkedin, "\" target=\"_blank\" contenteditable=\"true\">LinkedIn</a></li>")
                : "", "<br>\n                  ").concat(discord
                ? "<li><a href=\"".concat(discord, "\" target=\"_blank\" contenteditable=\"true\">Discord</a></li>")
                : "", "<br>\n                  ").concat(whatsapp
                ? "<li contenteditable=\"true\"><p>WhatsApp</p> ".concat(whatsapp, "</li>")
                : "", "<br>\n                  ").concat(instagram
                ? "<li><a href=\"".concat(instagram, "\" target=\"_blank\" contenteditable=\"true\">Instagram</a></li>")
                : "", "<br>\n                  ").concat(X
                ? "<li><a href=\"".concat(X, "\" target=\"_blank\" contenteditable=\"true\">X/Twitter</a></li>")
                : "", "<br>\n                  ").concat(medium
                ? "<li><a href=\"".concat(medium, "\" target=\"_blank\" contenteditable=\"true\">Medium</a></li>")
                : "", "<br>\n                  ").concat(github
                ? "<li><a href=\"".concat(github, "\" target=\"_blank\" contenteditable=\"true\">GitHub</a></li>")
                : "", "<br>\n                </ul>\n              </section>\n            </div>\n            <div class=\"right-colum\">\n              <section class=\"info\">\n                <h1 class=\"heading\">Education</h1>\n                <ul id=\"educationList\">\n                  ").concat(education
                .split(",")
                .map(function (edu) {
                return "<br><li contenteditable=\"true\">".concat(edu.trim(), "</li>");
            })
                .join(""), "\n                </ul>\n              </section>\n              <section class=\"info\">\n                <h1 class=\"heading\">Skills</h1>\n                <ul id=\"skillsList\">\n                  ").concat(skills
                .split(",")
                .map(function (skill) {
                return "<br><li contenteditable=\"true\">".concat(skill.trim(), "</li>");
            })
                .join(""), "\n                </ul>\n              </section>\n              <section class=\"info\">\n                <h1 class=\"heading\">Work Experience</h1>\n                <ul id=\"experienceList\">\n                  ").concat(experience
                .split(",")
                .map(function (exp) {
                return "<br><li contenteditable=\"true\">".concat(exp.trim(), "</li>");
            })
                .join(""), "\n                </ul>\n              </section>\n              <button id=\"exp_toggle_button\">Toggle Experience</button>\n            </div>\n          </div>\n        </div>\n      </div>");
            // Open a new window to display the generated resume
            var newWindow = window.open("", "_blank");
            if (newWindow) {
                newWindow.document.write("\n            <!DOCTYPE html>\n            <html lang=\"en\">\n            <head>\n              <meta charset=\"UTF-8\">\n              <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n              <title>Generated Resume</title>\n              <style>\n* {\n    padding: 0px;\n    margin: 0px;\n    font-family: Arial, Helvetica, sans-serif;\n    border: border-box;\n}\nbody{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.resume-content{\n    width: 800px;\n    background-color:black;\n    height: 1010px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 10px;\n    border-top-left-radius: 20%;\n    border-bottom-right-radius: 20%;\n}\n.main-page{\n    width: 750px;\n    background-color: white;\n    height: 960px;\n    border-radius: 10px;\n}\n.header{\n    height: 92px;\n    border-top-left-radius :10px;\n    background-color:khaki;\n    font-family:sans-serif;\n    font-size: xx-large;\n    font-weight: 700;\n    text-align: center;\n    padding-top: 20px;\n}\n.main{\n    display: flex;\n}\n.left-colum{\n    width: 300px;\n    background-color: rgb(110, 147, 160);\n    height: 810px;\n    border-bottom-left-radius :10px;\n    /* text-align: left; */\n    /* display: flex; */\n    /* justify-content:center; */\n    \n    padding-left: 10px;\n    padding-top: 1cm;\n    }\n\n.picture img{\n    height: 250px;\n    width: 200px;\n    border-radius: 50%;\n    background-size: cover;\n    margin-left: 10%;\n\n}\n\n.info{\n    padding-top: 20px;\n    \n}\n.heading{\n    text-decoration: underline;\n    margin-bottom: 10px;\n    font-weight:600;\n    font-size: x-large;\n    color: rgb(42, 5, 19);\n\n}\n.infotext{\n    margin-bottom: 10px;\n    font-size: 15px;\n    margin-left: 20px;\n    \n}\n.links img{\n    height:30px;\n    width: 30px;\n    background-size: cover;\n    margin-bottom: 10px;\n    margin-left: 20px;\n}\n.links2 img{\n    height:30px;\n    width: 30px;\n    background-size: cover;\n    margin-bottom: 10px;\n    margin-left: 20px;\n}\n\n.socialtext img{\nfont-size: 15px;\nfont-weight: 500;\nmargin-left: 20px;\nmargin-bottom: 5px;\n\n}\n.links3 img{\n    height:30px;\n    width: 30px;\n    background-size: cover;\n    margin-bottom: 10px;\n    margin-left: 20px;\n}\n.links4 img{\n    height:30px;\n    width: 30px;\n    background-size: cover;\n    margin-bottom: 10px;\n    margin-left: 20px;\n}\n.social{\n    height: 500px;\n    width: 300px;\n    flex-wrap: wrap;\n    display: flex;\n    justify-content: start;\n    align-items:start;\n}\n.links5 img{\n    height:30px;\n    width: 30px;\n    background-size: cover;\n    margin-bottom: 10px;\n    margin-left: 20px;\n}\n.links6 img{\n    height:30px;\n    width: 40px;\n    background-size: cover;\n    margin-bottom: 10px;\n    margin-left: 20px;\n}\n.links7 img{\n    height:30px;\n    width: 50px;\n    background-size: cover;\n    margin-bottom: 10px;\n    margin-left: 20px;\n}\n.links8 img{\n    height:30px;\n    width: 50px;\n    background-size: cover;\n    margin-bottom: 10px;\n    margin-left: 20px;\n}\n.right-colum{\n    width: 430px;\n    background-color:azure;\n    height: 770px;\n    border-bottom-right-radius :10px;\n   padding: 1cm;\n}\nbutton{\n    height: 1cm;\n    width: 2cm;\n    font-weight: 600;\n    border-radius: 10px;\n    background-color: coral;\n    cursor: pointer;\n}\nbutton:hover{\n    background-color: rgb(213, 101, 60);\n}\nbutton:active{\n    height:0.98cm;\n    width: 1.98cm;\n}\n    [contenteditable=\"true\"] { border: 1px dashed #ccc; padding: 5px; }\n              </style>\n            </head>\n            <body>\n              ".concat(resumeHTML, "\n              <script>\n              var ToggleExpButton = document.getElementById('exp_toggle_button');\nvar ExpToggle = document.getElementById('experienceList');\nvar ToggleExpVisible = function () {\n    if (ExpToggle.style.display === \"none\") {\n        ExpToggle.style.display = \"block\";\n    }\n    else {\n        ExpToggle.style.display = \"none\";\n    }\n};\nToggleExpButton.addEventListener('click', ToggleExpVisible);\n              </script>\n            </body>\n            </html>"));
            }
        };
        // Start reading the image file
        reader.readAsDataURL(file);
    }
});
