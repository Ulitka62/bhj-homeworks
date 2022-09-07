const reveal = document.querySelectorAll('.reveal');

window.addEventListener('scroll', function() {
	for(const div of reveal) {
		const active = div.getBoundingClientRect();
		div.classList.toggle('reveal_active', (active.top < window.innerHeight) && (active.bottom > 0))
	}
})