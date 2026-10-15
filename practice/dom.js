// console.log(document.getElementsByClassName("home1"));

// document.getElementsByClassName("class1")[1].innerHTML = "Second Data";
// document.getElementsByIdName("home1").innerHTML="abd";


// console.log("hello")

document.getElementsByTagName("header")[0].innerHTML = "Header Data";

document.getElementsByTagName("main")[0].innerHTML = "Main Data";

document.getElementsByTagName("footer")[0].innerHTML = "Footer Data";

document.getElementsByTagName("li")[2].innerHTML = "Contact Data";


// Using Class Name
document.getElementsByClassName("container")[0].innerHTML = "Container Data";


// Using ID
document.getElementById("home").innerHTML = "Home Data";

document.getElementById("about").innerHTML = "About Data";

document.getElementById("contact").innerHTML = "Contact Data";


// Using querySelector
document.querySelector(".container #about").innerHTML = "About using QuerySelector";

document.querySelector(".container #contact").innerHTML = "Contact using QuerySelector";


// Using querySelectorAll
document.querySelectorAll("li")[2].innerHTML = "Contact using QuerySelectorAll";