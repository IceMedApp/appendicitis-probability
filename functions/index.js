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
    culture_factor_app,
    app_probability,
    app_probability_final_touches,
    app_prob_correction
} from "./appendicitis.js";

import { 
    crp_factor_abs,
    wbc_factor_abs,
    duration_factor_abs,
    temp_factor_abs,
    age_factor_abs,
    gender_factor_abs,
    neutrophils_factor_abs,
    probability_final_touches
} from "./abscess.js";

import { 
    crp_factor_per,
    wbc_factor_per,
    duration_factor_per,
    temp_factor_per,
    age_factor_per,
    gender_factor_per,
    neutrophils_factor_per
} from "./perforation.js";

import { 
    sensitivity,
    specificity,
    increased_prevelance,
    ppv_imaging,
    npv_imaging,
    accuracy_imaging
} from "./imaging.js";


// appendix, abscess and perforation
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
var app_prob_hidden = document.getElementById("app_prob_hidden");
var abs_prob = document.getElementById("abs_prob");
var per_prob = document.getElementById("per_prob"); 

// imaging
var submitImagingButton = document.getElementById("submit_imaging");
var imaging = document.getElementById("imaging");
var appendix_visible = document.getElementById("appendix_visible");

var ppv_field = document.getElementById("ppv");
var npv_field = document.getElementById("npv"); 
var accuracy_field = document.getElementById("accuracy");
var app_prob_imaging = document.getElementById("app_prob_imaging");

// appendix
var combined_risk_factor_hidden_app = document.getElementById("risk_factor_hidden");
var adjustment = document.getElementById("adjustment");
var app_prob_before = document.getElementById("app_prob_before");


function appendicitis_handler() {
    var crp_risk_factor = crp_factor_app(crp);
    var wbc_risk_factor = wbc_factor_app(wbc);
    var duration_risk_factor = duration_factor_app(duration);
    var temp_risk_factor = temp_factor_app(temperature);
    var age_risk_factor = age_factor_app(age);
    var gender_risk_factor = gender_factor_app(gender);
    var neutrophils_risk_factor = neutrophils_factor_app(neutrophils);
    var pain_rlq_risk_factor = pain_factor_app(pain_rlq);
    var rebound_tender_risk_factor = rbd_tender_factor_app(rebound_tender);
    var local_risk_factor = local_factor_app(localization);
    var anorexia_risk_factor = anorexia_factor_app(anorexia);
    var nausea_risk_factor = nausea_factor_app(nausea);
    var ua_risk_factor = ua_factor_app(urine_analysis);
    var rbc_select_risk_factor = rbc_select_factor_app(rbc_select);
    var wbc_select_risk_factor = wbc_select_factor_app(wbc_select);
    var culture_risk_factor = culture_factor_app(culture);

    var risk_combined = crp_risk_factor * wbc_risk_factor * duration_risk_factor * temp_risk_factor * age_risk_factor * gender_risk_factor * neutrophils_risk_factor * pain_rlq_risk_factor * rebound_tender_risk_factor * local_risk_factor * anorexia_risk_factor * nausea_risk_factor * ua_risk_factor * rbc_select_risk_factor * wbc_select_risk_factor * culture_risk_factor;
    combined_risk_factor_hidden_app.innerText = risk_combined

    var probability = app_probability(risk_combined);

    app_prob_before.innerText = probability;
    var adjustment_value = app_prob_correction(probability);
    adjustment.innerText = adjustment_value
    probability = probability + adjustment_value
    app_prob_hidden.innerText = probability;

    var probability_str = app_probability_final_touches(crp, wbc, duration, probability);
    app_prob.innerText = probability_str;
}

function abscess_handler() {
    var crp_risk_factor = crp_factor_abs(crp);
    var wbc_risk_factor = wbc_factor_abs(wbc);
    var duration_risk_factor = duration_factor_abs(duration);
    var temp_risk_factor = temp_factor_abs(temperature);
    var age_risk_factor = age_factor_abs(age);
    var gender_risk_factor = gender_factor_abs(gender);
    var neutrophils_risk_factor = neutrophils_factor_abs(neutrophils);

    var risk_combined = crp_risk_factor * wbc_risk_factor * duration_risk_factor * temp_risk_factor * age_risk_factor * gender_risk_factor * neutrophils_risk_factor;

    var probability = 0
    if (risk_combined >= 1) {
        probability = 1-((1-0.0314)/risk_combined)
    }
    else {
        probability = 0.0314 * risk_combined
    }

    var probability_str = probability_final_touches(probability);
    abs_prob.innerText = probability_str;
}

function perforation_handler() {
    var crp_risk_factor = crp_factor_per(crp);
    var wbc_risk_factor = wbc_factor_per(wbc);
    var duration_risk_factor = duration_factor_per(duration);
    var temp_risk_factor = temp_factor_per(temperature);
    var age_risk_factor = age_factor_per(age);
    var gender_risk_factor = gender_factor_per(gender);
    var neutrophils_risk_factor = neutrophils_factor_per(neutrophils);

    var risk_combined = crp_risk_factor * wbc_risk_factor * duration_risk_factor * temp_risk_factor * age_risk_factor * gender_risk_factor * neutrophils_risk_factor;

    var probability = 0
    if (risk_combined >= 1) {
        probability = 1-((1-0.0824)/risk_combined)
    }
    else {
        probability = 0.0824 * risk_combined
    }

    var probability_str = probability_final_touches(probability);
    per_prob.innerText = probability_str;
}

var calculate_probabilities = function(){
    appendicitis_handler();
    abscess_handler();
    perforation_handler();
}


submitButton.onclick = calculate_probabilities;

function imaging_handler() {
    var imaging_sensitivity = sensitivity(imaging);
    var imaging_specificity = specificity(imaging);

    var ppv_imaging_value = ppv_imaging(imaging_sensitivity, imaging_specificity, app_prob_hidden);
    ppv_field.innerText = ppv_imaging_value;

    var npv_imaging_value = npv_imaging(imaging_sensitivity, imaging_specificity, app_prob_hidden);
    npv_field.innerText = npv_imaging_value;

    var accuracy_imaging_value = accuracy_imaging(imaging_sensitivity, imaging_specificity, app_prob_hidden);
    accuracy_field.innerText = accuracy_imaging_value;
}

function visible_handler() {
    var increased_prevelance_value = increased_prevelance(imaging, appendix_visible);

    var risk_with_increase = parseFloat(combined_risk_factor_hidden_app.innerText) * increased_prevelance_value;

    var probability = app_probability(risk_with_increase);

    var probability_str = probability_final_touches(probability);
    app_prob_imaging.innerText = probability_str;
}


var calculate_imaging = function(){
    imaging_handler();
    visible_handler();
}

submitImagingButton.onclick = calculate_imaging;

