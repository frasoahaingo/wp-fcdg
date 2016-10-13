<?php
	// -- CARD BIOGRAPHIE

	// période
	$periode_id = get_field('periode_choice_bio', $postID);
	$periode = get_term_by('id', $periode_id, 'periode_bio');

	// thème
	$theme_id = get_field('theme_choice_bio', $postID);
	$themes = array();
	$theme_ids = array();
	if($theme_id){
		foreach ($theme_id as $theme) {
	        $terme = get_term_by('id', $theme, 'theme');
	        $theme_ids[] = $theme;
	        $themes[] = $terme->name;
	    }
    }

	// nom, prénom
	$lastname = get_field('lastname', $postID);
	$firstname = get_field('firstname', $postID);

	// naissance / mort
	$birth_date = get_field('birth_year', $postID);
	$death_date = get_field('death_year', $postID);
?>

	<div class="col-xs-12 col-md-6 col-lg-4">
		<article data-filter-periode="<?php echo $periode_id; ?>" data-filter-theme="<?php echo implode(', ', $theme_ids); ?>" data-filter-keywords="<?php echo strtolower($firstname . ' ' . strtoupper($lastname)); ?>" class="item">
			<a href="<?php echo get_permalink($postID); ?>">
				<?php if (has_post_thumbnail()) { ?>
					<div class="cover">
						<?php the_post_thumbnail('cover-card-listing'); ?>
					</div>
				<?php } ?>
				<div class="content">
					<h2><?php echo $firstname . ' ' . strtoupper($lastname); ?></h2>
					<span class="dates">(<?php echo $birth_date; ?>-<?php echo $death_date; ?>)</span>
					<p><?php the_excerpt(); ?></p>

					<?php if ($periode) { ?>
					<span class="date">
						<span class="icon-clock"></span>
						<span><?php echo $periode->name; ?></span>
					</span>
					<?php } ?>

					<?php if ($themes) { ?>
						<span class="tag">
							<span class="icon-mark"></span>

							<span class=""><?php echo implode(', ', $themes); ?></span>
						</span>
					<?php } ?>
				</div>
			</a>
		</article>
	</div>
