<?php
/**
 * Header Frise [Template Single Period]
 */

// page id de la frise
$frise = get_page_by_path('frise-chronologique');
$frise_id = $frise->ID;
// périodes 
$periodes = get_field('periodes_selected', $frise_id);

$locations = get_nav_menu_locations();
$socialMenuID = $locations['social'];
$menuSocial = wp_get_nav_menu_object($socialMenuID);
if (false !== $menuSocial) {
	$menuSocialItems = wp_get_nav_menu_items($menuSocial->term_id);
}
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo('charset'); ?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		
		<title><?php wp_title(''); ?></title>
		
		<!--
		<link rel="stylesheet" href="../fonts/sources/icomoon/style.css">
		-->
		
		<link rel="profile" href="http://gmpg.org/xfn/11">
		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

		<?php wp_head(); ?>
	</head>
	
	<body <?php body_class(); ?>>
		<?php
		global $post;
		if ($post->post_type == 'period') {
			$color = get_field('periode_color', $post->ID);
		}
		?>
		<div class="main-wrapper chronologie frise <?php echo $color; ?>">
			<header class="chrono-header frise-header">
				<section class="header">
					<div class="col-xs-12">
						<div class="container">
							<div class="mixology-row">
								<a href="<?php echo site_url('/'); ?>" class="hidden-xs col-xs-4">Accueil</a>
								<div class="logo col-xs-4 ">
									<a href="<?php echo site_url('/'); ?>">
										<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/logo-cdg.png" alt="">
									</a>
								</div>
								<?php if ($menuSocialItems) { ?>
								<nav class="social-icons hidden-xs col-xs-4">
									<ul>
										<?php
										foreach ($menuSocialItems as $item) {
											$title 	= $item->title;
											$url 	= $item->url;
											$target = $item->target;
											?><li><a href="<?php echo $url; ?>" target="<?php echo $target; ?>"><span class="icon-<?php echo strtolower($title); ?>"></span></a></li><?php
										}
										?>
									</ul>
								</nav>
								<?php } ?>
								<div class="col-xs-4 hamburger">
									<span class="icon-menu"></span> <span>Menu</span>
								</div>
							</div>
						</div>
					</div><!--
					--><nav class="menu">
						<div class="content">
							<nav class="nav-periode">
								<?php if (!empty($periodes)) { ?>
								<ul>
									<?php
									foreach ($periodes as $period) {
										$period_id = $period->ID;
										$period_title = $period->post_title;
										$start_year = get_field('start_year_mark', $period_id);
										$end_year = get_field('end_year_mark', $period_id);											
										?>
										<li>
											<a href="<?php echo get_permalink($period_id); ?>">
												<h2><?php echo $period_title; ?></h2>
												<span><?php echo $start_year; ?> - <?php echo $end_year; ?></span>
											</a>
										</li>
										<?php
									}
									?>
								</ul>
								<?php } ?>
							</nav>
								
							<a href="http://www.charles-de-gaulle.org" class="btn-simple arrow-left article-link">
								<span class="btn-animate">
									<span class="icon-flecheleft"></span>
								</span>
								Charles De Gaulle.org
							</a>
							<?php if ($menuSocialItems) { ?>
							<nav class="social-icons" class="">
								<ul>
									<?php
									foreach ($menuSocialItems as $item) {
										$title 	= $item->title;
										$url 	= $item->url;
										$target = $item->target;
										?><li><a href="<?php echo $url; ?>" target="<?php echo $target; ?>"><span class="icon-<?php echo strtolower($title); ?>"></span></a></li><?php
									}
									?>
								</ul>
							</nav>
							<?php } ?>
						</div>
					</nav>
				</section>
			</header>
			