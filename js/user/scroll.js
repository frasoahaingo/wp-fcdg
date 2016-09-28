// Animate window to specific hash
// <a href="#somewhere" data-scroller>
(function(){
    var scrollers = $('[data-scroller]'),
        animated = $('html, body');

    scrollers.on('click', function(e){
        e.preventDefault();

        // e.g. <a href="#top">
        var target = $(this.hash);

        // Target element with id #top
        // If it doesn't exist, target element with name top
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        if(target.length){
            animated.animate({
                scrollTop : target.offset().top
            }, 1000);
        }
    });
})();