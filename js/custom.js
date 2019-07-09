$(document).ready(function(){

// if ($('#back-to-top').length) {
//     var scrollTrigger = 700, // px
//         backToTop = function () {
//             var scrollTop = $(window).scrollTop();
//             if (scrollTop > scrollTrigger) {
//                 $('#back-to-top').addClass('show-arrow');
//             } else {
//                 $('#back-to-top').removeClass('show-arrow');
//             }
//         };
//     backToTop();
//     $(window).on('scroll', function () {
//         backToTop();
//     });
//     $('#back-to-top').on('click', function (e) {
//         e.preventDefault();
//         $('html,body').animate({
//             scrollTop: 0
//         }, 700);
//     });
// }


	$('#main-slider').bxSlider({
		mode: 'fade',
		auto: true,
		controls: false,
		adaptiveHeight: true,
		pager: false
	});


	$('.news-carousel-wrapper.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    responsiveClass:true,
	dots: false,
	nav: true,
	// navText: ['<div class="post-prev"></div>','<div class="post-next"></div>'], //Note, if you are not using Font Awesome in your theme, you can change this to Previous & Next
	navText: [''], //Note, if you are not using Font Awesome in your theme, you can change this to Previous & Next
	responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        600:{
	            items:1
	        },        
	        768:{
	            items:2,
	            margin: 20
	        },        
	        1200:{
	            items:3,
	            margin: 20
	        },
	    }
	});	


	$('*[data-animate]').addClass('hide-element').each(function(){
		$(this).viewportChecker({
			classToAdd: 'show-element animated ' + $(this).data('animate'),
			classToRemove: 'hide-element',
			offset: 200
		});
	});


});