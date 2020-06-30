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
