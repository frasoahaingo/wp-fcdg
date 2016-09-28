<?php
/**
 * Template for displaying a period [FRISE]
 */
	
get_header('frise');
?>

	<?php while (have_posts()) : the_post(); ?>
	
	<?php
	$post_id = get_the_ID();
	
	// page id de la frise
	$frise = get_page_by_path('frise-chronologique');
	$frise_id = $frise->ID;
	
	// périodes 
	$periodes = get_field('periodes_selected', $frise_id);
	
	// image cover
	$image = get_field('periode_image', $post_id);
	
	// année repère début
	$start_year_mark = get_field('start_year_mark', $post_id);
	// année répère fin
	$end_year_mark = get_field('end_year_mark', $post_id);
	
	$years = array();
	$years[0] = (int) $start_year_mark;
	$gap = $end_year_mark - $start_year_mark;
	$count = 1;
	while ($count <= $gap) {
		$years[] = $count + $start_year_mark;
		$count++;
	}
	?>

	<?php if (!empty($periodes)) { ?>
	<section class="choice-periode">
		<?php 
		$prev_period = array();
		$next_period = array();
		foreach ($periodes as $ind => $periode) {
			$periode_id = $periode->ID;
			$short_title = get_field('short_title', $periode_id);
			$start_year_mark = get_field('start_year_mark', $periode_id);
			$end_year_mark = get_field('end_year_mark', $periode_id);
			
			$class = "periode hidden-xs";
			if ($periode_id == $post_id) {
				$class = "periode active";
				
				if ($ind == 0) {
					// suivant
					$next_period = $periodes[$ind+1];
				}
				else if ($ind == count($periodes)) {
					// precedent
					$prev_period = $periodes[$ind-1];
				}
				else {
					// suivant
					$next_period = $periodes[$ind+1];
					// precedent
					$prev_period = $periodes[$ind-1];
				}				
			}
			?>
			<div class="<?php echo $class; ?>">
				<a href="<?php echo get_permalink($periode_id); ?>">
					<h2><?php echo $short_title; ?></h2>
					<span><?php echo $start_year_mark; ?> - <?php echo $end_year_mark; ?></span>
				</a>
			</div>
			<?php
		}
		?>
	</section>
	<?php } ?>


	<?php
	// PERIODE PRECEDENT [MOBILE]
	if (!empty($prev_period)) {
		$title = get_field('short_title', $prev_period->ID);
		$start_year = get_field('start_year_mark', $prev_period->ID);
		$end_year = get_field('end_year_mark', $prev_period->ID);
		?>
		<div class="prev-periode visible-flex-xs">
			<span class="icon-flecheup"></span>
			<div class="periode">
				<a href="<?php echo get_permalink($prev_period->ID); ?>">
					<h2><?php echo $title; ?></h2>
					<span><?php echo $start_year; ?> - <?php echo $end_year; ?></span>
				</a>
			</div>
		</div>
		<?php
	}
	?>
	
	<!-- TIMELINE -->
	<div class="timeline-container">
		<section class="timeline">
			<!-- PERIODE PRECEDENTE -->
			<div class="prev-periode">
			<?php
			if (!empty($prev_period)) {
				$title = get_field('short_title', $prev_period->ID);
				$start_year = get_field('start_year_mark', $prev_period->ID);
				$end_year = get_field('end_year_mark', $prev_period->ID);
				?>
				<span class="icon-flecheleft  hidden-xs"></span>
				<div class="periode  hidden-xs">
					<a href="<?php echo get_permalink($prev_period->ID); ?>">
						<h2><?php echo $title; ?></h2>
						<span><?php echo $start_year; ?> - <?php echo $end_year; ?></span>
					</a>
				</div>				
				<?php
			}
			else {
				?><div class="periode  hidden-xs">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><?php
			}
			?>
			</div>
			

			<div class="reperes">
				<?php
				$timeline_years = array();
				foreach ($years as $ind => $year) {
					// récupérer les events de l'année courantes
					$events = get_posts(
						array(
							'post_type'			=> 'event',
							'post_status'		=> 'publish',
							'posts_per_page'	=> -1,
							'order'				=> 'ASC',	
							'orderby'			=> 'meta_value',
							'meta_key'			=> '_date_event',
							'meta_query'		=> array(
								array(
									'key'		=> '_year_event',
									'value'		=> $year,
									'compare'	=> '='
								),
								array(
									'key'		=> 'link_period',
									'value'		=> $post_id,
									'compare'	=> '='
								)
							)							
						)
					);
					
					if (!empty($events)) {
						$count = 1;
						$total = count($events);
						$timeline_years[$ind] = $year;
						
						if ($total == 1) {
							foreach ($events as $event) {
								$special_event = get_field('special_event', $event->ID);
								$date = get_field('date', $event->ID);
								
								if ($special_event) {
									?><a href="" class="event-duration end-year begin-year important-event"><span class="important icon-mark"><?php echo $date; ?></span></a><?php
								}
								else {
									?><a href="" class="event-duration end-year begin-year"></a><?php
								}
							}
						}
						else {
							foreach ($events as $event) {
								$special_event = get_field('special_event', $event->ID);
								$date = get_field('date', $event->ID);
								if ($count == 1 && $ind == 0) {
									if ($special_event) {
										?><a href="" class="event-duration begin-year important-event"><span class="important icon-mark"><?php echo $date; ?></span></a><?php
									}
									else {
										?><a href="" class="event-duration begin-year"></a><?php
									}
								}
								else if ($count == count($events)) {
									if ($special_event) { 
										?><a href="" class="event-duration end-year begin-year important-event"><span class="important icon-mark"><?php echo $date; ?></span></a><?php
									}
									else {
										?><a href="" class="event-duration end-year begin-year"></a><?php
									}									
								}
								else {
									if ($special_event) {
										?><a href="" class="event-duration important-event"><span class="important icon-mark"><?php echo $date; ?></span></a><?php
									}
									else {
										?><a href="" class="event-duration"></a><?php
									}									
								}									
								$count++;
							}
						}						
						wp_reset_postdata();
					}
					
				}
				?>
				<span class="cursor"></span>
			</div>

			<!-- PERIODE SUIVANTE -->
			<div class="next-periode">
			<?php
			if (!empty($next_period)) {
				$title = get_field('short_title', $next_period->ID);
				$start_year = get_field('start_year_mark', $next_period->ID);
				$end_year = get_field('end_year_mark', $next_period->ID);
				?>
				<div class="periode  hidden-xs">
					<a href="<?php echo get_permalink($next_period->ID); ?>">
						<h2><?php echo $title; ?></h2>
						<span><?php echo $start_year; ?> - <?php echo $end_year; ?></span>
					</a>
				</div>
				<span class="icon-flecheright  hidden-xs"></span>				
				<?php
			}
			else {
				?><div class="periode  hidden-xs">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><?php
			}
			?>
			</div>
		</section>

		<section class="timeline-scroller">
			<img src="<?php echo $image['url']; ?>" alt="" class="cover">
			<div class="content">
				<?php
				foreach ($timeline_years as $ind => $year) {
					?>
					<div>
						<div class="events-serie">
						<?php					
						// récupérer les events de l'année courantes
						$events = get_posts(
							array(
								'post_type'			=> 'event',
								'post_status'		=> 'publish',
								'posts_per_page'	=> -1,
								'order'				=> 'ASC',	
								'orderby'			=> 'meta_value',
								'meta_key'			=> '_date_event',
								'meta_query'		=> array(
									array(
										'key'		=> '_year_event',
										'value'		=> $year,
										'compare'	=> '='
									),
									array(
										'key'		=> 'link_period',
										'value'		=> $post_id,
										'compare'	=> '='
									)
								)							
							)
						);
						
						if (!empty($events)) {
							foreach ($events as $event) {
								$thumb = get_field('vignette', $event->ID);
								$intro = get_field('introduction', $event->ID);
								$date = get_field('date', $event->ID);
								$special_event = get_field('special_event', $event->ID);
								
								$class = "";
								if ($special_event) {
									$class = "important";
								}
								?>
								<div data-year="<?php echo $year; ?>" class="event <?php echo $class; ?>">
									<a href="<?php echo get_permalink($event->ID); ?>">
										<figure>
											<img class="hidden-xs" src="<?php echo $thumb['url']; ?>" alt="">
											<figcaption>
												<h3><?php echo $date; ?></h3>
												<p><?php echo $intro; ?></p>
											</figcaption>
										</figure>
									</a>
								</div>
								<?php
							}
							wp_reset_postdata();
						}					
						?>
						</div>
					</div><?php
				}
				?>
			</div>
		</section>
	</div>

	<?php
	// PERIODE SUIVANTE [MOBILE]
	if (!empty($next_period)) {
		$title = get_field('short_title', $next_period->ID);
		$start_year = get_field('start_year_mark', $next_period->ID);
		$end_year = get_field('end_year_mark', $next_period->ID);
		?>
		<div class="next-periode visible-flex-xs">
			<span class="icon-flechedown"></span>
			<div class="periode">
				<a href="<?php echo get_permalink($next_period->ID); ?>">
					<h2><?php echo $title; ?></h2>
					<span><?php echo $start_year; ?> - <?php echo $end_year; ?></span>
				</a>
			</div>
		</div>
		<?php
	}
	?>

	<?php endwhile; ?>
	<span class="info-scroll hidden-xs">
        		Saisir et glisser
	</span>
	
<?php get_footer('frise'); ?>