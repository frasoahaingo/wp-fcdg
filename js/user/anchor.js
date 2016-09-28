$(document).ready(function(e){
    $(document.body).on('click', '.anchor', function(e) {
        e.preventDefault();
        var $this = $(this),
            href = $this.attr('href'),
            offset = $('header').outerHeight(true);

        if ($this.hasClass('next-section')) {
        	href = $this.parents('section').next();
        	console.log(href);
        }   

        var targetHeight = $(href).first().offset().top;

        $('html, body').animate({
            scrollTop: (targetHeight - offset)
        });
    });
});