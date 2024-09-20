const form = document.getElementById("resumeForm") as HTMLFormElement;

form.addEventListener("submit", (event: Event) => {
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

    // Load the image as a Data URL
    reader.onload = (e: ProgressEvent<FileReader>) => {
      profilePicDataUrl = e.target?.result as string;

      // Build the resume HTML only after the image is loaded
      const resumeHTML = `
        <div class= "resume-content">
          <div class="main-page">
            <div class="header"><P>Dynamic Resume Builder</P>
              <p>Milestone 3</p>
            </div>
            <div class="main">
              <div class="left-colum">
                <section class="info">
                  <h1 class="heading"><b><u>${name}</u></b> </h1> 
                  <div class="picture"><img src="${profilePicDataUrl}" alt="profile pic" style="width:200px;height:250px;border-radius:50%"> 
                  </div>
                  <h1 class="heading">Personal info</h1>
                  <ul>
                    <li class="infotext"><b><u>Email:</u></b> ${email}</li>
                    <li class="infotext"><b><u>Contact No:</u></b> ${phone}</li>
                  </ul>
                </section>
                <section class="info">
                  <h2 class="heading">Social Accounts</h2>
                  <ul>
                    ${facebook ? `<li><a href="${facebook}" target="_blank">Facebook</a></li>` : ''}<br>
                    ${linkedin ? `<li><a href="${linkedin}" target="_blank">LinkedIn</a></li>` : ''}<br>
                    ${discord ? `<li><a href="${discord}" target="_blank">Discord</a></li>` : ''}<br>
                    ${whatsapp ? `<li><p>WhatsAap</P>${whatsapp}</li>` : ''}<br>
                    ${instagram ? `<li><a href="${instagram}" target="_blank">Instagram</a></li>` : ''}<br>
                    ${X ? `<li><a href="${X}" target="_blank">X/Twitter</a></li>` : ''}<br>
                    ${medium ? `<li><a href="${medium}" target="_blank">Medium</a></li>` : ''}<br>
                    ${github ? `<li><a href="${github}" target="_blank">GitHub</a></li>` : ''}<br>
                  </ul>
                </section>
              </div>
              <div class="right-colum">
                <section class="info">
                  <h1 class="heading">Education</h1>
                  <ul>
                    ${education
                      .split(",")
                      .map((edu) => `<br>
                      <li>${edu.trim()}</li>`)
                      .join("")}
                  </ul>
                </section>
                <section class="info">
                  <h1 class="heading">Skills</h1>
                  <ul>
                    ${skills
                      .split(",")
                      .map((skill) => `<br><li>${skill.trim()}</li>`)
                      .join("")}
                  </ul>
                </section>
                <section class="info">
                  <h1 class="heading">Work Experience</h1>
                  <ul id="exp_section">
                    ${experience
                      .split(",")
                      .map((exp) => `<br><li>${exp.trim()}</li>`)
                      .join("")}
                  </ul>
                </section>
                <br>
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
               /* Style for the dynamically generated resume */
* {
    padding: 0px;
    margin: 0px;
    font-family: Arial, Helvetica, sans-serif;
    border: border-box;
}
body{
    display: flex;
    justify-content: center;
    align-items: center;
}
.resume-content{
    width: 800px;
    background-color:black;
    height: 1010px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    border-top-left-radius: 20%;
    border-bottom-right-radius: 20%;
}
.main-page{
    width: 750px;
    background-color: white;
    height: 960px;
    border-radius: 10px;
}
.header{
    height: 92px;
    border-top-left-radius :10px;
    background-color:khaki;
    font-family:sans-serif;
    font-size: xx-large;
    font-weight: 700;
    text-align: center;
    padding-top: 20px;
}
.main{
    display: flex;
}
.left-colum{
    width: 300px;
    background-color: rgb(110, 147, 160);
    height: 810px;
    border-bottom-left-radius :10px;
    /* text-align: left; */
    /* display: flex; */
    /* justify-content:center; */
    
    padding-left: 10px;
    padding-top: 1cm;
    }
.picture img{
    height: 250px;
    width: 200px;
    border-radius: 50%;
    background-size: cover;
    margin-left: 10%;

}

.info{
    padding-top: 20px;
    
}
.heading{
    text-decoration: underline;
    margin-bottom: 10px;
    font-weight:600;
    font-size: x-large;
    color: rgb(42, 5, 19);

}
.infotext{
    margin-bottom: 10px;
    font-size: 15px;
    margin-left: 20px;
    
}
.links img{
    height:30px;
    width: 30px;
    background-size: cover;
    margin-bottom: 10px;
    margin-left: 20px;
}
.links2 img{
    height:30px;
    width: 30px;
    background-size: cover;
    margin-bottom: 10px;
    margin-left: 20px;
}

.socialtext img{
font-size: 15px;
font-weight: 500;
margin-left: 20px;
margin-bottom: 5px;

}
.links3 img{
    height:30px;
    width: 30px;
    background-size: cover;
    margin-bottom: 10px;
    margin-left: 20px;
}
.links4 img{
    height:30px;
    width: 30px;
    background-size: cover;
    margin-bottom: 10px;
    margin-left: 20px;
}
.social{
    height: 500px;
    width: 300px;
    flex-wrap: wrap;
    display: flex;
    justify-content: start;
    align-items:start;
}
.links5 img{
    height:30px;
    width: 30px;
    background-size: cover;
    margin-bottom: 10px;
    margin-left: 20px;
}
.links6 img{
    height:30px;
    width: 40px;
    background-size: cover;
    margin-bottom: 10px;
    margin-left: 20px;
}
.links7 img{
    height:30px;
    width: 50px;
    background-size: cover;
    margin-bottom: 10px;
    margin-left: 20px;
}
.links8 img{
    height:30px;
    width: 50px;
    background-size: cover;
    margin-bottom: 10px;
    margin-left: 20px;
}
.right-colum{
    width: 430px;
    background-color:azure;
    height: 770px;
    border-bottom-right-radius :10px;
   padding: 1cm;
}
button{
    height: 1cm;
    width: 2cm;
    font-weight: 600;
    border-radius: 10px;
    background-color: coral;
    cursor: pointer;
}
button:hover{
    background-color: rgb(213, 101, 60);
}
button:active{
    height:0.98cm;
    width: 1.98cm;
}
              </style>
            </head>
            <body>
              ${resumeHTML}
              <script>
                // Script to toggle experience visibility
                var ToggleExpButton = document.getElementById('exp_toggle_button');
                var ExpSection = document.getElementById('exp_section');
                ToggleExpButton.addEventListener('click', function () {
                  if (ExpSection.style.display === 'none') {
                    ExpSection.style.display = 'block';
                  } else {
                    ExpSection.style.display = 'none';
                  }
                });
              </script>
            </body>
            </html>`);
      }
    };

    // Start reading the image file
    reader.readAsDataURL(file);
  }
});
