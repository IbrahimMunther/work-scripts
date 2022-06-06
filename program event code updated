// ==UserScript==
// @name         Program event code and time frame
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  try to take over the world by the SLL!
// @author       Beshara
// @match        https://ciscosales.my.salesforce.com/*
// @grant        none
// ==/UserScript==

var delayInMilliseconds = 100; //0.1 second

setTimeout(function() {
    var flag = document.evaluate('/html[1]/body[1]/div[1]/div[3]/table[1]/tbody[1]/tr[1]/td[2]/div[5]/div[1]/table[1]/tbody[1]/tr[1]/td[2]/input[3]', document, null, XPathResult.ANY_TYPE, null).iterateNext();
    if (flag != null){
        return;
    }
        var Name_Text = document.evaluate('/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]/span[1]', document, null, XPathResult.ANY_TYPE, null).iterateNext().innerText;
        var agent = "";
        switch (Name_Text){
            case "Bayan Alhomsi":
                agent = "balhomsi"
                break;
            case "Diana Alkurdi":
                agent = "dalkourd"
                break;
            case "Sanaa Mohammed":
                agent = "sanaahmo"
                break;
            case "Ibrahim Munther":
                agent = "ibadriya"
                break;
            case "Jalil Dweib":
                agent = "jdweib"
                break;
            case "Abdal Rahman Rasmi Ja...":
                agent = "abdjarra"
                break;
            case "Farah Mohammad Qazziha":
                agent = "fqazziha"
                break;
            case "Dana Mjahed Al Mansi":
                agent = "dalmansi"
                break;
            case "Omar Hisham Jwaihan":
                agent = "ojwaihan"
                break;
            case "Dania Gharaibeh":
                agent = "dgharaib"
                break;
            case "Aya Khawas":
                agent = "akhawas"
                break;
            case "Tala Salah Khrais":
                agent = "tkhrais"
                break;
            case "Asma Ishaq Majali":
                agent = "amajali"
                break;
            case "Ahmad Azaam Qanadilo":
                agent = "aqanadil"
                break;
            case "Fanoeel Isam Azar":
                agent = "fazar"
                break;
            case "Rawan Kamaleddin Hajeer":
                agent = "rhajeer"
                break;
            case "Beshara Nimeh Oweis":
                agent = "boweis"
                break;
            case "Mariam Amro":
                agent = "mamro"
                break;
            case "Arej Younis Hussein":
                agent = "arhussei"
                break;
            case "Zain Qasim Al-Akul":
                agent = "zalakul"
                break;
            case "Rania Al Bawab":
                agent = "ralbawab"
                break;
            case "Louzyan Mazin Alkhrissat":
                agent = "lalkhris"
                break;
            case "Hala Emadelden Jamei":
                agent = "hjamei"
                break;
            case "Hanin Alzghoul":
                agent = "haalzgho"
                break;
            case "Dania Amjad Elkhairy":
                agent = "delkhair"
                break;
            case "Rand Yousef Al Yamani":
                agent = "ralyaman"
                break;
            case "Roa'A Hasan Gharaibeh":
                agent = "rgharaib"
                break;
            case "Ayman Emad Tabaza":
                agent = "atabaza"
                break;
            case "Leen Sweidan":
                agent = "lsweidan"
                break;
            case "Anwar Nader Haddad":
                agent = "anhaddad"
                break;
            case "Aya Nedal Zenad":
                agent = "azenad"
                break;
        }
        var Time_frame = document.getElementById("00N30000000gcDL");
        var Program_event_code = document.getElementById("00N30000000gcDB");
    if (Program_event_code.value == ""){
        switch (Program_event_code.value){
            case "balhomsi":
                break;
            case "dalkourd":
                break;
            case "sanaahmo":
                break;
            case "ibadriya":
                break;
            case "jdweib":
                break;
            case "abdjarra":
                break;
            case "fqazziha":
                break;
            case "dalmansi":
                break;
            case "ojwaihan":
                break;
            case "akhawas":
                break;
            case "tkhrais":
                break;
            case "rhajeer":
                break;
            case "mobaraka":
                break;
            case "boweis":
                break;
            case "zalakul":
                break;
            case "fazar":
                break;
            case "aqanadil":
                break;
            case "shalyama":
                break;
            case "ralbawab":
                break;
            case "jabualna":
                break;
            case "amajali":
                break;
            case "babidall":
                break;
            case "halsaid":
                break;
            case "lalkhris":
                break;
            case "hjamei":
                break;
            case "haalzgho":
                break;
            case "rallouzi":
                break;
            case "delkhair":
                break;
            case "ralyaman":
                break;
            case "aalmajal":
                break;
            case "mamro":
                break;
            case "rgharaib":
                break;
            case "arhussei":
                break;
            case "atabaza":
                break;
            case "lsweidan":
                break;
            case "anhaddad":
                break;
            case "azenad":
                break;
            case "yaabdeen":
                break;
            case "dgharaib":
                break;
            default:
                Program_event_code.value = "Compass Report Null - Compass Readout Null - REC TAC Null";
                Time_frame.value = "Now - 3 Months";
        }
    }
    else return;
}, delayInMilliseconds);
