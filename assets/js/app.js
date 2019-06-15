"use strict";

function clock() {
  var secondHand = document.querySelector('.second-hand');
  var minuteHand = document.querySelector('.minute-hand');
  var hourHand = document.querySelector('.hour-hand');
  var time = new Date();
  var second = time.getSeconds();
  var minute = time.getMinutes();
  var hour = time.getHours() % 12; // Modulus for 12 hours.

  var secDegree = second * 360 / 60;
  var minDegree = minute * 360 / 60 + second * 6 / 60; // offsetting for seconds.

  var hourDegree = hour * 360 / 12 + minute * 30 / 60; // offsetting for minutes.

  secondHand.style.transform = 'rotate(' + secDegree + 'deg)';
  minuteHand.style.transform = 'rotate(' + minDegree + 'deg)';
  hourHand.style.transform = 'rotate(' + hourDegree + 'deg)';
  toggleAnimation(secDegree, secondHand, 354, 6);
  toggleAnimation(minDegree, minuteHand, 354, 6);
  toggleAnimation(hourDegree, hourHand, 330, 30);
} // Preventing hand jump.


function toggleAnimation(input, output, max, min) {
  if (input > Number(max) || input < Number(min)) {
    output.classList.remove('transition');
  } else if (!output.classList.contains('transition')) {
    output.classList.add('transition');
  }
}

setInterval(clock, 1000);
clock();