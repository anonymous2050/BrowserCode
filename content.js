// content.js

// Function to check if a URL is suspicious (phishing)
function isSuspicious(url) {
    // Define patterns or characteristics commonly associated with phishing links
    const suspiciousPatterns = [
        "paypal",
        "login",
        "account",
        "confirm",
        "secure",
        "verify",
        // Add more patterns as needed
    ];

    // Convert the URL to lowercase for case-insensitive matching
    const lowercaseUrl = url.toLowerCase();

    // Check if the URL contains any suspicious patterns
    for (const pattern of suspiciousPatterns) {
        if (lowercaseUrl.includes(pattern)) {
            return true; // Suspicious link detected
        }
    }

    return false; // No suspicious patterns found
}

// Function to highlight suspicious links on the webpage
function highlightSuspiciousLinks() {
    // Find all anchor elements (links) on the webpage
    const links = document.querySelectorAll("a");

    // Iterate over each link
    links.forEach(link => {
        // Check if the link URL is suspicious
        if (isSuspicious(link.href)) {
            // Apply CSS styling to highlight suspicious links
            link.style.backgroundColor = "red";
            link.style.color = "white";
            link.style.fontWeight = "bold";
        }
    });
}

// Call the function to highlight suspicious links when the DOM content is loaded
window.addEventListener("DOMContentLoaded", highlightSuspiciousLinks);
