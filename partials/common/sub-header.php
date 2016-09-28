<?php
$locations = get_nav_menu_locations();
$supraHeaderID = $locations['supra-header'];
$socialMenuID = $locations['social'];
$mainMenuID = $locations['main-menu'];

$menuSupraHeader = wp_get_nav_menu_object($supraHeaderID);
if (false !== $menuSupraHeader) {
    $menuSupraHeaderItems = wp_get_nav_menu_items($menuSupraHeader->term_id);
}

$menuSocial = wp_get_nav_menu_object($socialMenuID);
if (false !== $menuSocial) {
	$menuSocialItems = wp_get_nav_menu_items($menuSocial->term_id);
}

$mainMenu = wp_get_nav_menu_object($mainMenuID);
if (false !== $mainMenu) {
	$mainMenuItems = wp_get_nav_menu_items($mainMenu->term_id);
}

$home_url = home_url('/');
?>
<header>
	<!-- SUPRA-HEADER -->
	<?php if ($menuSupraHeaderItems) { ?>
    <nav class="sup-menu hidden-xs">
        <ul>
			<?php 
			foreach ($menuSupraHeaderItems as $item) { 
				$title  	= $item->title;
                $url    	= $item->url;
				$classes 	= $item->classes;
				
				?><li class="<?php echo implode(' ', $classes); ?>"><a target="_blank" href="<?php echo $url; ?>"><?php echo $title; ?></a></li><?php
			}
			?>
        </ul>
    </nav>
	<?php } ?>
            
    <section class="header">
		<!-- SUB HEADER -->
        <div class="col-xs-12">
            <div class="container">
                <div class="mixology-row">
                    <div class="col-xs-4 hamburger">
                        <span class="icon-menu"></span> <span>Menu</span>
                        <strong>Site <?php echo get_option('blogname'); ?></strong>
                    </div>
                    <div class="col-xs-4 logo" >
                        <h1>
                            <a href="<?php echo site_url('/'); ?>"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/logo-cdg.png" alt="Fondation Charles De Gaulle"></a>
                        </h1>
                    </div>
                    <div class="tools col-xs-4 search">
                        <form role="search" method="get" id="searchform" class="search-form" action="<?php echo esc_url(site_url('/resultats-de-recherche/')); ?>">
                            <label for="search-query"><span class="icon-search"></span></label>
                            <input id="search-query" name="q" type="text" placeholder="Recherche...">
                            <button type="submit"  class="btn-submit"><span class="icon-flecheright"></span></button>
                        </form>
						<!-- SOCIAL MENU -->
						<?php if ($menuSocialItems) { ?>
                        <nav class="social-icons hidden-xs">
                            <ul>
								<?php
								foreach ($menuSocialItems as $item) {
									$title 	= $item->title;
									$url 	= $item->url;
									$target = $item->target;
									
									?><li>
										<a href="<?php echo $url; ?>" title="<?php echo $title; ?>" target="<?php echo $target; ?>">
											<span class="icon-<?php echo strtolower($title); ?>"></span>
										</a>
									</li><?php
								}
								?>
                            </ul>
                        </nav>
						<?php } ?>
                    </div>
                </div>
            </div>
        </div><!-- 
        -->
		<!-- MENU -->
		<nav class="menu">
            <div class="content">
				<?php if ($menuSupraHeaderItems) { ?>
                <form action="">
                    <div class="select-simple">
                        <select>
							<?php 
							foreach ($menuSupraHeaderItems as $item) { 
								$title  	= $item->title;
								$url    	= $item->url;
								$classes 	= $item->classes;
								
								if (strstr($home_url, $url) || $url == '/') {
									?><option value="<?php echo $url; ?>" selected="selected"><?php echo $title; ?></option><?php
								}
								else {
									?><option value="<?php echo $url; ?>"><?php echo $title; ?></option><?php
								}
							}
							?>
                        </select>
                    </div>
                </form>
				<?php } ?>
				
				<!-- TITRE UNIVERS COURANT -->
                <h2><?php echo get_option('blogname'); ?></h2>
					
				<!-- MAIN MENU -->
				<?php wp_nav_menu(array('theme_location' => 'main-menu', 'container' => false, 'items_wrap' => '<ul>%3$s</ul>')); ?>
					
                <a href="http://dons.charles-de-gaulle.org/" class="btn-simple make-donation article-link" target="_blank">
					Faire un don
                    <span class="btn-animate icon-like">
                        <span class="icon-like"></span>
                    </span>
                </a>
                <a href="<?php echo site_url('/nous-contacter/') . '?display=newsletter';?>" class="btn-simple newsletter arrow-right article-link">
                    S'inscrire à la lettre d'information
                    <span class="btn-animate">
                        <span class="icon-flecheright"></span>
                    </span>
                </a>
                <a href="<?php echo site_url('/nous-contacter/') . '?display=contact';?>" class="btn-simple contact article-link">
                    Nous contacter
                    <span class="btn-animate icon-phone">
                        <span class="icon-phone"></span>
                    </span>
                </a>
					
				<!-- SOCIAL MENU -->
				<?php if ($menuSocialItems) { ?>
                <nav class="social-icons col-xs-6">
                    <ul>
						<?php
						foreach ($menuSocialItems as $item) {
							$title 	= $item->title;
							$url 	= $item->url;
							$target = $item->target;
								
							?><li>
								<a href="<?php echo $url; ?>" title="<?php echo $title; ?>" target="<?php echo $target; ?>">
									<span class="icon-<?php echo strtolower($title); ?>"></span>
								</a>
							</li><?php
						}
						?>
                    </ul>
                </nav>
				<?php } ?>
            </div>
        </nav>
    </section>
	
	<!-- FIL D'ARIANE -->
	<?php cdg_breadcrumb(); ?>    
</header>
