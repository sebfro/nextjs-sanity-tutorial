import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { White } from '../Colors';
import SaveButtonRow from './SaveButtonRow';

export interface ModalProps {
	isOpen: boolean;
	handleClose: () => void;
	handleConfirm: () => void;
	headerText: string;
	children: ReactElement;
	className?: string;
	includeBtnRow?: boolean;
	columnDirection?: boolean;
	confirmBtnText?: string;
	cancelBtnText?: string;
}
const Modal: React.FC<ModalProps> = ({
	isOpen,
	handleClose,
	handleConfirm,
	headerText,
	children,
	className,
	includeBtnRow = true,
	columnDirection = false,
	cancelBtnText = 'Avbryt',
	confirmBtnText = 'Lagre',
}) => {
	if (isOpen) {
		return (
			<ModalContainer>
				<ModalCard className={className}>
					<Heading>
						<h1>{headerText}</h1>
						<StyledSvg src="/piggy-bank.png" alt="logo" onClick={handleClose} />
					</Heading>
					{children}
					{includeBtnRow && (
						<SaveButtonRow
							cancelCallback={handleClose}
							confirmCallback={handleConfirm}
							columnDirection={columnDirection}
							cancelBtnText={cancelBtnText}
							confirmBtnText={confirmBtnText}
						/>
					)}
				</ModalCard>
			</ModalContainer>
		);
	} else {
		return null;
	}
};

export default Modal;

const Heading = styled.div`
	display: flex;
	justify-content: space-between;
	h1 {
		margin: 0;
		color: black;
		font-weight: normal;
		font-size: 24px;
	}
`;

const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.6);
`;

const ModalCard = styled.div`
	position: fixed;
	background: ${White};
	width: 50%;
	height: auto;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 2em 1.5em 1em;
	p {
		color: black;
	}
`;

const StyledSvg = styled.img`
	width: 20px;
	height: 24px;
	cursor: pointer;
	align-self: center;
`;
