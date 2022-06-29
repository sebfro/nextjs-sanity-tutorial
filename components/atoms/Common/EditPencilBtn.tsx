import React from 'react';
import styled, { css } from 'styled-components';
import IconButton from './IconButton';

interface EditPencilBtnProps {
	onClick: () => void;
	border?: boolean;
	iconSize?: number;
	backgroundColor?: string;
}
const EditPencilBtn: React.FC<EditPencilBtnProps> = ({
	onClick,
	backgroundColor = 'white',
	border = false,
	iconSize = 3,
}) => {
	return (
		<EditPencil
			svgSrc="EditPencil"
			onClick={onClick}
			border={border}
			iconSize={iconSize}
			backgroundColor={backgroundColor}
		/>
	);
};

export default EditPencilBtn;

export const EditPencil = styled(IconButton)<{ border: boolean }>`
	${({ border }) =>
		border
			? css`
					border: 1px solid black;
			  `
			: css`
					border: none;
			  `};
`;
