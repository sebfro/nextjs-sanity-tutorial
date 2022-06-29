import * as React from 'react';
import { SvgProps } from './SvgGetter';

const InfoNotification: React.FC<SvgProps> = ({ fill = '#077197' }) => (
	<svg width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M9 0C4.032 0 0 4.032 0 9s4.032 9 9 9 9-4.032 9-9-4.032-9-9-9Zm0 13.5a.903.903 0 0 1-.9-.9V9c0-.495.405-.9.9-.9s.9.405.9.9v3.6c0 .495-.405.9-.9.9Zm.9-7.2H8.1V4.5h1.8v1.8Z"
			fill={fill}
		/>
	</svg>
);

export default InfoNotification;
