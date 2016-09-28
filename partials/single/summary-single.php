<?php
	// -- SUMMARY

	// récupérer les articles du dossier
	$posts_dossier = get_field('post_choice', $dossier_id);
		
	$posts_id = array();
	$order_posts = array();
	$count = 1;
	if ($posts_dossier) {
		foreach ($posts_dossier as $post) {
			setup_postdata($post);
				
			$posts_id[] = get_the_ID();
			$order_posts[get_the_ID()] = $count;
			$count++;
		}
		wp_reset_postdata();
	}
?>
	
	<?php if (get_field('sommaire', $dossier_id)) { ?>
	
	<section class="sommaire">
        <div class="container">
            <div class="mixology-row">
                <div class="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
                    <span class="type">
                        Sommaire du dossier
                    </span>
				</div>
            </div>
			
            <div class="mixology-row">
                <div class="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
                    <div class="container">
                        <div class="mixology-row">
							<?php
							while (the_repeater_field('sommaire', $dossier_id)) {
								$type = get_sub_field('ressource_type'); 
								$cat = get_category($type); 
								
								// récupérer articles
								$args = array(
									'post__in'		=> $posts_id,
									'cat'			=> $type
								);
								$articles = cdg_get_posts('any', $args);
								
								$order_by_cat = array();
								foreach ($articles as $post) {
									setup_postdata($post);							
									$order_by_cat[get_the_ID()] = $order_posts[get_the_ID()];
								}
								
								sort($order_by_cat);
								
								$_articles = array();
								foreach ($order_by_cat as $order) {
									$id = array_search($order, $order_posts);
									$_articles[] = get_post($id);
								}
								
								$class = "";
								switch ($cat->slug) {
									case 'reperes':
										$class = "reperes";
									break;
									
									case 'documents':
										$class = "docs";
									break;
									
									case 'exploitation-pedagogique':
										$class = "exploitation";
									break;
									
									case 'temoignages':
										$class = "temoignages";
									break;
								}
								
								if ($_articles) {
									?>
									<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 <?php echo $class; ?>">
										<div class="container">
											<div class="mixology-row">
												<div class="col-xs-12">
													<h2><?php echo $cat->name; ?></h2>
												</div>
											</div>
											<div class="mixology-row">
												<div class="col-xs-12">
													<ul>
														<?php
														foreach ($_articles as $post) {
															setup_postdata($post);
															?><li><a href="<?php echo get_permalink(); ?>"><?php echo get_the_title(); ?></a></li><?php
														}
														?>
													</ul>
												</div>
											</div>
										</div>
									</div>  
									<?php
								}	
							}
							?>                            
                        </div>
                    </div>
                </div>
			</div>
        </div>
	</section>

	<?php } ?>
	