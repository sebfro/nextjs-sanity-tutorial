import * as React from 'react';
import { SvgProps } from './SvgGetter';

const Expand: React.FC<SvgProps> = ({ fill = '#444F55' }) => (
	<svg width={24} height={25} fill="none" xmlns="http://www.w3.org/2000/svg">
		<g clipPath="url(#a)">
			<path
				d="m11.495 15.148-4.138 4.138 1.47 1.385c.675.675.197 1.829-.758 1.829h-5A1.07 1.07 0 0 1 2 21.429v-5c0-.955 1.152-1.433 1.827-.758l1.387 1.472 4.138-4.138a.714.714 0 0 1 1.01 0l1.133 1.133a.714.714 0 0 1 0 1.01Zm1.01-5.296 4.138-4.138-1.47-1.385c-.675-.675-.197-1.829.758-1.829h5c.591 0 1.069.48 1.069 1.071v5c0 .955-1.152 1.433-1.827.758l-1.387-1.472-4.138 4.138a.714.714 0 0 1-1.01 0l-1.133-1.133a.714.714 0 0 1 0-1.01Z"
				fill={fill}
			/>
		</g>
		<defs>
			<clipPath id="a">
				<path fill="#fff" transform="translate(2 2.5)" d="M0 0h20v20H0z" />
			</clipPath>
		</defs>
	</svg>
);

export default Expand;
