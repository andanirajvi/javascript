alert("Arithmetic Operation");
var num1 = Number(prompt("Enter First number :"));
var num2 = Number(prompt("Enter Second number :"));

var choice = confirm("Do you want to perform arithmetic operations?");

if (choice) {
    alert("Addition = " + (num1 + num2));
    alert("subtraction=" + (num1 - num2));
    alert("multiplication=" + (num1 * num2));
    alert("division" + (num1 / num2));
    alert("modulo" + (num1 % num2));
}
else{
    alert("Invalid");
}