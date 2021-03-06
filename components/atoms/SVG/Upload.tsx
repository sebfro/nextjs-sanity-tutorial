import * as React from 'react';
import { SvgProps } from './SvgGetter';

const Upload: React.FC<SvgProps> = ({ fill = '#444F55' }) => (
	<svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M4.68 8.46c-.24-.24-.36-.54-.36-.84 0-.36.12-.66.36-.9L11.04.36c.24-.24.54-.36.9-.36s.66.12.9.36l6.36 6.36c.48.48.48 1.26 0 1.74-.24.24-.54.36-.84.36-.36 0-.66-.12-.9-.36L13.2 4.2v11.1c0 .66-.54 1.26-1.26 1.26s-1.26-.54-1.26-1.26V4.2L6.42 8.46c-.48.48-1.2.48-1.74 0Zm18.06 6c-.66 0-1.2.54-1.2 1.2v4.74c0 .66-.54 1.2-1.2 1.2H3.6c-.66 0-1.2-.54-1.2-1.2v-4.74c0-.66-.54-1.2-1.2-1.2-.66 0-1.2.54-1.2 1.2v4.74C-.06 22.38 1.56 24 3.6 24h16.74c1.98 0 3.66-1.62 3.66-3.66V15.6c-.06-.6-.6-1.14-1.26-1.14Z"
			fill={fill}
		/>
	</svg>
);

export default Upload;
