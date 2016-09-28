<?php
	// -- TOP SINGLE

	// tags
	$tags = get_the_tags();
	$echo_tags = array();
	if ($tags) {
		$tags = array_slice($tags, 0, 3);
		foreach ($tags as $tag) {
			$echo_tags[] = $tag->name;
		}
	}

	// image défaut
	$img_default = "";
	$the_category = get_the_category($post_id);
	$cat = $the_category[0];
	switch ($cat->slug) {
		case 'reperes':
			$img_default = '<span class="icon-localisation"></span>';
		break;

		case 'documents':
			$img_default = '<span class="icon-documents"></span>';
		break;

		case 'exploitation-pedagogique':
			$img_default = '<span class="icon-school"></span>';
		break;

		case 'temoignages':
			$img_default = '<span class="icon-micro"></span>';
		break;
	}

	$code_video = get_field('code_video', $post_id);

?>
	<section class="article">
		<?php if($code_video) { ?>
			<div class="cover col-xs-12 col-sm-5 col-md-5 col-lg-5">
				<?php echo $code_video; ?>
			</div>
		<?php } elseif (has_post_thumbnail()) { ?>
			<div class="cover col-xs-12 col-sm-5 col-md-5 col-lg-5">
				<?php the_post_thumbnail(); ?>
			</div>
		<?php } else { ?>
			<div class="cover col-xs-12 col-sm-5 col-md-5 col-lg-5">
			<?php echo $img_default; ?>
			</div>
		<?php } ?>
    <!-- col-xs-12 col-sm-7 col-md-7 col-lg-7 -->
        <div class="content">
            <div class="container">
				<?php if (isset($dossier_id)) { ?>
                <div class="mixology-row">
                    <div class="col-xs-9">
                        <a href="<?php echo get_permalink($dossier_id); ?>" class="btn-simple arrow-left link">
                            <span class="btn-animate">
                                <span class="icon-flecheleft"></span>
                            </span>
                            Retour au dossier
                        </a>
                    </div>
                </div>
				<?php } ?>

                <div class="mixology-row">
                    <div class="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                        <span class="type"></span>
                    </div>
				</div>

                <div class="mixology-row">
					<div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                        <h1 class="title"><?php the_title(); ?></h1>
                    </div>
				</div>

				<!-- EXTRAIT -->
				<?php if (has_excerpt()) { ?>
                <div class="mixology-row">
                    <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                        <p class="description">
                            <?php the_excerpt(); ?>
                        </p>
                    </div>
				</div>
				<?php } ?>

				<!-- TAGS -->
				<?php if ($echo_tags) { ?>
				<div class="mixology-row">
                    <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                        <p class="tags"><span class="icon-paperclip"></span> <?php echo implode(', ', $echo_tags); ?></p>
                    </div>
                </div>
				<?php } ?>

				<!-- PARTAGE ARTICLE -->
				<div class="share-article">
                    <a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo get_permalink($post_id); ?>" class="btn-simple btn-animate icon-facebook" target="_blank">
                        <span class="icon-facebook"></span>
                    </a>
                    <a href="https://twitter.com/intent/tweet/?url=<?php echo get_permalink($post_id); ?>&text=<?php echo get_the_title($post_id); ?>" class="btn-simple btn-animate icon-twitter" target="_blank">
                        <span class="icon-twitter"></span>
                    </a>
                </div>

				<!-- AUTEUR / SOURCE -->
				<?php if (get_field('copyright_author', $post_id)) { ?>
				<div class="mixology-row">
					<?php
					while (the_repeater_field('copyright_author', $post_id)) {
						$picto = get_sub_field('picto_choice');
						$name = get_sub_field('name');
						$infos = get_sub_field('info');

						?>
						<div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
							<p class="details">
                                <span class="icon-<?php echo $picto; ?>"></span>

                                <?php if (!empty($name) && !empty($infos)) { ?>

								<span><strong><?php echo $name; ?></strong>, <?php echo $infos; ?></span>

                                <?php } else if (!empty($name) && empty($infos)) { ?>

								<span><strong><?php echo $name; ?></strong></span>

                                <?php } else if (empty($name) && !empty($infos)) {  ?>

                                <span><?php echo $infos; ?></span>

                                <?php } ?>

							</p>
						</div>
						<?php
					}
					?>
                </div>
				<?php } ?>
			</div>
        </div>
	</section>
