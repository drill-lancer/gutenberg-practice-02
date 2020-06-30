<?php
/**
 * Plugin Name: Gutenberg Practice 02
 * Plugin URI: https://github.com/drill-lancer/gutenberg-practice-01
 * Description: Block Build Test
 * Version: 0.0.1
 * Author: DRILL LANCER
 *
 * @package Gutenberg Practice 02
 */

/**
 * Register Custom Meta Tag Field
 */
function gutenberg_practice_02_register_post_meta() {

	register_post_meta(
		'post',
		'gutenberg_practice_02_meta_block_field',
		array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => 'string',
		)
	);

	register_post_meta(
		'post',
		'_gutenberg_practice_02_protected_key',
		array(
			'show_in_rest'  => true,
			'single'        => true,
			'type'          => 'string',
			'auth_callback' => function() {
				return current_user_can( 'edit_posts' );
			},
		)
	);

}
add_action( 'init', 'gutenberg_practice_02_register_post_meta' );

/**
 * Register Block
 */
function gutenberg_practice_02_register_block() {
	register_block_type(
		'gutenberg-practice-02/meta-block',
		array(
			'editor_script' => 'gutenberg-practice-02',
		)
	);
	register_block_type(
		'core/paragraph',
		array(
			'render_callback' => 'gutenberg_practice_02_render_paragraph',
		)
	);
}
add_action( 'init', 'gutenberg_practice_02_register_block' );

/**
 * Enqueue Scripts.
 */
function gutenberg_practice_02_enqueue() {
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	wp_register_script(
		'gutenberg-practice-02',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);
}
add_action( 'init', 'gutenberg_practice_02_enqueue' );

/**
 * Content Filter
 *
 * @param object $content content.
 */
function gutenberg_practice_02_content_filter( $content ) {
	$value = get_post_meta( get_the_ID(), 'gutenberg_practice_02_meta_block_field', true );
	if ( $value ) {
		return sprintf( '%s <h4> %s </h4>', $content, esc_html( $value ) );
	} else {
		return $content;
	}
}
add_filter( 'the_content', 'gutenberg_practice_02_content_filter' );

/**
 * Render Paragraph
 *
 * @param array  $attributes attributes.
 * @param object $content content.
 */
function gutenberg_practice_02_render_paragraph( $attributes, $content ) {
	$value = get_post_meta( get_the_ID(), 'gutenberg_practice_02_meta_block_field', true );
	// check value is set before outputting.
	if ( $value ) {
		return sprintf( '%s (%s)', $content, esc_html( $value ) );
	} else {
		return $content;
	}
}

/**
 * Register Template
 */
function gutenberg_practice_02_register_template() {
	$post_type_object = get_post_type_object( 'post' );
	$post_type_object->template = array(
		array( 'gutenberg-practice-02/meta-block' ),
	);
}
add_action( 'init', 'gutenberg_practice_02_register_template' );

