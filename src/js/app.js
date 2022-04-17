import * as flsFunctions from "./modules/functions.js";
import PhotoSwipeLightbox from '../../node_modules/photoswipe/dist/photoswipe-lightbox.esm.js';
import './components.js';


flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel ]);
// const swiper = new Swiper();

// Инициализация слайдера Photos
const photosSlider = document.querySelector('.photos__slider');
let mySwiperPhoto = new Swiper(photosSlider, { 	
  slidesPerView: 3,	
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,  
  pagination: {
		el: '.swiper-pagination',
		clickable: true,
		type: 'fraction',
	},
	navigation: {
    nextEl: '.photos-button-next',
    prevEl: '.photos-button-prev',
  }, 
	breakpoints: {  
		0: {
			slidesPerView: 1,	
		},  
		576: {
			slidesPerView: 1,	
		},  
		768: {
			slidesPerView: 1,	
		},     
		992: {		
		},
		1200: {		
		
		}
	}
});

// Инициализация слайдера ACCREDITATION
const accreditationSlider = document.querySelector('.accreditation__slider');
let mySwiperAccreditation = new Swiper(accreditationSlider, { 	
  slidesPerView: 3,	
  spaceBetween: 30,  
	preloadImages: true,
	updateOnImagesReady: true,
  centeredSlides: true,
  loop: true,   
	breakpoints: {  
		0: {
			slidesPerView: 1,	
		},  
		576: {
			slidesPerView: 2,	
		},  
		768: {
		
		
		},     
		992: {
		
		
		},
		1200: {		
			
		}
	}
});

const lightbox = new PhotoSwipeLightbox({
  gallery: '#my-gallery',
  children: 'a',
  pswpModule: () => import('../../node_modules/photoswipe/dist/photoswipe.esm.js')
});
lightbox.init();

// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.header__nav-list');
const bodyEl = document.querySelector('body');
let navItemAll = document.querySelectorAll('.header__nav-item');


const toggleMenu = function() {
	menu.classList.toggle('open');	
}
const toggleBurger = function() {
	btnMenu.classList.toggle('active');
}
const bodyOverflow = function() {
	bodyEl.classList.toggle('hidden');
}
btnMenu.addEventListener('click', function(e) {
	e.stopPropagation();
	toggleMenu();		
	toggleBurger();
	bodyOverflow();
});	
 navItemAll.forEach((el) => {		
	el.addEventListener("click", function () {
		if (menu.classList.contains("open")) {			
			toggleMenu();
			toggleBurger();
			bodyOverflow();
		}				
	});	
})

// Menu show
document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);		
		
    const menu_is_active = menu.classList.contains('open');	
	
    if (!its_menu && menu_is_active) {
	toggleMenu();
	toggleBurger();
	bodyOverflow();
    }		
});

// Open modal-teachers for media before 767px
if (window.matchMedia("(min-width: 768px)").matches) {
	let waysItems = document.querySelectorAll('.ways__item');
	waysItems.forEach((el) => {		
		el.removeAttribute('data-graph-path');
	})
} 

if (window.matchMedia("(min-width: 768px)").matches) {
	let directionItems = document.querySelectorAll('.direction__content-item');
	directionItems.forEach((el) => {		
		el.removeAttribute('data-graph-path');
	})
} 



