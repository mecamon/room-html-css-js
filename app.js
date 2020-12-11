const imageSlides = document.querySelector('.images-slides');
const textSlides = document.querySelector('.text-slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const hamburguer = document.querySelector('#hamburguer');
const navLinks = document.querySelector('.nav-links');
const sliderContainer = document.querySelector('.slider-container-1');

hamburguer.onclick = () => {
	navLinks.style.marginLeft = '0px';
};

let imageSlideInterval = setInterval(() => {
	nextSlide(imageSlides);
	nextSlide(textSlides);
}, 5000);

nextButton.onclick = () => {
	nextSlide(imageSlides);
	nextSlide(textSlides);

	clearInterval(imageSlideInterval);

	imageSlideInterval = setInterval(() => {
		nextSlide(imageSlides);
		nextSlide(textSlides);
	}, 5000);
};

prevButton.onclick = () => {
	prevSlide(imageSlides);
	prevSlide(textSlides);

	clearInterval(imageSlideInterval);

	imageSlideInterval = setInterval(() => {
		nextSlide(imageSlides);
		nextSlide(textSlides);
	}, 5000);
};

const nextSlide = ({ style }) => {
	if (style.marginLeft == 0 || style.marginLeft == '0px') {
		style.marginLeft = '-100%';
	} else if (style.marginLeft == '-100%') {
		style.marginLeft = '-200%';
	} else if (style.marginLeft == '-200%') {
		style.marginLeft = 0;
	}
};

const prevSlide = ({ style }) => {
	if (style.marginLeft == 0 || style.marginLeft == '0px') {
		style.marginLeft = '-200%';
	} else if (style.marginLeft == '-200%') {
		style.marginLeft = '-100%';
	} else if (style.marginLeft == '-100%') {
		style.marginLeft = 0;
	}
};
