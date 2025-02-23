document.getElementById('area-btn').addEventListener('click', function () {
	let urlImgs = document.getElementById('textarea').value.split('\n');

	for (let url of urlImgs) {
		let img = document.createElement('img');
		img.src = url;
		img.style.marginTop = '20px';

		document.getElementById('images').insertAdjacentElement('afterbegin', img);
	}
});
