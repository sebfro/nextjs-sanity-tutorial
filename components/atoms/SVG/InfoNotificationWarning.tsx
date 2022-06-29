import * as React from 'react';
import { SvgProps } from './SvgGetter';

const InfoNotificationWarning: React.FC<SvgProps> = ({ fill = '#444F55' }) => (
	<svg width={16} height={14} fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="m15.333 7-1.626-1.853.226-2.454-2.406-.546-1.26-2.12L8 1 5.733.027l-1.26 2.12-2.406.54.226 2.453L.667 7l1.626 1.853-.226 2.46 2.406.547 1.26 2.12L8 13l2.267.973 1.26-2.12 2.406-.546-.226-2.454L15.333 7Zm-3.006 1.407.173 1.86-1.827.413-.953 1.607-1.72-.74-1.72.74-.953-1.607-1.827-.413.173-1.867L2.44 7l1.233-1.413L3.5 3.733l1.827-.406.953-1.607L8 2.453l1.72-.74.953 1.607 1.827.413-.173 1.86L13.56 7l-1.233 1.407ZM7.333 9h1.334v1.333H7.333V9Zm0-5.333h1.334v4H7.333v-4Z"
			fill={fill}
		/>
	</svg>
);

export default InfoNotificationWarning;
