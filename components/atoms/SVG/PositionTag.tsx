import * as React from 'react';
import { SvgProps } from './SvgGetter';

const PositionTag: React.FC<SvgProps> = ({ fill = '#444F55' }) => (
	<svg width={20} height={30} fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M10 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
			stroke={fill}
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M18 14c-3 7-8 15-8 15s-5-8-8-15S4 1 10 1s11 6 8 13Z"
			stroke={fill}
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export default PositionTag;
