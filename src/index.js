import { registerBlockType } from '@wordpress/blocks';
import { TextControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';

registerBlockType( 'gutenberg-practice-02/meta-block', {
	title: 'Meta Block',
	icon: 'smiley',
	category: 'layout',

	edit( { className, setAttributes, attributes } ) {
		const postType = useSelect(
			( select ) => select( 'core/editor' ).getCurrentPostType(),
			[]
		);
		const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );
		const metaFieldValue = meta.gutenberg_practice_02_meta_block_field;
		function updateMetaValue( newValue ) {
			setMeta( {
				...meta,
				gutenberg_practice_02_meta_block_field: newValue,
			} );
		}

		return (
			<div className={ className }>
				<TextControl
					label="Meta Block Field"
					value={ metaFieldValue }
					onChange={ updateMetaValue }
				/>
			</div>
		);
	},

	// No information saved to the block
	// Data is saved to post meta via the hook
	save() {
		return null;
	},
} );

( function( wp ) {
	wp.data.dispatch( 'core/notices' ).createNotice(
		'success', // 次のどれか: success, info, warning, error.
		'Post published.', // 出力されるテキスト文字列
		{
			isDismissible: true, // ユーザーが通知を消せるかどうか
			// ユーザーが実行可能な任意のアクション
			actions: [
				{
					url: '#',
					label: 'View post',
				},
			],
		}
	);
} )( window.wp );
