import React from 'react';
import styled from 'styled-components';
import TsButton from '../atoms/TsButton';
import { White } from '../../styles/Colors';

interface SaveButtonRowProps {
	confirmCallback: () => void;
	cancelCallback: () => void;
	className?: string;
	confirmBtnText?: string;
	cancelBtnText?: string;
	columnDirection?: boolean;
}

const SaveButtonRow: React.FC<SaveButtonRowProps> = ({
	cancelCallback,
	confirmCallback,
	className,
	cancelBtnText = 'Avbryt',
	confirmBtnText = 'Lagre',
	columnDirection = false,
}) => {
	return (
		<ButtonRow direction={columnDirection} className={className}>
			<TsButton
				centerText={columnDirection}
				text={cancelBtnText}
				callback={cancelCallback}
			/>
			<TsButton
				centerText={columnDirection}
				text={confirmBtnText}
				callback={confirmCallback}
			/>
		</ButtonRow>
	);
};

export default SaveButtonRow;

const ButtonRow = styled.div<{ direction: boolean }>`
	display: flex;
	justify-content: space-between;
	flex-direction: ${({ direction }) => (direction ? 'column-reverse' : 'row')};
	row-gap: 1em;
	button {
		width: 100%;
	}
	column-gap: 1em;
	button:first-of-type {
		color: #444f55;
		:hover {
			background-color: #dbd7d7;
		}
	}
	button:last-of-type {
		color: ${White};
		background-color: #444f55;
		:hover {
			background-color: #646a6d;
		}
	}
`;
