const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560:{
        items: 2
    },
    960:{
        items: 3
    }
}

$(document).ready(function(){

    // owl-carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: false,
        responsive: responsive
        
    });

    // AOS Instance
    AOS.init();


});