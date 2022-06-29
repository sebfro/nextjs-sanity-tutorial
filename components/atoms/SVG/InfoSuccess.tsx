import * as React from 'react';
import { SvgProps } from './SvgGetter';

const InfoSuccess: React.FC<SvgProps> = ({ fill = '#158925' }) => (
	<svg width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M9 0C4.05 0 0 4.05 0 9s4.05 9 9 9 9-4.05 9-9-4.05-9-9-9Z"
			fill={fill}
		/>
		<path
			d="m8.625 12.825-3.9-4.2 1.125-1.05 2.625 2.775 3.6-5.25 1.275.9-4.725 6.825Z"
			fill="#E8F3E9"
		/>
	</svg>
);

export default InfoSuccess;
