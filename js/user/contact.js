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