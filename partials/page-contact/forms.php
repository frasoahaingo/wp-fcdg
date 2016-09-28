<?php // -- FORMS ?>

	<section class="cover-page">
		<div class="container">
        	<div class="mixology-row">
            	<div class="content col-xs-12">
                 	<div class="container">
                    	<div class="mixology-row">
                        	<div class="col-xs-12">
                            	<span class="type"></span>
                        	</div>
                    	</div>
                    	<div class="mixology-row">
                        	<div class="col-xs-12 col-md-12 col-lg-12">
                            	<h1><?php the_title(); ?></h1>
                        	</div>
                    	</div>
                    	<div class="mixology-row">
                        	<div class="col-xs-12 contact-type">
								<p>Selectionner le motif de demande de contact :</p>
								<?php
								if (isset($_GET['display'])) {
									$display = $_GET['display'];
									
									$checkedContact = '';
									if ($display == 'contact') { $checkedContact = 'checked="checked"'; }
									
									$checkedSite = '';
									if ($display == 'site') { $checkedSite = 'checked="checked"'; }
									
									$checkedNewsletter = '';
									if ($display == 'newsletter') { $checkedNewsletter = 'checked="checked"'; }
								}
								else {
									$checkedContact = 'checked="checked"';
								}
								?>
                            	<div class="choices">
									<div class="choice">
                                		<input name="contact-type" id="contact" type="radio" value="contact-form" <?php echo $checkedContact; ?>>
                                		<label for="contact">
                                    		<span>Demande de  contact</span>
                                		</label>
                            		</div>
                            		<div class="choice">
                                		<input name="contact-type" id="contribution" type="radio" value="contribution-form" <?php echo $checkedSite; ?>>
                                		<label for="contribution">
                                    		<span>Contribuer au site</span>
                                		</label>
                            		</div>
                            		<div class="choice">
                                		<input name="contact-type" id="newsletter" type="radio" value="newsletter-form" <?php echo $checkedNewsletter; ?>>
                                		<label for="newsletter">
                                    		<span>S'inscrire à la lettre d'information</span>
                                		</label>
                            		</div>
                        		</div>
                        	</div>
                    	</div>
                	</div>
				</div>
        	</div>
    	</div>
	</section>

	<section class="contact-forms">
		<div class="mixology-row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-offset-2 col-lg-8">
				<!-- add class 'display' on form tag to display it -->
				
				<?php
				if (isset($_GET['display'])) {
					$display = $_GET['display']; 
					
					switch ($display) {
						case 'contact':
							?>
							<!-- DEMANDE DE CONTACT -->				
							<form action="<?php echo get_stylesheet_directory_uri(); ?>/actions/contact.php" method="post" class="contact-form display">
								<?php include locate_template('partials/page-contact/form-contact.php'); ?>
							</form>
							
							<!-- CONTRIBUER AU SITE -->
							<form action="<?php echo get_stylesheet_directory_uri(); ?>/actions/contact.php" method="post" class="contribution-form" enctype="multipart/form-data">
								<?php include locate_template('partials/page-contact/form-contribution.php'); ?>
							</form>
							
							<!-- INSCRIPTION NEWSLETTER -->
							<form action="<?php echo get_stylesheet_directory_uri(); ?>/actions/contact.php" method="post" class="newsletter-form">
								<?php include locate_template('partials/page-contact/form-newsletter.php'); ?>
							</form>
							<?php
						break;
						
						case 'site':
							?>
							<!-- DEMANDE DE CONTACT -->				
							<form action="<?php echo get_stylesheet_directory_uri(); ?>/actions/contact.php" method="post" class="contact-form">
								<?php include locate_template('partials/page-contact/form-contact.php'); ?>
							</form>
							
							<!-- CONTRIBUER AU SITE -->
							<form action="<?php echo get_stylesheet_directory_uri(); ?>/actions/contact.php" method="post" class="contribution-form display" enctype="multipart/form-data">
								<?php include locate_template('partials/page-contact/form-contribution.php'); ?>
							</form>
							
							<!-- INSCRIPTION NEWSLETTER -->
							<form action="<?php echo get_stylesheet_directory_uri(); ?>/actions/contact.php" method="post" class="newsletter-form">
								<?php include locate_template('partials/page-contact/form-newsletter.php'); ?>
							</form>
							<?php
						break;
						
						case 'newsletter':
							?>
							<!-- DEMANDE DE CONTACT -->				
							<form action="<?php echo get_stylesheet_directory_uri(); ?>/actions/contact.php" method="post" class="contact-form">
								<?php include locate_template('partials/page-contact/form-contact.php'); ?>
							</form>
							
							<!-- CONTRIBUER AU SITE -->
							<form action="<?php echo get_stylesheet_directory_uri(); ?>/actions/contact.php" method="post" class="contribution-form" enctype="multipart/form-data">
								<?php include locate_template('partials/page-contact/form-contribution.php'); ?>
							</form>
							
							<!-- INSCRIPTION NEWSLETTER -->
							<form action="<?php echo get_stylesheet_directory_uri(); ?>/actions/contact.php" method="post" class="newsletter-form display">
								<?php include locate_template('partials/page-contact/form-newsletter.php'); ?>
							</form>
							<?php
						break;
					}
				}
				else {
					?>
					<!-- DEMANDE DE CONTACT -->				
					<form action="<?php echo get_stylesheet_directory_uri(); ?>/actions/contact.php" method="post" class="contact-form display">
						<?php include locate_template('partials/page-contact/form-contact.php'); ?>
					</form>

					<!-- CONTRIBUER AU SITE -->
					<form action="<?php echo get_stylesheet_directory_uri(); ?>/actions/contact.php" method="post" class="contribution-form" enctype="multipart/form-data">
						<?php include locate_template('partials/page-contact/form-contribution.php'); ?>
					</form>

					<!-- INSCRIPTION NEWSLETTER -->
					<form action="<?php echo get_stylesheet_directory_uri(); ?>/actions/contact.php" method="post" class="newsletter-form">
						<?php include locate_template('partials/page-contact/form-newsletter.php'); ?>
					</form>
					<?php
				}
				?>
			</div>
		</div>
	</section>