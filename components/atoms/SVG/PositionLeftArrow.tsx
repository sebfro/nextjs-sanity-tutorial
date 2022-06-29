import * as React from 'react';
import { SvgProps } from './SvgGetter';

const PositionLeftArrow: React.FC<SvgProps> = ({ fill = '#444F55' }) => (
	<svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M18 9.75c-.983 0-1.815.623-2.123 1.5H4.5v1.5h11.377a2.25 2.25 0 1 0 2.123-3Z"
			fill={fill}
		/>
	</svg>
);

export default PositionLeftArrow;
