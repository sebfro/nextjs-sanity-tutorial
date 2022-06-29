import * as React from 'react';
import { SvgProps } from './SvgGetter';

const SignOut: React.FC<SvgProps> = ({ fill = '#fff' }) => (
	<svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="m10.36 11.68 2.84-2.84H5.84C5.4 8.84 5 8.48 5 8s.36-.84.84-.84h7.36l-2.84-2.84a.814.814 0 0 1-.24-.6c0-.2.08-.44.24-.56a.82.82 0 0 1 1.16 0l4.24 4.24c.16.16.24.36.24.6s-.08.44-.24.6l-4.24 4.24c-.16.16-.36.24-.6.24s-.44-.08-.56-.24c-.32-.36-.32-.84 0-1.16ZM5.56 0H2.44C1.08 0 0 1.08 0 2.44V13.6C0 14.92 1.08 16 2.44 16H5.6c.44 0 .8-.36.8-.8 0-.44-.36-.8-.8-.8H2.44c-.44 0-.8-.36-.8-.8V2.44c0-.44.36-.8.8-.8H5.6c.44 0 .8-.36.8-.8C6.4.4 6 0 5.56 0Z"
			fill={fill}
		/>
	</svg>
);

export default SignOut;
