// Simple Cookie Consent JS script 
// by Wolfferine 
// v1.0 bld.250724a

(function() {
    const COOKIE_CONSENT_KEY = 'cookieConsentGiven';
    const CONSENT_MESSAGE_HTML = `
        <div id="cookieConsentContainer" style="
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: #333;
            color: white;
            padding: 15px 20px;
            text-align: center;
            font-family: sans-serif;
            font-size: 14px;
            box-sizing: border-box;
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.2);
        ">
            <p style="margin: 0 20px 0 0; flex-grow: 1;">
                This site uses cookies to ensure the best experience for our website.
                <a href="/privacy-policy" style="color: #87CEEB; text-decoration: none; margin-left: 5px;">Learn more</a>
            </p>
            <button id="acceptCookiesButton" style="
                background-color: #4CAF50;
                color: white;
                border: none;
                padding: 10px 20px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 14px;
                margin: 5px 0;
                cursor: pointer;
                border-radius: 5px;
                transition: background-color 0.3s ease;
            ">
                Got it!
            </button>
        </div>
    `;

    function showCookieConsent() {
        if (!localStorage.getItem(COOKIE_CONSENT_KEY)) {
            document.body.insertAdjacentHTML('beforeend', CONSENT_MESSAGE_HTML);

            const acceptButton = document.getElementById('acceptCookiesButton');
            const consentContainer = document.getElementById('cookieConsentContainer');

            if (acceptButton && consentContainer) {
                acceptButton.addEventListener('click', () => {
                    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
                    consentContainer.style.display = 'none';
                });
            }
        }
    }

    // Run when the DOM is fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', showCookieConsent);
    } else {
        showCookieConsent();
    }
})();
