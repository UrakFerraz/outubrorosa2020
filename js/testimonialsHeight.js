{
	document.addEventListener("DOMContentLoaded", () => {
		var telas = [
			window.matchMedia("(min-width: 3840px)"),
			window.matchMedia("(min-width: 2560px) and (max-width: 3839px)"),
			window.matchMedia("(min-width: 1801px) and (max-width: 2559px)"),
			window.matchMedia("(min-width: 1200px) and (max-width: 1800px)"),
			window.matchMedia("(min-width: 992px) and (max-width: 1199px)"),
			window.matchMedia("(min-width: 768px) and (max-width: 991px)"),
			window.matchMedia("(min-width: 576px) and (max-width: 767px)"),
			window.matchMedia("(min-width: 320px) and (max-width: 575px)")
		]

		// call once on load
		mqh();

		for (var i=0; i<telas.length; i++){
		  telas[i].addListener(mqh)
		}

		function checkk(hei) {
			let elemento = document.querySelector('.testimonials1AmpCarouselHeight');
			elemento.setAttribute('height', hei);
			console.log(elemento.getAttribute('height'));
		}

		function mqh() {
			if (telas[0].matches) {
				console.log('4K')
				checkk(500)
			} else if (telas[1].matches) {
				console.log('2K')
				checkk(450)
			} else if (telas[2].matches) {
				console.log('fullHd')
				checkk(400)
			} else if (telas[3].matches) {
				console.log('hd')
				checkk(350)
			} else if (telas[4].matches) {
				console.log('laptop')
				checkk(350)
			} else if (telas[5].matches) {
				console.log('tablet')
				checkk(350)
			} else if (telas[6].matches) {
				console.log('landscape smartphone')
				checkk(460)
			} else if (telas[7].matches) {
				console.log('smartphone')
				checkk(760)
			}
			console.log("window.innerWidth: " + window.innerWidth);
		}
	});
}