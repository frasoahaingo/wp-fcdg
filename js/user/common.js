$(document).ready(function(e){

    // DETECT MOBILE
    function is_mobile() {
        if ($('.sup-menu').is(':hidden')) {
            return true;
        } else return false;
    }

    // TOGGLE MENU
    $(document).on('click', '.hamburger', function(e){
        $('header').toggleClass('show-menu');
        $('.overlay').toggleClass('show');
        
        if ($('nav.menu, .overlay').css('display') == 'none') {
            $('nav.menu').fadeIn();
            $('.overlay').fadeIn();
        }
        else {
            $('nav.menu').fadeOut();
            $('.overlay').fadeOut();
        }       

        $('.overlay').on('click', function() {
            $('header').removeClass('show-menu');
            $(this).removeClass('show');
            
            $('nav.menu').fadeOut();
            $('.overlay').fadeOut();
        });
    });

    // STICKY HEADER
    $(window).scroll(function() {
        if ($(this).scrollTop() > $('.sup-menu').outerHeight() || is_mobile()){  
            $('.header').addClass("sticky");
        } else{
            $('.header').removeClass("sticky");
        }
    });

    // TOGGLE SEARCH FORM
    $(document).on('click', '.search-form label', function(e) {
        if (!is_mobile()) {
            $(this).nextAll().addClass('show-search');
        } else {
            var overlaySearch = $('.overlay-search');
            overlaySearch.toggleClass('show');

            $('header').removeClass('show-menu');
            $('.overlay').removeClass('show');

            $('.bg').on('click', function() {
                overlaySearch.removeClass('show');
            })
        }
    });

    // SCROLL TOP
    $(document).on('click', '.scroll-top', function() {
        $('html, body').animate({ 
            scrollTop: $('body').offset().top 
        }, 750 );
        return false;
     });    

    // $('img.alignleft').each(function(){
    //     $(this).css({
    //         "margin-left": -$(this).width()/2 + "px"
    //     });
    //     $(this).closest('p').addClass('img-p-left');
    // });

    // $('img.alignright').each(function(){
    //     $(this).css({
    //         "margin-right": -$(this).width()/2 + "px"
    //     });
    //     $(this).closest('p').addClass('img-p-right');
    // });

$('.article-content').find('img').each(function(){
    if ($(this).hasClass('alignleft')) {
        $(this).css({
            "margin-left": -$(this).width()/2 + "px"
        });
        $(this).closest('p').addClass('img-p-left');
    } else if ($(this).hasClass('alignright')) {
        $(this).css({
            "margin-right": -$(this).width()/2 + "px"
        });
        $(this).closest('p').addClass('img-p-right');
    } else if($(this).hasClass('aligncenter')) {
        $(this).closest('p').addClass('img-p-center');
    } else if($(this).hasClass('alignnone')){
        $(this).closest('p').addClass('img-p-full');
    }
});

$('.select-simple select').on('change', function() {
	var value = $(this).val();
	window.location = value;
});

});