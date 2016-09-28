<?php
/**
 * The template for Dossier [custom post type]
 */ 
 

get_header(); ?>

	<?php while ( have_posts() ) : the_post(); ?>
		
		<?php
		$post_id = get_the_ID();
		
		// récupérer les articles du dossier
		$posts_dossier = get_field('post_choice', $post_id);
		
		$posts_id = array();
		$order_posts = array();
		$count = 1;
		if ($posts_dossier) {
			foreach ($posts_dossier as $post) {
				setup_postdata($post);
				
				$posts_id[] = get_the_ID();
				$order_posts[get_the_ID()] = $count;
				$count++;
			}
			wp_reset_postdata();
		}
		
		// SOMMAIRE : récupérer les catégories
		$sommaire = get_field('sommaire', $post_id);
		?>
		
		<!-- TOP -->
		<?php include locate_template('partials/single-dossier/top-dossier.php'); ?>

		<!-- SOMMAIRE -->
		<?php include locate_template('partials/single-dossier/summary-dossier.php'); ?>
	
	<?php endwhile; ?>

<?php get_footer(); ?>