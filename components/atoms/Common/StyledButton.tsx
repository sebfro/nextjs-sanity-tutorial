import React, { useCallback } from "react";
import styled from "styled-components";
import Button from "../Button";

interface StyledAtomsProps {
	text: string;
	callback: (value?: never) => void;
	callbackValue?: never;
}
const StyledButton: React.FC<StyledAtomsProps> = ({ callback, text, callbackValue }) => {
	const handleClick = useCallback(
		() => {
			if (callbackValue) callback(callbackValue);
			callback();
		},
		[],
	);

	return (
		<ButtonWrapper><Button callback={handleClick} text={text} /></ButtonWrapper>
	);
};

export default StyledButton;

const ButtonWrapper = styled.div`
	margin: 0 0.5em 0 0.5em;
`;