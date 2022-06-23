import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { StyledSvg } from './../StyledComponents/StyledSvg';

interface CircleButtonProps {
	svgSrc: string;
	backgroundColor?: string;
	text?: string;
	border?: boolean;
}
const CircleButton: React.FC<CircleButtonProps> = ({
	svgSrc,
	backgroundColor = 'white',
	border = true,
}) => {
	const handleClick = useCallback(() => {
		console.log('clicky');
	}, []);

	return (
		<Wrapper
			backgroundColor={backgroundColor}
			border={border}
			onClick={handleClick}
		>
			<StyledSvg src={svgSrc} alt="logo" />
		</Wrapper>
	);
};

export default CircleButton;

const Wrapper = styled.button<{ backgroundColor: string; border: boolean }>`
	border-radius: 50%;
	border: ${({ border }) => (border ? '2px solid black' : 'none')};
	background-color: ${({ backgroundColor }) => backgroundColor};
	width: min-content;
	height: min-content;
	padding: 0.8em;
	:hover {
		cursor: pointer;
		background-color: #d5d5d5;
	}
	img {
		width: 2em;
		height: 2em;
	}
`;
