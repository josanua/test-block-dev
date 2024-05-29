import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Save() {
	const blockProps = useBlockProps.save();
	return <p { ...blockProps }>Save JSX</p>;
}
