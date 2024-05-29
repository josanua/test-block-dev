import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import './style.scss';

registerBlockType( 'blocks-course/firstblock', {
	icon: {
		src: 'format-status',
		background: '#f03',
		foreground: '#fff',
	},
	edit: Edit,
	save: Save,
} );
