<?php 
	// -- CONFIRMATION INSCRIPTION NEWSLETTER
	
	// wordpress
    require_once($_SERVER['DOCUMENT_ROOT'].'/wp-load.php');
	
	$blog_id = get_current_blog_id();
	
	global $wpdb; 
	
	if (isset($_GET['log'], $_GET['id'])) {
		$email = $_GET['log'];
		$id = $_GET['id'];
		
		$update = $wpdb->query("UPDATE wp_forms SET newsletter = 1 WHERE type = 'newsletter' AND email = '$email' AND id = $id");
		if ($update) {
			// -- SUCCESS
			header('Location: ' . site_url('/nous-contacter/') . '?code=success_confirm'); exit;
		}
		else {
			// -- ERROR
			header('Location: ' . site_url('/nous-contacter/') . '?code=error_confirm'); exit;
		}
	}
	else {
		// -- ERROR
		header('Location: ' . site_url('/nous-contacter/') . '?code=error_confirm'); exit;
	}