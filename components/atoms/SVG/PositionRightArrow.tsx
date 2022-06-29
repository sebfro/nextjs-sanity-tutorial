import * as React from 'react';
import { SvgProps } from './SvgGetter';

const PositionRightArrow: React.FC<SvgProps> = ({ fill = '#444F55' }) => (
	<svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="m20.25 12-3 3v-2.25H8.123A2.242 2.242 0 0 1 6 14.25a2.25 2.25 0 1 1 2.123-3h9.127V9l3 3Z"
			fill={fill}
		/>
	</svg>
);

export default PositionRightArrow;
