<?php
	// -- BLOC TWITTER

	// require_once(ABSPATH . 'wp-ressources/plugins/accesspress-twitter-feed/accesspress-twitter-feed.php');
	
	$months = array('janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre');
	
	if (class_exists('APTF_Class')) {
		// PLUGIN ACCESSPRESS TWITTER FEED
		$twitter_plugin = new APTF_Class();
		
		$aptf_settings = $twitter_plugin->aptf_settings;
		$username = $aptf_settings['twitter_username']; 
		$display_name = $aptf_settings['twitter_account_name'];
		$tweets = $twitter_plugin->get_twitter_tweets($username, $aptf_settings['total_feed']);

		if(isset($atts['template'])){
			$aptf_settings['feed_template'] = $atts['template'];
		}
		if(isset($atts['follow_button'])){
			if($atts['follow_button']=='true'){
				$aptf_settings['display_follow_button'] = 1;
			}
			else{
				$aptf_settings['display_follow_button'] = 0;
			}
		
		}
	}
	
	
?>

	<section class="twitter">
		<div class="content col-xs-12">
			<div class="container">
				<div class="mixology-row">
					<div class="col-xs-12">
						<span class="type">
							Nos derniers tweets
						</span>
					</div>
				</div>
				<div class="mixology-row">
					<div class="col-xs-12">
						<div class="container">
							<div class="mixology-row">
							<?php
							// echo do_shortcode('[ap-twitter-feed]');
							
							if(isset($tweets->errors)){
								$fallback_message = ($aptf_settings['fallback_message']=='')?__('Something went wrong with the twitter.',APTF_TD):$aptf_settings['fallback_message'];
								?><p><?php echo $fallback_message;?></p><?php
							}
							else {
								// affichage tweets
								if (is_array($tweets)) {
									$count = 1;
									foreach ($tweets as $tweet) {
										// $twitter_plugin->print_array($tweet);
										
										$class = "";
										if ($count != 1) {
											$class = "col-lg-offset-1";
										}										
										?>
										<article class="col-xs-12 col-sm-12 col-md-4 col-lg-3 <?php echo $class;?>">
											<div class="container">
												<div class="mixology-row">
													<div class="col-xs-12 tweet-user">
														<?php
														if ($tweet->user) {
															$the_user = $tweet->user;
															$img_url = $the_user->profile_image_url;
															
															if ($img_url) {
																?><img src="<?php echo $img_url; ?>" alt="" /><?php
															}
															else {
																?><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/cdg-twitter.png" alt="" /><?php
															}
														}
														else {
															?><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/cdg-twitter.png" alt="" /><?php
														}														
														?>
														
														<div class="tweet-username">
															<?php if ($aptf_settings['display_username'] == 1) { ?>
																<p><a href="http://twitter.com/<?php echo $username; ?>" target="_blank"><?php echo $display_name; ?></a></p>
																<span><a href="http://twitter.com/<?php echo $username; ?>" target="_blank">@<?php echo $username; ?></a></span>
															<?php }	?>
														</div>
													</div>
												</div>
												<div class="mixology-row">
													<div class="col-xs-12 tweet-content">
														<?php
														if ($tweet->text) { 
															$the_tweet = ' '.$tweet->text . ' '; //adding an extra space to convert hast tag into links
															
															/*
															// i. User_mentions must link to the mentioned user's profile.
															if (is_array($tweet->entities->user_mentions)) {
																foreach ($tweet->entities->user_mentions as $key => $user_mention) {
																	$the_tweet = preg_replace(
																			'/@' . $user_mention->screen_name . '/i', '<a href="http://www.twitter.com/' . $user_mention->screen_name . '" target="_blank">@' . $user_mention->screen_name . '</a>', $the_tweet);
																}
															}

															// ii. Hashtags must link to a twitter.com search with the hashtag as the query.
															if (is_array($tweet->entities->hashtags)) {
																foreach ($tweet->entities->hashtags as $hashtag) {
																	$the_tweet = str_replace(' #' . $hashtag->text . ' ', ' <a href="https://twitter.com/search?q=%23' . $hashtag->text . '&src=hash" target="_blank">#' . $hashtag->text . '</a> ', $the_tweet);
																}
															}

															// iii. Links in Tweet text must be displayed using the display_url
															//      field in the URL entities API response, and link to the original t.co url field.
															if (is_array($tweet->entities->urls)) {
																foreach ($tweet->entities->urls as $key => $link) {
																	$the_tweet = preg_replace(
																			'`' . $link->url . '`', '<a href="' . $link->url . '" target="_blank">' . $link->url . '</a>', $the_tweet);
																}
															}
															*/

															echo '<p>' . $the_tweet . '</p> ';
															
														} else {
															?>
															<p><a href="http://twitter.com/'<?php echo $username; ?> " target="_blank"><?php _e('Click here to read ' . $username . '\'S Twitter feed', APTF_TD); ?></a></p>
															<?php
														}
														?>
													</div>
												</div>
												<?php 
												if ($tweet->created_at) { 
													date_default_timezone_set('Europe/Paris');
													$date_tweet = $tweet->created_at;													
													
													$day = date('j', strtotime($date_tweet));
													$month = date('n', strtotime($date_tweet));
													$year = date('Y', strtotime($date_tweet));
													
													$hour = date('H:i', strtotime($date_tweet));
													$date = $day . ' ' . $months[$month-1] . ' ' . $year;
													?>
													<div class="mixology-row">
														<div class="col-xs-12 tweet-date">
															<span>
																<span class="icon-clock"></span> 
																<span><?php echo $hour; ?> - <?php echo $date; ?></span>
															</span>
														</div>
													</div>
													<?php
												}
												?>												
											</div>
										</article>
										<?php
										$count++;
									}			
								}
							}
							?>
							</div>
						</div>
					</div>
				</div>
				<div class="mixology-row">
					<div class="col-xs-12">
						<a href="https://twitter.com/web2_gaulle" class="btn-simple tweet link" target="_blank">
							Suivez-nous sur <span>@web2_gaulle</span>
							<span class="btn-animate icon-twitter">
								<span class="icon-twitter"></span>
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	