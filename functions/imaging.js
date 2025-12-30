function sensitivity(imaging, appendix_visible) {
  if (imaging.value == 'good' && appendix_visible.value == 'N/A') {
    return 0.9032
  }
  else if (imaging.value == 'poor' && appendix_visible.value == 'N/A') {
    return 0.5758
  }
  else if (imaging.value == 'ct' && appendix_visible.value == 'N/A') {
    return 0.9642
  }
  else if (imaging.value == 'good' && appendix_visible.value == 'yes') {
    return 0.9655
  }
  else if (imaging.value == 'poor' && appendix_visible.value == 'yes') {
    return 0.9167
  }
  else if (imaging.value == 'ct' && appendix_visible.value == 'yes') {
    return 0.9886
  }
  else if (imaging.value == 'good' && appendix_visible.value == 'no') {
    return 0.2
  }
  else if (imaging.value == 'poor' && appendix_visible.value == 'no') {
    return 0.0513
  }
  else if (imaging.value == 'ct' && appendix_visible.value == 'no') {
    return 0.5385
  }
}

function specificity(imaging, appendix_visible) {
  if (imaging.value == 'good' && appendix_visible.value == 'N/A') {
    return 0.9529
  }
  else if (imaging.value == 'poor' && appendix_visible.value == 'N/A') {
    return 0.9735
  }
  else if (imaging.value == 'ct' && appendix_visible.value == 'N/A') {
    return 0.9838
  }
  else if (imaging.value == 'good' && appendix_visible.value == 'yes') {
    return 0.9048
  }
  else if (imaging.value == 'poor' && appendix_visible.value == 'yes') {
    return 0.8421
  }
  else if (imaging.value == 'ct' && appendix_visible.value == 'yes') {
    return 0.9767
  }
  else if (imaging.value == 'good' && appendix_visible.value == 'no') {
    return 1
  }
  else if (imaging.value == 'poor' && appendix_visible.value == 'no') {
    return 0.9924
  }
  else if (imaging.value == 'ct' && appendix_visible.value == 'no') {
    return 1
  }
}

function app_prob_multiplier_appendix_not_visible(imaging) {
  if (imaging.value == 'good') {
    return 0.209622
  }
  else if (imaging.value == 'poor') {
    return 0.565054
  }
  else if (imaging.value == 'ct') {
    return 0.488759
  }
}

function kappa_factor(imaging, appendix_visible) {
  if (imaging.value == 'good' && appendix_visible.value == 'yes') {
    return 1.430333
  }
  else if (imaging.value == 'poor' && appendix_visible.value == 'yes') {
    return 1.872996
  }
  else if (imaging.value == 'ct' && appendix_visible.value == 'yes') {
    return 1.191886
  }
  else if (imaging.value == 'good' && appendix_visible.value == 'no') {
    return 0.209622
  }
  else if (imaging.value == 'poor' && appendix_visible.value == 'no') {
    return 0.565054
  }
  else if (imaging.value == 'ct' && appendix_visible.value == 'no') {
    return 0.502602
  }
  else if (appendix_visible.value == 'N/A') {
    return 1
  }
}

function ppv_imaging(sensitivity, specificity, app_prob_hidden) {
    var app_prob = parseFloat(app_prob_hidden.innerText);
    return (sensitivity*app_prob)/((sensitivity*app_prob)+(1-specificity)*(1-app_prob))
}

function npv_imaging(sensitivity, specificity, app_prob_hidden) {
    var app_prob = parseFloat(app_prob_hidden.innerText);
    return (specificity*(1-app_prob))/((1-sensitivity)*app_prob+specificity*(1-app_prob))
}

function accuracy_imaging(sensitivity, specificity, app_prob_hidden) {
    var app_prob = parseFloat(app_prob_hidden.innerText);
    return sensitivity*app_prob+specificity*(1-app_prob)
}

export { 
    sensitivity,
    specificity,
    app_prob_multiplier_appendix_not_visible,
    kappa_factor,
    ppv_imaging,
    npv_imaging,
    accuracy_imaging
};