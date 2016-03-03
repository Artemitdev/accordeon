document.addEventListener('click', function (ev) {
	var el = ev.target;

	if (el.tagName.toLowerCase() == 'li') {
	el.classList.toggle('js-accordion');
	}
});