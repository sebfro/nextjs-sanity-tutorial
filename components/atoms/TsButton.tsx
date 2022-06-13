import React from 'react';
import styled, { css } from 'styled-components';

interface TsButtonProps {
	callback: () => void;
	text: string;
	centerText?: boolean;
}
const TsButton: React.FC<TsButtonProps> = ({
	callback,
	text,
	centerText = false,
}) => {
	return (
		<Button centerText={centerText} onClick={callback}>
			{text}
		</Button>
	);
};

export default TsButton;

const Button = styled.button<{ centerText: boolean }>`
	border: 1px solid black;
	background-color: white;
	display: flex;
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
