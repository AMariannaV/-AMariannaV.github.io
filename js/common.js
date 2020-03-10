$(function() {

	// Custom JS
	$('.hamburger').click(function(){

		$(this).toggleClass('is-active');
		$('.hidden-menu').addClass('active');
		
	});

	$('.close').click(function(){

        $('.hidden-menu').removeClass('active');
        $('.hamburger').toggleClass('is-active');
    });

	$('.top').owlCarousel({

		items: 1,
		nav: true
		
	});

	$('.bottom').owlCarousel({

		items: 1,
		dots: true
		
	});

	$('.buttonBlog').click(function(){

		$(this).toggleClass('active');
		$('.fadeBlog').slideToggle();

	})

});
