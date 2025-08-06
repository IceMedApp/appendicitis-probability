function crp_factor_app() {
    if (crp.value == '') {
        return 1;
    }
    else if (crp.value < 10) {
        return 0.741195658058578;
    }
    else if (crp.value >= 10) {
        return 1.17909895565026;
    }
    else {
        return 1;
    }
}

function wbc_factor_app() {
  if (wbc.value == '') {
    return 1
  }
  else if (wbc.value <= 7) {
    return 0.489695087521175
  }
  else if (wbc.value > 7 && wbc.value <= 10) {
    return 0.655250440096987
  }
  else if (wbc.value > 10 && wbc.value <= 14) {
    return 1.09508850034108
  }
  else if (wbc.value > 14 && wbc.value <= 19) {
    return 1.71923165401426
  }
  else if (wbc.value > 19 && wbc.value <= 25) {
    return 2.25244010647737
  }
  else if (wbc.value > 25) {
    return 1.74223602484472
  }
}

function duration_factor_app() {
  if (duration.value == '') {
    return 1
  }
  else if (duration.value == 1) {
    return 1.0856828425
  }
  else if (duration.value == 2) {
    return 1.27915432265015
  }
  else if (duration.value == 3) {
    return 0.882828181453232
  }
  else if (duration.value == 4) {
    return 0.703230409963674
  }
  else if (duration.value > 4) {
    return 0.515858944050434
  }
}

function temp_factor_app() {
  if (temperature.value == '') {
    return 1
  }
  else if (temperature.value <= 37) {
    return 0.684356065275315
  }
  else if (temperature.value > 37 && temperature.value <= 37.2) {
    return 0.915303355775024
  }
  else if (temperature.value > 37.2 && temperature.value <= 37.5) {
    return 0.98537326804448
  }
  else if (temperature.value > 37.5 && temperature.value <= 38) {
    return 1.36687722599288
  }
  else if (temperature.value > 38) {
    return 1.14670950947694
  }
}

function age_factor_app() {
  if (age.value >= 0 && age.value <= 10) {
    return 1.61055486024197
  }
  else if (age.value > 10 && age.value <= 20) {
    return 1.09485815602837
  }
  else if (age.value > 20 && age.value <= 30) {
    return 0.862170121450096
  }
  else if (age.value > 30 && age.value <= 40) {
    return 0.872962879130828
  }
  else if (age.value > 40) {
    return 1.00
  }
}

function gender_factor_app() {
  if (gender.value == 'male') {
    return 1.30908828343121
  }
  else if (gender.value == 'female') {
    return 0.783833827093994
  }
  else if (gender.value == 'N/A') {
    return 1
  }
}

function neutrophils_factor_app() {
  if (neutrophils.value == '') {
    return 1
  }
  else if (neutrophils.value >= 0 && neutrophils.value <= 75) {
    return 0.685687655343828
  }
  else if (neutrophils.value > 75) {
    return 1.47041579621268
  }
}

function pain_factor_app() {
  if (pain_rlq.value == 'N/A') {
    return 1
  }
  else if (pain_rlq.value == 'yes') {
    return 1.1004916504196
  }
  else if (pain_rlq.value == 'no') {
    return 0.446855169839492
  }
}

function rbd_tender_factor_app() {
  if (rebound_tender.value == 'N/A') {
    return 1
  }
  else if (rebound_tender.value == 'yes') {
    return 1.32162369607523
  }
  else if (rebound_tender.value == 'no') {
    return 0.71588409529667
  }
}

function local_factor_app() {
  if (localization.value == 'N/A') {
    return 1
  }
  else if (localization.value == 'yes') {
    return 2.1934786893697
  }
  else if (localization.value == 'no') {
    return 0.705133689759443
  }
}

function anorexia_factor_app() {
  if (anorexia.value == 'N/A') {
    return 1
  }
  else if (anorexia.value == 'yes') {
    return 1.15984121326306
  }
  else if (anorexia.value == 'no') {
    return 0.709525506017927
  }
}

function nausea_factor_app() {
  if (nausea.value == 'N/A') {
    return 1
  }
  else if (nausea.value == 'yes') {
    return 1.10344086021505
  }
  else if (nausea.value == 'no') {
    return 0.793668496911462
  }
}

function ua_factor_app() {
  if (urine_analysis.value == 'N/A') {
    return 1
  }
  else if (urine_analysis.value == 'yes') {
    return 0.867779710379419
  }
  else if (urine_analysis.value == 'no') {
    return 1.61820330969267
  }
}

function rbc_select_factor_app() {
  if (rbc_select.value == 'N/A') {
    return 1
  }
  else if (rbc_select.value == 'yes') {
    return 0.813988331796649
  }
  else if (rbc_select.value == 'no') {
    return 1.05502845184349
  }
}

function wbc_select_factor_app() {
  if (wbc_select.value == 'N/A') {
    return 1
  }
  else if (wbc_select.value == 'yes') {
    return 0.817655736406479
  }
  else if (wbc_select.value == 'no') {
    return 1.07026674721012
  }
}

function culture_factor_app() {
  if (culture.value == 'N/A') {
    return 1
  }
  else if (culture.value == 'yes') {
    return 0.600761605415861
  }
  else if (culture.value == 'no') {
    return 1.12614591291062
  }
}

function combined_risk_factor() {
    var crp_risk_factor = crp_factor_app();
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

    var risk_combined = crp_risk_factor * wbc_risk_factor * duration_risk_factor * temp_risk_factor * age_risk_factor * gender_risk_factor * neutrophils_risk_factor * pain_rlq_risk_factor * rebound_tender_risk_factor 
        local_risk_factor * anorexia_risk_factor * nausea_risk_factor * ua_risk_factor * rbc_select_risk_factor * wbc_select_risk_factor * culture_risk_factor;
    combined_risk_factor.innerText = risk_combined
    return risk_combined
}

function app_probability_final_touches(probability) {
  if (crp.value < 10 && (wbc.value < 10.1 || duration.value == 3)) {
    return 'Less than 5%'
  }
  else if (probability < 0) {
    return 'Less than 1%'
  }
  
  var remainder = (probability * 100) % 1
  if (remainder < 0.5) {
    return Math.floor(probability * 100) + '%'
  }
  else {
    return Math.ceil(probability * 100) + '%'
  }
}

function app_prob_correction(probability) {
  var adjustment = 0
  if (probability <= 0.05) {
    adjustment = 0
  }
  else if (probability > 0.05 && probability <= 0.075) {
    adjustment = 0.01
  }
  else if (probability > 0.075 && probability <= 0.095) {
    adjustment = 0.02
  }
  else if (probability > 0.095 && probability <= 0.1425) {
    adjustment = 0.03
  }
  else if (probability > 0.1425 && probability <= 0.16) {
    adjustment = 0.04
  }
  else if (probability > 0.16 && probability <= 0.1925) {
    adjustment = 0.05
  }
  else if (probability > 0.1925 && probability <= 0.2175) {
    adjustment = 0.06
  }
  else if (probability > 0.2175 && probability <= 0.24) {
    adjustment = 0.05
  }
  else if (probability > 0.24 && probability <= 0.335) {
    adjustment = 0.06
  }
  else if (probability > 0.335 && probability <= 0.3775) {
    adjustment = 0.05
  }
  else if (probability > 0.3775 && probability <= 0.3925) {
    adjustment = 0.04
  }
  else if (probability > 0.3925 && probability <= 0.4) {
    adjustment = 0.03
  }
  else if (probability > 0.4 && probability <= 0.4325) {
    adjustment = 0.02
  }
  else if (probability > 0.4325 && probability <= 0.4525) {
    adjustment = 0.01
  }
  else if (probability > 0.4525 && probability <= 0.5075) {
    adjustment = 0
  }
  else if (probability > 0.5075 && probability <= 0.5475) {
    adjustment = -0.01
  }
  else if (probability > 0.5475 && probability <= 0.5525) {
    adjustment = -0.03
  }
  else if (probability > 0.5525 && probability <= 0.6375) {
    adjustment = -0.05
  }
  else if (probability > 0.6375 && probability <= 0.7525) {
    adjustment = -0.06
  }
  else if (probability > 0.7525 && probability <= 0.78) {
    adjustment = -0.05
  }
  else if (probability > 0.78 && probability <= 0.82) {
    adjustment = -0.04
  }
  else if (probability > 0.82 && probability <= 0.8625) {
    adjustment = -0.03
  }
  else if (probability > 0.8625 && probability <= 0.8725) {
    adjustment = -0.02
  }
  else if (probability > 0.8725 && probability <= 0.8775) {
    adjustment = -0.03
  }
  else if (probability > 0.8775 && probability <= 0.895) {
    adjustment = -0.02
  }
  else if (probability > 0.895 && probability <= 0.91) {
    adjustment = -0.01
  }
  else if (probability > 0.91) {
    adjustment = 0
  }
  return adjustment
}

export { 
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
    combined_risk_factor,
    app_probability_final_touches,
    app_prob_correction
};