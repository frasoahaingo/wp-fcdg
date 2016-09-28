<?php
/**
 * The template for displaying pages 
 */

get_header(); ?>

	<?php while ( have_posts() ) : the_post(); ?>
	
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
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<section class="programme">
		<div class="container">
			<div class="mixology-row">
				<div class="content col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
					<?php the_content(); ?>
				</div>
			</div>
		</div>
	</section>
	
	<?php endwhile; ?>

<?php get_footer(); ?>
