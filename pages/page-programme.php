<?php
/**
 * Template name: Programme
 */
 
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
                            <!-- col-xs-12 -->
							<div class="filters">
								Accès rapide
								<?php
								if (get_field('content_page', $postID)) {
									while (the_repeater_field('content_page', $postID)) {
										$title = get_sub_field('title');
										$label_access = get_sub_field('label_access');
										$sanitize_title = sanitize_title($label_access);
										
										?><a href="#<?php echo $sanitize_title; ?>" data-button="<?php echo $label_access; ?>" class="btn-simple btn-loop btn-animate anchor"><span><?php echo $label_access; ?></span></a><?php
									}
								}
								?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<!-- BLOCS -->
	<?php
	if (get_field('content_page', $postID)) {
		$count = 1;
		while (the_repeater_field('content_page', $postID)) {
			$title = get_sub_field('title');
			$label_access = get_sub_field('label_access');
			$sanitize_title = sanitize_title($label_access);
			$content = get_sub_field('content');
			
			$class = "";
			if ($count % 2 == 0) {
				$class = "grey";
			}
			
			?>
			<section id="<?php echo $sanitize_title; ?>" class="programme <?php echo $class; ?>">
				<div class="container">
					<div class="mixology-row">
						<div class="content col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
							<h2><?php echo $title; ?></h2>
							<?php echo $content; ?>
						</div>
					</div>
				</div>
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
