var start = new Date();
var startMilli = start.getTime();

function stopTime() {
  var end = new Date();
  var endMilli = end.getTime();

  var diffMilli = endMilli - startMilli;
  var diffSec = diffMilli/1000;

  alert ("The number of seconds is: " + diffSec);
}
console.log(startMilli)
