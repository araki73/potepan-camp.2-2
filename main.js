const timer = document.getElementById("timer");
const start = document.getElementById("startBtn");
const stop = document.getElementById("stopBtn");
const reset = document.getElementById("resetBtn");

let minites = 0;
let seconds3 = 0;
let seconds2 = 0;
let seconds1 = 0;
let interval;
 
function stopWatch() {
  seconds1++;
  if (seconds1 == 10) {
    seconds2++;
    seconds1 = 0;
    if (seconds2 == 10) {
      seconds3++;
      seconds2 = 0;
      if (seconds3 == 6) {
        minites++;
        seconds3 = 0;
        if(minites == 10) {
          minites = 0;
          seconds3 = 0;
          seconds2 = 0;
          seconds1 = 0;
        }
      }
    }
  }

  timer.innerHTML = minites + ":" + seconds3 + ":" + seconds2 + ":" + seconds1;
}

start.onclick = function() {
  interval = setInterval(stopWatch, 100);
  start.innerHTML = "測定中";
  this.disabled = true;
  stop.disabled = false;
  reset.disabled = false;
};

stop.onclick = function() {
  clearInterval(interval);
  start.innerHTML = "スタート";
  start.disabled = false;
  this.disabled = true;
};


reset.onclick = function() {
  clearInterval(interval);
  timer.innerHTML = "0:0:0:0";
  start.innerHTML = "スタート";
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;
  minites = 0;
  seconds3 = 0;
  seconds2 = 0;
  seconds1 = 0;
};

