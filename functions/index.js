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

// !!!!!!!!!!!!! for debugging !!!!!!!!!!!!!
// appendix, abscess and perforation
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

var crp_factor_label_abs = document.getElementById("crp_factor_abs");
var wbc_factor_label_abs = document.getElementById("wbc_factor_abs");
var duration_factor_label_abs = document.getElementById("duration_factor_abs");
var temperature_factor_label_abs = document.getElementById("temperature_factor_abs");
var age_factor_label_abs = document.getElementById("age_factor_abs");
var gender_factor_label_abs = document.getElementById("gender_factor_abs");
var neutrophils_factor_label_abs = document.getElementById("neutrophils_factor_abs");

var crp_factor_label_per = document.getElementById("crp_factor_per");
var wbc_factor_label_per = document.getElementById("wbc_factor_per");
var duration_factor_label_per = document.getElementById("duration_factor_per");
var temperature_factor_label_per = document.getElementById("temperature_factor_per");
var age_factor_label_per = document.getElementById("age_factor_per");
var gender_factor_label_per = document.getElementById("gender_factor_per");
var neutrophils_factor_label_per = document.getElementById("neutrophils_factor_per");

var combined_risk_factor_app = document.getElementById("risk_factor");
var adjustment = document.getElementById("adjustment");
var app_prob_before = document.getElementById("app_prob_before");

var combined_risk_factor_abs = document.getElementById("risk_factor_abs");
var combined_risk_factor_per = document.getElementById("risk_factor_per");

// imaging
var imaging_sensitivity_label = document.getElementById("imaging_sensitivity");
var imaging_specificity_label = document.getElementById("imaging_specificity");
var visible_prevelance_label = document.getElementById("visible_prevelance");
// !!!!!!!!!!!!!!!!!!!!!!!!!!

function appendicitis_handler() {
    var crp_risk_factor = crp_factor_app(crp);
    crp_factor_label.innerText = crp_risk_factor;

    var wbc_risk_factor = wbc_factor_app();
    wbc_factor_label.innerText = wbc_risk_factor;

    var duration_risk_factor = duration_factor_app();
    duration_factor_label.innerText = duration_risk_factor;

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

    var risk_combined = crp_risk_factor * wbc_risk_factor * duration_risk_factor * temp_risk_factor * age_risk_factor * gender_risk_factor * neutrophils_risk_factor * pain_rlq_risk_factor * rebound_tender_risk_factor * local_risk_factor * anorexia_risk_factor * nausea_risk_factor * ua_risk_factor * rbc_select_risk_factor * wbc_select_risk_factor * culture_risk_factor;
    combined_risk_factor_app.innerText = risk_combined

    var probability = app_probability(risk_combined);

    app_prob_before.innerText = probability;
    var adjustment_value = app_prob_correction(probability);
    adjustment.innerText = adjustment_value
    probability = probability + adjustment_value
    app_prob_hidden.innerText = probability;

    var probability_str = app_probability_final_touches(probability);
    app_prob.innerText = probability_str;
}

function abscess_handler() {
    var crp_risk_factor = crp_factor_abs();
    crp_factor_label_abs.innerText = crp_risk_factor;

    var wbc_risk_factor = wbc_factor_abs();
    wbc_factor_label_abs.innerText = wbc_risk_factor;

    var duration_risk_factor = duration_factor_abs();
    duration_factor_label_abs.innerText = duration_risk_factor;

    var temp_risk_factor = temp_factor_abs();
    temperature_factor_label_abs.innerText = temp_risk_factor;

    var age_risk_factor = age_factor_abs();
    age_factor_label_abs.innerText = age_risk_factor;

    var gender_risk_factor = gender_factor_abs();
    gender_factor_label_abs.innerText = gender_risk_factor;

    var neutrophils_risk_factor = neutrophils_factor_abs();
    neutrophils_factor_label_abs.innerText = neutrophils_risk_factor;

    var risk_combined = crp_risk_factor * wbc_risk_factor * duration_risk_factor * temp_risk_factor * age_risk_factor * gender_risk_factor * neutrophils_risk_factor;
    combined_risk_factor_abs.innerText = risk_combined

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
    var crp_risk_factor = crp_factor_per();
    crp_factor_label_per.innerText = crp_risk_factor;

    var wbc_risk_factor = wbc_factor_per();
    wbc_factor_label_per.innerText = wbc_risk_factor;

    var duration_risk_factor = duration_factor_per();
    duration_factor_label_per.innerText = duration_risk_factor;

    var temp_risk_factor = temp_factor_per();
    temperature_factor_label_per.innerText = temp_risk_factor;

    var age_risk_factor = age_factor_per();
    age_factor_label_per.innerText = age_risk_factor;

    var gender_risk_factor = gender_factor_per();
    gender_factor_label_per.innerText = gender_risk_factor;

    var neutrophils_risk_factor = neutrophils_factor_per();
    neutrophils_factor_label_per.innerText = neutrophils_risk_factor;

    var risk_combined = crp_risk_factor * wbc_risk_factor * duration_risk_factor * temp_risk_factor * age_risk_factor * gender_risk_factor * neutrophils_risk_factor;
    combined_risk_factor_per.innerText = risk_combined

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
    var imaging_sensitivity = sensitivity();
    imaging_sensitivity_label.innerText = imaging_sensitivity;

    var imaging_specificity = specificity();
    imaging_specificity_label.innerText = imaging_specificity;

    var ppv_imaging_value = ppv_imaging(imaging_sensitivity, imaging_specificity);
    ppv_field.innerText = ppv_imaging_value;

    var npv_imaging_value = npv_imaging(imaging_sensitivity, imaging_specificity);
    npv_field.innerText = npv_imaging_value;

    var accuracy_imaging_value = accuracy_imaging(imaging_sensitivity, imaging_specificity);
    accuracy_field.innerText = accuracy_imaging_value;
}

function visible_handler() {
    var increased_prevelance_value = increased_prevelance();
    visible_prevelance_label.innerText = increased_prevelance_value;

    var risk_with_increase = parseFloat(combined_risk_factor_app.innerText) * increased_prevelance_value;

    var probability = app_probability(risk_with_increase);

    var probability_str = probability_final_touches(probability);
    app_prob_imaging.innerText = probability_str;
}


var calculate_imaging = function(){
    imaging_handler();
    visible_handler();
}

submitImagingButton.onclick = calculate_imaging;

