var inputbox = document.getElementById('numbox')
function clearval() {
     inputbox.value = "";
}
function addval(eleval){
     inputbox.value += eleval;
}
function removeval(){
     inputbox.value = inputbox.value. slice(0,inputbox.value.length-1);
}
function result(){
     inputbox.value = eval(inputbox.value);
}