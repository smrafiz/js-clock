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
}

setInterval(clock, 1000);
clock();
