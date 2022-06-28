import React from 'react';
import styled, { css } from 'styled-components';
import { Icons } from '../../Icons';
import StyledSvg from '../StyledComponents/StyledSvg';

interface CircleButtonProps {
	svgSrc: Icons;
	onClick: () => void;
	iconSize?: number;
	className?: string;
	backgroundColor?: string;
	text?: string;
	border?: boolean;
	circle?: boolean;
}
const IconButton: React.FC<CircleButtonProps> = ({
	svgSrc,
	onClick,
	className,
	iconSize = 0,
	backgroundColor = 'white',
	border = true,
	circle = true,
}) => {
	return (
		<Wrapper
			backgroundColor={backgroundColor}
			border={border}
			onClick={onClick}
			circle={circle}
			className={className}
			iconSize={iconSize}
		>
			<StyledSvg src={svgSrc} alt="logo" />
		</Wrapper>
	);
};

export default IconButton;

const Wrapper = styled.button<{
	backgroundColor: string;
	border: boolean;
	circle: boolean;
	iconSize: number;
}>`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.8em;
	${({ circle }) =>
		circle &&
		css`
			border-radius: 100%;
		`}
	${({ border }) =>
		border
			? css`
					border: 2px solid black;
			  `
			: css`
					border: none;
			  `};
	background-color: ${({ backgroundColor }) => backgroundColor};
	:hover {
		cursor: pointer;
		background-color: #d5d5d5;
	}
	img {
		${({ iconSize }) =>
			iconSize
				? css`
						width: ${iconSize + 'em'};
						height: ${iconSize + 'em'};
				  `
				: css`
						width: 'min-content';
						height: 'min-content';
				  `};
	}
`;
