document
	.getElementById('local-storage-div')
	.addEventListener('keyup', function () {
		localStorage.setItem(
			'div1',
			document.getElementById('local-storage-div').textContent
		);
	});

document.getElementById('cookies-div').addEventListener('keyup', function () {
	document.cookie = `${
		document.getElementById('cookies-div').textContent
	}; max-age=3600; path=/`;
});

document
	.getElementById('session-storage-div')
	.addEventListener('keyup', function () {
		sessionStorage.setItem(
			'div3',
			document.getElementById('session-storage-div').textContent
		);
	});

window.addEventListener('load', function () {
	if (localStorage.getItem('div1')) {
		document.getElementById('local-storage-div').textContent =
			localStorage.getItem('div1');
	}

	if (document.cookie !== '') {
		document.getElementById('cookies-div').textContent = document.cookie;
	}

	if (sessionStorage.getItem('div3')) {
		document.getElementById('session-storage-div').textContent =
			sessionStorage.getItem('div3');
	}
});
