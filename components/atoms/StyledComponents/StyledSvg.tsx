import React from 'react';
import styled from 'styled-components';
import { Icons } from '../../Icons';

interface StyledSvgProps {
	src: Icons;
	alt: string;
	className?: string;
}
const StyledSvg: React.FC<StyledSvgProps> = ({ src, alt, className }) => {
	return <StyledSvgSC src={src} alt={alt} className={className} />;
};

export default StyledSvg;

export const StyledSvgSC = styled.img`
	width: 2em;
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 0.4em;
`;

export const StyledCursorPointerSvg = styled.img`
	width: 1em;
	display: flex;
	align-items: center;
	column-gap: 0.4em;
	:hover {
		cursor: pointer;
	}
`;
