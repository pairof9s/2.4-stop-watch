
(function() {
  'use strict';

  var startButton = document.getElementsById('start-button');
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

  function startButtonHandler() {
    startTime = new Date();
    toggleButton();
    window.setInterval();
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
