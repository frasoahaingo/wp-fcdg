<?php
	// -- TOP - DOSSIER

	// période
	$periode_id = get_field('periode_choice', $post_id);
	$periode = get_term_by('id', $periode_id, 'periode');

	// thème
	$theme_ids = get_field('theme_choice', $post_id);
	$themes = array();
	foreach ($theme_ids as $id) {
		$theme = get_term_by('id', $id, 'theme');
		$themes[] = $theme->name;
	}


	// contenu
	$content = apply_filters('the_content', get_the_content());
	$nb_chars = strlen($content);

	$thumbnail = get_field('thumbnail', $postID);

	if ($thumbnail) {
		$thumbnail_url = $thumbnail['sizes']['medium_large'];
	}
?>
	<section class="dossier">
		<div class="container">
			<?php if (has_post_thumbnail()) { ?>
				<?php
					$thumb_id = get_post_thumbnail_id($post_id);
					$thumb_url = wp_get_attachment_url($thumb_id);
				?>
				<div class="cover col-xs-12">
					<?php the_post_thumbnail('cover-single-dossier'); ?>
					<!--<img src="<?php echo $thumb_url; ?>" alt="" />-->
				</div>
			<?php } elseif ($thumbnail) { ?>
				<img src="<?php echo $thumbnail_url; ?>" />
			<?php } ?>

			<div class="mixology-row">
				<div class="content col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-2 col-lg-8">
					<div class="container">
						<div class="mixology-row">
							<div class="col-xs-12">
								<span class="type"></span>
							</div>
						</div>
						<!-- TITRE -->
						<div class="mixology-row">
							<div class="col-xs-12">
								<h1><?php the_title(); ?></h1>
							</div>
						</div>
						<div class="mixology-row">
							<div class="col-xs-12 infos">
								<span class="date">
									<span class="icon-clock"></span>
									<span><?php echo $periode->name; ?></span>
								</span>
								<span class="tag">
									<span class="icon-mark"></span>
									<span><?php echo implode(', ', $themes); ?></span>
								</span>
							</div>
						</div>
						<div class="share-article">
							<a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo get_permalink($post_id); ?>" class="btn-simple btn-animate icon-facebook" target="_blank">
								<span class="icon-facebook"></span>
							</a>
							<a href="https://twitter.com/intent/tweet/?url=<?php echo get_permalink($post_id); ?>&text=<?php echo get_the_title($post_id); ?>" class="btn-simple btn-animate icon-twitter" target="_blank">
								<span class="icon-twitter"></span>
							</a>
						</div>
						<div class="mixology-row">
							<div class="col-xs-12">
								<div class="resume">
									<?php echo $content; ?>
								</div>
							</div>
						</div>
						<?php if(strlen($content) > 780) : ?>
							<div class="mixology-row">
								<div class="col-xs-12">
									<a href="#" class="btn-simple more link">
										<span>Voir plus</span>
										<span class="btn-animate icon-plus">
											<span class="icon-plus"></span>
										</span>
									</a>
								</div>
							</div>
						<?php endif; ?>
					</div>
				</div>
			</div>
		</div>
	</section>
