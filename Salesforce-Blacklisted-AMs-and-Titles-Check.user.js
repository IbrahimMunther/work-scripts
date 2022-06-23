// ==UserScript==
// @name         Account Manager Check
// @namespace    http://tampermonkey.net/
// @version      2.0.4
// @description  Check if the inserted Account Manager is blacklisted.
// @author       mobaraka@cisco.com
// @match        https://ciscosales.my.salesforce.com/*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// ==/UserScript==

var scriptElement = document.createElement("script");
scriptElement.type = "text/javascript";
scriptElement.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
document.body.appendChild(scriptElement);

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

(function() {
    'use strict';

    var blacklist = ["Moayad Mohammad Barakat", "mobaraka", "Jenn Nederhoff", "jenederh", "bhatley", "gsadding", "hasalter", "javcasti", "Beth Bell", "Becky Edmond", "Lawrence Elliott", "Rebecca Edmond", "Carlie Smyth", "Amy Evans", "Gurvinder Ghattaura", "Amy Lawrence", "David O'Neill", "Gavin Piper", "Joe Poyda","casmyth", "elbell", "beedmond", "lawrenel", "amevans", "gghattau", "amlawren", "davoneil", "gapiper", "jpoyda", "Jason Craps", "jcraps", "maclewis", "tamkelly", "ahbaban", "amycalle", "bryamurp", "bobbsmit", "mabdulra", "nutsch", "miharvey", "jaking", "travelport", "hbuyukca", "rimatthe", "afoshee", "manajjar", "javcasti", "mashaffe", "nilemieu", "zpalffy", "hbuyukca", "bschuler", "javcasti", "nilemieu", "tamkelly", "Mac Lewis", "Tami Kelly", "Ahmed Baban", "Amy Allen", "Bryan Edward Murphy", "Bobby Smith", "Mumtaz Bee Abdul Rauf", "Nadia Utsch", "Michael Harvey", "Bo King", "Tara Mcduffie ", "Hatice Erdogan", "Richard Matthewman", "Alexandra Foshee", "Malek Najjar", "Javier Castillo Guerra", "James Shaffer", "Nicole Lemieux", "Zoltan Palffy", "Hatice Erdogan", "Bernd Schuler", "Javier Castillo Guerra", "Nicole Lemieux", "Tami Kelly", "Ken Wong", "Ken Chong Wong" "Yishu Fang"]
    var titlesWhitelist = ['distribution account manager', 'small business manager, denmark', 'small business territory manager midsouth', 'virtual account manager', 'partner account manager', 'account manager [c]', 'small business territory manager', 'small business', 'virtual sales account manager', 'small business territory manager.sales', 'virtual sales account manager.sales', 'associate territory account manager.sales', 'associate territory market manager.sales', 'account manager.sales', 'territory account manager.sales', 'partner account manager.sales', 'global account manager.regional sales', 'virtual sales account manager-a.sales', 'enterprise account manager.sales', 'territory account manager.us sales', 'global account manager-cgem.sales', 'strategic account manager.sales', 'associate account manager.sales', 'account manager solutions.sp sales', 'account manager - select', 'partner distribution account manager.sales', 'virtual partner account manager.sales', 'partner distribution account mgr.sales', 'account manager', 'virtual account manager.sales', 'partner account manager-b.sp sales', 'account manager.security sales', 'cng partner account manager', 'global account manager--b.get sales', 'am', 'account manager.us sales', 'partner account manager-a.sales', 'global account manager-b.sales', 'territory account manager', 'global account manager.sales', 'strategic enterprise account manager.sales', 'associate account mgr', 'service acct mgr', 'channel service acct mgr', 'enterprise account manager-b.sales', 'strategic engagement account manager.sales', 'account manager.direct sales-capital', 'global account manager.cgem sales', 'account manager.direct sales-poe', 'virtual services account manager.sales', 'external account manager', 'account manager.sp sales', 'strategic account manager-b.sales', 'account manager.leasing', 'partner account manager-a.sp sales', 'strategic account manager-b.sp sales', 'associate partner account manager.sales', 'distribution account manager.partner sales', 'channel account manager.sales', 'associate account manager', 'strategic account manager.sp sales', 'associate small bus account manager.sales', 'service sales account manager.service sales', 'global account manager-b.get sales', 'territory acct mgr', 'small business account manager.sales', 'partner account manager-b.sales', 'channel account manager', 'virtual partner account mgr.sales', 'assoc partner distribution account mgr.sales', 'business development/account manager', 'select account manager.us sales', 'global account manager.gap sales', 'critical accounts manager.customer experience', 'account manager-a.sp sales', 'global acct mgr', 'associate account manager.sp sales', 'territory global account mgr', 'global account manager-a.sp sales', 'select account manager', 'partner account manager.sp sales', 'commercial vertical acct mgr', 'virtual global account manager.sales', 'assoc partner distribution account mgr-b.sales', 'mid mrkt account mgr', 'am at connectology', 'global account manager', 'small business account manager.us sales', 'industry acct mgr-consultant', 'account manager.web', 'sales account manager', 'associate account manager.us sales', 'associate global account manager.sales', 'development partner account manager.sales', 'partner account manager.us sales', 'account manager.strategic', 'strategic account manager.us sales', 'virtual sales account manager.us sales', 'virtual partner account manager-a.sales', 'geo territory account manager.us sales', 'virtual global account manager.get sales', 'project manager.client project/program management', 'account manager lan', 'account manager.us', 'territory acct manager', 'key account manager', 'key account  manager', 'inside sales am', 'web account manager, webex', 'enterprise account manager']
    var accountManagerField = getElementByXpath("/html[1]/body[1]/div[1]/div[3]/table[1]/tbody[1]/tr[1]/td[2]/div[5]/div[2]/div[2]/table[1]/tbody[1]/tr[4]/td[4]/div[1]/span[1]/a[2]")
    var editAccountManagerField = getElementByXpath("/html[1]/body[1]/div[1]/div[3]/table[1]/tbody[1]/tr[1]/td[2]/form[1]/div[1]/div[2]/div[3]/table[1]/tbody[1]/tr[2]/td[2]/div[1]/div[2]/span[1]/input[1]")
    var saveButton = document.getElementsByName("save")[0]

    $(editAccountManagerField).on("change", function() {
        if(blacklist.includes(editAccountManagerField.value) == true){
        alert("Dear SLL Agent, you assigned the lead to a BLACKLISTED Account Manager!")

        saveButton.disabled = true
        //setTimeout(function(){saveButton.disabled = false;}, 5000);
        }
        else{saveButton.disabled = false;}
        });

    if(blacklist.includes(accountManagerField.innerText)){alert("Dear SLL Agent, you assigned the lead to a BLACKLISTED Account Manager!");}

    accountManagerField.onmouseover()
    setTimeout(function() {let accountManagerTitle = getElementByXpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[2]/div[1]/table[1]/tbody[1]/tr[1]/td[2]");
                          if (titlesWhitelist.includes(accountManagerTitle.innerText.toLowerCase()) == false){
          alert("Dear SLL agent, you assigned the lead to an Account Manager that has a PROHIBITED title!");

            }
               }, 3500);

})();
