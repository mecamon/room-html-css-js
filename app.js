const imageSlides = document.querySelector('.images-slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let imageSlideInterval = setInterval(() => {
	nextSlide(imageSlides);
}, 5000);

nextButton.onclick = () => {
	nextSlide(imageSlides);

	clearInterval(imageSlideInterval);

	imageSlideInterval = setInterval(() => {
		nextSlide(imageSlides);
	}, 5000);
};

prevButton.onclick = () => {
	prevSlide(imageSlides);

	clearInterval(imageSlideInterval);

	imageSlideInterval = setInterval(() => {
		nextSlide(imageSlides);
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
