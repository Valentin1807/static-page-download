/* Function to reduce header on scroll
========================================================*/
$(window).scroll(function() {
    $(window).scrollTop() > 100 ? 
        $("body").addClass("fixedHeader"): 
        $("body").removeClass("fixedHeader");
}),


/* Run standard functions
 ========================================================*/
$(document).ready(function(e) {
    
    
    // Function for Superfish menu	
	$('.sf-menu').superfish();
    
    
    // function for header search
	$('header#masthead .topBar a.searchBTN.dt').click(function(e) {
		$('.searchBox').fadeIn(400);
		e.preventDefault();
	});
    
    
    // function for header search close
	$('.searchBox a.closeBTN').click(function(e) {
		$('.searchBox').fadeOut(400);
		e.preventDefault();
	});
    
	
    // Function for copyright year
	var i=(new Date)
	.getFullYear();
	$("span#year").html(i);

    
    // function for Latest News page match height
    $('#pageHolder #pageContent ul.newsList .itemInfo').matchHeight();
    
    
    // Function for Blog Owl Carousel
    $('.blogCarousel').owlCarousel({
        loop: false,
        responsiveClass: true,
        nav: false,
        items: 4,
        navText: "",
        margin:20,
        dots: true,
        responsive: {
            0:{
               items: 1
            },
            768: {
               items: 2  
            },
            1100: {
               items: 3 
            },
            1300: {
               items: 4 
            }
        }
    });
    
    // function for Homepage Blog Post Match Height
    $('#latestNews .blogCarousel .blogInfo').matchHeight();
    
    
    // Function for Events Owl Carousel
    $('#events .eventsCarousel').owlCarousel({
        loop: false,
        responsiveClass: true,
        nav: false,
        items: 4,
        navText: "",
        margin:20,
        dots: true,
        responsive: {
            0:{
               items: 1
            },
            768: {
               items: 2  
            },
            1100: {
               items: 3 
            },
            1300: {
               items: 4 
            }
        }
    });
    
    // function for Homepage Events Match Height
    $('#events .eventsCarousel .event a').matchHeight();
    
});