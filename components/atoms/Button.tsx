import React from "react";
import styled from "styled-components";

interface ButtonProps {
    callback: () => void;
    text: string;
}

const Button: React.FC<ButtonProps> = ({ callback, text }) => {
	return (
		<CustomBtn className="custombtn" onClick={callback} >{text}</CustomBtn>
	);
};

export default Button;

const CustomBtn = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 1em 1em;
    margin: 0 0.5em 0 0.5em;
    width: fit-content;
    :hover {
        background-color: lightgray;
    }
    height: fit-content;
`;