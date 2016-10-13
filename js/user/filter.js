$(document).ready(function(e){

    function filterCard (periode, theme, category, keyword) {
        var articles = $('.cards').find('article');

        if (periode.length || theme.length || category.length || keyword.length){
            articles.parent().hide();
        } else {
            articles.parent().show();
        }

        if(periode.length){
            $.each(periode, function(i, val){
                $('[data-filter-periode*="'+val+'"]').parent().show();
            });
        }

        if(theme.length){
            $.each(theme, function(i, val){
                $('[data-filter-theme*="'+val+'"]').parent().show();
            });
        }

        if(category.length){
            $.each(category, function(i, val){
                $('[data-filter-category*="'+val+'"]').parent().show();
            });
        }


        if(keyword.length){
            $.each(keyword, function(i, val){
                $('[data-filter-keywords*="'+val+'"]').parent().show();
            });
        }
    }

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);

        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    var periode = getParameterByName("periode"),
        theme = getParameterByName("theme");

    if (periode || theme ) {
        filterCard (periode, theme);
    }

    $(document.body).on('click', '.filter-periode', function(e) {
        e.preventDefault();
        $this = $(this);
        $('.filter-theme').removeClass('open');
        $('.choices.themes').slideUp( 300, function(){
            $this.toggleClass('open');
            $('.choices.periodes').slideToggle();
        });
    });

     $(document.body).on('click', '.filter-theme', function(e) {
        e.preventDefault();
        $this = $(this);
        $('.filter-periode').removeClass('open');
        $('.choices.periodes').slideUp( 300, function(){
            $this.toggleClass('open');
            $('.choices.themes').slideToggle();
        });
    });

    $(document.body).on('click', '.filter-category', function(e) {
        e.preventDefault();
		$this = $(this);
		$this.toggleClass('open');
        $('.choices.categories').slideToggle();
    });

    var keywordTimeout;

    $(document.body).on('keyup', '.filter-keyword', function(e) {
        e.preventDefault();
        $this = $(this);

        clearTimeout(keywordTimeout);

        keywordTimeout = setTimeout(function() {
            $('.choice input').trigger('change');
        }, 350);
    });

    $(document.body).on('change', '.choice input', function(e) {
        var periode = new Array(),
            theme = new Array(),
            category = new Array(),
            keyword = new Array(),
            periodes = $('.choices.periodes input:checked'),
            themes = $('.choices.themes input:checked'),
            categories = $('.choices.categories input:checked'),
            keywords = $('.filter-keyword').val();

        periodes.each(function(){
            periode.push($(this).val());
        });

        themes.each(function(){
            theme.push($(this).val());
        });

        categories.each(function(){
            category.push($(this).val());
        });

        keyword = keywords.toLowerCase().split(' ');

        if(keyword.length == 1 && keyword[0] == '') {
            keyword.shift();
        }

        filterCard(periode, theme, category, keyword);
    });

    $(window).load(function(){
        var periode = new Array(),
            theme = new Array(),
            category = new Array(),
            keyword = new Array(),
            periodes = $('.choices.periodes input:checked'),
            themes = $('.choices.themes input:checked'),
            categories = $('.choices.categories input:checked'),
            keywords = $('.filter-keyword').val();

        periodes.each(function(){
            periode.push($(this).val());
        });

        themes.each(function(){
            theme.push($(this).val());
        });

        categories.each(function(){
            category.push($(this).val());
        });

        if($('.filter-keyword').length){
            keyword = keywords.toLowerCase().split(' ');

            if(keyword.length == 1 && keyword[0] == '') {
                keyword.shift();
            }
        }

        filterCard(periode, theme, category, keyword);
    });

});