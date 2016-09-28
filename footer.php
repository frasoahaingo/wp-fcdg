<?php
$locations = get_nav_menu_locations();
$socialMenuID = $locations['social'];

$menuSocial = wp_get_nav_menu_object($socialMenuID);
if (false !== $menuSocial) {
	$menuSocialItems = wp_get_nav_menu_items($menuSocial->term_id);
}
?>
			<footer>
			    <div class="confirm-newsletter">
        			<p>Un email vous a été envoyé à <span class="address">test@test.fr</span></p>
        			<p>Pensez à verifier votre boîte et utilisez le lien pour valider votre inscription à la lettre d'information.</p>
        			<p>Merci!</p>
        			<a href="#" class="close">
            			<span class="icon-close"></span>
        			</a>
    			</div>
				<div class="container">
					<div class="mixology-row">
						<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-lg-offset-2">
							<div class="container">
								<div class="mixology-row">
									<div class="col-xs-12">
										<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/logo-cdg2.png" alt="">
									</div>
								</div>
								<div class="mixology-row">
									<div class="col-xs-12">
										<a href="http://www.charles-de-gaulle.org/" class="btn-simple arrow-left" target="_blank">
											<span class="btn-animate">
												<span class="icon-flecheleft"></span>
											</span>
											CharlesDeGaulle.org
										</a>
									</div>
								</div>
								<div class="mixology-row">
									<div class="col-xs-12">
										<nav>
											<h2>Liens utiles</h2>
											<?php wp_nav_menu(array('theme_location' => 'menu-links', 'container' => false, 'items_wrap' => '<ul>%3$s</ul>')); ?>											
										</nav>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xs-12 col-sm-12 col-md-6 col-lg-2">
							<nav class="menu access">
								<h2>Accès direct</h2>
								<!-- MAIN MENU -->
								<?php wp_nav_menu(array('theme_location' => 'main-menu', 'container' => false, 'items_wrap' => '<ul>%3$s</ul>')); ?>
							</nav>
						</div>
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-3">
							<div class="container">
								<div class="mixology-row">
									<div class="col-xs-12">
										<a href="<?php echo site_url('/nous-contacter/') . '?display=site';?>" class="btn-simple ideas">
											Soumettez vos idées
											<span class="btn-animate icon-light">
												<span class="icon-light"></span>
											</span>
										</a>
									</div>
								</div>
								<div class="mixology-row">
									<div class="col-xs-12">
										<form action="<?php echo get_stylesheet_directory_uri(); ?>/actions/newsletter.php" method="post">
											<h2>Lettre d'information</h2>
                                    		<label for="email">Restez informés de l'actualité de la fondation Charles de Gaulle : </label>
                                        	<input type="email" placeholder="E-MAIL" value="">
                                        	<button class="newsletter-submit" type="submit"><span class="icon-share"></span></button>
                                        	<span class="validation"></span>
										</form>
									</div>
								</div>
								<div class="mixology-row">
									<div class="col-xs-12">
										<div class="follow-us">
											<h2>Nous suivre</h2>
											<!-- SOCIAL MENU -->
											<?php if ($menuSocialItems) { ?>
											<ul class="social-icons">
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
											<?php } ?>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<a href="#" class="scroll-top"><span class="icon-flecheup"></span></a>
			</footer>
		
		</div> <!-- #end .main-wrapper -->
		
		<div class="overlay"></div>
		<div class="overlay-search">
			<form class="col-xs-6 search-form" method="get" action="<?php echo esc_url(site_url('/resultats-de-recherche/')); ?>">
				<div class="container">
					<div class="mixology-row">
						<div class="col-xs-1">
							<label for="search-query"><span class="icon-search"></span></label>
						</div>
						<div class="col-xs-10">            
							<input id="search-query" name="q" type="text" placeholder="Recherche...">
						</div>
						<div class="col-xs-1">            
							<button type="submit" class="btn-submit"><span class="icon-flecheright"></span></button>
						</div>
					</div>
				</div>
			</form>
			<div class="bg"></div>
		</div>

		<?php wp_footer(); ?>
		
	</body>	
</html>
