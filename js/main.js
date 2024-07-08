const scroll_top = document.getElementById('scroll-top-btn');
window.addEventListener('scroll', (_) => {
	if (window.scrollY > 200) scroll_top.classList.add('scroll-top-btn_show');
	else scroll_top.classList.remove('scroll-top-btn_show');
});
scroll_top.addEventListener('click', (_) => {
	window.scrollTo({
		top: 0,
		left: 0,
	});
});

let observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if(entry.isIntersecting){
			
		}
	})
});

