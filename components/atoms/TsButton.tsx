import React from 'react';
import styled, { css } from 'styled-components';
import { StyledSvg } from './StyledComponents/StyledSvg';

interface TsButtonProps {
	callback: () => void;
	text: string;
	iconPath?: string;
	className?: string;
	centerText?: boolean;
	border?: boolean;
	type?: 'button' | 'submit' | 'reset' | undefined;
	reverse?: boolean;
}
const TsButton: React.FC<TsButtonProps> = ({
	callback,
	text,
	iconPath,
	className = '',
	centerText = false,
	border = true,
	type = undefined,
	reverse = false,
}) => {
	return (
		<Button
			border={border}
			centerText={centerText}
			onClick={callback}
			type={type}
			reverse={reverse}
			className={className}
		>
			{iconPath && (
				<CustomStyledSvg className="cursorhover" src={iconPath} alt="logo" />
			)}
			{text}
		</Button>
	);
};

export default TsButton;

const Button = styled.button<{
	centerText: boolean;
	border: boolean;
	reverse: boolean;
}>`
	border: ${({ border }) => (border ? '1px solid black' : 'none')};
	background-color: white;
	display: flex;
	column-gap: 12px;
	flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
	${({ centerText }) =>
		centerText
			? css`
					justify-content: center;
			  `
			: css`
					padding-left: 2em;
			  `};
	height: 3em;
	align-items: center;
	font-weight: bold;
	font-family: Inter;
	:hover {
		cursor: pointer;
	}
`;

const CustomStyledSvg = styled(StyledSvg)`
	width: 1em;
`;
