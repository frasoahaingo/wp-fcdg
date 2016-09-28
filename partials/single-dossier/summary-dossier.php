<?php
	// -- SOMMAIRE DOSSIER


?>
<?php if ($sommaire) { ?>
	<section class="dossier-assets">
		<div class="container">
			<div class="mixology-row">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<div class="container">
						<?php
						if ($sommaire) {
							while (the_repeater_field('sommaire', $post_id)) {
								$cat_id = get_sub_field('ressource_type');
								$cat = get_category($cat_id);

								// récupérer articles
								$args = array(
									'post__in'		=> $posts_id,
									'cat'			=> $cat_id
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

								if ($_articles) {
									include locate_template('partials/single-dossier/listing-posts.php');
								}
							}
						}
						?>
					</div>
				</div>
			</div>
		</div>
	</section>
<?php } ?>