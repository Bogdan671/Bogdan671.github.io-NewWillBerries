const mySwiper = new Swiper('.swiper-container', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});

// CART 

const buttonCart = document.querySelector('.button-cart');
const modalCart = document.querySelector('#modal-cart');
const modalClose = document.querySelector('.modal-close');



const openModal = () => {
	modalCart.classList.add('show');
};

const closeModal = () => {
	modalCart.classList.remove('show');
};

buttonCart.addEventListener('click', openModal);

modalClose.addEventListener('click', closeModal);

modalCart.addEventListener('click', (event) => {
	if (event.target.classList.contains('overlay')) {
		modalCart.classList.remove('show');
	}
});

// SCROLL SMOOTH

(function(){
	 const scrollLink = document.querySelectorAll('a.scroll-link');

		for (let i = 0; i < scrollLink.length; i++) {
			scrollLink[i].addEventListener('click', function(event) {
				event.preventDefault();
				const id = scrollLink[i].getAttribute('href');
				document.querySelector(id).scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			});
	}
})();

