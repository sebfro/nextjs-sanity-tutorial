import React from 'react';
import styled from 'styled-components';

interface TsButtonProps {
	callback: () => void;
	text: string;
}
const TsButton: React.FC<TsButtonProps> = ({ callback, text }) => {
	return <Button onClick={callback}>{text}</Button>;
};

export default TsButton;

const Button = styled.button`
	border: 1px solid black;
	background-color: white;
	display: flex;
	padding-left: 2em;
	height: 3em;
	align-items: center;
	font-weight: bold;
	font-family: Inter;
`;
