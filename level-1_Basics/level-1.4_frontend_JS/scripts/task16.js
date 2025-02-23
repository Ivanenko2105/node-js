const btn = document.getElementById('grey-btn');

function createOverlay() {
	const overlay = document.createElement('div');
	overlay.classList.add('overlay');

	overlay.addEventListener('click', function () {
		document.body.removeChild(overlay);
		document.body.classList.remove('no-scroll');
	});

	return overlay;
}

btn.addEventListener('click', function () {
	const overlay = createOverlay();
	document.body.appendChild(overlay);
	document.body.classList.add('no-scroll');
});
