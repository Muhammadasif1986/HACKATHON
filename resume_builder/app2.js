"use strict";
const form = document.getElementById("resumeForm");
const resume = document.getElementById("resumeContainer");
form.addEventListener("submit", (event) => {
    var _a;
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const profession = document.getElementById("profession")
        .value;
    const linkedin = document.getElementById("linkedin")
        .value;
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills")
        .value;
    const language = document.getElementById("language")
        .value;
    const hobbies = document.getElementById("hobbies")
        .value;
    const profile = document.getElementById("profile")
        .value;
    const experience = document.getElementById("experience").value;
    const profilePicInput = document.getElementById("profilePic");
    const file = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
    let profilePicDataUrl = "";
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            var _a;
            profilePicDataUrl = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            const resumeHTML = ` 
      <div class="main-page id="resumeContainer">
                  <div class="mainChild">
                  <div class="header">
                        <div class="picture"><img src=${profilePicDataUrl} alt="profile pic"> 
                        </div>
                        <div class="headerText">
                        <h1 class="headinghead" id="name"><b><u class="editable" contenteditable="false">${name}</u></b> </h1> 
                         
                        <p class="infotexthead editable" contenteditable="false">${email}</p>
                        <p class="infotexthead editable" contenteditable="false">${phone}</p>
                        <p class="infotexthead editable" contenteditable="false">${profession}</p>
                         <a href=${linkedin}>
                        <div class="headerLink"><i class="fa-brands fa-linkedin"></i>
                        <p class="infotext">Linkedin</p>
                        </div>
                        </a> 
                        </div>
                       
                  </div>
                  <hr class="borders">
            <div class="main">
                         <div class="left-colum">
                        <section class="info">
                              <h1 class="SkillsHeed">Skills</h1>
                              <ul class="profileText editable" contenteditable="false">
                              ${skills
                .split(",")
                .map((skl) => `<br><li>${skl.trim()}</li>`)
                .join("")}
                                        </ul>
                        </section>
                        <section class="info">
                              <h1 class="SkillsHeed">Language</h1>
                              <ul class="profileText editable" contenteditable="false">
                             ${language
                .split(",")
                .map((lan) => `<br><li>${lan.trim()}</li>`)
                .join("")}
                        </ul>
                        </section>
                        <section class="info" id="Hobbies">
                              <h1 class="SkillsHeed">Hobbies</h1>
                              <ul class="profileText editable" contenteditable="false">
                             ${hobbies
                .split(",")
                .map((hob) => `<br><li>${hob.trim()}</li>`)
                .join("")}
                        </ul>
                        </section>
                        </div>
                  <div class="right-colum">
                        <section class="info">
                              <h1 class="heading">profile</h1>
                              <ul class="profileText2 editable" contenteditable="false">
                            ${profile}

                        </ul>
                        </section>
                  <section class="info">
                        <h1 class="heading">Education</h1>
                        <ul class="profileText2 editable" contenteditable="false">
                        ${education
                .split(",")
                .map((edu) => `<br><li>${edu.trim()}</li>`)
                .join("")}
                     </ul>
                  </section>
                  
                  <section class="info" id="exp_section">
                        <h1 class="heading"> Work Experience</h1>
                        <ul class="profileText2 editable" contenteditable="false">
                      ${experience
                .split(",")
                .map((exp) => `<br><li>${exp.trim()}</li>`)
                .join("")}
                  </ul>
                  </section>
                   </div>
            </div>
             </div>
             </div>
            `;
            // Open a new window to display the generated resume
            const newWindow = window.open("./resumeCon.html", "._blank");
            if (newWindow) {
                newWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Generated Resume</title>
               <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                  <link rel="stylesheet" href="style.css">
 </head>
            <body>
            <div class="buttonMain">
             <div class="buttonSection">
             <button class="button" id="Hobbies_toggle_button">Toggle Hobbies</button>
             <button class="button" id="editButton" onclick="makeEditable()">Edit</button>
             </div>
             </div>
              ${resumeHTML}
              <div class="buttonMain">
              <div class="buttonSection">
            <button class="button" id="downloadBtn">Download PDF</button>
            <button class="button" id="shareBtn">Share Your Resume</button>
            </div>
            </div>
              <script src="app.js"></script>
              <script src="edit.js"></script>
              <script src="pdf.js"></script>                    
              <script src="shareable.js"></script>                                       
 <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js"></script>
            </body>
            </html>`);
            }
        };
        reader.readAsDataURL(file);
    }
});
