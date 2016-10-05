<?php
	// functions.php
	
	// VARIABLES
    if (!defined('CDG_VERSION')) {
        define('CDG_VERSION', '1.0');
    }
	
	/**
	 * Setup theme
	 */    
    if (!function_exists('add_supports_theme')) {
        function add_supports_theme() {   			
			// Add default posts and comments RSS feed links to head.
			add_theme_support( 'automatic-feed-links' );
			
            /*
			 * Let WordPress manage the document title.
			 * By adding theme support, we declare that this theme does not use a
			 * hard-coded <title> tag in the document head, and expect WordPress to
			 * provide it for us.
			 */
            add_theme_support('title-tag');
			
			/*
			 * Enable support for Post Thumbnails on posts and pages.
			 *
			 * See: https://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
			 */
			add_theme_support('post-thumbnails');
			
			// This theme uses wp_nav_menu() in two locations.
			register_nav_menus( array(
				'supra-header'	=> __('Supra Header Menu', 'cdg'),
				'social'		=> __('Social Menu', 'cdg'),
				'main-menu'		=> __('Main Menu', 'cdg'),
				'menu-links'	=> __('Liens utiles', 'cdg')
			) );

			/*
			 * Switch default core markup for search form, comment form, and comments
			 * to output valid HTML5.
			 */
			add_theme_support( 'html5', array(
				'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
			) );
			
			/**
			 * Images sizes
			 */
			add_image_size('cover-card-listing', 370, 216, true);			// cover card listing (page dossiers thématiques, dossiers bio, slider homepage)
			add_image_size('cover-single-dossier', 2788, 2056, true);		// cover single dossier (image en haut de la page d'un dossier)
			add_image_size('cover-card-summary', 343, 200, true);			// cover card summary (image dans le sommaire sur la page d'un dossier)
			add_image_size('cover-bloc-alaune', 720, 500, true);			// cover bloc à la une secondaire 
			add_image_size('cover-homepage', 1453, 1069, true);				// cover bloc a la une primaire
        }
		add_action('after_setup_theme', 'add_supports_theme');
    }
	
	/**
	 * Enqueue scripts and styles.
	 *
	 */
	if (!function_exists('cdg_enqueue_scripts')) {
		function cdg_enqueue_scripts() {
			// Load our main stylesheet.
            wp_enqueue_style( 'cdg-style', get_stylesheet_uri(), array(), CDG_VERSION, 'all' );
			
			// Load CDG CSS
			wp_register_style( 'cdg-css', get_stylesheet_directory_uri() . '/css/cdg.css', array(), CDG_VERSION, 'all');
			wp_enqueue_style('cdg-css');
			
			// "/fonts/sources/icomoon/style.css"
			wp_register_style('cdg-fonts', get_stylesheet_directory_uri() . '/fonts/sources/icomoon/style.css', array(), CDG_VERSION, 'all');
			wp_enqueue_style('cdg-fonts');
			
			
			
			// "/js/dist/libs.js"
			wp_register_script('cdg-libs', get_stylesheet_directory_uri() . '/js/dist/libs.js', array(), CDG_VERSION, true);
			wp_enqueue_script('cdg-libs');
			
			// "/js/dist/cdg.js"
			wp_register_script('cdg-js', get_stylesheet_directory_uri() . '/js/dist/cdg.js', array(), CDG_VERSION, true);
			wp_enqueue_script('cdg-js');
			
			
			// CSS Print event [FRISE]
			wp_register_style('print-event', get_stylesheet_directory_uri() . '/css/print-event.css', array(), CDG_VERSION, 'print');
			wp_enqueue_style('print-event');
		}
		add_action( 'wp_enqueue_scripts', 'cdg_enqueue_scripts' );
	}
	
	/**
	 * Excerpt length
	 */
	if (!function_exists('cdg_excerpt_length')) {
		function cdg_excerpt_length($length) {
			global $post;
			if (is_page_template('pages/page-search.php')) {
				return 30;
			}
			else {
				return 15;
			}
		}
		add_filter('excerpt_length', 'cdg_excerpt_length', 999);
	}
	/**
	 * Register custom taxonomy
	 */
	if (!function_exists('cdg_register_custom_taxonomy')) {
		function cdg_register_custom_taxonomy() {
			// -- TAXO PERIODE [DOSSIER]
			$labels = array(
				'name'              => _x( 'Périodes', 'taxonomy general name' ),
				'singular_name'     => _x( 'Période', 'taxonomy singular name' ),
				'menu_name'         => __( 'Périodes' ),
				'all_items'         => __( 'Toutes les périodes' ),
				'edit_item'         => __( 'Modifier une période' ),
				'add_new_item'      => __( 'Ajoute une nouvelle période' ),
				'search_items'      => __( 'Rechercher une période' ),			
			);

			$args = array(
				'labels'            => $labels,
				'public'			=> false,
				'show_ui'           => true,
				//'show_in_nav_menus' => true,
				'show_in_quick_edit' => true,
				'meta_box_cb'  		=> true,	// n'affiche pas la box pour sélectionner une période dans l'édition d'un dossier
				'show_admin_column' => true,
				'hierarchical'      => true,			
				'query_var'         => true,
				// 'rewrite'           => array( 'slug' => 'periode-dossier' ),
			);

			register_taxonomy( 'periode', array( 'dossier' ), $args );
			
			// -- TAXO THEME [DOSSIER]
			$labels = array(
				'name'              => _x( 'Thèmes', 'taxonomy general name' ),
				'singular_name'     => _x( 'Thème', 'taxonomy singular name' ),
				'menu_name'         => __( 'Thèmes' ),
				'all_items'         => __( 'Tous les thèmes' ),
				'edit_item'         => __( 'Modifier un thème' ),
				'add_new_item'      => __( 'Ajoute un nouveau thème' ),
				'search_items'      => __( 'Rechercher un thème' ),			
			);

			$args = array(
				'labels'            => $labels,
				'public'			=> false,
				'show_ui'           => true,
				//'show_in_nav_menus' => true,
				'show_in_quick_edit' => true,
				'meta_box_cb'  		=> true,	// n'affiche pas la box pour sélectionner une période dans l'édition d'un dossier
				'show_admin_column' => true,
				'hierarchical'      => true,			
				'query_var'         => true,
				// 'rewrite'           => array( 'slug' => 'theme' ),
			);

			register_taxonomy( 'theme', array( 'dossier' ), $args );
			
			// -- TAXO PERIODE [BIOGRAPHIE]
			$labels = array(
				'name'              => _x( 'Périodes', 'taxonomy general name' ),
				'singular_name'     => _x( 'Période', 'taxonomy singular name' ),
				'menu_name'         => __( 'Périodes' ),
				'all_items'         => __( 'Toutes les périodes' ),
				'edit_item'         => __( 'Modifier une période' ),
				'add_new_item'      => __( 'Ajoute une nouvelle période' ),
				'search_items'      => __( 'Rechercher une période' ),			
			);

			$args = array(
				'labels'            => $labels,
				'public'			=> false,
				'show_ui'           => true,
				//'show_in_nav_menus' => true,
				'show_in_quick_edit' => true,
				'meta_box_cb'  		=> true,	// n'affiche pas la box pour sélectionner une période dans l'édition d'un dossier
				'show_admin_column' => true,
				'hierarchical'      => true,			
				'query_var'         => true,
				// 'rewrite'           => array( 'slug' => 'periode' ),
			);

			register_taxonomy( 'periode_bio', array( 'biographie' ), $args );
			
			// -- TAXO THEME [BIOGRAPHIE]
			$labels = array(
				'name'              => _x( 'Thèmes', 'taxonomy general name' ),
				'singular_name'     => _x( 'Thème', 'taxonomy singular name' ),
				'menu_name'         => __( 'Thèmes' ),
				'all_items'         => __( 'Tous les thèmes' ),
				'edit_item'         => __( 'Modifier un thème' ),
				'add_new_item'      => __( 'Ajoute un nouveau thème' ),
				'search_items'      => __( 'Rechercher un thème' ),			
			);

			$args = array(
				'labels'            => $labels,
				'public'			=> false,
				'show_ui'           => true,
				// 'show_in_nav_menus' => true,
				'show_in_quick_edit' => true,
				'meta_box_cb'  		=> true,	// n'affiche pas la box pour sélectionner une période dans l'édition d'un dossier
				'show_admin_column' => true,
				'hierarchical'      => true,			
				'query_var'         => true,
				// 'rewrite'           => array( 'slug' => 'theme' ),
			);

			register_taxonomy( 'theme_bio', array( 'biographie' ), $args );
			
			// -- TAXO ALPHABET [LEXIQUE]
			register_taxonomy('alphabet', array('lexique_item'), array('show_ui' => false, 'public' => false));
			
		}
		add_action('init', 'cdg_register_custom_taxonomy' , 0);
	}
	
	/**
	 * Register custom post type
	 */
	if (!function_exists('cdg_register_custom_post_type')) {
		function cdg_register_custom_post_type() {
			// -- DOSSIER
			$labels = array(
				'name'               => _x( 'Dossiers', 'post type general name', 'cdg' ),
				'singular_name'      => _x( 'Dossier', 'post type singular name', 'cdg' ),
				'menu_name'          => _x( 'Dossiers', 'admin menu', 'cdg' ),
				'name_admin_bar'     => _x( 'Dossier', 'add new on admin bar', 'cdg' ),
				'add_new'            => _x( 'Ajouter', 'book', 'cdg' ),
				'add_new_item'       => __( 'Ajouter un nouveau dossier', 'cdg' ),
				'new_item'           => __( 'Nouveau dossier', 'cdg' ),
				'edit_item'          => __( 'Modifier un dossier', 'cdg' ),
				'view_item'          => __( 'Afficher', 'cdg' ),
				'all_items'          => __( 'Tous les dossiers', 'cdg' ),
				'search_items'       => __( 'Rechercher un dossier', 'cdg' ),
				'not_found'          => __( 'Aucun dossier trouvé.', 'cdg' ),
				'not_found_in_trash' => __( 'Aucun dossier trouvé dans la corbeille', 'cdg' )
			);

			$args = array(
				'labels'             => $labels,
				// 'description'        => __( 'Description.', 'your-plugin-textdomain' ),
				'public'             => true,
				'publicly_queryable' => true,
				'show_ui'            => true,
				'show_in_menu'       => true,
				'query_var'          => true,
				'rewrite'            => array( 'slug' => 'dossier' ),
				'capability_type'    => 'post',
				'has_archive'        => true,
				'hierarchical'       => false,
				'menu_position'      => null,
				'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt' )
			);

			register_post_type( 'dossier', $args );
			
			// -- BIOGRAPHIES
			$labels = array(
				'name'               => _x( 'Biographies', 'post type general name', 'cdg' ),
				'singular_name'      => _x( 'Biographie', 'post type singular name', 'cdg' ),
				'menu_name'          => _x( 'Biographies', 'admin menu', 'cdg' ),
				'name_admin_bar'     => _x( 'Biographie', 'add new on admin bar', 'cdg' ),
				'add_new'            => _x( 'Ajouter', 'book', 'cdg' ),
				'add_new_item'       => __( 'Ajouter une nouvelle biographie', 'cdg' ),
				'new_item'           => __( 'Nouvelle biographie', 'cdg' ),
				'edit_item'          => __( 'Modifier une biographie', 'cdg' ),
				'view_item'          => __( 'Afficher', 'cdg' ),
				'all_items'          => __( 'Toutes les biographies', 'cdg' ),
				'search_items'       => __( 'Rechercher une biographie', 'cdg' ),
				'not_found'          => __( 'Aucune biographie trouvé.', 'cdg' ),
				'not_found_in_trash' => __( 'Aucune biographies trouvé dans la corbeille', 'cdg' )
			);

			$args = array(
				'labels'             => $labels,
				// 'description'        => __( 'Description.', 'your-plugin-textdomain' ),
				'public'             => true,
				'publicly_queryable' => true,
				'show_ui'            => true,
				'show_in_menu'       => true,
				'query_var'          => true,
				'rewrite'            => array( 'slug' => 'biographie' ),
				'capability_type'    => 'post',
				'has_archive'        => true,
				'hierarchical'       => false,
				'menu_position'      => null,
				'taxonomies'		 => array('category' , 'periode_bio' , 'theme_bio'), 
				'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt' )
			);

			register_post_type( 'biographie', $args );
			
			// -- LEXIQUE
			$labels = array(
				'name'               => _x( 'Lexique', 'post type general name', 'cdg' ),
				'singular_name'      => _x( 'Lexique', 'post type singular name', 'cdg' ),
				'menu_name'          => _x( 'Lexique', 'admin menu', 'cdg' ),
				'name_admin_bar'     => _x( 'Lexique', 'add new on admin bar', 'cdg' ),
				'add_new'            => _x( 'Ajouter', 'lexique', 'cdg' ),
				'add_new_item'       => __( 'Ajouter un nouvel item', 'cdg' ),
				'new_item'           => __( 'Nouvel item', 'cdg' ),
				'edit_item'          => __( 'Modifier un item', 'cdg' ),
				'view_item'          => __( 'Afficher', 'cdg' ),
				'all_items'          => __( 'Tous les items', 'cdg' ),
				'search_items'       => __( 'Rechercher un item', 'cdg' ),
				'not_found'          => __( 'Aucun item trouvé.', 'cdg' ),
				'not_found_in_trash' => __( 'Aucun item trouvé dans la corbeille', 'cdg' )
			);

			$args = array(
				'labels'             => $labels,
				// 'description'        => __( 'Description.', 'your-plugin-textdomain' ),
				'public'             => true,
				'publicly_queryable' => true,
				'show_ui'            => true,
				'show_in_menu'       => true,
				'query_var'          => true,
				'rewrite'            => array( 'slug' => 'lexique_item' ),
				'capability_type'    => 'post',
				'has_archive'        => true,
				'hierarchical'       => false,
				'menu_position'      => null,
				'supports'           => array( 'title', 'editor', 'author', 'thumbnail' )
			);

			register_post_type( 'lexique_item', $args );
			
			// -- PERIODE [FRISE]
			$labels = array(
				'name'               => _x( 'Périodes', 'post type general name', 'cdg' ),
				'singular_name'      => _x( 'Période', 'post type singular name', 'cdg' ),
				'menu_name'          => _x( 'Frise [Périodes]', 'admin menu', 'cdg' ),
				'name_admin_bar'     => _x( 'Période', 'add new on admin bar', 'cdg' ),
				'add_new'            => _x( 'Ajouter', 'book', 'cdg' ),
				'add_new_item'       => __( 'Ajouter une nouvelle période', 'cdg' ),
				'new_item'           => __( 'Nouvelle période', 'cdg' ),
				'edit_item'          => __( 'Modifier une période', 'cdg' ),
				'view_item'          => __( 'Afficher', 'cdg' ),
				'all_items'          => __( 'Toutes les périodes', 'cdg' ),
				'search_items'       => __( 'Rechercher une période', 'cdg' ),
				'not_found'          => __( 'Aucune période trouvée.', 'cdg' ),
				'not_found_in_trash' => __( 'Aucune période trouvée dans la corbeille', 'cdg' )
			);

			$args = array(
				'labels'             => $labels,
				// 'description'        => __( 'Description.', 'your-plugin-textdomain' ),
				'public'             => true,
				'publicly_queryable' => true,
				'show_ui'            => true,
				'show_in_menu'       => true,
				'query_var'          => true,
				'rewrite'            => array( 'slug' => 'period' ),
				'capability_type'    => 'post',
				'has_archive'        => true,
				'hierarchical'       => false,
				'menu_position'      => null,
				'taxonomies'		 => array(), 
				'supports'           => array( 'title' )
			);

			register_post_type( 'period', $args );
			
			// -- EVENEMENT [FRISE]
			$labels = array(
				'name'               => _x( 'Evénements', 'post type general name', 'cdg' ),
				'singular_name'      => _x( 'Evénement', 'post type singular name', 'cdg' ),
				'menu_name'          => _x( 'Frise [Evénements]', 'admin menu', 'cdg' ),
				'name_admin_bar'     => _x( 'Evénement', 'add new on admin bar', 'cdg' ),
				'add_new'            => _x( 'Ajouter', 'book', 'cdg' ),
				'add_new_item'       => __( 'Ajouter un nouvel événement', 'cdg' ),
				'new_item'           => __( 'Nouvel événement', 'cdg' ),
				'edit_item'          => __( 'Modifier un événement', 'cdg' ),
				'view_item'          => __( 'Afficher', 'cdg' ),
				'all_items'          => __( 'Tous les événements', 'cdg' ),
				'search_items'       => __( 'Rechercher un événement', 'cdg' ),
				'not_found'          => __( 'Aucun événement trouvé.', 'cdg' ),
				'not_found_in_trash' => __( 'Aucune événement trouvé dans la corbeille', 'cdg' )
			);

			$args = array(
				'labels'             => $labels,
				// 'description'        => __( 'Description.', 'your-plugin-textdomain' ),
				'public'             => true,
				'publicly_queryable' => true,
				'show_ui'            => true,
				'show_in_menu'       => true,
				'query_var'          => true,
				'rewrite'            => array( 'slug' => 'event' ),
				'capability_type'    => 'post',
				'has_archive'        => true,
				'hierarchical'       => false,
				'menu_position'      => null,
				'taxonomies'		 => array(), 
				'supports'           => array( 'title' )
			);

			register_post_type( 'event', $args );
			
			flush_rewrite_rules(false);
		}
		add_action('init', 'cdg_register_custom_post_type' , 1); 
	}
	
	
	
	
	/**
	 * Suppression des balises p dans le contenu d'un article.
	 */
	// remove_filter('the_content', 'wpautop');
	// add_filter('the_content', 'nl2br');
	
	/**
	 * Suppression width/height dans les balises img dans l'éditeur WP
	 */	 
	// if (!function_exists('remove_width_attribute')) {
		add_filter( 'post_thumbnail_html', 'remove_width_attribute', 10 );
		add_filter( 'image_send_to_editor', 'remove_width_attribute', 10 );
		function remove_width_attribute( $html ) {
			$html = preg_replace( '/(width|height)="\d*"\s/', "", $html );
			return $html;
		}
		
	// }
	
	
	/**
	 * Add styles to the editor
	 */
	if (!function_exists('add_mce_buttons_2')) {
		function add_mce_buttons_2($buttons) {
			array_unshift($buttons, 'styleselect');
			return $buttons;
		}
		add_filter('mce_buttons_2', 'add_mce_buttons_2');
	}
	
	if (!function_exists('custom_mce_before_init_insert_formats')) {
		function custom_mce_before_init_insert_formats($init_array) {
			// var_dump($init_array); die;
			$style_formats = array(
				array(
					'title'		=> 'Paragraphe Article',
					'selector'	=> 'p',
					'classes'	=> '',
					'wrapper'	=> false
				),
				array(
					'title'		=> 'Dialogue',
					'selector'	=> 'ul',
					'classes' 	=> 'dialog',
					'wrapper' 	=> false
				),
				array(
					'title'		=> 'Liste',
					'selector'	=> 'ul',
					'classes' 	=> 'list',
					'wrapper' 	=> false
				),
				array(
					'title'		=> 'Citation',
					'selector'	=> 'blockquote',
					'classes'	=> '',
					'wrapper'	=> false
				),
				array(
					'title'		=> 'Information forte',
					'selector'	=> 'blockquote',
					'classes'	=> 'pin',
					'wrapper'	=> false
				),
				// array(
				// 	'title'		=> 'Image sur le côté',
				// 	'selector'	=> 'img',
				// 	'classes'	=> '',
				// 	'wrapper'	=> false
				// ),
				// array(
				// 	'title'		=> 'Image au milieu',
				// 	'selector'	=> 'img',
				// 	'classes'	=> '',
				// 	'wrapper'	=> false
				// ),			
				array(
					'title'		=> 'Lien bouton',
					'selector'	=> 'a',
					'classes'	=> 'article-link',
					'wrapper'	=> false
				)
			);
			
			$init_array['style_formats'] = json_encode( $style_formats );
			return $init_array;  
		}
		add_filter( 'tiny_mce_before_init', 'custom_mce_before_init_insert_formats' );  
	}
	
	/**
	 * Add alphabet term for lexique post type
	 */
	if (!function_exists('add_alphabet_term_lexique')) {
		function add_alphabet_term_lexique($post_id, $post, $update) {
			$slug = "lexique_item";
			
			if ($slug != $post->post_type) {
				return;
			}
			
			if (!current_user_can('edit_post', $post_id)) {
				return;
			}
			
			$taxonomy = "alphabet";
			
			$first_letter = strtoupper(substr($post->post_title, 0, 1));
			wp_set_object_terms($post_id, $first_letter, $taxonomy);
		}
		add_action('save_post', 'add_alphabet_term_lexique', 10, 3);
	}
		

	/**
	 * Search only on post title
	 */
	if (!function_exists(search_title_filter)) {
		function search_title_filter( $where, &$wp_query )
		{
			global $wpdb;
			if ( $search_title = $wp_query->get( 'search_title' ) ) {
				$where .= ' AND (';
				$items = explode(' ', $search_title);
				if (count($items) > 1) {
					$total = count($items);
					foreach ($items as $ind => $item) {
						if ($ind == ($total-1)) {
							$where .= ''.$wpdb->posts.'.post_title LIKE "%'.esc_sql(like_escape($item)).'%" ';
						}
						else {
							$where .= ''.$wpdb->posts.'.post_title LIKE "%'.esc_sql(like_escape($item)).'%" AND ';
						}						
					}
				}
				else if (count($items) == 1) {
					$where .= ' (' .$wpdb->posts.'.post_title LIKE "%'.esc_sql(like_escape($items[0])).'%")';
				}
				$where .= ')';
			}
			return $where;
		}
		add_filter( 'posts_where', 'search_title_filter', 10, 2 );
	}
	
	
	
	/**
	 * Add custom field (_year_event) to custom post "event"
	 */
	if (!function_exists('save_event_meta')) {
		function save_event_meta($post_id, $post, $update) {
			$slug = 'event';
			
			if ($slug != $post->post_type) {
				return;
			}
			
			// update meta
			$year_event = get_post_meta($post_id, '_year_event', true);
			$date_event = get_post_meta($post_id, '_date_event', true);
			$field = get_field('date_start_event', $post_id);
			
			if (!empty($field)) {
				$date = explode('/', $field);
				$year = $date[2];
				
				$_date = $date[2].$date[1].$date[0];
				
				update_post_meta($post_id, '_year_event', $year, $year_event);
				update_post_meta($post_id, '_date_event', $_date, $date_event);
			}
		}
		add_action('save_post', 'save_event_meta', 10, 3);
	}
	
	/**
	 * Admin page forms
	 */
	if (!function_exists('add_custom_menu_forms')) {
		function add_custom_menu_forms() {
			// page forms
			add_menu_page('Formulaires', 'Formulaires', 'manage_options', 'forms', 'page_menu_forms', '', 91);
			// sous menus : demande de contact
			add_submenu_page('forms', 'Demande de contact', 'Demande de contact', 'manage_options', 'demande-contact', 'page_menu_contact');
			// sous menus : contribuer au site
			add_submenu_page('forms', 'Contribuer au site', 'Contribuer au site', 'manage_options', 'contribuer-site', 'page_menu_contribuer');
			// sous menus : s'inscrire à la newsletter
			add_submenu_page('forms', 'S\'inscrire à la newsletter', 'S\'inscrire à la lettre d\'information', 'manage_options', 'inscrire-newsletter', 'page_menu_newsletter');
		}
		add_action('admin_menu', 'add_custom_menu_forms');
	}
	// page "formulaires"
	if (!function_exists('page_menu_forms')) {
		function page_menu_forms() {
			?>
			<div class="wrap">
				<h1>Formulaires</h1>
				
				<?php
				if (isset($_GET['code'])) {
					$code = $_GET['code'];
					
					switch ($code) {
						case 'succes':
							?><div class="updated"><p>Les adresses email ont bien été enregistrées.</p></div><?php
						break;
						
						case 'error':
							?><div class="error"><p>Une erreur est survenue. Veuillez réessayer dans quelques instants.</p></div><?php
						break;
						
						case 'email_contact':
							?><div class="error"><p>Le format de l'adresse email pour "Demande de contact" est incorrect.</p></div><?php
						break;
						
						case 'email_site':
							?><div class="error"><p>Le format de l'adresse email pour "Contribuer au site" est incorrect.</p></div><?php
						break;
						
						case 'email_newsletter':
							?><div class="error"><p>Le format de l'adresse email pour "S'inscrire à la newsletter" est incorrect.</p></div><?php
						break;
					}
				}
				?>
				
				<div>
					<p>Pour consulter les données du formulaire "Demande de contact", cliquez <a href="<?php echo admin_url('admin.php?page=demande-contact'); ?>">ici</a></p>
					<p>Pour consulter les données du formulaire "Contribuer au site", cliquez <a href="<?php echo admin_url('admin.php?page=contribuer-site'); ?>">ici</a></p>
					<p>Pour consulter les données du formulaire "S'inscrire à la newsletter", cliquez <a href="<?php echo admin_url('admin.php?page=inscrire-newsletter'); ?>">ici</a></p>
					<br/><br/>
					
					<form action="admin-post.php" method="post">
						<input type="hidden" name="action" value="forms_email" />
						<?php wp_nonce_field('forms_email', '_forms_email'); ?>
						
						<h3>Renseignez ci-dessous les adresses email de notification pour les différents formulaires : </h3>
						
						<table class="form-table">
							<tbody>
								<tr>
									<th scope="row">
										<label for="email-contact">Demande de contact</label>
									</th>
									<td>
										<?php
										if (isset($_GET['code']) && $_GET['code'] == 'email_contact') {
											?><input type="text" name="email-contact" id="email-contact" value="" class="regular-text"/><?php
										}
										else {
											?><input type="text" name="email-contact" id="email-contact" value="<?php echo get_option('email_contact', ''); ?>" class="regular-text"/><?php
										}
										?>										
									</td>
								</tr>
								<tr>
									<th scope="row">
										<label for="email-site">Contribuer au site</label>
									</th>
									<td>
										<?php
										if (isset($_GET['code']) && $_GET['code'] == 'email_site') {
											?><input type="text" name="email-site" id="email-site" value="" class="regular-text"/><?php
										}
										else {
											?><input type="text" name="email-site" id="email-site" value="<?php echo get_option('email_site', ''); ?>" class="regular-text"/><?php
										}
										?>										
									</td>
								</tr>
								<tr>
									<th scope="row">
										<label for="email-newsletter">S'inscrire à la newsletter</label>
									</th>
									<td>
										<?php
										if (isset($_GET['code']) && $_GET['code'] == 'email_newsletter') {
											?><input type="text" name="email-newsletter" id="email-newsletter" value="" class="regular-text"/><?php
										}
										else {
											?><input type="text" name="email-newsletter" id="email-newsletter" value="<?php echo get_option('email_newsletter', ''); ?>" class="regular-text"/><?php
										}
										?>										
									</td>
								</tr>
							</tbody>
						</table>
						
						<p class="submit">
							<input type="submit" name="submit" id="submit" class="button button-primary" value="Enregister"/>
						</p>
					</form>
				</div>
			</div>
			<?php
		}
	}
	// save options email addresses
	if (!function_exists('save_email_addresses')) {
		function save_email_addresses() {
			if (!isset($_POST['_forms_email']) || ! wp_verify_nonce($_POST['_forms_email'], 'forms_email')) {
				wp_redirect( admin_url( 'admin.php?page=forms&code=error' ) ); exit;
			}
			
			// sinon OK
			if (isset($_POST['email-contact']) && !empty($_POST['email-contact'])) {
				// vérifier email 
				$email_contact = $_POST['email-contact'];
				if (!filter_var($email_contact, FILTER_VALIDATE_EMAIL)) {
					// ERROR
					update_option('email_contact', '');
					wp_redirect( admin_url( 'admin.php?page=forms&code=email_contact' ) ); exit;
				}
				// sinon OK
				update_option('email_contact', $email_contact);
			}
			
			if (isset($_POST['email-site']) && !empty($_POST['email-site'])) {
				// vérifier email
				$email_site = $_POST['email-site'];
				if (!filter_var($email_site, FILTER_VALIDATE_EMAIL)) {
					// ERROR
					update_option('email_site', '');
					wp_redirect( admin_url( 'admin.php?page=forms&code=email_site') ); exit;
				}
				// sinon OK
				update_option('email_site', $email_site);
			}
			
			if (isset($_POST['email-newsletter']) && !empty($_POST['email-newsletter'])) {
				// vérifier email
				$email_newsletter = $_POST['email-newsletter'];
				if (!filter_var($email_newsletter, FILTER_VALIDATE_EMAIL)) {
					// ERROR
					update_option('email_newsletter', '');
					wp_redirect( admin_url( 'admin.php?page=forms&code=email_newsletter') ); exit;
				}
				// sinon OK
				update_option('email_newsletter', $email_newsletter);
			}
			
			wp_redirect( admin_url( 'admin.php?page=forms&code=success' ) ); exit;
		}
		add_action( 'admin_post_forms_email', 'save_email_addresses' );
	}
	// page "demande de contact"
	if (!function_exists('page_menu_contact')) {
		function page_menu_contact() {
			global $wpdb;
			$blog_id = get_current_blog_id();
			?>
			<div class="wrap">
				<h1>Demande de contact</h1>
				
				<?php
				// récupérer données pour le formulaire "demande de contact"
				$contacts = $wpdb->get_results("SELECT * FROM wp_forms WHERE type = 'contact' AND blog_id = $blog_id");
				?>
				
				<!-- EXPORT -->
				<?php
				if ($contacts && !isset($_GET['contact_id'])) {
					?>
					<table class="form-table">
						<tbody>
							<tr>
								<th scope="row"><label>Export : </label></th>
								<td><a href="<?php echo get_stylesheet_directory_uri(); ?>/actions/export.php?type=contact" class="button button-primary">Exporter</a></td>
							</tr>
						</tbody>
					</table>
					<?php
				}
				?>
				
				<?php
				if (isset($_GET['contact_id'])) {
					$contact_id = $_GET['contact_id'];
					$contact = $wpdb->get_row("SELECT * FROM wp_forms WHERE id = $contact_id");
					
					if ($contact) {
						?>
						<br/><a href="<?php echo admin_url('admin.php?page=demande-contact'); ?>">Retour listing</a><br/><br/>
						
						<h3>Demande de contact #<?php echo $contact_id; ?></h3>
						<table class="form-table">
							<tbody>
								<tr>
									<th scope="row">Date</th>
									<td><?php echo $contact->created; ?></td>
								</tr>
								<tr>
									<th scope="row">Nom</th>
									<td><?php echo $contact->lastname; ?></td>
								</tr>
								<tr>
									<th scope="row">Prénom</th>
									<td><?php echo $contact->firstname; ?></td>
								</tr>
								<tr>
									<th scope="row">Email</th>
									<td><?php echo $contact->email; ?></td>
								</tr>
								<tr>
									<th scope="row">Société</th>
									<td><?php echo $contact->company; ?></td>
								</tr>
								<tr>
									<th scope="row">Fonction</th>
									<td><?php echo $contact->job; ?></td>
								</tr>
								<tr>
									<th scope="row">Message</th>
									<td><?php echo $contact->message; ?></td>
								</tr>
							</tbody>
						</table>
						<?php
					}					
				}
				else {
					?>
					<table class="wp-list-table widefat fixed striped">
						<thead>
							<tr>
								<th scope="col" class="manage-column">Date</th>
								<th scope="col" class="manage-column">Nom</th>
								<th scope="col" class="manage-column">Prénom</th>
								<th scope="col" class="manage-column">Email</th>
								<th scope="col" class="manage-column">Détails</th>
							</tr>
						</thead>
						<tbody>
							<?php
							if (!empty($contacts)) {
								foreach ($contacts as $contact) {
									?>
									<tr>
										<td><?php echo $contact->created; ?></td>
										<td><?php echo $contact->lastname; ?></td>
										<td><?php echo $contact->firstname; ?></td>
										<td><?php echo $contact->email; ?></td>
										<td><a href="<?php echo admin_url('admin.php?page=demande-contact&contact_id='.$contact->id); ?>">Voir plus</a></td>
									</tr>
									<?php
								}
							}	
							?>
						</tbody>
					</table>
					<?php
				}
				?>
			</div>
			<?php
		}
	}
	// page "contribuer au site"
	if (!function_exists('page_menu_contribuer')) {
		function page_menu_contribuer() {
			global $wpdb;
			$blog_id = get_current_blog_id();
			?>
			<div class="wrap">
				<h2>Contribuer au site</h2>
				
				<?php
				// récupérer données pour le formulaire "demande de contact"
				$contacts = $wpdb->get_results("SELECT * FROM wp_forms WHERE type = 'site' AND blog_id = $blog_id");
				?>
				
				<!-- EXPORT -->
				<?php
				if ($contacts && !isset($_GET['contact_id'])) {
					?>
					<table class="form-table">
						<tbody>
							<tr>
								<th scope="row"><label>Export : </label></th>
								<td><a href="<?php echo get_stylesheet_directory_uri(); ?>/actions/export.php?type=site" class="button button-primary">Exporter</a></td>
							</tr>
						</tbody>
					</table>
					<?php
				}
				?>
				
				<?php
				if (isset($_GET['contact_id'])) {
					$contact_id = $_GET['contact_id'];
					$contact = $wpdb->get_row("SELECT * FROM wp_forms WHERE id = $contact_id");
					
					if ($contact) {
						$you_are = $contact->you_are;
						$role = "Autre";
						if ($you_are == 'teacher') {
							$role = "Enseignant";
						}
						else if ($you_are == 'student') {
							$role = "Etudiant";
						}
						
						if ($contact->attachment) {
							$attachments = unserialize($contact->attachment);
						}
						?>
						<br/><a href="<?php echo admin_url('admin.php?page=contribuer-site'); ?>">Retour listing</a><br/><br/>
						<h3>Contribution au site #<?php echo $contact_id; ?></h3>
						<table class="form-table">
							<tbody>
								<tr>
									<th scope="row">Date</th>
									<td><?php echo $contact->created; ?></td>
								</tr>
								<tr>
									<th scope="row">Nom</th>
									<td><?php echo $contact->lastname; ?></td>
								</tr>
								<tr>
									<th scope="row">Prénom</th>
									<td><?php echo $contact->firstname; ?></td>
								</tr>
								<tr>
									<th scope="row">Email</th>
									<td><?php echo $contact->email; ?></td>
								</tr>
								<tr>
									<th scope="row">Société</th>
									<td><?php echo $contact->company; ?></td>
								</tr>
								<tr>
									<th scope="row">Fonction</th>
									<td><?php echo $contact->job; ?></td>
								</tr>
								<tr>
									<th scope="row">Vous êtes ?</th>
									<td><?php echo $role; ?></td>
								</tr>
								<tr>
									<th scope="row">Message</th>
									<td><?php echo $contact->message; ?></td>
								</tr>
								<tr>
									<th scope="row">Pièce jointe</th>
									<td>
									<?php
									if ($attachments) {
										foreach ($attachments as $attachment) {
											?><a href="<?php echo $attachment; ?>" target="_blank"><?php echo $attachment; ?></a><br/><?php
										}
									}									
									?>
									</td>
								</tr>
							</tbody>
						</table>
						<?php
					}
				}
				else {
					?>
					<table class="wp-list-table widefat fixed striped">
						<thead>
							<tr>
								<th scope="col" class="manage-column">Date</th>
								<th scope="col" class="manage-column">Nom</th>
								<th scope="col" class="manage-column">Prénom</th>
								<th scope="col" class="manage-column">Email</th>
								<th scope="col" class="manage-column">Détails</th>
							</tr>
						</thead>
						<tbody>
							<?php
							if (!empty($contacts)) {
								foreach ($contacts as $contact) {									
									?>
									<tr>
										<td><?php echo $contact->created; ?></td>
										<td><?php echo $contact->lastname; ?></td>
										<td><?php echo $contact->firstname; ?></td>
										<td><?php echo $contact->email; ?></td>
										<td><a href="<?php echo admin_url('admin.php?page=contribuer-site&contact_id=' . $contact->id); ?>">Voir plus</a></td>
									</tr>
									<?php
								}
							}
							?>
						</tbody>
					</table>
					<?php
				}
				?>			
			</div>
			<?php
		}
	}
	// page "s'inscrire à la newsletter"
	if (!function_exists('page_menu_newsletter')) {
		function page_menu_newsletter() {
			global $wpdb;
			$blog_id = get_current_blog_id();
			?>
			<div class="wrap">
				<h2>S'inscrire à la lettre d'information</h2>
				
				<?php
				// récupérer données pour le formulaire "demande de contact"
				$contacts = $wpdb->get_results("SELECT * FROM wp_forms WHERE type = 'newsletter' AND blog_id = $blog_id");
				?>
				
				<!-- EXPORT -->
				<?php
				if ($contacts) {
					?>
					<table class="form-table">
						<tbody>
							<tr>
								<th scope="row"><label>Export : </label></th>
								<td><a href="<?php echo get_stylesheet_directory_uri(); ?>/actions/export.php?type=newsletter" class="button button-primary">Exporter</a></td>
							</tr>
						</tbody>
					</table>
					<?php
				}
				?>
				
				<table class="wp-list-table widefat fixed striped">
					<thead>
						<tr>
							<th scope="col" class="manage-column">Date</th>
							<th scope="col" class="manage-column">Nom</th>
							<th scope="col" class="manage-column">Prénom</th>
							<th scope="col" class="manage-column">Email</th>
							<th scope="col" class="manage-column">Statut</th>
						</tr>
					</thead>
					<tbody>
						<?php
						if (!empty($contacts)) {
							foreach ($contacts as $contact) {
								$newsletter = $contact->newsletter;								
								?>
								<tr>
									<td><?php echo $contact->created; ?></td>
									<td><?php echo $contact->lastname; ?></td>
									<td><?php echo $contact->firstname; ?></td>
									<td><?php echo $contact->email; ?></td>
									<td><?php echo ($newsletter) ? 'Validée' : 'Non validée'; ?></td>
								</tr>
								<?php
							}
						}
						?>
					</tbody>
				</table>
			</div>
			<?php
		}
	}
	
	// ------------------ GENERAL FUNCTIONS ------------------ //
	/**
	 * Get category
	 * @param $taxonomy		nom de la taxonomy (category, periode, theme ...)
	 * @param $post_type	nom du type de post (post, dossier ...)
	 * @param $args			tableau des arguments
	 */
	function cdg_get_categories($taxonomy = 'category', $post_type = 'post', $args = array()) {		
		$defaults = array(
			'type'			=> $post_type,
			'orderby'		=> 'name',
			'order'			=> 'ASC',
			'hide_empty'	=> 0,
			'taxonomy'		=> $taxonomy
		);
		
		if (!empty($args)) {
			$defaults = array_merge($defaults, $args);
		}

		$categories = get_categories($defaults);
		
		return $categories;
	}
	
	/**
	 * Get posts
	 * @param $post_type	nom du type de post (post, dossier..)
	 * @param $args			tableau des arguments
	 */
	function cdg_get_posts($post_type = 'post', $args = array()) {	
		$defaults = array(
			'posts_per_page'	=> -1,
			'post_status'		=> 'publish',
			'post_type'			=> $post_type,
			'orderby'			=> 'date',
			'order'				=> 'DESC'
		);
		
		if (!empty($args)) {
			$defaults = array_merge($defaults, $args);
		};

		$articles = get_posts($defaults);

		return $articles;		
	}
	
	/**
	 * Breadcrumb
	 */
	function cdg_breadcrumb() {
		global $post;
		
		$pageID = $post->ID; 
		
		$menus = array();
		$main_menu = array();
		$menu_links = array();
		
		$locations = get_nav_menu_locations();
		$mainMenuID = $locations['main-menu'];
		$menuLinksID = $locations['menu-links'];
		
		$mainMenu = wp_get_nav_menu_object($mainMenuID);
		if (false !== $mainMenu) {
			$mainMenuItems = wp_get_nav_menu_items($mainMenu->term_id);
		}
		
		if (!empty($mainMenuItems)) {
			foreach ($mainMenuItems as $item) {
				$main_menu[$item->object_id] = $item;
				// var_dump($item);
			}
		}
		
		$mainMenuKeys = array_keys($main_menu);
		
		$menuLinks = wp_get_nav_menu_object($menuLinksID);
		if (false !== $menuLinks) {
			$menuLinksItems = wp_get_nav_menu_items($menuLinks->term_id);
		}
		if (!empty($menuLinksItems)) {
			foreach ($menuLinksItems as $item) {
				$menu_links[$item->object_id] = $item;
			}
		}
		$menuLinksKeys = array_keys($menu_links);

		?>
		<nav class="breadcrumb hidden-xs">
			<a href="<?php echo site_url('/'); ?>">Accueil</a> > 
			
			<?php
			// page
			if (is_page($pageID)) {
				// page dans main menu ?
				if (in_array($pageID, $mainMenuKeys)) {
					$menu_item = $main_menu[$pageID];
					$parent_item = $menu_item->menu_item_parent;
					
					if (!empty($parent_item)) {
						$parent = $main_menu[$parent_item];
						$object_parent = $parent->object;
						
						if ($object_parent == 'custom') {
							?><a href="<?php echo $parent->url; ?>"><?php echo $parent->title; ?></a> > <?php
						}
						else {
							$parent = get_post($parent_item);
							?><a href="<?php echo get_permalink($parent->ID); ?>"><?php echo $parent->post_title; ?></a> > <?php
						}			
					}
					
					// item courant
					?><a href="<?php echo get_permalink($pageID); ?>"><?php echo get_the_title($pageID); ?></a><?php
				}				
				// page dans menu liens utiles ?
				else if (in_array($pageID, $menuLinksKeys)) {
					$menu_item = $menu_links[$pageID];
					
					?><a href="<?php echo $menu_item->url; ?>"><?php echo $menu_item->title; ?></a><?php
				}
				// page de recherche ?
				else if (isset($_GET['q'])) {
					?><a href="#">Résultats de recherche</a><?php
				}
				// page contact
				else if (is_page_template('pages/page-contact.php')) {
					?><a href="<?php echo get_permalink($pageID); ?>"><?php echo get_the_title($pageID); ?></a><?php
				}
			}
			// single
			else if (is_single($pageID)) {
				$post_type = $post->post_type;
				
				switch ($post_type) {
					case 'dossier':
						// DOSSIER
						$dossiers_page = get_page_by_path('dossiers-thematiques', 'OBJECT', 'page');
						?><a href="<?php echo get_permalink($dossiers_page->ID); ?>"><?php echo $dossiers_page->post_title; ?></a> > <?php
					break;
					
					case 'biographie':
						// BIOGRAPHIE
						$bio_page = get_page_by_path('dossiers-biographiques', 'OBJECT', 'page');
						?><a href="<?php echo get_permalink($bio_page->ID); ?>"><?php echo $bio_page->post_title; ?></a> > <?php
					break;
					
					case 'post':
						// ARTICLE
						if (isset($_GET['dossier_id']) && !empty($_GET['dossier_id'])) {
							$dossiers_page = get_page_by_path('dossiers-thematiques', 'OBJECT', 'page');
							?><a href="<?php echo get_permalink($dossiers_page->ID); ?>"><?php echo $dossiers_page->post_title; ?></a> > <?php
						
							$dossier_id = $_GET['dossier_id'];
							?><a href="<?php echo get_permalink($dossier_id); ?>"><?php echo get_the_title($dossier_id); ?></a> > <?php 
						}
						else {
							// dernier dossier associé
							$dossier_link = get_field('post_choice', $pageID);
							if ($dossier_link) {
								$dossier_link = array_reverse($dossier_link);
			
								$dossier = $dossier_link[0];
								$dossier_id = $dossier->ID;
								
								$dossiers_page = get_page_by_path('dossiers-thematiques', 'OBJECT', 'page');
								?><a href="<?php echo get_permalink($dossiers_page->ID); ?>"><?php echo $dossiers_page->post_title; ?></a> > <?php
								
								?><a href="<?php echo get_permalink($dossier_id); ?>"><?php echo get_the_title($dossier_id); ?></a> > <?php 								
							}							
						}
					break;
				}
				
				?><a href="<?php echo get_permalink($pageID); ?>"><?php echo get_the_title($pageID); ?></a><?php
			}
			?>
		</nav>
		<?php		
	}
	
	function cleanIncomingString($string, $noReplace=false) {
		$string = strip_tags($string);
		$string = trim($string);
		if (!$noReplace) {
			$string = str_replace(array(';',','), array('',''), $string);
		}
		return $string;
	}
	
	// --------------- #END GENERAL FUNCTIONS --------------- //
	

	// **** Filter ADMIN NEW PAGE -- START
    function wpadmin_filter( $url, $path, $orig_scheme )
    {
        $old  = array( "/(wp-admin)/");
        $admin_dir = WP_ADMIN_DIR;
        $new  = array($admin_dir);
        return preg_replace( $old, $new, $url, 1);
    }
    add_filter('site_url',  'wpadmin_filter', 10, 3);


    // **** Filter ADMIN NEW PAGE -- START
    function wpadminnetwork_filter( $url, $path, $orig_scheme )
    {
        $old  = array( "/(wp-admin)/");
        $admin_dir = WP_ADMIN_DIR;
        $new  = array($admin_dir);
        return preg_replace( $old, $new, $url, 1);
    }
    add_filter('network_site_url',  'wpadminnetwork_filter', 10, 3);

    // Secure Special Slug Admin
    if (isset($_SERVER['REQUEST_URI']) && $_SERVER['REQUEST_URI'] == '/wp-admin/') {
        header('Location: ' . site_url('/'));
        exit;
    }

    // Custom WP Admin / Login Page
    function my_login_logo() { ?>
        <style type="text/css">
            .login h1 a {
                background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/images/site-login-logo.png);
                background-size: 184px 150px;
                width: 184px;
                height: 150px;
            }
        </style>
    <?php }
    add_action( 'login_enqueue_scripts', 'my_login_logo' );

    add_action('wp_head', 'change_bar_color');
    add_action('admin_head', 'change_bar_color');
    function change_bar_color()
    {
        
        $colorBgAdmin = '#001d34';
        ?>
        <style>
        #wpadminbar{
            background: <?php echo $colorBgAdmin; ?> !important;
        }
        </style>
        <?php 
    }

	