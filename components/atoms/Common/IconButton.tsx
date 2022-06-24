import React from 'react';
import styled, { css } from 'styled-components';
import { StyledSvg } from '../StyledComponents/StyledSvg';

interface CircleButtonProps {
	svgSrc: string;
	handleClickCallback: () => void;
	btnHeight?: number;
	btnWidth?: number;
	iconHeight?: number;
	iconWidth?: number;
	className?: string;
	backgroundColor?: string;
	text?: string;
	border?: boolean;
	circle?: boolean;
}
const IconButton: React.FC<CircleButtonProps> = ({
	svgSrc,
	handleClickCallback,
	className,
	btnHeight = 0,
	btnWidth = 0,
	iconHeight = 2,
	iconWidth = 2,
	backgroundColor = 'white',
	border = true,
	circle = true,
}) => {
	return (
		<Wrapper
			backgroundColor={backgroundColor}
			border={border}
			onClick={handleClickCallback}
			circle={circle}
			className={className}
			btnHeight={btnHeight}
			btnWidth={btnWidth}
			iconHeight={iconHeight}
			iconWidth={iconWidth}
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
	btnHeight: number;
	btnWidth: number;
	iconHeight: number;
	iconWidth: number;
}>`
	display: flex;
	justify-content: center;
	align-items: center;
	${({ circle }) =>
		circle &&
		css`
			border-radius: 100%;
		`}
	${({ border }) =>
		border
			? css`
					border: 2px solid black;
					padding: 0.8em;
			  `
			: css`
					border: none;
					padding: 0;
			  `};
	background-color: ${({ backgroundColor }) => backgroundColor};
	width: min-content;
	height: min-content;
	:hover {
		cursor: pointer;
		background-color: #d5d5d5;
	}
	img {
		width: 2em;
		height: 2em;
	}
`;
