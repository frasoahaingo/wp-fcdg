<?php
	// -- CARD POST

	// category
	$category = get_the_category();
	$category = $category[0];
    $date_historique = get_field('date_historique', $postID);
	// url externe ?
	$url = get_field('external_link', $postID);
	$target = 'target="_blank"';
	if (!$url) {
		$url = get_permalink($postID);
		$target = "";
	}

?>

	<div class="col-xs-12 col-md-6 col-lg-4">
        <article data-date-historique="<?php echo $date_historique; ?>" data-filter-category="<?php echo $category->term_id; ?>" data-filter-keywords="<?php echo strtolower(htmlentities(get_the_title())); ?>" class="item">
            <a href="<?php echo $url; ?>" <?php echo $target; ?>>
            	<div class="cover">
					<?php if (has_post_thumbnail()) { ?>
						<?php the_post_thumbnail('cover-card-listing'); ?>
					<?php } else { ?>
						<span class="icon-bookopen"></span>
					<?php } ?>
				</div>

                <div class="content">
                    <h2><?php the_title(); ?></h2>
                    <p><?php the_excerpt(); ?></p>
                </div>
            </a>
        </article>
    </div>