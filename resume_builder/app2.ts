const form = document.getElementById("resumeForm") as HTMLFormElement;
const resume = document.getElementById("resumeContainer") as HTMLElement;

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const profession = (document.getElementById("profession") as HTMLInputElement)
    .value;
  const linkedin = (document.getElementById("linkedin") as HTMLInputElement)
    .value;
  const education = (
    document.getElementById("education") as HTMLTextAreaElement
  ).value;
  const skills = (document.getElementById("skills") as HTMLTextAreaElement)
    .value;
  const language = (document.getElementById("language") as HTMLTextAreaElement)
    .value;
  const hobbies = (document.getElementById("hobbies") as HTMLTextAreaElement)
    .value;
  const profile = (document.getElementById("profile") as HTMLTextAreaElement)
    .value;
  const experience = (
    document.getElementById("experience") as HTMLTextAreaElement
  ).value;

  const profilePicInput = document.getElementById(
    "profilePic"
  ) as HTMLInputElement;
  const file = profilePicInput.files?.[0];

  let profilePicDataUrl = "";

  if (file) {
    const reader = new FileReader();

     reader.onload = (e: ProgressEvent<FileReader>) => {
      profilePicDataUrl = e.target?.result as string;
      const resumeHTML = ` 
      <div class="main-page id="resumeContainer">
                  <div class="mainChild">
                  <div class="header">
                        <div class="picture"><img src=${profilePicDataUrl} alt="profile pic"> 
                        </div>
                        <div class="headerText">
                        <h1 class="headinghead"><b><u class="editable" contenteditable="false">${name}</u></b> </h1> 
                         
                        <p class="infotexthead editable" contenteditable="false">${email}</p>
                        <p class="infotexthead editable" contenteditable="false">${phone}</p>
                        <p class="infotexthead editable" contenteditable="false">${profession}</p>
                        </div>
                        <a href=${linkedin}>
                        <div class="headerLink"><i class="fa-brands fa-linkedin"></i>
                        <p class="infotext">Linkedin</p>
                        </div>
                        </a> 
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
                              <ul class="profileText editable" contenteditable="false">
                            ${profile}

                        </ul>
                        </section>
                  <section class="info">
                        <h1 class="heading">Education</h1>
                        <ul class="profileText editable" contenteditable="false">
                        ${education
                          .split(",")
                          .map((edu) => `<br><li>${edu.trim()}</li>`)
                          .join("")}
                     </ul>
                  </section>
                  
                  <section class="info" id="exp_section">
                        <h1 class="heading"> Work Experience</h1>
                        <ul class="profileText editable" contenteditable="false">
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
            `

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
             <button id="Hobbies_toggle_button">Toggle Hobbies</button>
             <button class="button" id="editButton" onclick="makeEditable()">Edit</button>
             </div>
             </div>
              ${resumeHTML}
              <div class="buttonMain">
              <div class="buttonSection">
            <button class="button" id="downloadBtn" onclick="downloadResumeAsPDF()">Download PDF</button>
            <button class="button" id="shareBtn">Share able Link</button>
            </div>
            </div>
          
              <script src="app.js"></script>
              <script src="edit.js"></script>
              <script src="pdf.js"></script>

            </body>
            </html>`);
      }
    };

    // Start reading the image file
    reader.readAsDataURL(file);
  }
});
