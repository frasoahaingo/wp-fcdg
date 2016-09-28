<?php
	// -- BLOC SLIDER "TOUS LES THEMES"
	
	// titre du bloc
	$bloc_title = get_field('bloc_title', get_the_ID()); 
	if (empty($bloc_title)) {
		$bloc_title = "Les dossiers thématiques";
	}
	
	// récupérer les dossiers sélectionées dans le BO de la homepage
	$dossiers = get_field('dossier_choice', $homePageID);
	if (empty($dossiers)) {
		// récupérer les 9 derniers dossiers publiés		
		$dossiers = cdg_get_posts('dossier', array('posts_per_page' => 9));
	}
?>
	
	<section class="slider">
		<div class="content col-xs-12">
			<div class="container">
				<!-- TITRE -->
				<div class="mixology-row">
					<div class="col-xs-12">
						<span class="type">
							<?php echo $bloc_title; ?>
						</span>
					</div>
				</div>
				
				<!-- SLIDER -->
				<div class="mixology-row">
					<div class="col-xs-12">
						<?php if (!empty($dossiers)) { ?>
						<div class="owl-carousel">
							<?php
							foreach ($dossiers as $post) {								
								setup_postdata($post);
								
								$postID = $post->ID; 
								
								// période
								$periode_id = get_field('periode_choice', $postID);
								$periode = get_term_by('term_id', $periode_id, 'periode');
								
								// theme
								$theme_ids = get_field('theme_choice', $postID);
								$themes = array();
								foreach ($theme_ids as $id) {
									$theme = get_term_by('term_id', $id, 'theme');
									$themes[] = $theme->name;
								}
								
								
								?>
								<article class="item">
									<a href="<?php echo get_permalink($postID); ?>">
										<figure>
											<?php
											if (has_post_thumbnail($postID)) {
												echo get_the_post_thumbnail($postID, 'cover-card-listing');
											}
											?>
											<figcaption>
												<h3><?php echo get_the_title($postID); ?></h3>
												<?php the_excerpt(); ?>
												<span class="date">
													<span class="icon-clock"></span> 
													<span><?php echo $periode->name; ?></span>
												</span>
												<span class="tag">
													<span class="icon-mark"></span> 
													<span><?php echo implode(', ', $themes); ?></span>
												</span>
											</figcaption>
										</figure>
									</a>
                                </article>
								<?php
							}
							wp_reset_postdata();
							?>
						</div>
						<?php } ?>                              
                    </div>
                </div>
            </div>
        </div>
	</section>
	