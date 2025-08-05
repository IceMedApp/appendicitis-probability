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

function crp_factor() {
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

var submitInformation = function(){

    app_prob.innerText = crp_factor;
}


submitButton.onclick = submitInformation; 

/*function submit(data) {
    let crp = data.crp
    if (crp == '') {
        return 1
    }
    else if (crp < 10) {
        return 0.741195658058578
    }
    else if (crp >= 10) {
        return 1.17909895565026
    }
    else {
        return 1
    }
}

function crp_async(crp) {
  return new Promise((resolve, reject) => {
      let y = 0
      setTimeout(() => {
        resolve(1.17909895565026)
        }, 2000)
  })
}*/