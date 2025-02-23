let square = document.getElementById('yellow-square');

function firstFunction() {
	alert('Привіт');

	square.removeEventListener('click', firstFunction);

	square.addEventListener('click', function () {
		square.classList.toggle('hidden');
	});
}

square.addEventListener('click', firstFunction);
