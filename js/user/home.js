$(document).ready(function(e){

    // CAROUSEL HOME
    $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        slideBy: 3,
        navText : ['<span class="icon-flecheleft"></span>', '<span class="icon-flecheright"></span>'],
        onRefresh: function () {
            $('.owl-carousel').find('div.owl-item').height('');
        },
        onRefreshed: function () {
            $('.owl-carousel').find('div.owl-item').height($('.owl-carousel').height());
        },
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                slideBy: 1,
            },
            960: {
                items: 1,
                slideBy: 1,
            },
            961: {
                items: 3,
                slideBy: 3,
            }

        }
    });

});