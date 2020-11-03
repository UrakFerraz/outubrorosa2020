{
	document.querySelector('.headerSubmitBtn').addEventListener('click', el => {
		el.preventDefault();
	});

	let header = document.querySelector('.headerWrapper');

	let main = document.querySelector('#main');

	let backToTopBtn = document.querySelector('.backToTopBtn');
	backToTopBtn.classList.add('backToTopBtnHidden');

	let cont;

	let cont1;

	setInterval(() => {
		cont1 = cont;
		if(cont < 200) {
			backToTopBtn.classList.add('backToTopBtnHidden');
		}
	},1200);

	window.onscroll = function() {
		cont = window.pageYOffset;
		if(cont > 500 && cont <= cont1) {
			header.classList.remove('headerWrapperHidden');
			backToTopBtn.classList.remove('backToTopBtnHidden');
		} else if(cont1 <= cont) {
			header.classList.add('headerWrapperHidden');
			backToTopBtn.classList.add('backToTopBtnHidden');
		}
	}
}