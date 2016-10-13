<?php
/*
 * Template Name: Dossier Listing
 */

get_header(); ?>

	<?php while ( have_posts() ) : the_post(); ?>

	<?php
	// type d'article à afficher
	$post_type = get_field('show_post_type', get_the_ID());

	// récupérer les articles
	$args = array();
	if ($post_type == 'biographie') {
		$args = array(
			'orderby'	=> 'meta_value',
			'order'		=> 'ASC',
			'meta_key'	=> 'lastname'
		);
	}
	$articles = cdg_get_posts($post_type, $args);
	?>

	<!-- FILTRES -->
	<?php
	switch ($post_type) {
		case 'dossier':
			// récupérer les périodes
			$periodes = cdg_get_categories('periode', 'dossier');
			// récupérer les thèmes
			$themes = cdg_get_categories('theme', 'dossier');

			include locate_template('partials/page-dossier/filter-dossier.php');
		break;

		case 'biographie':
			// récupérer les périodes
			$periodes = cdg_get_categories('periode_bio', 'biographie');
			// récupérer les thèmes
			$themes = cdg_get_categories('theme_bio', 'biographie');

			include locate_template('partials/page-dossier/filter-dossier.php');
		break;

		case 'post':
			// récupérer les catégories d'article
			$categories = get_categories();

			include locate_template('partials/page-dossier/filter-article.php');
		break;
	}
	?>


	<!-- DOSSIERS / BIOGRAPHIES -->
	<section class="cards">
		<div class="container">
			<div class="mixology-row">
				<div class="col-xs-12">
					<div class="container">
						<div class="mixology-row">
							<?php
							if ($articles) {
								foreach ($articles as $post) {
									setup_postdata($post);

									$postID = get_the_ID();

									include locate_template('partials/page-dossier/card-'.$post_type.'.php');
								}
								wp_reset_postdata();
							}
							?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<?php endwhile; ?>

	<!-- FRISE -->
	<section class="push_color frise pushed">
		<div class="cover">
			<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/charles5.png" alt="">
		</div>
		<div class="content col-xs-8">
			<div class="container">
				<div class="mixology-row">
					<div class="col-xs-12">
						<span class="type">
							Frise chronologique
						</span>
					</div>
				</div>
				<div class="mixology-row">
					<div class="col-xs-12">
						<h2 class="title">Découvrez la vie de Charles de Gaulle</h2>
					</div>
				</div>
				<div class="mixology-row">
					<div class="col-xs-12">
						<a href="<?php echo site_url('/frise-chronologique/'); ?>" class="btn-simple arrow-right link" target="_blank">
							Consulter la frise chronologique
							<span class="btn-animate">
								<span class="icon-flecheright"></span>
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

<?php get_footer(); ?>