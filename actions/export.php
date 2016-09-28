<?php
	// -- EXPORT FORM CONTACT
	
	// wordpress
	require_once($_SERVER['DOCUMENT_ROOT'].'/wp-load.php');
	
	global $wpdb;
	
	$blog_id = get_current_blog_id();
	
	if (isset($_GET['type'])) {
		$type = $_GET['type'];
		
		switch ($type) {
			// -- DEMANDE DE CONTACT
			case 'contact':
				$contacts = $wpdb->get_results("SELECT * FROM wp_forms WHERE type = 'contact' AND blog_id = $blog_id");
				
				if ($contacts) {
					header('Content-type: application/excel');
					header('Content-Disposition: attachment; filename="export_form_contact_'.date("Y-m-d").'.csv"');
					
					$out = fopen('php://output', 'w');
					
					fputcsv($out,
						array(
							'Date',
							'Nom',
							utf8_decode('Prénom'),
							'Email',
							utf8_decode('Société'),
							'Fonction',
							'Message',
						), ';'
					);
					
					foreach ($contacts as $contact) {
						fputcsv($out,
							array(
								$contact->created,
								utf8_decode($contact->lastname),
								utf8_decode($contact->firstname),
								utf8_decode($contact->email),
								utf8_decode($contact->company),
								utf8_decode($contact->job),
								utf8_decode($contact->message),
							), ';'
						);
					}
					
					fclose($out);
				}
			break;
			
			// -- CONTRIBUER AU SITE
			case 'site':
				$contacts = $wpdb->get_results("SELECT * FROM wp_forms WHERE type = 'site' AND blog_id = $blog_id");
				
				if ($contacts) {
					header('Content-type: application/excel');
					header('Content-Disposition: attachment; filename="export_form_contribution_'.date("Y-m-d").'.csv"');
					
					$out = fopen('php://output', 'w');
					
					fputcsv($out,
						array(
							'Date',
							'Nom',
							utf8_decode('Prénom'),
							'Email',
							utf8_decode('Société'),
							'Fonction',
							'Message',
							utf8_decode('Vous êtes :'),
							utf8_decode('Pièce jointe')
						), ';'
					);
					
					foreach ($contacts as $contact) {
						$you_are = $contact->you_are;
						$role = "Autre";
						if ($you_are == 'teacher') {
							$role = "Enseignant";
						}
						else if ($you_are == 'student') {
							$role = "Etudiant";
						}
						
						$links = "";
						if (!empty($contact->attachment)) {
							$attachments = unserialize($contact->attachment);
							$links = implode(', ', $attachments);
						}						
						
						fputcsv($out,
							array(
								$contact->created,
								utf8_decode($contact->lastname),
								utf8_decode($contact->firstname),
								utf8_decode($contact->email),
								utf8_decode($contact->company),
								utf8_decode($contact->job),
								utf8_decode($contact->message),
								utf8_decode($role),
								utf8_decode($links)
							), ';'
						);
					}
					
					fclose($out);
				}
			break;
			
			// -- INSCRIPTION NEWSLETTER
			case 'newsletter':
				$contacts = $wpdb->get_results("SELECT * FROM wp_forms WHERE type = 'newsletter' AND blog_id = $blog_id");
				
				if ($contacts) {
					header('Content-type: application/excel');
					header('Content-Disposition: attachment; filename="export_form_newsletter_'.date("Y-m-d").'.csv"');
					
					$out = fopen('php://output', 'w');
					
					fputcsv($out,
						array(
							'Date',
							'Nom',
							utf8_decode('Prénom'),
							'Email',
							utf8_decode('Validée ?')
						), ';'
					);
					
					foreach ($contacts as $contact) {			
						$newsletter = $contact->newsletter;
						$valid = 'non';
						if ($newsletter) {
							$valid = 'oui';
						}
						fputcsv($out,
							array(
								$contact->created,
								utf8_decode($contact->lastname),
								utf8_decode($contact->firstname),
								utf8_decode($contact->email),
								$valid
							), ';'
						);
					}
					
					fclose($out);
				}
			break;
		}
	}
	