<?php
/**
 * The template for Biographie [custom post type]
 */ 
 

get_header(); ?>

	<?php while ( have_posts() ) : the_post(); ?>
		
		<?php 
		$post_id = get_the_ID(); 
		
		// dossier associé à l'article
		if (isset($_GET['dossier_id']) && !empty($_GET['dossier_id'])) {
			$dossier_id = $_GET['dossier_id'];
		}
		else {
			// récupérer le dernier dossier associé
			$dossier_link = get_field('post_choice', $post_id);
			if ($dossier_link) {
				$dossier_link = array_reverse($dossier_link);
			
				$dossier = $dossier_link[0];
				$dossier_id = $dossier->ID;
			}			
		}
		?>
		
		<!-- TOP -->
		<?php include locate_template('partials/single/top-single.php'); ?>
		
		<!-- CHAPEAU -->
		<?php include locate_template('partials/single/chapeau-single.php'); ?>
		
		<!-- CONTENU -->
		<?php include locate_template('partials/single/content-single.php'); ?>

		<!-- SOMMAIRE -->
		<?php include locate_template('partials/single/summary-single.php'); ?>
	
	<?php endwhile; ?>

<?php get_footer(); ?>