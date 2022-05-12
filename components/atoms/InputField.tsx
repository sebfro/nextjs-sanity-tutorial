import React from "react";
import styled from "styled-components";

interface InputFieldProps {
    label: string;
    handleInput: () => void;
    name: string;
    inputValue: string;
    type?: string;
}
const InputField: React.FC<InputFieldProps> = ({label, handleInput, name, inputValue, type = "text"}) => {
	return (
		<CustomInput required type={type} name={name} value={inputValue}/>
	);
};

export default InputField;

const CustomInput = styled.input`
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 0 1em;
    margin-bottom: 1em;
`;