<?php
	// -- INSCRIPTION NEWSLETTER FOOTER
	
	// wordpress
    require_once($_SERVER['DOCUMENT_ROOT'].'/wp-load.php');
	
	global $wpdb;
	
	define('MAILING_NEWSLETTER_USER', get_stylesheet_directory() . '/mail/form_newsletter_user.html');
	define('MAILING_NEWSLETTER', get_stylesheet_directory() . '/mail/form_newsletter.html');
	
	$blog_id = get_current_blog_id();
	
	if (isset($_POST['email'])) {
		$emailToAdd = $_POST['email'];
		
		// vérifier format email
		if (!filter_var($emailToAdd, FILTER_VALIDATE_EMAIL)) {
			// -- ERROR EMAIL FORMAT
			$error = array('code' => 'error', 'message' => "Le format de l'email est incorrect.");
			echo json_encode($error); exit;
		}
		
		// sinon : OK pour format
		// vérifier si email déjà présent en bdd
		$emailExists = $wpdb->get_results("SELECT * FROM wp_forms WHERE type = 'newsletter' AND email = '$emailToAdd' AND blog_id = $blog_id");
		
		if ($emailExists) {
			// ERROR 
			$error = array('code' => 'error', 'message' => "Cet email existe déjà, merci d'en saisir un autre.");
			echo json_encode($error); exit;
		}
		
		// sinon : OK pour bdd
		
		// insert email
		$insert = $wpdb->query("INSERT INTO wp_forms (created, type, email, blog_id, newsletter)
				VALUES (NOW(), 'newsletter', '".$emailToAdd."', $blog_id, 0)");
				
		if (false === $insert) {
			// ERROR : INSERT
			$error = array('code' => 'error', 'message' => "Une erreur est survenue. Veuillez réessayer dans quelques instants.");
			echo json_encode($error); exit;
		}
		
		// sinon : OK insert
		// envoi mail notification						
		$mailing_html_notif = file_get_contents(MAILING_NEWSLETTER);
		$replacements_src_notif = array(
			'#:logo#',
			'#:address#',
			'#:firstname#',
			'#:lastname#',
			'#:email#',
			'#:status#',
			'#:date#'
		);
		$replacements_dest_notif = array(
			get_stylesheet_directory_uri() . '/images/site-login-logo.png',
			home_url(),
			'Non renseigné',
			'Non renseigné',
			$emailToAdd,
			'Non validée',
			date('d/m/Y à H:i'),
		);
		$mailing_html_notif = preg_replace($replacements_src_notif, $replacements_dest_notif, $mailing_html_notif);
						
		// envoi mail
		$to_notif = get_option('email_newsletter');
		$subject_notif = 'Inscription à la newsletter | '.get_option('blogname').' | Fondation Charles de Gaulle';
		$headers_notif = array('Content-Type: text/html; charset=UTF-8', 'From:  '.get_option('blogname').' <noreply@charlesdegaulle.com>', 'Bcc: control.delia@les-argonautes.fr');

		$send_notif = wp_mail($to_notif, $subject_notif, $mailing_html_notif, $headers_notif);
						
		// envoi mail
		$mailing_html = file_get_contents(MAILING_NEWSLETTER_USER);
		$replacements_src = array(
			'#:logo#',
			'#:address#',
			'#:blogname#',
			'#:link#'
		);
		$replacements_dest = array(
			get_stylesheet_directory_uri() . '/images/site-login-logo.png',
			home_url(),
			get_option('blogname'),
			get_stylesheet_directory_uri() . '/actions/confirm_newsletter.php?log='.urlencode($emailToAdd).'&id='.urlencode($wpdb->insert_id),
		);
		$mailing_html = preg_replace($replacements_src, $replacements_dest, $mailing_html);
						
		$to = $emailToAdd;
		$subject = "Inscription à la newsletter | " . get_option('blogname');
		$headers = array('Content-Type: text/html; charset=UTF-8', 'From:  '.get_option('blogname').' <noreply@charlesdegaulle.com>', 'Bcc: control.delia@les-argonautes.fr');
						
		$send = wp_mail($to, $subject, $mailing_html, $headers);
		
		if ($send) {
			// SUCCESS
			$error = array('code' => 'success');
			echo json_encode($error);
		}
		else {
			// ERROR
			$error = array('code' => 'error', 'message' => "Une erreur est survenue. Veuillez réessayer dans quelques instants.");
			echo json_encode($error); exit;
		}	
	}
	