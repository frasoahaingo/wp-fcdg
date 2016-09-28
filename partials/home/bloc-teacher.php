<?php
	// -- BLOC ENSEIGNANT
	
	// titre rubrique
	$bloc_title = get_field('bloc_title_teacher', $homePageID);
	if (empty($bloc_title)) {
		$bloc_title = "De Gaulle autrement";
	}
	
	// titre
	$title = get_field('title_teacher', $homePageID);
	if (empty($title)) {
		$title = "Vous êtes enseignant ?";
	}
	
	// texte intro
	$intro = get_field('intro_teacher', $homePageID);
	
?>
	<section class="push_color teachers">
	    <div class="cover">
			<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/teach.jpg" alt="">
		</div>
		
		<div class="content col-xs-12">
			<div class="container">
				<div class="mixology-row">
					<div class="col-xs-12">
						<span class="type">
							<?php echo $bloc_title; ?>
						</span>
					</div>
				</div>
				<div class="mixology-row">
					<div class="col-xs-12">
						<h3 class="title"><?php echo $title; ?></h3>
					</div>
				</div>
				<div class="mixology-row">
					<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
						<p class="description">
							<?php echo $intro; ?>
						</p>
					</div>
				</div>
				
				<!-- BLOCS -->
				<?php if (get_field('bloc_config_teacher', $homePageID)) { ?>
				<div class="mixology-row">
					<?php
					while (the_repeater_field('bloc_config_teacher', $homePageID)) {
						$title = get_sub_field('title');
						$intro = get_sub_field('intro');
						$link = get_sub_field('link');
						$target = get_sub_field('target_link');
						
						$target_link = '';
						if ($target) {
							$target_link = 'target="_blank"';
						}						
						?>
						<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
							<a href="<?php echo $link; ?>" class="btn-simple arrow-right link" <?php echo $target_link; ?>>
								<h4><?php echo $title; ?></h4>
								<p><?php echo $intro; ?></p>
								En savoir plus 
								<span class="btn-animate">
									<span class="icon-flecheright"></span>
								</span>
							</a>
						</div>
						<?php
					}
					?>
				</div>
				<?php }?>			
			</div>
		</div>
	</section>
	