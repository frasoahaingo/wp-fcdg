<?php
/**
 * Template name: Lexique
 */

$alpha = array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');

get_header();
?>
	<?php while ( have_posts() ) : the_post(); ?>
	
	<?php $postID = get_the_ID(); ?>
	
	<section class="cover-page">
		<div class="container">
			<div class="mixology-row">
				<div class="content col-xs-12">
					 <div class="container">
						<div class="mixology-row">
							<div class="col-xs-12">
								<span class="article-type"></span>
							</div>
						</div>
						<div class="mixology-row">
							<div class="col-xs-12 col-md-12 col-lg-12">
								<h1><?php the_title(); ?></h1>
							</div>
						</div>
						<div class="mixology-row">
                            <!-- col-xs-12  -->
							<div class="filters">
								Accès rapide
								<?php
								foreach ($alpha as $item) {
									$term = get_term_by('name', $item, 'alphabet');
									
									if ($term) {
										$term_slug = $term->slug;
										$term_name = $term->name;
										
										?><a href="#<?php echo $term_slug; ?>" data-button="<?php echo $term_slug; ?>" class="btn-simple btn-loop btn-animate anchor"><span><?php echo $term_name; ?></span></a><?php
									}
									/*else {
										?><span><?php echo $item; ?></span><?php
									}*/							
									
								}
								?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<!-- ITEMS LEXIQUE -->
	<?php	
	$count = 1;
	foreach ($alpha as $item) {
		$term = get_term_by('name', $item, 'alphabet');
		
		if ($term) {
			$class = "";
			if ($count % 2 == 0) {
				$class = "grey";
			}			
				
			?>
			<section id="<?php echo strtolower($item); ?>" class="programme <?php echo $class; ?>">
				<h2><?php echo $item; ?></h2>
				
				<?php
				$args = array(
					'orderby'	=> 'title',
					'order'		=> 'ASC',
					'tax_query'	=> array(
						array(
							'taxonomy'	=> 'alphabet',
							'field' 	=> 'slug',
							'terms'		=> strtolower($item)
						)
					)
				);
				$items = cdg_get_posts('lexique_item', $args);
				
				foreach ($items as $lexique) {
					?>
					<div class="container">
						<div class="mixology-row">
							<div class="content col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
								<h2><?php echo $lexique->post_title; ?></h2>
								<?php echo $lexique->post_content; ?>
							</div>
						</div>
					</div>
					<?php
				}
				?>		
			</section>
			<?php
			$count++;
		}
	}
	?>
	
	<!-- BLOC ENSEIGNANT -->
	<?php
	// récupérer celui de la homepage
	$homePageID = get_option('page_on_front'); 
	
	# include locate_template('partials/home/bloc-teacher.php');
	?>
	
	<?php endwhile; ?>

<?php get_footer(); ?>
