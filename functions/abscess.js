function crp_factor_abs() {
  if (crp.value == '') {
    return 1
  }
  else if (crp.value <= 10) {
    return 0.569239130434783
  }
  else if (crp.value > 10 && crp.value <= 30) {
    return 0.558763837638376
  }
  else if (crp.value > 30 && crp.value <= 50) {
    return 0.853888888888889
  }
  else if (crp.value > 50 && crp.value <= 100) {
    return 1.11501860712387
  }
  else if (crp.value > 100 && crp.value <= 200) {
    return 1.12301587301587
  }
  else if (crp.value > 200) {
    return 1.34358024691358
  }
  else {
    return 1
  }
}

function wbc_factor_abs() {
  if (wbc.value == '') {
    return 1
  }
  else if (wbc.value <= 7) {
    return 0.600791139240506
  }
  else if (wbc.value > 7 && wbc.value <= 10) {
    return 0.729963898916968
  }
  else if (wbc.value > 10 && wbc.value <= 14) {
    return 0.863769035532995
  }
  else if (wbc.value > 14 && wbc.value <= 19) {
    return 1.02536973833902
  }
  else if (wbc.value > 19 && wbc.value <= 25) {
    return 1.23516666666667
  }
  else if (wbc.value > 25) {
    return 1.03731060606061
  }
}

function duration_factor_abs() {
  if (duration.value == '') {
    return 1
  }
  else if (duration.value == 1) {
    return 0.569693654266958
  }
  else if (duration.value == 2) {
    return 0.726959619952494
  }
  else if (duration.value == 3) {
    return 1.05071548821549
  }
  else if (duration.value == 4) {
    return 1.2484375
  }
  else if (duration.value > 4) {
    return 1.19396766169154
  }
}

function temp_factor_abs() {
  if (temperature.value == '') {
    return 1
  }
  else if (temperature.value <= 37) {
    return 0.5637
  }
  else if (temperature.value > 37 && temperature.value <= 37.2) {
    return 0.56984649122807
  }
  else if (temperature.value > 37.2 && temperature.value <= 37.5) {
    return 0.705926724137931
  }
  else if (temperature.value > 37.5 && temperature.value <= 38) {
    return 1.02725694444444
  }
  else if (temperature.value > 38) {
    return 1.15
  }
}

function age_factor_abs() {
  if (age.value >= 0 && age.value <= 10) {
    return 1.10184108527132
  }
  else if (age.value > 10 && age.value <= 20) {
    return 1.05465086646279
  }
  else if (age.value > 20 && age.value <= 30) {
    return 0.798360655737705
  }
  else if (age.value > 30 && age.value <= 40) {
    return 0.637284482758621
  }
  else if (age.value > 40) {
    return 1.00
  }
}

function gender_factor_abs() {
  if (gender.value == 'male') {
    return 1.01350193477059
  }
  else if (gender.value == 'female') {
    return 0.927198211624441
  }
  else if (gender.value == 'N/A') {
    return 1
  }
}

function neutrophils_factor_abs() {
  if (neutrophils.value == '') {
    return 1
  }
  else if (neutrophils.value >= 0 && neutrophils.value <= 50) {
    return 0.525
  }
  else if (neutrophils.value > 50 && neutrophils.value <= 75) {
    return 0.716877431906615
  }
  else if (neutrophils.value > 75 && neutrophils.value <= 85) {
    return 1.04907407407407
  }
  else if (neutrophils.value > 85) {
    return 1.04366028708134
  }
}

function probability_final_touches(probability) {
  var result = ''
  if (probability < 0) {
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

export { 
    crp_factor_abs,
    wbc_factor_abs,
    duration_factor_abs,
    temp_factor_abs,
    age_factor_abs,
    gender_factor_abs,
    neutrophils_factor_abs,
    probability_final_touches
};