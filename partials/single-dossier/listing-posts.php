<?php
	// LISTING ARTICLES
	$class = "";
	$img_default = "";
	switch ($cat->slug) {
		case 'reperes':
			$class = "reperes";
			$img_default = '<span class="icon-localisation"></span>';
		break;

		case 'documents':
			$class = "docs";
			$img_default = '<span class="icon-documents"></span>';
		break;

		case 'exploitation-pedagogique':
			$class = "exploitation";
			$img_default = '<span class="icon-school"></span>';
		break;

		case 'temoignages':
			$class = "temoignages";
			$img_default = '<span class="icon-micro"></span>';
		break;
	}
?>

	<div class="mixology-row">
		<div class="col-xs-12 <?php echo $class; ?>">
			<div class="container">
				<div class="mixology-row">
					<div class="col-xs-12">
						<h2><?php echo $cat->name; ?></h2>
					</div>

					<div class="mixology-row">
                        <div class="col-xs-12">
                            <div class="container">
                                <div class="mixology-row">
								<?php
								foreach ($_articles as $post) {
									setup_postdata($post);

									$postID = get_the_ID();

									$tags = get_the_tags();
									$echo_tags = array();
									if ($tags) {
										$tags = array_slice($tags, 0, 3);
										foreach ($tags as $tag) {
											$echo_tags[] = $tag->name;
										}
									}
									$target = 'target="_blank"';
									if (!$url = $post->external_link) {
										$url = add_query_arg('dossier_id', $post_id, get_permalink($postID));
										$target = "";
									}

								    $content_type = get_field('content_type', $postID);

								    if ($content_type == 'none') {
								        $content_type = '';
								    } else {
								        $picto = strtolower($content_type);
								    }
									?>
									<div class="col-xs-12 col-md-6 col-lg-3">
										<a href="<?php echo $url; ?>" <?php echo $target; ?>>
											<article>
												<div class="cover">
													<?php
													if (has_post_thumbnail()) {
														the_post_thumbnail('cover-card-summary');
													}
													else {
														// image par défaut
														echo $img_default;
													}
													?>
												</div>
												<div class="content">
													<h3>
								                        <?php if($content_type) : ?>
								                            <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/icons/<?php echo $picto; ?>.png" alt="<?php echo $content_type; ?>" height="27" />
								                        <?php endif; ?>

														<?php the_title(); ?>
													</h3>
													<?php
													if ($echo_tags) {
														?><div class="tags"><span class="icon-paperclip"></span> <?php echo implode(', ', $echo_tags); ?></div><?php
													}
													?>
												</div>
											</article>
										</a>
									</div>
									<?php
								}
								wp_reset_postdata();
								?>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
