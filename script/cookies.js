window.onload = function () {
    // Check if the consent cookie exists
    if (!document.cookie.split('; ').find(row => row.startsWith('cookieConsent='))) {
        // Show the consent bar if the cookie doesn't exist
        document.getElementById("cookieConsentContainer").style.display = "block";
    }

    // When the user accepts the cookie policy
    document.getElementById("acceptCookieConsent").onclick = function () {
        // Create a cookie to record the consent
        document.cookie = "cookieConsent=true; max-age=" + 60 * 60 * 24 * 365 + "; path=/";
        document.getElementById("cookieConsentContainer").style.display = "none";
    }
}
