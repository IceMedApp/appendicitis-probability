var textAnswer = document.getElementById("text-1");
var submitButton = document.getElementById("button-1"); 
var foo;

var submitInformation = function(){
    foo = textAnswer.value; // Assign input value to foo
    textAnswer.value = ''; // Set textAnswer value to empty string
}

submitButton.onclick = submitInformation; 