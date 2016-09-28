<?php
/*
 * Template name: Frise Chronologique
 */

get_header('chronologie');
?>
	<?php while (have_posts()) : the_post(); ?>
	
	<?php
	$postID = get_the_ID();
	$main_title = get_field('main_title', $postID);
	$second_title = get_field('second_title', $postID);
	$label_periodes = get_field('label_periodes', $postID);
	
	$periodes_selected = get_field('periodes_selected', $postID);
	?>
	
	<?php 
	if (!empty($periodes_selected)) { 
		// covers
		?><div class="cover"><?php
		foreach ($periodes_selected as $periode) {
			$periode_id = $periode->ID;
			$periode_title = $periode->post_title; 	
			$color = get_field('periode_color', $periode_id);
			$image = get_field('periode_image', $periode_id); 
			?><img src="<?php echo $image['url']; ?>" alt="<?php echo $periode_title; ?>" class="<?php echo $color; ?>" /><?php
		}
		?></div><?php
		
		// periodes
		?>
		<section class="choice-periode">
			<div class="mixology-row">
				<div class="col-xs-12">
					<span class="type"><?php echo $second_title; ?></span>
				</div>
			</div>
			<div class="mixology-row">
				<div class="col-xs-12">
					<h1 class="title"><?php echo $main_title; ?></h1>
				</div>
			</div>
			
			<div class="mixology-row hidden-xs">
				<div class="col-xs-12">
					<span class="details"><?php echo $label_periodes; ?></span>
				</div>
			</div>
			
			<div class="scroll-container hidden-xs">
                <div class="periodes">
					<?php
					foreach ($periodes_selected as $periode) {
						$periode_id = $periode->ID;
						$periode_title = $periode->post_title; 
						
						$intro = get_field('introduction', $periode_id);
						
						$start_year_mark = get_field('start_year_mark', $periode_id);
						$end_year_mark = get_field('end_year_mark', $periode_id);
						
						$color = get_field('periode_color', $periode_id);
						?>
						<div class="periode <?php echo $color; ?>">
							<a href="<?php echo get_permalink($periode_id); ?>">
								<h2><?php echo $periode_title; ?></h2>
								<p><?php echo $intro; ?></p>
								<span><?php echo $start_year_mark; ?>-<?php echo $end_year_mark; ?></span>
							</a>
                        </div>
						<?php
					}
					?>
				</div>
			</div>
			
			<div class="mixology-row mobile-nav-frise">
                <div class="col-xs-12">
                        <div class="select-simple">
                            <select id="selectPeriod">
								<option>Sélectionnez une période</option>
								<?php
								foreach ($periodes_selected as $periode) {
									?><option value="<?php echo get_permalink($periode->ID); ?>"><?php echo $periode->post_title; ?></option><?php
								}
								?>
                            </select>
                        </div>
                </div>
			</div>
		</section>
		
		<span class="info-scroll hidden-xs">
			Saisir et glisser
		</span>
		<?php
	}
	?>
	
	<?php endwhile; ?>

<?php get_footer('frise'); ?>