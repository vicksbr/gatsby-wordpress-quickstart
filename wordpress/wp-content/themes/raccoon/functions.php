<?php 

// Theme Setup
function flapper_theme_setup(){
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'title-tag' );
}
add_action('after_setup_theme', 'flapper_theme_setup');

function flapper_add_menus() {
	register_nav_menus(
		array(
			'header-menu' => 'Header Menu',
			'footer-menu' => 'Footer Menu'
		)
	);
}
add_action( 'init', 'flapper_add_menus' );

function hide_pages_editor(){
	remove_post_type_support('page', 'editor');
}
add_action('admin_init', 'hide_pages_editor');

// ACF Options Pages
if(function_exists('acf_add_options_page')){
	acf_add_options_page(array(
		'page_title' 	=> 'Site Options',
		'menu_title'	=> 'Conteúdo Geral',
		'menu_slug'		=> 'site-options',
		'icon_url'		=> 'dashicons-welcome-write-blog'
	));

	acf_add_options_sub_page(array(
		'page_title' 	=> 'Conteúdo Geral - Português',
		'menu_title'	=> 'Português',
		'menu_slug' 	=> 'site-options-pt',
		'capability'	=> 'edit_posts',
		'redirect'		=> false,
		'parent_slug'	=> 'site-options',
		'post_id' 		=> 'options_pt_BR'
	));

	acf_add_options_sub_page(array(
		'page_title' 	=> 'Conteúdo Geral - Inglês',
		'menu_title'	=> 'English',
		'menu_slug' 	=> 'site-options-en',
		'capability'	=> 'edit_posts',
		'redirect'		=> false,
		'parent_slug'	=> 'site-options',
		'post_id' 		=> 'options_en_US'
	));

	acf_add_options_sub_page(array(
		'page_title' 	=> 'Conteúdo Geral - Espanhol',
		'menu_title'	=> 'Español',
		'menu_slug' 	=> 'site-options-es',
		'capability'	=> 'edit_posts',
		'redirect'		=> false,
		'parent_slug'	=> 'site-options',
		'post_id' 		=> 'options_es_ES'
	));
}

function flapper_custom_post_types() {
	// Hotsites
	$labels = array(
		'name'					=> 'Hotsites',
		'singular_name'			=> 'Hotsite',
		'menu_name'				=> 'Hotsites',
		'name_admin_bar'		=> 'Hotsites',
		'attributes'			=> 'Atributos',
		'all_items'				=> 'Todos os Hotsites',
		'add_new_item'			=> 'Adicionar Hotsite',
		'add_new'				=> 'Adicionar',
		'new_item'				=> 'Novo Hotsite',
		'edit_item'				=> 'Editar Hotsite',
		'update_item'			=> 'Atualizar Hotsite',
		'view_item'				=> 'Ver Hotsite',
		'view_items'			=> 'Ver Hotsites',
		'search_items'			=> 'Buscar Hotsite',
		'not_found'				=> 'Não encontrado',
		'not_found_in_trash'	=> 'Não encontrado',
		'insert_into_item'		=> 'Inserir no Hotsite',
		'items_list'			=> 'Lista de Hotsites',
		
	);
	$args = array(
		'label'					=> 'hotsites' ,
		'labels'				=> $labels,
		'supports'				=>  array( 'title' ),
		'hierarchical'			=> false,
		'public'				=> true,
		'show_ui'				=> true,
		'show_in_menu'			=> true,
		'menu_position'			=> 5,
		'menu_icon'				=> 'dashicons-welcome-widgets-menus',
		'show_in_admin_bar'		=> true,
		'show_in_nav_menus'		=> true,
		'can_export'			=> true,
		'has_archive'			=> false,
		'exclude_from_search'	=> true,
		'publicly_queryable'	=> true,
		'capability_type'		=> 'page',
		'rewrite'				=> true,
		'show_in_rest'			=> true,
	);
	register_post_type( 'hotsites', $args );
}

add_action( 'init', 'flapper_custom_post_types', 0 );

function hotsite_remove_slug( $post_link, $post ) {
    if ( 'hotsites' != $post->post_type || 'publish' != $post->post_status ) {
        return $post_link;
    }
    $post_link = str_replace( '/' . $post->post_type . '/', '/', $post_link );
    return $post_link;
}

add_filter( 'post_type_link', 'hotsite_remove_slug', 10, 2 );

?>

