<?php // -- RESULTATS DE RECHERCHE


	if ($results->have_posts()) {
		while ($results->have_posts()) {
			$results->the_post();
			
			$result_id = $post->ID;
						
			// tags 
			$tags = get_the_tags();
			$echo_tags = array();
			if ($tags) {
				$tags = array_slice($tags, 0, 3); 
				foreach ($tags as $tag) {
					$echo_tags[] = $tag->name;
				}
			}	

			// category
			$category = get_the_category(); 
			$cat_slug = $category[0]->slug;
			switch ($cat_slug) {
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
			?>
			<div class="col-xs-12 col-md-6 col-lg-4">
				<?php
					$url = get_permalink(); 
					$target = "";

					if ($post->external_link) {
						$url = $post->external_link;
						$target = 'target="_blank"';
					}
				?>
				<a href="<?php echo $url; ?>" <?php echo $target;?>>
					<article>						
						<div class="cover">
							<?php 
							if (has_post_thumbnail()) { 
								echo get_the_post_thumbnail();
							}
							else {
								echo $img_default;
							}
							?>
						</div>
						<div class="content">
							<h3><?php echo get_the_title(); ?></h3>
							<?php if (!empty($echo_tags)) { ?>
							<div class="tags"><span class="icon-paperclip"></span> <?php echo implode(',', $echo_tags); ?></div>	
							<?php } ?>
							<?php the_excerpt(); ?>
						</div>
					</article>
				</a>
			</div>
			<?php
		}
		wp_reset_postdata();
	}
?>

