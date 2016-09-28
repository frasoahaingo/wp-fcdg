<?php
/**
 * Template name: Résultats de recherche
 */

if (isset($_GET['q'])) {
	$search = cleanIncomingString($_GET['q']);
	
	$posts_per_page = 6;
	$paged = (isset($_POST['paged'])) ? $_POST['paged'] : 1;
	
	// recherche
	$results = new WP_Query(
		array(
			// 's'					=> $search,
			'search_title'		=> $search,
			'posts_per_page'	=> $posts_per_page,
			'post_type'			=> array('post', 'dossier', 'biographie'),
			'post_status'		=> 'publish',
			'orderby'			=> 'title',
			'order'				=> 'ASC',
			'paged'				=> $paged
		)
	);
	
	$countR = new WP_Query(
		array(
			// 's'					=> $search,
			'search_title'		=> $search,
			'posts_per_page'	=> -1,
			'post_type'			=> array('post', 'dossier', 'biographie'),
			'post_status'		=> 'publish',
			'orderby'			=> 'title',
			'order'				=> 'ASC',
		)
	);
	
	// $total = count($countR);
	$total = $countR->found_posts;
} 
else {
	// redirection homepage
	header('Location: ' . site_url('/')); exit;
}

get_header(); ?>

	<?php while ( have_posts() ) : the_post(); ?>
	
	<section class="cover-page">
		<div class="container">
			<div class="mixology-row">
				<div class="content col-xs-12">
					<div class="container">
						<div class="mixology-row">
							<div class="col-xs-12">
								<span class="type"></span>
							</div>
						</div>
						<div class="mixology-row">
							<div class="col-xs-12 col-md-12 col-lg-12">
								<h1><?php the_title(); ?></h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	
		
	<section class="dossier-assets search">
		<section class="container">
			<div class="mixology-row">
				<div class="col-xs-12 col-sm-12 col-md-10 col-lg-10">
					<form role="search" method="get" id="searchform" action="<?php echo site_url('/resultats-de-recherche/'); ?>">
						<label for="search-query"><span class="icon-search"></span></label>
						<input id="search-query" type="text" name="q" value="<?php echo $search; ?>">
						<button type="submit"  class="btn-submit"><span class="icon-flecheright"></span></button>
					</form>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
					<?php
					if ($total == 1) {
						?><p><?php echo $total; ?> résultat</p><?php
					}
					else {
						?><p><?php echo $total; ?> résultats</p><?php
					}
					?>
					
				</div>
			</div>
			<div class="mixology-row" id="results">			
				<?php include locate_template('partials/search/result-search.php'); ?>
			</div>
			<?php if ($total > $posts_per_page * $paged) { ?>
			<div class="mixology-row" id="btnLoadMore">
				<div class="col-xs-12">
					<a href="#" class="btn-simple more link" data-action="<?php echo get_stylesheet_directory_uri(); ?>/actions/load-more-search.php" data-total="<?php echo $total; ?>" data-limit="<?php echo $posts_per_page; ?>" data-paged="<?php echo ($paged + 1); ?>" data-search="<?php echo $search; ?>">
						<span>Voir plus de résultats</span>
						<span class="btn-animate icon-plus">
						<span class="icon-plus"></span>
					</a>
				</div>
			</div>	
			<?php } ?>
		</section>
	</section>

	
	<?php endwhile; ?>
	
<?php get_footer(); ?>