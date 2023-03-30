
// timer
var timer = document.getElementById("timer");

var endTime = new Date(Date.now() + 11 * 60 * 60 * 1000 + 46 * 60 * 1000 + 35 * 1000);

// update the timer every second
var timerInterval = setInterval(updateTimer, 1000);

function updateTimer() {
  // calculate the time remaining
  var timeRemaining = endTime - Date.now();

  // if the timer has ended, clear the interval and display "Timer Ended" text
  if (timeRemaining <= 0) {
    clearInterval(timerInterval);
    timer.textContent = "Timer Ended";
    return;
  }

  // format the time remaining as hours, minutes, and seconds
  var hours = Math.floor(timeRemaining / (60 * 60 * 1000));
  var minutes = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
  var seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);

  // display the formatted time remaining
  timer.textContent =  `Ending in ${hours}h : ${minutes}m : ${seconds}s`;
}

// showLove section


const imageContainer = document.getElementById("showLoveImg");

function scrollImages() {
  imageContainer.scrollLeft += 1;
}

setInterval(scrollImages, 10);



