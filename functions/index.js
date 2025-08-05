var crp = document.getElementById("text-1");
var submitButton = document.getElementById("button-1");
var app_prob = document.getElementById("app_prob"); 


var submitInformation = function(){

    if (crp.value == '') {
        app_prob.innerText = 1;
    }
    else if (crp.value < 10) {
        app_prob.innerText = 0.741195658058578;
    }
    else if (crp.value >= 10) {
        app_prob.innerText = 1.17909895565026;
    }
    else {
        app_prob.innerText = 1;
    }
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