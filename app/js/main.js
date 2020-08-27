$(function () {

	$('.header__menu-btn').on('click', function () {
		$('.header__menu-item').slideToggle();
		$('.header__box').slideToggle();
	})

	$('.menu__closed').on('click', function () {
		$('.header__menu-item').slideToggle();
		$('.header__box').slideToggle();
	})


	$('.gallery__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		variableWidth: true,
		prevArrow: '<button type="button" class="slick-arrow click-next"><img src="images/arrow-left.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-arrow click-prev "><img src="images/arrow-right.svg" alt=""></img></button>',		
	});

	$('.comment__slider').slick({
		dots: true,
		infinite: true,
		// fade: true,
		autoplay: 3000,



		prevArrow: '<button type="button" class="slick-arrow click-next"><img src="images/arrow-left-dark.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-arrow click-prev "><img src="images/arrow-right-dark.svg" alt=""></img></button>',

	});



});