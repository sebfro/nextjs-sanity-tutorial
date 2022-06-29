import * as React from 'react';

interface ArrowDownProps {
	fill?: string;
}
const ArrowDown: React.FC<ArrowDownProps> = ({ fill = '#353E43' }) => (
	<svg width={16} height={10} fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M7.378 9.735.258 2.4a.925.925 0 0 1 0-1.28l.83-.856A.861.861 0 0 1 2.33.264L8 6.076 13.67.264a.861.861 0 0 1 1.242.001l.83.856a.925.925 0 0 1 0 1.28l-7.12 7.334a.861.861 0 0 1-1.244 0Z"
			fill={fill}
		/>
	</svg>
);

export default ArrowDown;
