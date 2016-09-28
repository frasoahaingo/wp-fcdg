<?php
/**
 * Template name: Homepage
 */
 
get_header(); ?>

	<?php while(have_posts()) : the_post(); ?>
	
		<?php $homePageID = get_the_ID(); ?>

		<!-- MAIN BLOC "A LA UNE" -->
		<?php include locate_template('partials/home/main-bloc-alaune.php'); ?>

		<!-- SECONDARY BLOC "A LA UNE" -->
		<?php #include locate_template('partials/home/second-bloc-alaune.php'); ?>
		
		<!-- FRISE CHRONOLOGIQUE -->
		<?php include locate_template('partials/home/bloc-frise.php'); ?>
		
		<!-- SLIDER "TOUS LES THEMES" -->
		<?php include locate_template('partials/home/bloc-slider.php'); ?>

		<!-- BLOC ENSEIGNANT -->
		<?php include locate_template('partials/home/bloc-teacher.php'); ?>
		
		<!-- BLOC TWITTER -->
		<?php include locate_template('partials/home/bloc-twitter.php'); ?>
	
	<?php endwhile; ?>

<?php get_footer(); ?>