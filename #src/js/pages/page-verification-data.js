const inp = document.querySelectorAll('.inp-file');
inp.forEach(key => {
	key.addEventListener('input', (e) => {
		const div = document.createElement('div');
		div.classList.add('progress');
		div.classList.add('load');
		div.innerHTML = `<span class="progress-loader"></span><p class="progress-name">${key.files[0].name}</p>`;
		key.parentElement.parentElement.append(div);
	});
});