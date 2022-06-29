import * as React from 'react';

interface ArrowUpProps {
	fill?: string;
}
const ArrowUp: React.FC<ArrowUpProps> = ({ fill = '#353E43' }) => (
	<svg width={16} height={10} fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="m8.622.265 7.12 7.334a.925.925 0 0 1 0 1.28l-.83.856a.861.861 0 0 1-1.242.001L8 3.924 2.33 9.736a.861.861 0 0 1-1.242-.001l-.83-.856a.925.925 0 0 1 0-1.28L7.378.265a.861.861 0 0 1 1.244 0Z"
			fill={fill}
		/>
	</svg>
);

export default ArrowUp;
