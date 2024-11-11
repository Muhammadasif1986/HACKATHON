"use strict";
const downloadButton = document.getElementById("downloadBtn");
downloadButton.addEventListener("click", () => {
    const element = document.querySelector(".main-page");
    const options = {
        margin: 0.2,
        filename: 'Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(options).from(element).save();
});
