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
  else if (wbc.value > 7 && wbc <= 10) {
    return 0.655250440096987
  }
  else if (wbc.value > 10 && wbc <= 14) {
    return 1.09508850034108
  }
  else if (wbc.value > 14 && wbc <= 19) {
    return 1.71923165401426
  }
  else if (wbc.value > 19 && wbc <= 25) {
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
  if (gender.value == 'Male') {
    return 1.30908828343121
  }
  else if (gender.value == 'Female') {
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
  else if (pain_rlq.value == 'Yes') {
    return 1.1004916504196
  }
  else if (pain_rlq.value == 'No') {
    return 0.446855169839492
  }
}

function rbd_tender_factor_app() {
  if (rebound_tender.value == 'N/A') {
    return 1
  }
  else if (rebound_tender.value == 'Yes') {
    return 1.32162369607523
  }
  else if (rebound_tender.value == 'No') {
    return 0.71588409529667
  }
}

function local_factor_app() {
  if (localization.value == 'N/A') {
    return 1
  }
  else if (localization.value == 'Yes') {
    return 2.1934786893697
  }
  else if (localization.value == 'No') {
    return 0.705133689759443
  }
}

function anorexia_factor_app() {
  if (anorexia.value == 'N/A') {
    return 1
  }
  else if (anorexia.value == 'Yes') {
    return 1.15984121326306
  }
  else if (anorexia.value == 'No') {
    return 0.709525506017927
  }
}

function nausea_factor_app() {
  if (nausea.value == 'N/A') {
    return 1
  }
  else if (nausea.value == 'Yes') {
    return 1.10344086021505
  }
  else if (nausea.value == 'No') {
    return 0.793668496911462
  }
}

function ua_factor_app() {
  if (urine_analysis.value == 'N/A') {
    return 1
  }
  else if (urine_analysis.value == 'Yes') {
    return 0.867779710379419
  }
  else if (urine_analysis.value == 'No') {
    return 1.61820330969267
  }
}

function rbc_select_factor_app() {
  if (rbc_select.value == 'N/A') {
    return 1
  }
  else if (rbc_select.value == 'Yes') {
    return 0.813988331796649
  }
  else if (rbc_select.value == 'No') {
    return 1.05502845184349
  }
}

function wbc_select_factor_app() {
  if (wbc_select.value == 'N/A') {
    return 1
  }
  else if (wbc_select.value == 'Yes') {
    return 0.817655736406479
  }
  else if (wbc_select.value == 'No') {
    return 1.07026674721012
  }
}

function culture_factor_app() {
  if (culture.value == 'N/A') {
    return 1
  }
  else if (culture.value == 'Yes') {
    return 0.600761605415861
  }
  else if (culture.value == 'No') {
    return 1.12614591291062
  }
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
    culture_factor_app
};