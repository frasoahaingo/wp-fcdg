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