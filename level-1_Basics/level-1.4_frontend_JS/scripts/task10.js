document.getElementById(
	'language'
).textContent = `Language: ${navigator.language}`;

navigator.geolocation.getCurrentPosition(
	function (position) {
		let latitude = position.coords.latitude; // Широта
		let longitude = position.coords.longitude; // Довгота
		document.getElementById(
			'user-xy'
		).textContent = `Ш: ${latitude}, Д: ${longitude}`;
	},
	function (error) {
		document.getElementById('user-xy').textContent = `error`;
	}
);

document
	.getElementsByTagName('body')[0]
	.addEventListener('mousemove', function (event) {
		let x = event.clientX;
		let y = event.clientY;
		document.getElementById('mouse-xy').textContent = `Ш: ${x}, Д: ${y}`;
	});
