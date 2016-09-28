<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo('charset'); ?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		
		<!--
		<link rel="stylesheet" href="../fonts/sources/icomoon/style.css">
		-->
		
		<link rel="profile" href="http://gmpg.org/xfn/11">
		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
				<!--
		Fonts typekit
		Kit ID: nzl0tjc
		-->
		<script type="text/javascript">
			(function() {
				var config = {
		      			kitId: 'nzl0tjc'
		    		};
		    		var d = false;
		    		var tk = document.createElement('script');
		    		tk.src = '//use.typekit.net/' + config.kitId + '.js';
		    		tk.type = 'text/javascript';
		    		tk.async = 'true';
		    		tk.onload = tk.onreadystatechange = function() {
		      			var rs = this.readyState;
		      			if (d || rs && rs != 'complete' && rs != 'loaded') return;
		      			d = true;
		      			try { Typekit.load(config); } catch (e) {}
		    		};
		    		var s = document.getElementsByTagName('script')[0];
		    		s.parentNode.insertBefore(tk, s);
		  	})();
		</script>

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

		<?php
		$class = "";
		if (is_page_template('pages/page-contact.php')) {
			$class= "contact";
		}
		?>
		<div class="main-wrapper <?php echo $class; ?>">
			
			<!-- HEADER : MENU / LOGO / SEARCH -->
			<?php get_template_part('partials/common/sub', 'header'); ?>
			