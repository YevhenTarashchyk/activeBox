let burgerMenu = document.querySelector('.burger_btn').children,
	mobileNav = document.getElementById('header_content').getElementsByClassName('navigation')[0],
	projectCards = document.querySelectorAll('.card-project');

/*Наведение на карточки*/
for (let i = 0; i < projectCards.length; i++) {

	projectCards[i].addEventListener('mouseover', e => {
		let overlayImg = e.currentTarget.querySelector('.img__overlay'),
		overlayTitle = e.currentTarget.querySelector('.overlay-title'),
		overlayText = e.currentTarget.querySelector('.overlay-text'),
		projectImg = e.currentTarget.querySelector('.project__img');

		addActive(overlayImg,overlayTitle,overlayText,projectImg);
	});

	projectCards[i].addEventListener('mouseout', e => {
		let overlayImg = e.currentTarget.querySelector('.img__overlay'),
		overlayTitle = e.currentTarget.querySelector('.overlay-title'),
		overlayText = e.currentTarget.querySelector('.overlay-text'),
		projectImg = e.currentTarget.querySelector('.project__img');


		removeActive(overlayImg,overlayTitle,overlayText,projectImg);
	});
}


/*Проверка класса на активность*/
function toggleActive(...args) {
	for(let i = 0; i < args.length; i++) {
		let data = args[i].dataset;
		args[i].classList.toggle(`${data.action}--active`);
	}
}

// функция сделать элемент активным
function addActive(...args) {
	for(let i = 0; i < args.length; i++) {
		let data = args[i].dataset;
		args[i].classList.add(`${data.action}--active`);
	}
}

// функция убрать активность
function removeActive(...args) {
	for(let i = 0; i < args.length; i++) {
		let data = args[i].dataset;
		args[i].classList.remove(`${data.action}--active`);
	}
}

/*Клик по бургеру*/
burger_btn.addEventListener('click', function () {
	let arr = Array.from(burgerMenu);
	let elActive = arr.map(value => toggleActive(value,mobileNav));
});

/*Фиксация по скролу*/
window.addEventListener('scroll',function() {
	let header = document.getElementsByTagName('header')[0],
		scrolled = window.pageYOffset || document.documentElement.scrollTop;
	if (scrolled >= 50) {
		header.classList.add('header--fixed');
		header_content.style.border = '0';
		header_content.style.padding = '20px 0';
	} else {
		header.classList.remove('header--fixed');
		header_content.style.border = '';
		header_content.style.padding = '';
	}
});

/*Слайдер*/
let swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
});

/*Компоненты*/
let features = [
	{img:'img/pen&ruler.png', h:'Easily Customised', p:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.'},
	{img:'img/PC.png', h:'Responsive REady', p:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.'},
	{img:'img/lamp.png', h:'Modern Design', p:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.'},
	{img:'img/react.png', h:'Clean Code', p:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.'},
	{img:'img/bag.png', h:'Ready to Ship', p:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.'},
	{img:'img/cloud.png', h:'Download for Free', p:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.'}
];

function createFeature(feature) {
	return `
		<div class="card-feature col-md-4 col-sm-6 mb-5">
			<img src="${feature.img}">
			<div class="mt-3 px-2">
				<h3 class="card-feature__title my-2 text-center">
					${feature.h}
				</h3>
				<p class="card-feature__text text-center">
					${feature.p}
				</p>
			</div>
		</div>
	`
}

let featureTemplates = features.map(feature => createFeature(feature));
let featureHtml = featureTemplates.join(' ');

document.querySelector('#feature__cards').innerHTML = featureHtml;




