
(function() {
  'use strict';

  var startButton = document.getElementsById('start-button');
  var hours = document.querySelector('.hours')
  var minutes = document.querySelector('.minutes')
  var seconds = document.querySelector('.seconds')

  var startTime;

  console.log(startButton);

  function toggleButton (){
    var currentText = startButton.textContent;
    if (currentText == 'Start') {
      startButton.textContent = 'Stop';
      startButton.style.backgroundColor = 'red';
    } else {
      startButton.textContent = 'Start';
      startButton.style.backgroundColor = 'green';

    }
  }

  function millisecondsToInterval(ms) {
    var numMsInHour = 60000 * 60;
    var numMsInMinute = 60000;
    var numMsInSecond = 1000;

    var hourCount = Math.floor(ms / numMsInHour);
    var minuteCount = Math.floor (ms / numMsInMinute);
    var secondCount = Math.floor (ms / numMsInSecond);
  }

  function logElapsedTime() {
    var currentTime = new Date();
    var elapsedTime = currentTime - startTime;
    var elapsed = millisecondsToInterval(elapsedTime);

    return [hours, minutes, seconds];
  }

  function displayInterval(interval) {
    hours.textContent = ("0" + interval[0]).slice(-2);
    minutes.textContent = ("0" + interval[1]).slice(-2);
    seconds.textContent = ("0" + interval[2]).slice(-2);
  }

  function startButtonHandler() {
    startTime = new Date();
    toggleButton();
    window.setInterval(logElapsedTime, 1000);
  }

  startButton.addEventListener('click', startButtonHandler);



}());


/*
alert('Working!');

document.getElementById('title').textContent = 'New Title'; //selects the item on your active document (index.html)
document.querySelector('h1').textContent = 'Changed Title' //selects the class assigned to the selected item above
document.querySelector('.main-title').textContent = 'Another Title' //selects the class assigned to the selected item with a different tag but same value
document.querySelector('#title').textContent = 'Yet Again Title' //selects the class assigned to the selected item yet another value with same affect


var myScriptName = document.getElementById('title');  //creating a variable with camel-casing nomenclature
console.log(myScriptName);
var myNumberFive = 5;
var myCoolString = "This 'is' a string";
console.log(myCoolString);

function myCalculation(firstNumber) {
  var sum = firstNumber + 5;
  console.log(sum);
}
myCalculation(6);
myCalculation(8); //

function myCalculation(firstNumber, secondNumber) {
  var sum = firstNumber + secondNumber;
  console.log(sum);
}
myCalculation(6, 3);
myCalculation(8, 10);
*/
