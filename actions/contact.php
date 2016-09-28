<?php
	// formulaire de contact
	
	// wordpress
    require_once($_SERVER['DOCUMENT_ROOT'].'/wp-load.php');
	
	$blog_id = get_current_blog_id();
	$page_id = $_POST['page_id'];
	
	// mail
	define('MAILING_CONTACT', get_stylesheet_directory() . '/mail/form_contact.html');
	define('MAILING_SITE', get_stylesheet_directory() . '/mail/form_contribution.html');
	define('MAILING_NEWSLETTER', get_stylesheet_directory() . '/mail/form_newsletter.html');
	define('MAILING_NEWSLETTER_USER', get_stylesheet_directory() . '/mail/form_newsletter_user.html');
	
	
	$form = array();
	
	if (isset($_POST['type'])) {
		$type = $_POST['type'];
		$form['type'] = $type;
		
		switch ($type) {
			case 'contact':
				// -- DEMANDE DE CONTACT
				if (isset($_POST['lastname'], $_POST['firstname'], $_POST['email'], $_POST['message'])) {
					$lastname 	= $_POST['lastname'];
					$firstname 	= $_POST['firstname'];
					$email 		= $_POST['email'];
					$message 	= $_POST['message'];
					
					if (empty($lastname) || empty($firstname) || empty($email) || empty($message)) {
						// -- ERROR : EMPTY FIELDS
						if (isset($_POST['lastname'])) 	{ $form['lastname'] = $_POST['lastname'];}
						if (isset($_POST['firstname'])) { $form['firstname'] = $_POST['firstname'];}
						if (isset($_POST['email'])) 	{ $form['email'] = $_POST['email'];}
						if (isset($_POST['message'])) 	{ $form['message'] = $_POST['message'];}
						if (isset($_POST['company'])) 	{ $form['company'] = $_POST['company']; }
						if (isset($_POST['job']))	  	{ $form['job'] = $_POST['job']; }
						
						header('Location: ' . get_permalink($page_id) . '?code=fields&form=' . base64_encode(serialize($form)) . '&display=contact'); exit;
					}
					
					// vérification email
					if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
						// -- ERROR : EMAIL
						if (isset($_POST['lastname'])) 	{ $form['lastname'] = $_POST['lastname'];}
						if (isset($_POST['firstname'])) { $form['firstname'] = $_POST['firstname'];}
						if (isset($_POST['company'])) 	{ $form['company'] = $_POST['company']; }
						if (isset($_POST['job']))	  	{ $form['job'] = $_POST['job']; }
						if (isset($_POST['message'])) 	{ $form['message'] = $_POST['message'];}
						
						header('Location: ' . get_permalink($page_id) . '?code=email&form=' . base64_encode(serialize($form)) . '&display=contact'); exit; 
					}
					
					// message
					$size = strlen($message);
					if ($size > 1500) {
						// -- ERROR : MESSAGE
						if (isset($_POST['lastname'])) 	{ $form['lastname'] = $_POST['lastname'];}
						if (isset($_POST['firstname'])) { $form['firstname'] = $_POST['firstname'];}
						if (isset($_POST['email'])) 	{ $form['email'] = $_POST['email'];}
						if (isset($_POST['company'])) 	{ $form['company'] = $_POST['company']; }
						if (isset($_POST['job']))	  	{ $form['job'] = $_POST['job']; }
						if (isset($_POST['email'])) 	{ $form['message'] = $_POST['message'];}
						
						header('Location: ' . get_permalink($page_id) . '?code=message&form=' . base64_encode(serialize($form)) . '&display=contact'); exit; 
					}
					
					// company
					if (isset($_POST['company']) && !empty($_POST['company'])) {
						$company = $_POST['company'];
					}
					
					// job
					if (isset($_POST['job']) && !empty($_POST['job'])) {
						$job = $_POST['job'];
					}

					// -- INSERT
					$insertQ = "INSERT INTO wp_forms (created, type, firstname, lastname, email, message, blog_id) 
						VALUES (NOW(), 'contact', '".$firstname."', '".$lastname."', '".$email."', '".$message."', $blog_id)";	
					
					if (isset($company) && isset($job)) {
						$insertQ = "INSERT INTO wp_forms (created, type, firstname, lastname, email, message, company, job, blog_id) 
							VALUES (NOW(), 'contact', '".$firstname."', '".$lastname."', '".$email."', '".$message."', '".$company."', '".$job."', $blog_id)";
					}
					else if (isset($company) && !isset($job)) {
						$insertQ = "INSERT INTO wp_forms (created, type, firstname, lastname, email, message, company, blog_id) 
							VALUES (NOW(), 'contact', '".$firstname."', '".$lastname."', '".$email."', '".$message."', '".$company."', $blog_id)";
					}
					else if (!isset($company) && isset($job)) {
						$insertQ = "INSERT INTO wp_forms (created, type, firstname, lastname, email, message, job, blog_id) 
							VALUES (NOW(), 'contact', '".$firstname."', '".$lastname."', '".$email."', '".$message."', '".$job."', $blog_id)";
					}
					
					$insert = $wpdb->query($insertQ);
					if ($insert) {
						// -- SUCCESS : INSERT
						
						// envoi mail notification
						$mailing_html = file_get_contents(MAILING_CONTACT);
						$replacements_src = array(
							'#:logo#',
							'#:address#',
							'#:firstname#',
							'#:lastname#',
							'#:email#',
							'#:company#',
							'#:job#',
							'#:message#',
							'#:date#'
						);
						$replacements_dest = array(
							get_stylesheet_directory_uri() . '/images/site-login-logo.png',
							home_url(),
							ucfirst($firstname),
							ucfirst($lastname),
							$email,
							(isset($company)) ? $company : 'Non renseigné',
							(isset($job)) ? $job : 'Non renseigné',
							$message,
							date('d/m/Y à H:i'),
						);
						$mailing_html = preg_replace($replacements_src, $replacements_dest, $mailing_html);
						
						// envoi mail
						$to = get_option('email_contact');
						$subject = 'Demande de contact | '.get_option('blogname').' | Fondation Charles de Gaulle';
						$headers = array('Content-Type: text/html; charset=UTF-8', 'From:  '.get_option('blogname').' <noreply@charlesdegaulle.com>', 'Bcc: control.delia@les-argonautes.fr');

						$send = wp_mail($to, $subject, $mailing_html, $headers);
						
						if ($send) {
							// -- SUCCESS : SEND
							header('Location: ' . get_permalink($page_id) . '?code=success'); exit;
						}
						else {
							// -- ERROR : SEND
							header('Location: ' . get_permalink($page_id) . '?code=error_send&display=contact'); exit;
						}
						
					}
					else {
						// -- ERROR : INSERT
						header('Location: ' . get_permalink($page_id) . '?code=error_insert' . '&display=contact'); exit;
					}
				}
				else {
					// ERROR : FIELDS
					if (isset($_POST['lastname'])) 	{ $form['lastname'] = $_POST['lastname'];}
					if (isset($_POST['firstname'])) { $form['firstname'] = $_POST['firstname'];}
					if (isset($_POST['email'])) 	{ $form['email'] = $_POST['email'];}
					if (isset($_POST['message'])) 	{ $form['message'] = $_POST['message'];}
					if (isset($_POST['company'])) 	{ $form['company'] = $_POST['company']; }
					if (isset($_POST['job']))	  	{ $form['job'] = $_POST['job']; }
						
					header('Location: ' . get_permalink($page_id) . '?code=fields&form=' . base64_encode(serialize($form)) . '&display=contact'); exit;
				}
			break;
			
			case 'newsletter':
				// -- INSCRIPTION NEWSLETTER
				if (isset($_POST['lastname'], $_POST['firstname'], $_POST['email'])) {
					$lastname 	= $_POST['lastname'];
					$firstname 	= $_POST['firstname'];
					$email 		= $_POST['email'];
					
					if (empty($lastname) || empty($firstname) || empty($email)) {
						// -- ERROR : FIELDS
						if (isset($_POST['lastname'])) 	{ $form['lastname'] = $_POST['lastname'];}
						if (isset($_POST['firstname'])) { $form['firstname'] = $_POST['firstname'];}
						if (isset($_POST['email'])) 	{ $form['email'] = $_POST['email'];}
					
						header('Location: ' . get_permalink($page_id) . '?code=fields&display=newsletter'); exit;
					}
					
					// sinon : OK
					// vérification email
					if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
						// -- ERROR : EMAIL
						if (isset($_POST['lastname'])) { $form['lastname'] = $_POST['lastname']; }
						if (isset($_POST['firstname']))	  { $form['firstname'] = $_POST['firstname']; }
						
						header('Location: ' . get_permalink($page_id) . '?code=email&form=' . base64_encode(serialize($form)) . '&display=newsletter'); exit;
					}
					
					// email déjà présent ?
					$email_exists = $wpdb->get_row("SELECT * FROM wp_forms WHERE email = $email AND blog_id = $blog_id AND type = 'newsletter'");
					if ($email_exists) {
						// -- ERROR
						header('Location: ' . get_permalink($page_id) . '?code=email_exists&display=newsletter'); exit;
					}
					
					// insert
					$insertQ = "INSERT INTO wp_forms (created, type, lastname, firstname, email, blog_id, newsletter) 
							VALUES (NOW(), 'newsletter', '".$lastname."', '".$firstname."', '".$email."', $blog_id, 0)";
							
					$insert = $wpdb->query($insertQ);
					if ($insert) {
						// -- SUCCESS : INSERT	

						// envoi mail notification						
						$mailing_html = file_get_contents(MAILING_NEWSLETTER);
						$replacements_src = array(
							'#:logo#',
							'#:address#',
							'#:firstname#',
							'#:lastname#',
							'#:email#',
							'#:status#',
							'#:date#'
						);
						$replacements_dest = array(
							get_stylesheet_directory_uri() . '/images/site-login-logo.png',
							home_url(),
							ucfirst($firstname),
							ucfirst($lastname),
							$email,
							'Non validée',
							date('d/m/Y à H:i'),
						);
						$mailing_html = preg_replace($replacements_src, $replacements_dest, $mailing_html);
						
						// envoi mail
						$to = get_option('email_newsletter');
						$subject = 'Inscription à la newsletter | '.get_option('blogname').' | Fondation Charles de Gaulle';
						$headers = array('Content-Type: text/html; charset=UTF-8', 'From:  '.get_option('blogname').' <noreply@charlesdegaulle.com>', 'Bcc: control.delia@les-argonautes.fr');

						$send = wp_mail($to, $subject, $mailing_html, $headers);
						
						// envoi mail utilisateur
						$mailing_html_user = file_get_contents(MAILING_NEWSLETTER_USER);
						$replacements_src_user = array(
							'#:logo#',
							'#:address#',
							'#:blogname#',
							'#:link#'
						);
						$replacements_dest_user = array(
							get_stylesheet_directory_uri() . '/images/site-login-logo.png',
							home_url(),
							get_option('blogname'),
							get_stylesheet_directory_uri() . '/actions/confirm_newsletter.php?log='.urlencode($email).'&id='.urlencode($wpdb->insert_id),
						);
						$mailing_html_user = preg_replace($replacements_src_user, $replacements_dest_user, $mailing_html_user);
						
						$to_user = $email;
						$subject_user = "Inscription à la newsletter | " . get_option('blogname');
						$headers_user = array('Content-Type: text/html; charset=UTF-8', 'From:  '.get_option('blogname').' <noreply@charlesdegaulle.com>', 'Bcc: control.delia@les-argonautes.fr');
						
						$send_user = wp_mail($to_user, $subject_user, $mailing_html_user, $headers_user);
						
						if ($send && $send_user) {
							// -- SUCCESS
							header('Location: ' . get_permalink($page_id) . '?code=success'); exit;
						}
						else {
							header('Location: ' . get_permalink($page_id) . '?code=error_send&display=newsletter'); exit;
						}					 
					}
					else {
						// -- ERROR : INSERT
						header('Location: ' . get_permalink($page_id) . '?code=error_insert&display=newsletter'); exit;
					}
				}
				else {
					// ERROR : FIELDS
					if (isset($_POST['lastname'])) 	{ $form['lastname'] = $_POST['lastname'];}
					if (isset($_POST['firstname'])) { $form['firstname'] = $_POST['firstname'];}
					if (isset($_POST['email'])) 	{ $form['email'] = $_POST['email'];}
					
					header('Location: ' . get_permalink($page_id) . '?code=fields&display=newsletter'); exit;
				}
			break;
			
			case 'site':
				// -- CONTRIBUER AU SITE
				if (isset($_POST['lastname'], $_POST['firstname'], $_POST['email'], $_POST['message'], $_POST['you_are'])) {
					$lastname 	= $_POST['lastname'];
					$firstname 	= $_POST['firstname'];
					$email 		= $_POST['email'];
					$message 	= $_POST['message'];
					$you_are 	= $_POST['you_are'];
					
					if (empty($lastname) || empty($firstname) || empty($email) || empty($message) || empty($you_are)) {
						// ERROR : FIELDS
						if (isset($_POST['lastname'])) 	{ $form['lastname'] = $_POST['lastname']; }
						if (isset($_POST['firstname'])) { $form['firstname'] = $_POST['firstname']; }
						if (isset($_POST['email'])) 	{ $form['email'] = $_POST['email']; }
						if (isset($_POST['company'])) 	{ $form['company'] = $_POST['company']; }
						if (isset($_POST['job']))	  	{ $form['job'] = $_POST['job']; }
						if (isset($_POST['message'])) 	{ $form['message'] = $_POST['message']; }
						if (isset($_POST['you_are'])) 	{ $form['you_are'] = $_POST['you_are']; }
											
						header('Location: ' . get_permalink($page_id) . '?code=fields&form=' . base64_encode(serialize($form)) . '&display=site'); exit;
					}
					
					// vérification email
					if (!filter_var($email,FILTER_VALIDATE_EMAIL)) {
						// ERROR : EMAIL
						if (isset($_POST['lastname'])) 	{ $form['lastname'] = $_POST['lastname']; }
						if (isset($_POST['firstname'])) { $form['firstname'] = $_POST['firstname']; }
						if (isset($_POST['company'])) 	{ $form['company'] = $_POST['company']; }
						if (isset($_POST['job']))	  	{ $form['job'] = $_POST['job']; }
						if (isset($_POST['message'])) 	{ $form['message'] = $_POST['message']; }
						if (isset($_POST['you_are'])) 	{ $form['you_are'] = $_POST['you_are']; }
						
						header('Location: ' . get_permalink($page_id) . '?code=email&form=' . base64_encode(serialize($form)) . '&display=site'); exit;
					}
					
					// message
					$size = strlen($message);
					if ($size > 1500) {
						// ERROR : MESSAGE
						if (isset($_POST['lastname'])) 	{ $form['lastname'] = $_POST['lastname']; }
						if (isset($_POST['firstname'])) { $form['firstname'] = $_POST['firstname']; }
						if (isset($_POST['company'])) 	{ $form['company'] = $_POST['company']; }
						if (isset($_POST['job']))	  	{ $form['job'] = $_POST['job']; }
						if (isset($_POST['email'])) 	{ $form['email'] = $_POST['email']; }
						if (isset($_POST['you_are'])) 	{ $form['you_are'] = $_POST['you_are']; }
						
						header('Location: ' . get_permalink($page_id) . '?code=message&form=' . base64_encode(serialize($form)) . '&display=site'); exit;
					}
					
					// company
					if (isset($_POST['company']) && !empty($_POST['company'])) {
						$company = $_POST['company'];
					}
					
					// job
					if (isset($_POST['job']) && !empty($_POST['job'])) {
						$job = $_POST['job'];
					}
					
					// attachments
					$attachments_move = array();
					if (!empty($_FILES['attachement'])) {
						$files = $_FILES['attachement'];
						$attachments = array();
						foreach ($files as $ind => $file) {
							foreach ($file as $count => $_file) {
								$attachments[$count][$ind] = $_file;
							}
						}
					}
					$count = 0;
					foreach ($attachments as $attachment) {
						if ($attachment['error'] == 0) {
							// vérification taille (inf= 2Mo)
							$filesize = $attachment['size'];
							$max_size = 2 * 1024 * 1024;
							if ($filesize < $max_size) {
								// taille OK
								// verification type du fichier
								$type_file = $attachment['type'];
								// $allowed_types = array('application/pdf', 'application/zip', 'image/jpeg', 'image/jpg', 'image/png', 'application/octet-stream');
								switch ($type_file) {
									case 'application/pdf':
										$ext = '.pdf';
									break;
									case 'application/zip':
										$ext = '.zip';
									break;
									case 'image/jpeg': case 'image/jpg':
										$ext = '.jpg';
									break;
									case 'image/png':
										$ext = '.png';
									break;
									case 'application/octet-stream':
										$_name = explode('.', $attachment['name']);
										$ext = '.'.$_name[1];
									break;
								}
								
								$tmp_name = $attachment['tmp_name'];
								$filename = 'site_'.substr(sha1($email), 0, 10).'_'.date('Ymd', time()).$count.$ext;
								
								// move file
								$wp_upload = wp_upload_dir();
								$doc_root = $wp_upload['basedir'];
								$upload_folder = $wp_upload['baseurl'];
								
								if (!is_dir($doc_root.'/contact')) {
									mkdir($doc_root . '/contact', 0777, true);
								}
								
								$move_upload = move_uploaded_file($tmp_name, $doc_root.'/contact/' . $filename);
								if ($move_upload) { 								
									$attachment_name = $upload_folder.'/contact/' . $filename;
									$attachments_move[] = $attachment_name;
								}
							}						
						}
						$count++;
					}
					$attachments_move = serialize($attachments_move);
					
					$insertQ = "INSERT INTO wp_forms (created, type, lastname, firstname, email, message, you_are, blog_id)
						VALUES (NOW(), 'site', '".$lastname."', '".$firstname."', '".$email."', '".$message."', '".$you_are."', $blog_id)";
					
					if (isset($company, $job, $attachments_move)) {
						// job + company + attachment
						$insertQ = "INSERT INTO wp_forms (created, type, lastname, firstname, email, message, you_are, company, job, attachment, blog_id)
							VALUES (NOW(), 'site', '".$lastname."', '".$firstname."', '".$email."', '".$message."', '".$you_are."', '".$company."', '".$job."', '".$attachments_move."', $blog_id)";
					}
					else if (!isset($company) && isset($job) && isset($attachments_move)) {
						// job + attachment
						$insertQ = "INSERT INTO wp_forms (created, type, lastname, firstname, email, message, you_are, job, attachment, blog_id)
							VALUES (NOW(), 'site', '".$lastname."', '".$firstname."', '".$email."', '".$message."', '".$you_are."', '".$job."', '".$attachments_move."', $blog_id)";
					}
					else if (!isset($company) && !isset($job) && isset($attachments_move)) {
						// attachment
						$insertQ = "INSERT INTO wp_forms (created, type, lastname, firstname, email, message, you_are, attachment, blog_id)
							VALUES (NOW(), 'site', '".$lastname."', '".$firstname."', '".$email."', '".$message."', '".$you_are."', '".$attachments_move."', $blog_id)";
					}
					else if (isset($company) && !isset($job) && isset($attachments_move)) {
						// company + attachment
						$insertQ = "INSERT INTO wp_forms (created, type, lastname, firstname, email, message, you_are, company, attachment, blog_id)
							VALUES (NOW(), 'site', '".$lastname."', '".$firstname."', '".$email."', '".$message."', '".$you_are."', '".$company."', '".$attachments_move."', $blog_id)";
					}
					else if (isset($company) && isset($job) && !isset($attachments_move)) {
						// company + job
						$insertQ = "INSERT INTO wp_forms (created, type, lastname, firstname, email, message, you_are, company, job, blog_id)
							VALUES (NOW(), 'site', '".$lastname."', '".$firstname."', '".$email."', '".$message."', '".$you_are."', '".$company."', '".$job."', $blog_id)";
					}
					else if (isset($company) && !isset($job) && !isset($attachments_move)) {
						// company
						$insertQ = "INSERT INTO wp_forms (created, type, lastname, firstname, email, message, you_are, company, blog_id)
							VALUES (NOW(), 'site', '".$lastname."', '".$firstname."', '".$email."', '".$message."', '".$you_are."', '".$company."', $blog_id)";
					}
					else if (!isset($company) && isset($job) && !isset($attachments_move)) {
						// job
						$insertQ = "INSERT INTO wp_forms (created, type, lastname, firstname, email, message, you_are, job, blog_id)
							VALUES (NOW(), 'site', '".$lastname."', '".$firstname."', '".$email."', '".$message."', '".$you_are."', '".$job."', $blog_id)";
					}
					
					$insert = $wpdb->query($insertQ);
					if ($insert) {
						// SUCCESS : INSERT
						
						// envoi mail notification
						$role = "Autre";
						if ($you_are == 'teacher') {
							$role = "Enseignant";
						}
						else if ($you_are == 'student') {
							$role = "Etudiant";
						}
						
						$mailing_html = file_get_contents(MAILING_SITE);
						$replacements_src = array(
							'#:logo#',
							'#:address#',
							'#:firstname#',
							'#:lastname#',
							'#:email#',
							'#:company#',
							'#:job#',
							'#:role#',							
							'#:message#',
							'#:attachment#',
							'#:date#'
						);
						$replacements_dest = array(
							get_stylesheet_directory_uri() . '/images/site-login-logo.png',
							home_url(),
							ucfirst($firstname),
							ucfirst($lastname),
							$email,
							(isset($company)) ? $company : 'Non renseigné',
							(isset($job)) ? $job : 'Non renseigné',
							$role,
							$message,
							implode(',<br/>', unserialize($attachments_move)),
							date('d/m/Y à H:i'),
						);
						$mailing_html = preg_replace($replacements_src, $replacements_dest, $mailing_html);
						
						// envoi mail
						$to = get_option('email_site');
						$subject = 'Contribuer au site | '.get_option('blogname').' | Fondation Charles de Gaulle';
						$headers = array('Content-Type: text/html; charset=UTF-8', 'From:  '.get_option('blogname').' <noreply@charlesdegaulle.com>', 'Bcc: control.delia@les-argonautes.fr');

						$send = wp_mail($to, $subject, $mailing_html, $headers);
						
						if ($send) {
							// SUCCESS : SEND
							header('Location: ' . get_permalink($page_id) . '?code=success'); exit;
						}
						else {
							// ERROR : SEND
							header('Location: ' . get_permalink($page_id) . '?code=error_send' . '&display=site'); exit;
						}
					}
					else {
						// ERROR : INSERT
						header('Location: ' . get_permalink($page_id) . '?code=error_insert' . '&display=site'); exit;
					}
				}
				else {
					// ERROR : FIELDS
					header('Location: ' . get_permalink($page_id) . '?code=fields' . '&display=site'); exit;
				}
			break;
		}
	}
	else {
		// -- ERROR : TYPE		
		header('Location: ' . get_permalink($page_id) . '?code=type'); exit;
	}
	