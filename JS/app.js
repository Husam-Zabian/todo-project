var Finput = prompt("Please Enter your name ?");
var sinput = prompt("Please Enter your Gender (male, female) ?");
var trdinput = prompt("Please Enter your age ?");
alert("The age should not be less or equal to 0 ");
var yesorno = confirm ("Do you want to have a Welcoming message?");
if (yesorno == true){
if (sinput == "male"){
    alert ("Mr." + Finput  );
}else if(sinput == "female"){
    alert ("Mrs." + Finput  );
}else{
    alert ( Finput );
}
}