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