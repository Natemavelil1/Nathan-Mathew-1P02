alert("Welcome to my website.")

var age = prompt("What is your age?");
var date = new Date();
var year = date.getFullYear();
var birthYear = year - age;

document.write(birthYear)

function timer()
{
    var now = new Date();

    var hh = now.getHours();

    var mm = now.getMinutes();
    if (mm <= 9)
        mm = "0" + mm;

    var ss = now.getSeconds();
    if (ss <= 9)
        ss = "0" + ss;
    //Editing div with id "timer" to place local time
    document.getElementById("timer").innerText = hh + ":" + mm + ":" + ss;
    //Making sure timer reloads every 200 milliseconds
    var timer_start = setTimeout(timer, 200);
}

function getData()
{
  
}
