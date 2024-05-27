import { registerBlockType } from '@wordpress/blocks';
import Edit from "./edit";
import Save from "./save";
import "./style.scss";

const x = 0;

registerBlockType( 'blocks-course/firstblock', {
	edit: Edit,
	save: Save,
} );
