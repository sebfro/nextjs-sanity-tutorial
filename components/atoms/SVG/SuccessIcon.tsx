import * as React from 'react';
import { SvgProps } from './SvgGetter';

const SuccessIcon: React.FC<SvgProps> = ({ fill = '#158925' }) => (
	<svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0Z"
			fill={fill}
		/>
		<path
			d="M11.433 17.1 6.3 11.52l1.492-1.38 3.462 3.72 4.775-6.96 1.67 1.2-6.266 9Z"
			fill="#fff"
		/>
	</svg>
);

export default SuccessIcon;
