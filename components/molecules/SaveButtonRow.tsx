import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import TsButton from '../atoms/TsButton';
import StyledButton from './../atoms/Common/StyledButton';

interface SaveButtonRowProps {
	confirmCallback: () => void;
	cancelCallback: () => void;
	confirmBtnText?: string;
	cancelBtnText?: string;
}

const SaveButtonRow: React.FC<SaveButtonRowProps> = ({
	cancelCallback,
	confirmCallback,
	cancelBtnText = 'Avbryt',
	confirmBtnText = 'Lagre',
}) => {
	return (
		<ButtonRow>
			<TsButton text={cancelBtnText} callback={cancelCallback} />
			<TsButton text={confirmBtnText} callback={confirmCallback} />
		</ButtonRow>
	);
};

export default SaveButtonRow;

const ButtonRow = styled.div`
	display: flex;
	justify-content: space-between;
	button {
		width: 100%;
	}
	column-gap: 1em;
	button:first-of-type {
		color: #444f55;
	}
	button:last-of-type {
		color: white;
		background-color: #444f55;
	}
`;
