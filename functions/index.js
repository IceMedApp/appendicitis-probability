import { 
    crp_factor_app,
    wbc_factor_app,
    duration_factor_app,
    temp_factor_app,
    age_factor_app,
    gender_factor_app,
    neutrophils_factor_app,
    pain_factor_app,
    rbd_tender_factor_app,
    local_factor_app,
    anorexia_factor_app,
    nausea_factor_app,
    ua_factor_app,
    rbc_select_factor_app,
    wbc_select_factor_app,
    culture_factor_app
} from "./appendicitis.js";

var crp = document.getElementById("crp");
var wbc = document.getElementById("wbc");
var duration = document.getElementById("duration");
var temperature = document.getElementById("temperature");
var age = document.getElementById("age");
var gender = document.getElementById("gender");
var neutrophils = document.getElementById("neutrophils");
var pain_rlq = document.getElementById("pain_rlq");
var rebound_tender = document.getElementById("rebound_tender");
var localization = document.getElementById("localization");
var anorexia = document.getElementById("anorexia");
var nausea = document.getElementById("nausea");
var urine_analysis = document.getElementById("urine_analysis");
var rbc_select = document.getElementById("rbc_select");
var wbc_select = document.getElementById("wbc_select");
var culture = document.getElementById("culture");

var submitButton = document.getElementById("submit");
var app_prob = document.getElementById("app_prob"); 

// for debugging risk factors
var crp_factor_label = document.getElementById("crp_factor");
var wbc_factor_label = document.getElementById("wbc_factor");
var duration_factor_label = document.getElementById("duration_factor");
var temperature_factor_label = document.getElementById("temperature_factor");
var age_factor_label = document.getElementById("age_factor");
var gender_factor_label = document.getElementById("gender_factor");
var neutrophils_factor_label = document.getElementById("neutrophils_factor");
var pain_rlq_factor_label = document.getElementById("pain_rlq_factor");
var rebound_tender_factor_label = document.getElementById("rebound_tender_factor");
var localization_factor_label = document.getElementById("localization_factor");
var anorexia_factor_label = document.getElementById("anorexia_factor");
var nausea_factor_label = document.getElementById("nausea_factor");
var urine_analysis_factor_label = document.getElementById("urine_analysis_factor");
var rbc_select_factor_label = document.getElementById("rbc_select_factor");
var wbc_select_factor_label = document.getElementById("wbc_select_factor");
var culture_factor_label = document.getElementById("culture_factor");
//

var submitInformation = function(){

    var crp_risk_factor = crp_factor_app();
    crp_factor_label.innerText = crp_risk_factor;

    var wbc_risk_factor = wbc_factor_app();
    wbc_factor_label.innerText = wbc_risk_factor;

    var duration_risk_factor = duration_factor_app();
    duration_factor_label.innerText = wbc_risk_factor;

    var temp_risk_factor = temp_factor_app();
    temperature_factor_label.innerText = temp_risk_factor;

    var age_risk_factor = age_factor_app();
    age_factor_label.innerText = age_risk_factor;

    var gender_risk_factor = gender_factor_app();
    gender_factor_label.innerText = gender_risk_factor;

    var neutrophils_risk_factor = neutrophils_factor_app();
    neutrophils_factor_label.innerText = neutrophils_risk_factor;

    var pain_rlq_risk_factor = pain_factor_app();
    pain_rlq_factor_label.innerText = pain_rlq_risk_factor;

    var rebound_tender_risk_factor = rbd_tender_factor_app();
    rebound_tender_factor_label.innerText = rebound_tender_risk_factor;

    var local_risk_factor = local_factor_app();
    localization_factor_label.innerText = local_risk_factor;

    var anorexia_risk_factor = anorexia_factor_app();
    anorexia_factor_label.innerText = anorexia_risk_factor;

    var nausea_risk_factor = nausea_factor_app();
    nausea_factor_label.innerText = nausea_risk_factor;

    var ua_risk_factor = ua_factor_app();
    urine_analysis_factor_label.innerText = ua_risk_factor;

    var rbc_select_risk_factor = rbc_select_factor_app();
    rbc_select_factor_label.innerText = rbc_select_risk_factor;

    var wbc_select_risk_factor = wbc_select_factor_app();
    wbc_select_factor_label.innerText = wbc_select_risk_factor;

    var culture_risk_factor = culture_factor_app();
    culture_factor_label.innerText = culture_risk_factor;
}


submitButton.onclick = submitInformation;