// ==UserScript==
// @name         Rejection Reason/Lead Status Addition
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add a new customized rejection reason/ lead status on SFDC.
// @author       mobaraka@cisco.com
// @match        https://ciscosales.my.salesforce.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var select = document.getElementById("lea13")
    var option = document.createElement('option');
    option.value = 'SLL - Aggregated';
    option.text = 'SLL - Aggregated';

    select.appendChild(option);
})();
