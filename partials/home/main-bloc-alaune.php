<?php
	// -- MAIN BLOC "A LA UNE"
	
	// récupérer l'article / dossier coché en BO
	$args = array(
		'posts_per_page'	=> 1,
		'post_type'			=> array('post', 'dossier'),
		'post_status'		=> 'publish',
		'order'				=> 'DESC',
		'orderby'			=> 'date',
		'meta_query'		=> array(
			array(
				'key'		=> 'main_bloc_choice',
				'value'		=> '1',
				'compare'	=> '='
			)
		)
	);
	$first_post = get_posts($args); 
	
	if ($first_post) {
		$first_post = $first_post[0];
	}
	else {
		// aucun article trouvé
		$args = array(
			'posts_per_page'	=> 1,
			'post_type'			=> array('post', 'dossier'),
			'post_status'		=> 'publish',
			'order'				=> 'DESC',
			'orderby'			=> 'date'
		);
		$first_post = get_posts($args);
		
		$first_post = $first_post[0];
	}
	
	$postID = $first_post->ID;
	
	// nature document
	$nature = get_field('main_bloc_doc', $postID);	
	
	// texte intro
	$intro = get_field('main_bloc_intro', $postID);
	
	// label lien
	$label_link = get_field('main_bloc_label_link', $postID);
	
?>
	<section class="full-page">
		<?php if (has_post_thumbnail($postID)) { ?>
		<div class="cover">
			<?php echo get_the_post_thumbnail($postID, 'cover-homepage'); ?>
		</div>
		<?php } ?>
		
		<div class="content col-xs-12 col-sm-12 col-md-6 col-lg-6">
			<div class="container">
				<div class="mixology-row">
					<div class="col-xs-12">
						<span class="type">
							<?php if ($nature) { ?>
							A la une : <span><?php echo $nature; ?></span>
							<?php } else { ?>
							A le une
							<?php } ?>
						</span>
					</div>
				</div>
				<div class="mixology-row">
					<div class="col-xs-12">
						<h3 class="title"><?php echo $first_post->post_title; ?></h3>
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
							$url = get_permalink($postID);
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
		<a href="section" class="scroll-bottom anchor next-section">Defiler vers le bas <span class="icon-flechedown"></span></a>
	</section>
	