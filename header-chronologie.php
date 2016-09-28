<?php
/**
 * Header Frise [Page Globale]
 */
 
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
		<!-- Google Tag Manager -->
		<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-WS69K4"
		height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
		<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-WS69K4');</script>
		<!-- End Google Tag Manager -->
		
		<div class="main-wrapper chronologie">
			<header class="chrono-header">
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
			