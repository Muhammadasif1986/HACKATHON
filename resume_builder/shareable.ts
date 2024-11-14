const shareButton = document.getElementById("shareBtn");

function generateShareableLink(): void {
    // Retrieve the username from an element on the page, e.g., an `h1` with id `username`
    const userNameElement = document.getElementById("name");
    const userName = userNameElement ? userNameElement.textContent?.trim() : "defaultUser";

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
shareButton?.addEventListener("click", generateShareableLink);
