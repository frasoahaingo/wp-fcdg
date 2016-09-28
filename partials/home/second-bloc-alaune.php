<?php
	// -- SECONDARY - BLOC "A LA UNE"
	
	// récupérer les articles / dossiers dans le BO
	$args = array(
		'posts_per_page'	=> 2,
		'post_type'			=> array('post', 'dossier'),
		'post_status'		=> 'publish',
		'order'				=> 'DESC',
		'orderby'			=> 'date',
		'meta_query'		=> array(
			array(
				'key'		=> 'second_bloc_choice',
				'value'		=> '1',
				'compare'	=> '='
			)
		)
	);
	$articles = get_posts($args);
	
	if (empty($articles)) {
		$args = array(
			'posts_per_page'	=> 2,
			'post_type'			=> array('post', 'dossier'),
			'post_status'		=> 'publish',
			'order'				=> 'DESC',
			'orderby'			=> 'date'
		);
		$articles = get_posts($args);
	}
	
	if ($articles) {
		$count = 1;
		foreach ($articles as $post) {
			setup_postdata($post);
			
			// nature document
			$nature = get_field('second_bloc_doc', get_the_ID());
			
			// texte intro
			$intro = get_field('second_bloc_intro', get_the_ID());
			
			// label link
			$label_link = get_field('second_bloc_label_link', get_the_ID());
			?>
			<section class="featured">
				<?php if ($count % 2 != 0) { ?>	
					<?php if (has_post_thumbnail()) { ?>
					<div class="cover col-xs-12 col-sm-6 col-md-6 col-lg-6">
						<?php the_post_thumbnail('cover-bloc-alaune'); ?>
					</div>		
					<?php } ?>
				<?php } ?>
				
				<!-- <div class="content col-xs-12 col-sm-4 col-sm-offset-1 col-md-4 col-md-offset-1 col-lg-4 col-lg-offset-1"> -->
				<div class="content col-xs-12 col-sm-6 col-md-6 col-lg-6">
					<div class="container">
						<div class="mixology-row">
							<div class="col-xs-12">
								<?php if ($nature) { ?>
								<span class="type">
									A la une : <span><?php echo $nature; ?></span>
								</span>
								<?php } else { ?>
								<span class="type">
									A la une
								</span>
								<?php } ?>								
							</div>
						</div>
						<div class="mixology-row">
							<div class="col-xs-12">
								<h3 class="title"><?php the_title(); ?></h3>
							</div>
						</div>
						<div class="mixology-row">
							<div class="col-xs-12">
								<p class="description"><?php echo $intro; ?></p>
							</div>
						</div>
						<div class="mixology-row">
							<div class="col-xs-12">
								<?php
									$url = get_permalink();
									$target = "";

									if ($post->external_link) {
										$url = $post->external_link;
										$target = 'target="_blank"';
									}
								?>
								<a href="<?php echo $url; ?>" <?php echo $target;?> class="btn-simple arrow-right link">
									<?php echo $label_link; ?>
									<span class="btn-animate">
										<span class="icon-flecheright"></span>
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				
				<?php if ($count % 2 == 0) { ?>				
					<?php if (has_post_thumbnail()) { ?>
					<div class="cover col-xs-12 col-sm-6 col-md-6 col-lg-6">
						<?php the_post_thumbnail('cover-bloc-alaune'); ?>
					</div>		
					<?php } ?>			
				<?php } ?>
			</section>
			<?php	
			
			$count++;
		}
		wp_reset_postdata();
	}

