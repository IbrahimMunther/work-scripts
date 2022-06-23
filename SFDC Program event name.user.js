// ==UserScript==
// @name         SFDC program event name
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  continue to take over the world again and again!
// @author       Beshara
// @match        https://ciscosales.my.salesforce.com/*
// @grant        none
// ==/UserScript==
var textField = document.evaluate('/html[1]/body[1]/div[1]/div[3]/table[1]/tbody[1]/tr[1]/td[2]/form[1]/div[1]/div[2]/div[14]/table[1]/tbody[1]/tr[4]/td[2]/input[1]', document, null, XPathResult.ANY_TYPE, null).iterateNext();
var oldText = textField.value;
var values = ["Choose Program Event Name","Targeting Lead", "Compass Augmented Opportunity"];
var select = document.createElement("select");
var newText = "";

(function() {
    var flag = document.evaluate('/html[1]/body[1]/div[1]/div[3]/table[1]/tbody[1]/tr[1]/td[2]/div[5]/div[1]/table[1]/tbody[1]/tr[1]/td[2]/input[3]', document, null, XPathResult.ANY_TYPE, null).iterateNext();
    if (flag != null){
        return;
    }
    select.name = "comments";
    select.id = "comments"

    for (const val of values) {
        var option = document.createElement("option");
        option.value = val;
        option.text = val;
        select.appendChild(option);
    }
    var label = document.createElement("label");
    label.htmlFor = "comments";
    document.evaluate('/html[1]/body[1]/div[1]/div[3]/table[1]/tbody[1]/tr[1]/td[2]/form[1]/div[1]/div[2]/div[14]/table[1]/tbody[1]/tr[4]/td[1]', document, null, XPathResult.ANY_TYPE, null).iterateNext().appendChild(label).appendChild(select);


})();


function write()
{
    switch (newText){
        case "Choose Program Event Name":
            textField.innerHTML = oldText;
            textField.value = oldText;
            break;
        default:
            textField.innerHTML =newText;
            textField.innerText =newText;
            textField.value =newText;
                break;
    }
}

select.addEventListener("change",function (){
    newText = select.options[select.selectedIndex].text;
    write();
})
