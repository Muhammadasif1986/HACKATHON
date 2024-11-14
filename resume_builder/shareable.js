"use strict";
const shareButton = document.getElementById("shareBtn");
function generateShareableLink() {
    var _a;
    // Retrieve the username from an element on the page, e.g., an `h1` with id `username`
    const userNameElement = document.getElementById("name");
    const userName = userNameElement ? (_a = userNameElement.textContent) === null || _a === void 0 ? void 0 : _a.trim() : "defaultUser";
    // Construct the shareable URL
    const baseUrl = "https://asifresume.vercel.app";
    const shareableUrl = `${baseUrl}/${userName}`;
    // Copy the link to the clipboard
    navigator.clipboard.writeText(shareableUrl).then(() => {
        alert(`Shareable link copied to clipboard: ${shareableUrl}`);
    }).catch((error) => {
        console.error("Failed to copy the link:", error);
    });
}
// Add event listener to share button
shareButton === null || shareButton === void 0 ? void 0 : shareButton.addEventListener("click", generateShareableLink);
