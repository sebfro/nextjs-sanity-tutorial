import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors.module.css';

interface ButtonProps {
	callback: (val?: any) => void;
	text: string;
	disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ callback, text }) => {
	return (
		<CustomBtn
			className={`${colors.lightgrey} borderstyling btnborderstyling`}
			onClick={callback}
		>
			{text}
		</CustomBtn>
	);
};

export default Button;

const CustomBtn = styled.div<{ disabled?: boolean }>`
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	padding: 1em 1em;
	width: max-content;
	:hover {
		background-color: #30363d;
	}
	height: fit-content;
`;
