// ==UserScript==
// @name         TUWEL Auto Registration
// @namespace    http://tampermonkey.net/
// @version      2025-03-13
// @description  Automatically clicks the login buttons on TUWEL pages.
// @author       Liam
// @match        https://tuwel.tuwien.ac.at/login/index.php
// @match        https://idp.zid.tuwien.ac.at/simplesaml/module.php/core/loginuserpass.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Adjust this value to change how often the script checks for buttons (in ms).
    const pollingInterval = 100;

    // Polls the DOM for an element matching the XPath.
    function waitForElement(xpath, callback) {
        const intervalId = setInterval(() => {
            const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            const element = result.singleNodeValue;
            if (element) {
                clearInterval(intervalId);
                callback(element);
            }
        }, pollingInterval);
    }

    // Step 1: On TUWEL login page.
    if (window.location.href === "https://tuwel.tuwien.ac.at/login/index.php") {
        // XPath for the "TU Wien Login" button.
        const tuWienLoginButtonXPath = "/html/body/div[2]/div[5]/div/div/section/div/div/div[1]/a[1]";
        waitForElement(tuWienLoginButtonXPath, (loginButton) => {
            loginButton.click();
        });
    }

    // Step 2: On the SAML login page.
    if (window.location.href.startsWith("https://idp.zid.tuwien.ac.at/simplesaml/module.php/core/loginuserpass.php")) {
        // XPath for the login button (id="samlloginbutton").
        const samlLoginButtonXPath = "//*[@id='samlloginbutton']";
        waitForElement(samlLoginButtonXPath, (loginButton) => {
            loginButton.click();
        });
    }
})();

