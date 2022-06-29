import * as React from 'react';

interface CircleArrowLeftProps {
	fill?: string;
}
const CircleArrowLeft: React.FC<CircleArrowLeftProps> = ({
	fill = '#858D90',
}) => (
	<svg width={8} height={12} fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="m7.157 6.415-4.89 4.747a.616.616 0 0 1-.853 0l-.57-.554a.574.574 0 0 1-.001-.828L4.717 6 .843 2.22a.574.574 0 0 1 0-.828l.57-.554a.617.617 0 0 1 .855 0l4.889 4.747c.235.23.235.6 0 .83Z"
			fill={fill}
		/>
	</svg>
);

export default CircleArrowLeft;
