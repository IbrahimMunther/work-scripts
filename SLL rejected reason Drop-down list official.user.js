// ==UserScript==
// @name         SLL rejected reason Drop-down list official
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       Beshara
// @match        https://ciscosales.my.salesforce.com/*
// @grant        none
// ==/UserScript==

var textField = document.getElementById("00N80000004HuzG");
//textField.disabled = true;
var today = new Date();
var date = today.getDate()+'/'+(today.getMonth()+1) +'/'+ today.getFullYear();
var oldText = textField.value;
var values = ["Choose a comment","Lead followed up on with account manager on " + date,"Lead Aggregated by SLL to new lead \"xxxxxxx\"", "Eloqua emails, Reassigned upon request by the Account Manager", "Lead approved by mistake","Confirmed Lead assignment to current lead owner","Waiting for Contingent Worker response to an email", "Waiting for the assigned personal response to an email", "Waiting for AM response to an email", "Rejected on behalf of the AM", "There is no other AM for the account", "There is no other contact info for the account", "Enterprise named account", "Contact info changed 1", "Contact info changed 2", "Contact info changed 3","Delete all comments"];
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
    label.innerHTML = "Choose your comment: "
    label.htmlFor = "comments";
    document.evaluate('/html[1]/body[1]/div[1]/div[3]/table[1]/tbody[1]/tr[1]/td[2]/form[1]/div[1]/div[2]/div[4]/table[1]/tbody[1]/tr[2]/td[3]', document, null, XPathResult.ANY_TYPE, null).iterateNext().appendChild(label).appendChild(select);


})();

document.evaluate('/html[1]/body[1]/div[1]/div[3]/table[1]/tbody[1]/tr[1]/td[2]/form[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[2]/input[1]', document, null, XPathResult.ANY_TYPE, null).iterateNext().addEventListener("click", function(){
    //textField.disabled = false;
})

function write()
{
    switch (newText){
        case "Choose a comment":
            textField.innerHTML = oldText;
            break;
        case "Delete all comments":
            textField.innerHTML = "";
            break;
        case ("Lead followed up on with account manager on " + date):
            if (oldText.includes("SLL comment")){
                oldText = oldText.replace("SLL comment:\n","")
                textField.innerHTML =  "SLL comment:\n" + newText + "\n" +oldText;
                break;
            }
            else
            {
            textField.innerHTML = "SLL comment:\n" + newText + "\n" + oldText;
            break;
            }
        default:
            if (oldText.includes("SLL comment")){
                textField.innerHTML = oldText + "\n" + newText;
                break;
            }
            else{
                textField.innerHTML = "SLL comment:\n" + newText;
                break;
            }
    }
}

select.addEventListener("change",function (){
    newText = select.options[select.selectedIndex].text;
    write();
})
