/*var Finput = prompt("Please Enter your name ?");
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
}*/
let answersArr = new Array();


function queN1() {
    var ansN1 = prompt("Do you like watching movies ?");
    if (ansN1 == "yes" || ansN1 == "no"){
        answersArr.push(ansN1);
    }else if (ansN1 == "") {
        answersArr.push("invalid");
    }else{
        console.log("please try Again")
    }


}
function queN2() {
    var ansN2 = prompt("Do you like to be A proffesional Gamer ?");
    if (ansN2 == "yes" || ansN2 == "no"){
        answersArr.push(ansN2);
    }else if (ansN2 == "") {
        answersArr.push("invalid");
    }else{
        console.log("please try Again")
    }
}
function queN3() {
    var ansN3 = prompt("Do you like to be a programmer ?");
    if (ansN3 == "yes" || ansN3 == "no"){
        answersArr.push(ansN3);
    }else if (ansN3 == "") {
        answersArr.push("invalid");
    }else{
        console.log("please try Again")
    }
}
queN1();
queN2();
queN3();

console.log("Your answers for question one  " + answersArr[0]);

console.log("Your answers for question two  " + answersArr[1]);

console.log("Your answers for question three " + answersArr[2]);

