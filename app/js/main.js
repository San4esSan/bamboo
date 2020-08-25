$(function () {

	$('.header__menu-btn').on('click', function () {
		$('.header__menu-item').slideToggle();
		$('.header__box').slideToggle();		
	})

	$('.menu__closed').on('click', function () {
		$('.header__menu-item').slideToggle();
		$('.header__box').slideToggle();
	})





});