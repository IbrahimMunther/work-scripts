// ==UserScript==
// @name         CX Portfolio/Category autoFill
// @namespace    http://tampermonkey.net/
// @version      2.3
// @description  try to take over the world!
// @author       You
// @match        https://ciscosales.my.salesforce.com/*
// @grant        none
// ==/UserScript==

(function() {
    var flag = document.evaluate('/html[1]/body[1]/div[1]/div[3]/table[1]/tbody[1]/tr[1]/td[2]/div[5]/div[1]/table[1]/tbody[1]/tr[1]/td[2]/input[3]', document, null, XPathResult.ANY_TYPE, null).iterateNext();
    if (flag != null){
        var TimeFrame = document.evaluate('/html[1]/body[1]/div[1]/div[3]/table[1]/tbody[1]/tr[1]/td[2]/div[5]/div[2]/div[12]/table[1]/tbody[1]/tr[8]/td[4]/div[1]', document, null, XPathResult.ANY_TYPE, null).iterateNext().innerHTML;
        var Last_mod = document.evaluate('/html[1]/body[1]/div[1]/div[3]/table[1]/tbody[1]/tr[1]/td[2]/div[5]/div[2]/div[2]/table[1]/tbody[1]/tr[9]/td[4]/div[1]/a[1]', document, null, XPathResult.ANY_TYPE, null).iterateNext().innerHTML;
        var ProgramEventCode = document.evaluate('/html[1]/body[1]/div[1]/div[3]/table[1]/tbody[1]/tr[1]/td[2]/div[5]/div[2]/div[14]/table[1]/tbody[1]/tr[4]/td[4]/div[1]', document, null, XPathResult.ANY_TYPE, null).iterateNext().innerHTML;
        var CX_ports = document.evaluate('/html[1]/body[1]/div[1]/div[3]/table[1]/tbody[1]/tr[1]/td[2]/div[5]/div[2]/div[12]/table[1]/tbody[1]/tr[2]/td[2]/div[1]', document, null, XPathResult.ANY_TYPE, null).iterateNext().innerHTML;
        if (Last_mod.includes("Lead Assignment Integration User") == false){
            if (ProgramEventCode.includes("&nbsp") && TimeFrame.includes("&nbsp") && CX_ports.includes("&nbsp")){
                alert("Please fill TimeFrame, Program Event Code, CX Portfolio and CX Category Thank you")
                return;
            }
            if (ProgramEventCode.includes("&nbsp") && TimeFrame.includes("&nbsp")){
                alert("Please fill TimeFrame, and Program Event Code Thank you")
                return;
            }
            if (TimeFrame.includes("&nbsp") && CX_ports.includes("&nbsp")){
                alert("Please fill TimeFrame, CX Portfolio and CX Category Thank you")
                return;
            }
            if (ProgramEventCode.includes("&nbsp") && CX_ports.includes("&nbsp")){
                alert("Please fill Program Event Code, CX Portfolio and CX Category Thank you")
                return;
            }
            if (TimeFrame.includes("&nbsp")){
                alert("Please fill TimeFrame, Thank you")
                return;
            }
            if (ProgramEventCode.includes("&nbsp")){
                alert("Please fill Program Event Code, Thank you")
                return;
            }
            if (CX_ports.includes("&nbsp")){
                alert("Fill The CX Portfolio and CX Category, Thank you");
                return;
            }
        }
        return;
    }
    var CX_portfolio = document.getElementById("00N2T000005pVGb");
    var CX_category = document.getElementById("00N2T000005pVGa");
    var description1 = document.evaluate('/html[1]/body[1]/div[1]/div[3]/table[1]/tbody[1]/tr[1]/td[2]/form[1]/div[1]/div[2]/div[2]/table[1]/tbody[1]/tr[11]/td[2]/textarea[1]', document, null, XPathResult.ANY_TYPE, null).iterateNext();
    var description = description1.value;

    CX_category.disabled = false;
    var program_event_name = document.getElementById("00N30000001Wlm5");
    if (description.includes("https://www.cisco.com/c/dam/m/en_us/customer-experience/collateral/cisco-cx-success-tracks-level-1-overview.pdf")){
        CX_portfolio.value = "Success Tracks";
        CX_category.innerHTML = ""
        CX_category.innerHTML = "<option value=\"Level 1\">Level 1</option>"
        return;
    }
    if (description.includes("https://www.cisco.com/c/dam/en_us/about/doing_business/legal/service_descriptions/docs/hosted_collaboration_solution_hcs_assured_shared_architecture_advise-implement-and-Optimize_Service.pdf")){
        CX_portfolio.value = "Support Services";
        CX_category.innerHTML = ""
        CX_category.innerHTML = "<option value=\"Other Support Services\">Other Support Services</option>"
        return;
    }
    if (description.includes("https://www.cisco.com/c/dam/en_us/about/doing_business/docs/cisco-hosted-collaboration-solution-support-services.pdf")){
        CX_portfolio.value = "Support Services";
        CX_category.innerHTML = ""
        CX_category.innerHTML = "<option value=\"Solution Support\">Solution Support</option>"
        return;
    }
     if (description.includes("https://www.cisco.com/c/dam/en_us/about/doing_business/legal/service_descriptions/docs/CPS_Datacenter_Design_Service_Standard.pdf") || description.includes("https://www.cisco.com/c/dam/en_us/about/doing_business/legal/service_descriptions/docs/Configurable_Design_Service.pdf") || description.includes("https://www.cisco.com/c/dam/en_us/about/doing_business/legal/service_descriptions/docs/Collaboration_Optimization_Services.pdf") || description.includes("https://www.cisco.com/c/dam/en_us/about/doing_business/legal/service_descriptions/docs/CPS_Routing_Switching_Assessment_Service.pdf") || description.includes("https://www.cisco.com/c/dam/en_us/about/doing_business/legal/service_descriptions/docs/Configurable_Deployment_Service.pdf") || description.includes("https://www.cisco.com/c/dam/en_us/about/doing_business/legal/service_descriptions/docs/Configurable_Deployment_Service.pdf") || description.includes("https://www.cisco.com/c/dam/en_us/about/doing_business/docs/cisco-hosted-collaboration-solution-support-services.pdf") || description.includes("https://cisco.sharepoint.com/Sites/One-offSolutionSupportTeamEMEA/SitePages/YES%20SSPT%20Support.aspx") || description.includes("https://www.cisco.com/c/dam/en_us/about/doing_business/legal/service_descriptions/docs/cisco-deployment-services-for-cisco-one-prime-foundation.pdf") || description.includes("http://www.cisco.com/c/dam/en_us/about/doing_business/legal/service_descriptions/docs/ASF_Network_Device_Security_Assessment.pdf") || description.includes("https://www.cisco.com/c/dam/en_us/about/doing_business/legal/service_descriptions/docs/radio-frequency-validation-service.pdf") || description.includes("https://www.cisco.com/c/dam/en_us/about/doing_business/legal/service_descriptions/docs/cisco-security-deployment-service-firepower-solutions.pdf") || description.includes("https://www.cisco.com/c/dam/en_us/about/doing_business/legal/service_descriptions/docs/asf-remote-expert-branch-mobile-uccx.pdf") || description.includes("https://www.cisco.com/c/dam/en_us/about/doing_business/legal/service_descriptions/docs/wireless_lan_network_assessment.pdf") || description.includes("https://www.cisco.com/c/dam/en_us/about/doing_business/legal/service_descriptions/docs/ASF_Network_Device_Security_Assessment.pdf") || description.includes("https://www.cisco.com/c/dam/en_us/about/doing_business/legal/service_descriptions/docs/cisco_dna_center_advise_and_implement_quick_Start.pdf") ||description.includes("https://www.cisco.com/c/dam/en_us/about/doing_business/legal/service_descriptions/docs/asf-cisco-wlan-plan-and-build-services.pdf") || description.includes("https://www.cisco.com/c/dam/en_us/about/doing_business/legal/service_descriptions/docs/asf-remote-expert-branch-mobile-ucce.pdf") || description.includes("https://www.cisco.com/c/dam/en_us/about/doing_business/legal/service_descriptions/docs/ASF_Cisco_IServices_Training.pdf")){
        CX_portfolio.value = "Professional Services";
        CX_category.innerHTML = ""
        CX_category.innerHTML = "<option value=\"Professional Svcs\">Professional Svcs</option>"
        return;
    }
    if (program_event_name.value == "TAC Lead Generation"){
        if (description.includes("Solution support")){
            CX_portfolio.value = "Support Services";
            CX_category.innerHTML = ""
            CX_category.innerHTML = "<option value=\"Solution Support\">Solution Support</option>"
            return;
        }
    }
    if (description.includes("https://www.cisco.com/c/dam/en_us/about/doing_business/legal/service_descriptions/docs/cisco-smart-net-total-care.pdf")){
        CX_portfolio.value = "Support Services";
        CX_category.innerHTML = ""
        CX_category.innerHTML = "<option value=\"SNTC\">SNTC</option>"
        return;
    }
     else if (program_event_name.value == "ALP Lead Generation" || program_event_name.value == "GLO Lead Generation" || program_event_name.value == "Intersight Lead Generation"){
         if (description.includes("3 year") || description.includes("3 years") || description.includes("1 year")){
             CX_portfolio.value = "Support Services";
             CX_category.innerHTML = ""
             CX_category.innerHTML = "<option value=\"Solution Support\">Solution Support</option>"
             return;
         }
             CX_portfolio.value = "Support Services";
             CX_category.innerHTML = ""
             CX_category.innerHTML = "<option value=\"Other Support Services\">Other Support Services</option>"
             return;
     }
    else if (program_event_name.value == "TAC Sales Product Recommendations Lead Generation"){
         CX_portfolio.value = "Support Services";
         CX_category.innerHTML = ""
         CX_category.innerHTML = "<option value=\"Other Support Services\">Other Support Services</option>"
         return;
    }
    if (description.includes("https://www.cisco.com/c/dam/en_us/about/doing_business/legal/service_descriptions/docs/learning-cisco-learning-library-services.pdf")){
        CX_portfolio.value = "Learning";
        CX_category.innerHTML = ""
        CX_category.innerHTML = "<option value=\"Learning\">Learning</option>"
        return;
    }
    if (description.includes("HTOM/HTTS") || description.includes("HTOM") || description.includes("HTTS")){
        CX_portfolio.value = "Business Critical Services";
        CX_category.value = "Expert Care";
        CX_category.innerHTML = ""
        CX_category.innerHTML = "<option value=\"Expert Care\">Expert Care</option>"
        return;
    }
    
    if (description.includes("https://cisco.sharepoint.com/Sites/TSPMEnterpriseInfrastructure/SitePages/Independent%20Software%20Vendor%20Application%20Services%20(ISV).aspx") || description.includes("https://www.cisco.com/c/dam/en/us/products/collateral/cloud-systems-management/smart-net-total-care/datasheet-c78-735459.pdf")){
        CX_portfolio.value = "Support Services";
        CX_category.innerHTML = ""
        CX_category.innerHTML = "<option value=\"SNTC\">SNTC</option>"
        return;
    }
    if (description.includes("https://www.cisco.com/c/dam/en_us/about/doing_business/legal/service_descriptions/docs/rma-only-service.pdf")){
        CX_portfolio.value = "Support Services";
        CX_category.innerHTML = ""
        CX_category.innerHTML = "<option value=\"Cisco RMA Only Service\">Cisco RMA Only Service</option>"
        return;
    }
    if (description.includes("https://www.cisco.com/c/dam/en_us/about/doing_business/docs/cisco-software-support-service.pdf")){
        CX_portfolio.value = "Support Services";
        CX_category.innerHTML = ""
        CX_category.innerHTML = "<option value=\"Software Support Services\">Software Support Services</option>"
        return;
    }
    if (description.includes("https://cisco.sharepoint.com/Sites/One-offSolutionSupportTeamEMEA/SitePages/YES%20SSPT%20Support.aspx") || description.includes("https://apps.na.collabserv.com/wikis/home/wiki/W1d04a2f19402_48da_bc2f_ef7dc961f86a/page/Independent%20Software%20Vendor%20Application%20Services%20%28ISV%29") || description.includes("Pre-sale") || description.includes("https://apps.na.collabserv.com/wikis/home/wiki/W04ab9feda052_4db9_bd92_e578abda4e00/page/Advanced%20Services")){
        CX_portfolio.value = "Support Services";
        CX_category.innerHTML = ""
        CX_category.innerHTML = "<option value=\"Other Support Services\">Other Support Services</option>"
        return;
    }
})();
