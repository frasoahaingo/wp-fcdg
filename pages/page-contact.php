<?php
/*
 * Template name: Contact
 */ 
 
// data form
if (isset($_GET['form'])) {
	$form = $_GET['form'];
	$form = base64_decode($form);
	$form = unserialize($form);
	
	if (isset($form['lastname'])) 	{ $lastname = $form['lastname']; }
	if (isset($form['firstname']))	{ $firstname = $form['firstname']; }
	if (isset($form['email'])) 		{ $email = $form['email']; }
	
	$form_type = $form['type'];
	switch ($form_type) {
		case 'contact':
			if (isset($form['company'])) { $company = $form['company']; }
			if (isset($form['job'])) 	 { $job = $form['job']; }
			if (isset($form['message'])) { $message = $form['message']; }
		break;
		
		case 'site':
			if (isset($form['company'])) { $company = $form['company']; }
			if (isset($form['job'])) 	 { $job = $form['job']; }
			if (isset($form['message'])) { $message = $form['message']; }
			if (isset($form['you_are'])) { $you_are = $form['you_are']; }
		break;
	}
}

// error code
if (isset($_GET['code'])) {
	$code = $_GET['code'];
	
	$error = "";
	switch ($code) {
		case 'fields':
			$error = "Ce champ est obligatoire";
		break;
		
		case 'email':
			$error = "Veuillez renseigner une adresse email valide";
		break;
		
		case 'message':
			$error = "Ce champ peut contenir jusqu'à 1500 caractères";
		break;
		
		case 'error_insert': case 'error_confirm':
			$error = "Une erreur est survenue. Veuillez réessayer dans quelques minutes";
		break;
	}
}

get_header();
?>
	<?php while ( have_posts() ) : the_post(); ?>
	
	<?php $page_id = get_the_ID(); ?>
	
	<?php
	$success = array('success', 'success_confirm');
	if (isset($_GET['code']) &&  in_array($_GET['code'], $success)) {
		include locate_template('partials/page-contact/form-success.php'); 
	}
	else {
		include locate_template('partials/page-contact/forms.php');
	}
	?>
	
	<?php endwhile; ?>

<?php get_footer(); ?>