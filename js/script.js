$(document).ready(function(){
	  //navigation start
     $("#navbarnav li .uniq").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 7 }, "slow");

    });
    
        // Header Scroll
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $('#navbarnav').addClass('fixed');
        } else {
            $('#navbarnav').removeClass('fixed');
        }
    });

	// == owl carousel
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
    // conact form
    $('.c_head p').click(function(){
        $('#contact_form').show(2000)
    });
     $('.c_head p').dblclick(function(){
        $('#contact_form').hide(2000)
    });

   
});