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