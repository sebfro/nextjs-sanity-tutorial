import React from "react";
import styled from "styled-components";

interface StyledAtomsProps {
    children: JSX.Element;
}
const StyledButton: React.FC<StyledAtomsProps> = ({ children }) => {
	return (
		<ButtonWrapper>{children}</ButtonWrapper>
	);
};

export default StyledButton;

const ButtonWrapper = styled.div`
	margin: 0 0.5em 0 0.5em;
`;