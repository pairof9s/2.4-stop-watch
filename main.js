(function() {
  'use strict';

  var mouseHovering;
  var hours = document.querySelector('.clock .hours');  // The creates the "hours" variable by telling the document to query the known expression of clock hours (using internal computer clock)
  var minutes = document.querySelector('.clock .minutes'); // Same as the "hours" variable but now with "minutes".
  var seconds = document.querySelector('.clock .seconds'); // Same as the "hours" variable but now with "seconds".

// The following function declaraton tells how the clock will "run", visually changing digits to replicate the actual time. "formatTime" is the operation with the argument named "time"
  function formatTime(time){
    var paddedTime = [];  // "paddedTime" is the variable which collects the various values "[]" that will be designated later for each time component (hours, minutes, seconds)

    paddedTime[0] = ("0" + time[0]).slice(-2);  // Here the time operator is defined by adding each next digit to the current digit e.g. - 1 becomes 2, 2 becomes 3, etc.
    paddedTime[1] = ("0" + time[1]).slice(-2);
    paddedTime[2] = ("0" + time[2]).slice(-2);

    return paddedTime;  // The return gives the "paddedTime" its value
  }

  var container;

  function updateDisplay(time){
    var formattedTime = formatTime(time);

    hours.textContent = time[0];
    minutes.textContent = time[1];
    seconds.textContent = time[2];
  }

  function updateProgressBar(seconds){  // This function creates the horizontal bar that elongates until it reaches is maximum based on intervals of seconds up to 60.
    var progressBar = document.getElementById('progress-bar');
    var width = (seconds / 60) * 100;

    progressBar.style.width = width + '%'; // This expression determines the pct width of the bar based on the current seconds count within 60. e.g. - 6 seconds the bar is 10% filled
  }

  function updateBackgroundColor(time){
    var red = (time[0]*21).toString(16);
    var green = (time[0]*21).toString(16);
    var blue = (time[0]*4.25).toString(16);

    var backgroundColor = formatTime ([red, green, blue]);
    var container = document.querySelector('.container');
    container.style.backgroundColor = '#' + backgroundColor.join('');

    return backgroundColor;
  }

  function runClock(){

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    var clockTime = [hours, minutes, seconds];

    var newBackgroundColor = updateBackgroundColor(clockTime);

    if(mouseHovering){
      updateDisplay(newBackgroundColor);
    }else{
      updateDisplay(clockTime);
    }

    updateProgressBar(seconds);
  }

  function checkTime(i) {
      if (i < 10) {i = "0" + i};  // adds zero in front of min, secs less than 10
      return i;
  }

  function trackMouse(event){
    if(event.type == 'mouseenter'){
      mouseHovering = true;
    }else
      mouseHovering = false;
  }

  window.setInterval(runClock, 1000);

  container.addEventListener('mouseenter', trackMouse);
  container.addEventListener('mouseleave', trackMouse);

}());
