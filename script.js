const display = document.getElementById("display");

function appendToDisplay(input){
display.value +=input;
}
function suprimer(){
display.value = "";
}

function calculateur(){
display.value = eval(display.value)
}