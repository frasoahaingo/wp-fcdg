<?php
    // -- CARD DOSSIER

    // période
    $periode_id = get_field('periode_choice', $postID);
    $periode = get_term_by('id', $periode_id, 'periode');

    // thème
    $theme_id = get_field('theme_choice', $postID);
    $themes = array();
    $theme_ids = array();
    if($theme_id){
        foreach ($theme_id as $theme) {
            $terme = get_term_by('id', $theme, 'theme');
            $theme_ids[] = $theme;
            $themes[] = $terme->name;
        }
    }

    $thumbnail = get_field('thumbnail', $postID);

    if ($thumbnail) {
        $thumbnail_url = $thumbnail['sizes']['medium_large'];
    }
?>

    <div class="col-xs-12 col-md-6 col-lg-4">
        <article data-filter-periode="<?php echo $periode_id; ?>" data-filter-theme="<?php echo implode(', ', $theme_ids); ?>" data-filter-keywords="<?php echo strtolower(utf8_decode(get_the_title())); ?>" class="item">
            <a href="<?php echo get_permalink($postID); ?>">
                <div class="cover">
                    <?php if ($thumbnail) { ?>
                        <img src="<?php echo $thumbnail_url; ?>" />
                    <?php } elseif (has_post_thumbnail()) { ?>
                        <?php the_post_thumbnail('cover-card-listing'); ?>
                    <?php } else { ?>
                        <span class="icon-bookopen"></span>
                    <?php } ?>
                </div>

                <div class="content">
                    <h2>
                        <?php the_title(); ?>
                    </h2>
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