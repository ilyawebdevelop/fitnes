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
