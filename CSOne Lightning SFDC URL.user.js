// ==UserScript==
// @name         CSOne Lightning SFDC URL
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Beshara
// @match        https://csone.lightning.force.com/lightning/o/Lead/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

var delayInMilliseconds1 = 3000;
var delayInMilliseconds = 2000;
setTimeout(function() {
    var button = document.createElement("button");
    button.innerHTML = "Create URL";
    document.evaluate('/html[1]/body[1]/div[4]/div[1]/section[1]/header[1]/div[2]', document, null, XPathResult.ANY_TYPE, null).iterateNext().appendChild(button);
    button.addEventListener("click",function (){
            setTimeout(function() {
                for (var column = 3; true; column++){
                    var column_header = document.evaluate('/html[1]/body[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[2]/div[2]/section[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/table[1]/thead[1]/tr[1]/th[' + column +']/div[1]/a[1]/span[2]', document, null, XPathResult.ANY_TYPE, null).iterateNext().innerHTML;
                                                          '/html/body/div[4]/div[1]/section/div[1]/div/div[2]/div[2]/section[2]/div/div/section/div/div[2]/div/div/div/one-record-home-flexipage2/forcegenerated-adg-rollup_component___force-generated__flexipage_-record-page___-lead_-record_-page___-lead___-v-i-e-w/forcegenerated-flexipage_lead_record_page_lead__view_js/record_flexipage-record-page-decorator/div[1]/records-record-layout-event-broker/slot/slot/flexipage-record-home-simple-view-template2/div/div[2]/div/slot/flexipage-component2[2]/slot/flexipage-tabset2/div/lightning-tabset/div/slot/slot/flexipage-tab2/slot/flexipage-component2/slot/records-lwc-detail-panel/records-base-record-form/div/div/div/div/records-lwc-record-layout/forcegenerated-detailpanel_lead___012000000000000aaa___full___view___recordlayout2/records-record-layout-block/slot/records-record-layout-section[1]/div/div/div/slot/records-record-layout-row[9]/slot/records-record-layout-item[2]/div/div/div[1]/span'

                    if (column_header == "Sales Lead SFDC ID"){
                        break;
                    }
                }
               for (var i = 1; i < 50; i++){
                    var SFDC = document.evaluate('/html[1]/body[1]/div[4]/div[1]/section[1]/div[1]/div[1]/div[2]/div[2]/section[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr['+ i + ']/td[' + (column - 1) + ']/span[1]/span[1]', document, null, XPathResult.ANY_TYPE, null).iterateNext()
                    SFDC.innerHTML = "<a href= https://ciscosales.my.salesforce.com/" + SFDC.innerHTML + ">" + SFDC.innerHTML + "</a>";
                }
            })
                 }, delayInMilliseconds1);}, delayInMilliseconds);
