var clicked = false;
var sec = 0;

function startClock() {
  if (clicked === false) {
    var clock = setInterval(stopWatch(), 1000);
    clicked = true;
  }
}
function stopWatch() {
  sec++;
  document.getElementById('timer').innerHTML = sec;
}
function stopClock() {
  window.clearInterval(clock);
  sec = 0;
  document.getElementById('timer').innerHTML = 0;
  clicked = false;
}
