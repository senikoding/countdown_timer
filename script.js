let target = new Date('jun 12 2021 00:00:00').getTime();

function countdown(){
	let now = new Date().getTime();
	let gap = target - now;

	let second = 1000;
	let minute = second * 60;
	let hour   = minute * 60;
	let day    = hour * 24;

	let days  = Math.floor( gap/day );
	let hours = Math.floor( (gap % day) / hour );
	let min  = Math.floor( (gap % hour) / minute );
	let sec  = Math.floor( (gap % minute) / second );

	document.getElementById('days').innerHTML  = days;
	document.getElementById('hours').innerHTML = hours;
	document.getElementById('minutes').innerHTML= min;
	document.getElementById('seconds').innerHTML = sec; 
}

setInterval(countdown, 1000);

