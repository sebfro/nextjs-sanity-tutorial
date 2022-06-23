import React from 'react';
import styled from 'styled-components';
import TsButton from '../TsButton';

interface ButtonRowProps {
	confirmCallback: () => void;
	cancelCallback: () => void;
	className?: string;
	confirmBtnText?: string;
	cancelBtnText?: string;
	type?: 'button' | 'submit' | 'reset' | undefined;
}
const ButtonRow: React.FC<ButtonRowProps> = ({
	cancelCallback,
	confirmCallback,
	className,
	cancelBtnText = 'Avbryt',
	confirmBtnText = 'Lagre',
	type = undefined,
}) => {
	return (
		<ButtonRowWrapper className={className}>
			<TsButton
				centerText
				text={confirmBtnText}
				callback={confirmCallback}
				border={false}
				type={type}
			/>
			<TsButton
				border={false}
				centerText
				text={cancelBtnText}
				callback={cancelCallback}
				iconPath="/Trash.png"
			/>
		</ButtonRowWrapper>
	);
};

export default ButtonRow;

const ButtonRowWrapper = styled.div`
	display: flex;
	/* justify-content: space-between; */
	row-gap: 1em;
	button {
		width: fit-content;
		padding: 0 3em;
	}
	column-gap: 1em;
	button:first-of-type {
		color: white;
		background-color: #444f55;
		:hover {
			background-color: #646a6d;
		}
	}
	button:last-of-type {
		color: #444f55;
		:hover {
			background-color: #dbd7d7;
		}
		border: none;
	}
`;
