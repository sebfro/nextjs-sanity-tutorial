import * as React from 'react';
import { SvgProps } from './SvgGetter';

const Template: React.FC<SvgProps> = ({ fill = '#444F55' }) => (
	<svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M8.92 8 16 15.08l-.92.92L8 8.92.92 16 0 15.08 7.08 8 0 .92.92 0 8 7.08 15.08 0l.92.92L8.92 8Z"
			fill={fill}
		/>
	</svg>
);

export default Template;
