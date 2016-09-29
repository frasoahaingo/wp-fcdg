    $(document).ready(function(e){

    function filterCard (periode, theme, category, keyword) {
        $('.cards').find('article').each(function(){
            var article = $(this);

            // par défault on cache
            article.parent().hide();

            // on affiche si on a aucun filtre
            if(periode.length == 0 && theme.length == 0 && category.length == 0 && keyword.length == 0) {
                article.parent().show();
                return;
            }

            var p = article.attr('data-filter-periode'),
                t = article.attr('data-filter-theme'),
                c = article.attr('data-filter-category'),
                k = article.attr('data-filter-keywords');

            if (c && _.intersection(category, c.split(',')).length > 0) {
                article.parent().show();
            }

            if (p && _.intersection(periode, p.split(',')).length > 0) {
                article.parent().show();
            }

            if (t && _.intersection(theme, t.split(',')).length > 0) {
                article.parent().show();
            }

            if(keyword.length && k) {
                for(kwd in keyword) {
                    var regexp = new RegExp(keyword[kwd], 'i');

                    if (k.match(regexp)) {
                        article.parent().show();
                    } else article.parent().hide();
                }
            }
        });
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

});