var age = prompt("What is your age?");
var date = new Date();
var year = date.getFullYear();
var birthYear = year - age;

document.write(birthYear)
