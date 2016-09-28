<?php

// var_dump($_POST);
	// wordpress
    require_once($_SERVER['DOCUMENT_ROOT'].'/wp-load.php');

	$posts_per_page = 6;
	$paged = (isset($_POST['paged'])) ? $_POST['paged'] : 1;
	
	$search = $_POST['search'];
	
	// recherche
	$results = new WP_Query(
		array(
			// 's'					=> $search,
			'search_title'		=> $search,
			'posts_per_page'	=> $posts_per_page,
			'post_type'			=> array('post', 'dossier', 'biographie'),
			'post_status'		=> 'publish',
			'orderby'			=> 'title',
			'order'				=> 'ASC',
			'paged'				=> $paged
		)
	);
	
	$countR = new WP_Query(
		array(
			// 's'					=> $search,
			'search_title'		=> $search,
			'posts_per_page'	=> -1,
			'post_type'			=> array('post', 'dossier', 'biographie'),
			'post_status'		=> 'publish',
			'orderby'			=> 'title',
			'order'				=> 'ASC',
		)
	);
	// $total = count($countR);
	$total = $countR->found_posts;
	
	include locate_template('partials/search/result-search.php');