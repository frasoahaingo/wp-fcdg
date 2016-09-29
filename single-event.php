<?php
/**
 * Template for displaying an event [FRISE]
 */

get_header('event'); ?>

	<?php while (have_posts()) : the_post(); ?>

		<?php
		$event_id = get_the_ID();

		$image = get_field('image', $event_id);
		$copyright = get_field('copyright', $event_id);
		$content = get_field('texte', $event_id);
		$date = get_field('date', $event_id);

		$label_button = get_field('label_button', $event_id);
		$link_button = get_field('link_button', $event_id);

		$period_id = get_field('link_period', $event_id);

		$code_video = get_field('code_video', $event_id);
		?>
		<section class="event-page">
			<div class="cover col-xs-12 col-sm-12 col-md-6 col-lg-6 <?php if($code_video) : ?> isVideo <?php endif; ?>">
				<img src="<?php echo $image['url']; ?>" alt="">

				<?php if($code_video) : ?>
					<div class="video">
	
						<?php echo $code_video; ?>
					</div>
				<?php endif; ?>
				<a href="#" class="icon-close"></a>
			</div>

			<div class="content col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<div class="return-frise">
					<a href="#">Retour à la frise <span class="icon-close"></span></a>
				</div>

				<div class="event-content">
					<div class="mixology-row">
                        <div class="col-xs-12">
                        	<span class="type"><?php echo $date; ?></span>
                        </div>
                    </div>

                    <div class="mixology-row">
                        <div class="col-xs-12">
                            <h1 class="title"><?php the_title(); ?></h1>
                      	</div>
                    </div>

                    <div class="mixology-row">
                        <div class="col-xs-12">
                            <div class="event-actions">
                                <div class="mixology-row">
                                    <a href="javascript:window.print()" class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                                        Imprimer <span class="icon-print"></span>
                                    </a>
									<!--
                                    <a href="#" class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                                        Enregistrer <span class="icon-pdf"></span>
                                    </a>
									-->
                                </div>
                            </div>
                        </div>
                    </div>

					<?php if (!empty($copyright)) { ?>
					<div class="mixology-row">
                        <div class="col-xs-12">
                            <p class="details">
                                <span class="icon-copyright"></span>
                                <span><?php echo $copyright; ?></span>
                            </p>
                        </div>
                    </div>
					<?php } ?>

					<div class="mixology-row">
                        <div class="col-xs-12 description">
                            <p><?php echo $content; ?></p>
                        </div>
                    </div>

					<?php if (!empty($label_button) && !empty($link_button)) { ?>
					<div class="mixology-row">
               			<div class="col-xs-12">
							<a href="<?php echo $link_button; ?>" class="btn-simple link">
								<?php echo $label_button; ?>
                        		<span class="btn-animate icon-flecheright">
                            		<span class="icon-flecheright"></span>
                        		</span>
                    		</a>
                		</div>
            		</div>
					<?php } ?>
				</div>
			</div>
		</section>

	<?php endwhile;?>

<?php get_footer('frise'); ?>
