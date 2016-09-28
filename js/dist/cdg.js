/*! cdg - v - 2016-04-20
* Copyright (c) 2016 Kitae; Licensed  */
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
$(document).ready(function(e){
	var index = 0;

	$(document).on('click', '.contact-type input[type="radio"]', function(){
		var value = $(this).val(),
			formsToDisplay = $('.contact-forms').find('form'),
			formToDisplay = $('.'+value);

		formsToDisplay.removeClass('display');
		formToDisplay.addClass('display');
	});

	$(document).on('change', 'input[type="file"]', function(){
		var fileInput = $(this),
			files = fileInput.get(0).files,
			maxSize = 2097152,
			uploadedFiles = fileInput.parent().find('.uploaded-files');

		for (var i = 0; i < files.length; i++) {
			if (files[i].size - maxSize > 0) {
				fileInput.closest('fieldset').find('.validation').addClass('error').text('Les pièces-jointes ne peuvent pas excéder 2Mo');
				fileInput.wrap('<form>').closest('form').get(0).reset();
				fileInput.unwrap();
			} else {
				fileInput.closest('fieldset').find('.validation').removeClass('error').text('');
				uploadedFiles.append('<li data-file="'+ index +'">'+files[i].name+ '<a href=""><span class="icon-close"></span></a></li>');
				fileInput.after(fileInput.clone()).removeAttr('id').attr('data-file', index).attr('name', 'attachement[]').addClass('file');
				index++;
			}
		};

		$(document).on('click', '.uploaded-files a', function(event){
			var index = $(this).parent().data('file'),
				target = $('input[type="file"][data-file="'+ index +'"]');
			
			target.remove();
			$(this).closest('li').remove();
			event.preventDefault();
		});
	});

	$('.contact-forms').on('submit', 'form', function(event){
		var form = $(this),
			formInputText = form.find('.text'),
			formInputEmail = form.find('.email'),
			formInputMessage = form.find('.message'),
			formInputFile = form.find('.file'),
			formInputRadio = form.find('.radio'),
			emailReg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i,
			isFormValid = true;

		// INPUT TEXT
		if (formInputText.length) {
			for (var i = 0; i < formInputText.length; i++) {
				if ($(formInputText[i]).val() == "") {
					$(formInputText[i]).closest('fieldset').find('.validation').addClass('error').text('Ce champ est obligatoire');
					isFormValid = false;
				} else {
					$(formInputText[i]).closest('fieldset').find('.validation').removeClass('error');
				}
			};
		}

		// INPUT EMAIL
		if (formInputEmail.length) {
			for (var i = 0; i < formInputEmail.length; i++) {
				if ($(formInputEmail[i]).val() == "") {
					$(formInputEmail[i]).closest('fieldset').find('.validation').addClass('error').text('Ce champ est obligatoire');
					isFormValid = false;
				} else if (!emailReg.test($(formInputEmail[i]).val())) {
					$(formInputEmail[i]).closest('fieldset').find('.validation').addClass('error').text('Veuillez renseigner une email valide');
					isFormValid = false;
				} else {
					$(formInputEmail[i]).closest('fieldset').find('.validation').removeClass('error');
				}
			};
		}

		// TEXTAREA
		if (formInputMessage.length) {
			for (var i = 0; i < formInputMessage.length; i++) {
				if ($(formInputMessage[i]).val() == "") {
					$(formInputMessage[i]).closest('fieldset').find('.validation').addClass('error').text('Ce champ est obligatoire');
					isFormValid = false;
				} else if ($(formInputMessage[i]).val().length > 1500) {
					$(formInputMessage[i]).closest('fieldset').find('.validation').addClass('error').text('Ce champ peut contenir jusqu’à 1500 caractères');
					isFormValid = false;
				} else {
					$(formInputMessage[i]).closest('fieldset').find('.validation').removeClass('error');
				}
			};
		}

		// FILES
		if (form.hasClass('contribution-form')) {
			if (formInputFile.length) {
				formInputFile.closest('fieldset').find('.validation').remove('error').text('');
			} else {
				isFormValid = false;
				form.find('input[type="file"]').closest('fieldset').find('.validation').addClass('error').text('Ce champ est obligatoire');
			}
		}


		// INPUT RADIO
		if (formInputRadio.length) {
			if (formInputRadio.is(':checked')) {
				formInputRadio.closest('fieldset').find('.validation').removeClass('error');
			} else {
				formInputRadio.closest('fieldset').find('.validation').addClass('error').text('Ce champ est obligatoire');
				isFormValid = false;
			}
		}

		if (isFormValid == false) {
			return false;
		}

		return true;
	});

});
$(document).ready(function(e){
	if ($('.dossier').find('.resume').length) {

		var resume = $('.dossier').find('.resume'),
			content = resume.html(),
			ellipse = "...",
			showChar = 780;

		if (content.length > showChar) {
			var c = content.substr(0, showChar);

	            	resume.html(c + ellipse);
		}

		$(document).on('click', '.dossier .more.link', function(event){
			resume.html(content);
			$(this).hide();
			
			event.preventDefault();
		});
		
	}
});
$(document).ready(function(e){

    function filterCard (periode, theme, category, keyword) {
        $('.cards').find('article').each(function(){
            var article = $(this);

            var p = article.attr('data-filter-periode'),
                t = article.attr('data-filter-theme'),
                c = article.attr('data-filter-category'),
                k = article.attr('data-filter-keywords');

            if (c) {
                if (category.indexOf(c) != -1 || category.length <= 0) {
                     article.parent().show();
                } else article.parent().hide();
            }

            if(p || t) {
                if ((periode.indexOf(p) != -1) || (theme.indexOf(t) != -1) || ((periode.length <= 0) && (theme.length <= 0))) {
                    article.parent().show();
                } else article.parent().hide();
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
$(document).ready(function(e){

	$('.confirm-newsletter').on('click', '.close', function(event){
		$(this).closest('.confirm-newsletter').removeClass('show');
		event.preventDefault();
	});

	$('footer').on('submit', 'form', function(event){
		var form = $(this),
			email = form.find('input[type="email"]'),
			emailVal = email.val();

		$.ajax({
			type:"POST", 
			data: {email: emailVal}, 
			url:form.attr('action'),
            		success: function(data){
				data = JSON.parse(data);
				if (data.code == 'success') {
					form.trigger('reset');
                				$(".confirm-newsletter").addClass('show').find('.address').text(emailVal);
                				form.find('.validation').removeClass('error').text('');
				} else if (data.code == 'error') {
					form.find('.validation').addClass('error').text(data.message);
				}
            		}
        		});
		return false;
	});

});
$(document).ready(function(e) {
	var windowWidth = $(window).width();

		// CURSOR POSITION
		function updateCursorPositionX(decal, animate) {
			var cursorMaxLeft = $('.timeline').find('.reperes').width();
			// console.log(decal);

			if (animate) {
				$('.cursor').animate({
					'left': Math.abs(decal)+ 'px'
				}, 500);
			} else {
				$('.cursor').css('left', Math.abs(decal)+ 'px');
			}


        			// if (parseFloat($('.cursor').css('left')) < 0) {
        			// 	$('.cursor').css('left', 0);
        			// }
        			// if (parseFloat($('.cursor').css('left')) > cursorMaxLeft) {
        			// 	$('.cursor').css('left', cursorMaxLeft);
        			// }
		}

		function updateCursorPositionY(decal, animate) {
			var cursorMaxTop = $('.timeline').find('.reperes').height();

			if (animate) {
				$('.cursor').animate({
					'top': Math.abs(decal) -12 + 'px'
				}, 500);
			} else {
				$('.cursor').css('top', Math.abs(decal)+ 'px');
			}
		}

	// RIBBON YEAR
	if ($('.frise').length) {
		var arrayEventsYear = [];
		$('.event[data-year]').each(function(){
			var year = $(this).data('year');
			arrayEventsYear.push(year);
		});
		arrayEventsYear = arrayEventsYear.filter( function( item, index, inputArray ) {
	           		return inputArray.indexOf(item) == index;
	    	});
		for (var i = 0; i <= arrayEventsYear.length ; i++) {
			$('.event[data-year="'+arrayEventsYear[i]+'"]').eq(0).prepend('<span class="yearLimit ribbon"><strong>'+arrayEventsYear[i]+'</strong></span>');
		};
	}


	if ( windowWidth > 768 ) {

		if ($('.scroll-container').length) {
			// CHRONOLOGIE
			var scrollerContainer = $('.scroll-container'),
				scrollerContainerWidth = scrollerContainer.width();
				scrollerContainerPeriodes = scrollerContainer.find('.periodes'),
				scrollerContainerPeriodesWidth = scrollerContainerPeriodes.outerWidth(true);

			var lastEventIsDrag = false;

			// DRAG PERIODS
			var pepScroller = scrollerContainerPeriodes.pep({
				axis: 'x',
				start: function() {
					lastEventIsDrag = true;
				},
				stop: function(ev) {
					if (!this.started) {
						lastEventIsDrag = false;
						$(ev.target).click();
					}
				},
				shouldPreventDefault: true,
				useCSSTranslation: false,
				constrainTo: [0, 0, 0, -scrollerContainerPeriodesWidth + scrollerContainerWidth]
			});

			scrollerContainerPeriodes.find('a').unbind().click(function(e){
				if (!lastEventIsDrag) {
					window.location.href = $(this).attr('href');
				}
				return false;
			});

			// MOUSEWHEEL PERIODS
			// $(".scroll-container").mousewheel(function(event, delta) {
			// 	this.scrollLeft -= (delta * 10);
			// 	this.scrollRight -= (delta * 10);
			// 	event.preventDefault();
			// });
		}

		if ($('.timeline-scroller').length) {

		// TIMELINE
		var timelineScroller = $(".timeline-scroller"),
			timelineScrollerWidth = timelineScroller.width();
			timelineScrollerContent = timelineScroller.find('.content'),
			timelineScrollerContentWidth = timelineScrollerContent.width(),
			timelineReperesWidth =  $('.timeline').find('.reperes').width();


		if ($(timelineScrollerContent).find('> div').length) {
			// SET WIDTH FOR timelineScrollerContent
			var arrayWidth = [],
				sumWidth = 0;

			$(timelineScrollerContent).find('> div').each(function(){
				arrayWidth.push($(this).width());
			});
			sumWidth = arrayWidth.reduce(function(a, b) {
	    			return a + b;
			});
		}

		timelineScrollerContentWidth = sumWidth;
		timelineScrollerContent.css('width', timelineScrollerContentWidth);

		var ratioWidth  = timelineScrollerContent.width() / timelineReperesWidth;

		var allowTimelineOpen = true;

		// DRAG TIMELINE
		var pepTimeline = timelineScrollerContent.pep({
		  	axis: 'x',
			shouldPreventDefault: true,
			useCSSTranslation: false,
			constrainTo: [0, 0, 0,  - timelineScrollerContentWidth + timelineScrollerWidth/2 ],
			drag: function(ev, obj) {
				var decal = obj.pos.x,
					moveCursor = Math.abs(decal) / ratioWidth;

				updateCursorPositionX(moveCursor);
			},
			easing: function(ev, obj) {
				var decal = parseFloat(timelineScrollerContent.css('left')),
					moveCursor = Math.abs(decal) / ratioWidth;

				updateCursorPositionX(moveCursor);
			},
			start: function() {
				allowTimelineOpen = false;
			},
			stop: function(ev) {
				if (!this.started) {
					allowTimelineOpen = true;
					// $(ev.target).click();
				}
			}
		});

		// MOUSEWHEEL TIMELINE
		var myPep = $.pep.peps[0];
		// timelineScroller.mousewheel(function(event, delta) {
		// 	var scrollDistance = (event.deltaX * event.deltaFactor) * -1,
		// 		newPosX = 0,
		// 		scrollRatio = 0;

		// 	myPep.doMoveTo(- delta * 2 , 0);
		// 	newPosX = parseFloat(timelineScrollerContent.css('left'));
		// 	scrollRatio = newPosX * 100 / timelineScrollerContentWidth;

		// 	updateCursorPosition(event, scrollRatio);
		// });
		}
	} else {
		if ($('.timeline-scroller').length) {
		// TIMELINE
		var timelineScroller = $(".timeline-scroller"),
			timelineScrollerHeight = timelineScroller.height();
			timelineScrollerContent = timelineScroller.find('.content'),
			timelineScrollerContentHeight = timelineScrollerContent.outerHeight(true),
			timelineReperesHeight =  $('.timeline').find('.reperes').height();

		// SET height FOR timelineScrollerContent
		var arrayHeight = [],
			sumHeight = 0;

		timelineScrollerContent.children().each(function(){
			arrayHeight.push($(this).height());
		});
		sumHeight = arrayHeight.reduce(function(a, b) {
    			return a + b;
		});

		timelineScrollerContentHeight = sumHeight;
		timelineScrollerContent.css('height', sumHeight);

		var ratioHeight  = timelineScrollerContentHeight / timelineReperesHeight;

		var pepTimeline = timelineScrollerContent.pep({
		  	axis: 'y',
			shouldPreventDefault: true,
			useCSSTranslation: false,
			constrainTo: [- timelineScrollerContentHeight + $('.event').outerHeight(true), 0, 0, 0],
			drag: function(ev, obj) {
				var decal = obj.pos.y,
					moveCursor = Math.abs(decal) / ratioHeight,
					pastEventHeight = 0;

				// $('.event').each(function(){
				// 	if ($(this).offset().top + $(this).height() < 0) {
				// 		pastEventHeight += $(this).height();
				// 		console.log(pastEventHeight);
				// 		moveCursor = pastEventHeight / ratioHeight;

				// 		updateCursorPositionY(moveCursor);
				// 	}
				// })

				updateCursorPositionY(moveCursor);

			},
			easing: function(ev, obj) {
				var decal = parseFloat(timelineScrollerContent.css('top')),
					moveCursor = Math.abs(decal) / ratioHeight;

				updateCursorPositionY(moveCursor);
			}
		});
		}
	}

	// HOVER ON PERIOD
	$(document).on('mouseover', '.chronologie .scroll-container .periode', function() {
		var background = $(this).attr('class');
		background = background.replace('periode ', '');
		$('.chronologie .cover img.' + background).addClass('show');
	});

	$(document).on('mouseleave', '.chronologie .scroll-container .periode', function() {
		$('.chronologie .cover img').removeClass('show');
	});

	// ANCHOR FRISE
	$(document).on('click', '.reperes a', function(event) {
		var index = $(this).index(),
			target = $('.event').eq(index),
			targetLeft = - (parseFloat(target.position().left + target.parent().position().left)),
			targetTop = - (parseFloat(target.position().top + target.parent().position().top));

		if (windowWidth >= 769) {
			$('.timeline-scroller').find('.content').stop().animate({
				'left': targetLeft
			}, 500);
			updateCursorPositionX($(this).position().left, 'animate');
		} else {
			$('.timeline-scroller').find('.content').stop().animate({
				top: targetTop
			}, 500);
			updateCursorPositionY($(this).position().top, 'animate');
		}
		event.preventDefault();
	});

	// EVENT PAGE
	$('.timeline-scroller').find('.event').on('click', 'a',function(event){
		if (!allowTimelineOpen) {
			event.preventDefault();
			return false;
		}

		var link = $(this),
			permalink = link.attr('href');

		$.ajax({
			type:"POST",
			url: permalink,
            		success: function(data){
            			$('.timeline-container').after($(data).find('.event-page'));
            		},
                        error: function(){
            		}
        		});
		event.preventDefault();
	});

	$(document).on('mouseover', '.event-page .cover img', function(){
		if (!$(this).parent().hasClass('isZoomed')) {
			$(this).parent().addClass('isZoomable');
		}
	});


	$(document).on('mouseleave', '.event-page .cover img', function(){
		if (!$(this).parent().hasClass('isZoomed')) {
			$(this).parent().removeClass('isZoomable');
		}
	});

	// console.log(windowWidth);
	$(document).on('click', '.cover.isZoomable img', function(){
		if (windowWidth >= 970) {
			$(this).parent().removeClass('isZoomable').addClass('isZoomed');
		} else {
			var urlImg = $(this).attr('src');
			window.open(urlImg, '_blank');
		}

		var $video = $(this).next('.video');

		if ($video.length) {
			$video.css('display', 'block');

			var $iframe = $video.find('iframe');
			var src = $iframe.attr('src');

			if(src.match(/youtube/)) {
				$iframe.data('src', src);
				$iframe.attr('src', src+'?autoplay=1');
				$video.addClass('youtube');
			}
		}
	});

	$(document).on('click', '.cover.isZoomed .icon-close', function(event){
		$(this).closest('.cover').removeClass('isZoomed isZoomable');
		event.preventDefault();

		var $video = $(this).prev('.video');

		if ($video.length) {
			$video.css('display', 'none');

			var $iframe = $video.find('iframe');
			var src = $iframe.attr('src');

			if(src.match(/youtube/)) {
				$iframe.attr('src', $iframe.data('src'));
			}
		}
	});

	$(document).on('click', '.return-frise a', function(event){
		$('.event-page').remove();
		event.preventDefault();
	});
});
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
// LOAD MORE SEARCH
$(document).ready(function(e){
	$('.search .more.link').on('click', function() {					
		var action = $(this).data('action'),
			search = $(this).data('search'),
			paged = $(this).data('paged'),
			total = $(this).data('total'),
			posts_per_page = $(this).data('limit');
						
		$.ajax({
			method: 'post',
			url : action,
			data: {
				search : search,
				paged: paged
			},
			success: function (data) {
				$('#results').append(data);
				if (total < posts_per_page * paged) {
					// bouton load more caché
					$('#btnLoadMore').empty();
				}
				else {
					$('.more.link').data('paged', (paged+1));
				}
			}
		});					
		return false;
	});				
});