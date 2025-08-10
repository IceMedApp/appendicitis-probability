function crp_factor_per(crp) {
  if (crp.value == '') {
    return 1
  }
  else if (crp.value <= 10) {
    return 0.440942028985507
  }
  else if (crp.value > 10 && crp.value <= 30) {
    return 0.54289667896679
  }
  else if (crp.value > 30 && crp.value <= 50) {
    return 0.964814814814815
  }
  else if (crp.value > 50 && crp.value <= 100) {
    return 1.25094968827026
  }
  else if (crp.value > 100 && crp.value <= 200) {
    return 1.26839826839827
  }
  else if (crp.value > 200) {
    return 1.74962962962963
  }
  else {
    return 1
  }
}

function wbc_factor_per(wbc) {
  if (wbc.value == '') {
    return 1
  }
  else if (wbc.value <= 7) {
    return 0.422995780590717
  }
  else if (wbc.value > 7 && wbc.value <= 10) {
    return 0.566636582430806
  }
  else if (wbc.value > 10 && wbc.value <= 14) {
    return 0.856175972927242
  }
  else if (wbc.value > 14 && wbc.value <= 19) {
    return 1.104292067432
  }
  else if (wbc.value > 19 && wbc.value <= 25) {
    return 1.39175757575758
  }
  else if (wbc.value > 25) {
    return 1.4198347107438
  }
}

function duration_factor_per(duration) {
  if (duration.value == '') {
    return 1
  }
  else if (duration.value == 1) {
    return 0.474562363238512
  }
  else if (duration.value == 2) {
    return 1.0277837760023
  }
  else if (duration.value == 3) {
    return 1.17471686562596
  }
  else if (duration.value == 4) {
    return 1.19734848484848
  }
  else if (duration.value > 4) {
    return 1.081592039801
  }
}

function temp_factor_per(temperature) {
  if (temperature.value == '') {
    return 1
  }
  else if (temperature.value <= 37) {
    return 0.435666666666667
  }
  else if (temperature.value > 37 && temperature.value <= 37.2) {
    return 0.474780701754386
  }
  else if (temperature.value > 37.2 && temperature.value <= 37.5) {
    return 0.701867816091954
  }
  else if (temperature.value > 37.5 && temperature.value <= 38) {
    return 1.06887052341598
  }
  else if (temperature.value > 38) {
    return 1.3030303030303
  }
}

function age_factor_per(age) {
  if (age.value >= 0 && age.value <= 10) {
    return 1.33121916842847
  }
  else if (age.value > 10 && age.value <= 20) {
    return 1.03406542489111
  }
  else if (age.value > 20 && age.value <= 30) {
    return 0.765710382513661
  }
  else if (age.value > 30 && age.value <= 40) {
    return 0.6147030651341
  }
  else if (age.value > 40) {
    return 1.00
  }
}

function gender_factor_per(gender) {
  if (gender.value == 'male') {
    return 1.05232423739886
  }
  else if (gender.value == 'female') {
    return 0.838363139592648
  }
  else if (gender.value == 'N/A') {
    return 1
  }
}

function neutrophils_factor_per(neutrophils) {
  if (neutrophils.value == '') {
    return 1
  }
  else if (neutrophils.value >= 0 && neutrophils.value <= 50) {
    return 0.40625
  }
  else if (neutrophils.value > 50 && neutrophils.value <= 75) {
    return 0.611057068741894
  }
  else if (neutrophils.value > 75 && neutrophils.value <= 85) {
    return 1.04329004329004
  }
  else if (neutrophils.value > 85) {
    return 1.26150500217486
  }
}

export { 
    crp_factor_per,
    wbc_factor_per,
    duration_factor_per,
    temp_factor_per,
    age_factor_per,
    gender_factor_per,
    neutrophils_factor_per
};
