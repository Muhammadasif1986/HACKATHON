import { v4 as uuidv4 } from 'uuid';

const form = document.getElementById("resumeForm") as HTMLFormElement;

form.addEventListener("submit", async (event: Event) => {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const facebook = (document.getElementById("facebook") as HTMLInputElement)
    .value;
  const linkedin = (document.getElementById("linkedin") as HTMLInputElement)
    .value;
  const discord = (document.getElementById("discord") as HTMLInputElement)
    .value;
  const whatsapp = (document.getElementById("whatsapp") as HTMLInputElement)
    .value;
  const instagram = (document.getElementById("instagram") as HTMLInputElement)
    .value;
  const X = (document.getElementById("X") as HTMLInputElement).value;
  const medium = (document.getElementById("medium") as HTMLInputElement).value;
  const github = (document.getElementById("github") as HTMLInputElement).value;
  const education = (
    document.getElementById("education") as HTMLTextAreaElement
  ).value;
  const skills = (document.getElementById("skills") as HTMLTextAreaElement)
    .value;
  const experience = (
    document.getElementById("experience") as HTMLTextAreaElement
  ).value;

  const profilePicInput = document.getElementById(
    "profilePic"
  ) as HTMLInputElement;
  const file = profilePicInput.files?.[0]; // Get the selected file

  let profilePicDataUrl = "";

  if (file) {
    const reader = new FileReader();

    // Marking reader.onload as async
    reader.onload = async (e: ProgressEvent<FileReader>) => {
      profilePicDataUrl = e.target?.result as string;

      // Build the resume HTML only after the image is loaded
      const resumeHTML = `
      <div class= "resume-content">
        <div class="main-page">
          <div class="header"><P>Unique Path and Shareable Link</P>
            <p>Milestone 5</p>
          </div>
          <div class="main">
            <div class="left-colum">
              <section class="info">
                <h1 class="heading" contenteditable="true"><b><u>${name}</u></b></h1> 
                <div class="picture">
                  <img src="${profilePicDataUrl}" alt="profile pic" style="width:200px;height:250px;border-radius:50%">
                </div>
                <h1 class="heading">Personal info</h1>
                <ul>
                  <li class="infotext"><b><u>Email:</u></b> <span contenteditable="true">${email}</span></li>
                  <li class="infotext"><b><u>Contact No:</u></b> <span contenteditable="true">${phone}</span></li>
                </ul>
              </section>
              <section class="info">
                <h2 class="heading">Social Accounts</h2>
                <ul>
                  ${
                    facebook
                      ? `<li><a href="${facebook}" target="_blank" contenteditable="true">Facebook</a></li>`
                      : ""
                  }<br>
                  ${
                    linkedin
                      ? `<li><a href="${linkedin}" target="_blank" contenteditable="true">LinkedIn</a></li>`
                      : ""
                  }<br>
                  ${
                    discord
                      ? `<li><a href="${discord}" target="_blank" contenteditable="true">Discord</a></li>`
                      : ""
                  }<br>
                  ${
                    whatsapp
                      ? `<li contenteditable="true"><p>WhatsApp</p> ${whatsapp}</li>`
                      : ""
                  }<br>
                  ${
                    instagram
                      ? `<li><a href="${instagram}" target="_blank" contenteditable="true">Instagram</a></li>`
                      : ""
                  }<br>
                  ${
                    X
                      ? `<li><a href="${X}" target="_blank" contenteditable="true">X/Twitter</a></li>`
                      : ""
                  }<br>
                  ${
                    medium
                      ? `<li><a href="${medium}" target="_blank" contenteditable="true">Medium</a></li>`
                      : ""
                  }<br>
                  ${
                    github
                      ? `<li><a href="${github}" target="_blank" contenteditable="true">GitHub</a></li>`
                      : ""
                  }<br>
                </ul>
              </section>
            </div>
            <div class="right-colum">
              <section class="info">
                <h1 class="heading">Education</h1>
                <ul id="educationList">
                  ${education
                    .split(",")
                    .map(
                      (edu) =>
                        `<br><li contenteditable="true">${edu.trim()}</li>`
                    )
                    .join("")}
                </ul>
              </section>
              <section class="info">
                <h1 class="heading">Skills</h1>
                <ul id="skillsList">
                  ${skills
                    .split(",")
                    .map(
                      (skill) =>
                        `<br><li contenteditable="true">${skill.trim()}</li>`
                    )
                    .join("")}
                </ul>
              </section>
              <section class="info">
                <h1 class="heading">Work Experience</h1>
                <ul id="experienceList">
                  ${experience
                    .split(",")
                    .map(
                      (exp) =>
                        `<br><li contenteditable="true">${exp.trim()}</li>`
                    )
                    .join("")}
                </ul>
              </section>
              <button id="exp_toggle_button">Toggle Experience</button>
            </div>
          </div>
        </div>
      </div>`;

      // Open a new window to display the generated resume
      const newWindow = window.open("", "_blank");
      if (newWindow) {
        newWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Generated Resume</title>
              <style>
                  /* CSS styles from your original code */
              </style>
            </head>
            <body>
              ${resumeHTML}
              <script>
              var ToggleExpButton = document.getElementById('exp_toggle_button');
              var ExpToggle = document.getElementById('experienceList');
              var ToggleExpVisible = function () {
                  if (ExpToggle.style.display === "none") {
                      ExpToggle.style.display = "block";
                  }
                  else {
                      ExpToggle.style.display = "none";
                  }
              };
              ToggleExpButton.addEventListener('click', ToggleExpVisible);
              </script>
            </body>
            </html>`);
      }

      const resumeId = uuidv4(); 

      // Create a unique URL (this will depend on your backend)
      const uniqueURL = `https://yourdomain.com/resumes/${resumeId}`;

      // POST request to your backend to store the resume
      const response = await fetch('https://yourdomain.com/api/saveResume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: resumeId, html: resumeHTML, name, email })
      });

      if (response.ok) {
        alert(`Resume created! Shareable link: ${uniqueURL}`);
      } else {
        alert('Failed to generate resume link');
      }
    };

    reader.readAsDataURL(file);
  }
});
