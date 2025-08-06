function sensitivity() {
  if (imaging.value == 'good') {
    return 0.9032
  }
  else if (imaging.value == 'poor') {
    return 0.5758
  }
  else if (imaging.value == 'ct') {
    return 0.9231
  }
}

function specificity() {
  if (imaging.value == 'good') {
    return 0.9529
  }
  else if (imaging.value == 'poor') {
    return 0.9735
  }
  else if (imaging.value == 'ct') {
    return 0.9663
  }
}

function increased_prevelance() {
  if (imaging.value == 'good' && appendix_visible.value == 'N/A') {
    return 1.0287804878
  }
  else if (imaging.value == 'poor' && appendix_visible.value == 'N/A') {
    return 0.9658536585
  }
  else if (imaging.value == 'ct' && appendix_visible.value == 'N/A') {
    return 1
  }
  else if (imaging.value == 'good' && appendix_visible.value == 'yes') {
    return 1.4518002323
  }
  else if (imaging.value == 'poor' && appendix_visible.value == 'yes') {
    return 2.535368389
  }
  else if (imaging.value == 'ct' && appendix_visible.value == 'yes') {
    return 1.039
  }
  else if (imaging.value == 'good' && appendix_visible.value == 'no') {
    return 0.2075609756
  }
  else if (imaging.value == 'poor' && appendix_visible.value == 'no') {
    return 0.5563414634
  }
  else if (imaging.value == 'ct' && appendix_visible.value == 'no') {
    return 0.5475609756
  }
}

function ppv_imaging(sensitivity, specificity) {
  return (sensitivity*app_prob_hidden.innerText)/((sensitivity*app_prob_hidden.innerText)+(1-specificity)*(1-app_prob_hidden.innerText))
}

function npv_imaging(sensitivity, specificity) {
  return (specificity*(1-app_prob_hidden.innerText))/((1-sensitivity)*app_prob_hidden.innerText+specificity*(1-app_prob_hidden.innerText))
}

function accuracy_imaging(sensitivity, specificity) {
  return sensitivity*app_prob_hidden.innerText+specificity*(1-app_prob_hidden.innerText)
}

export { 
    sensitivity,
    specificity,
    increased_prevelance,
    ppv_imaging,
    npv_imaging,
    accuracy_imaging
};