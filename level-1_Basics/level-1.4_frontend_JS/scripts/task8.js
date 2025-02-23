document.getElementById('link-btn').addEventListener('click', function () {
	let urlImg = document.getElementById('text-link').value;

	document.getElementById('link-img').src = urlImg;
});
