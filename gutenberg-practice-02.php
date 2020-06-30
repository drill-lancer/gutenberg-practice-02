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
	$post_type_object           = get_post_type_object( 'post' );
	$post_type_object->template = array(
		array( 'gutenberg-practice-02/meta-block' ),
	);
}
add_action( 'init', 'gutenberg_practice_02_register_template' );

/**
 * 'admin_notices' アクションにフックして、
 * 一般的な HTML 通知をレンダリングする
 */
function myguten_admin_notice() {
	$screen = get_current_screen();
	// この通知は投稿エディターでのみレンダリングする.
	if ( ! $screen || 'post' !== $screen->base ) {
		return;
	}
	// 通知の HTML をレンダリングする.
	// 通知は 'notice' クラスの <div> で囲む.
	echo '<div class="notice notice-success is-dismissible"><p>';

	echo sprintf(
		// translators: post draft Updated and link.
		wp_kses_post( __( 'Post draft updated. <a href="%s" target="_blank">Preview post</a>' ) ),
		esc_url( get_preview_post_link() )
	);
	echo '</p></div>';
};
add_action( 'admin_notices', 'myguten_admin_notice' );

