import { FieldProps } from 'formik';
import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors.module.css';

interface FormTextInputProps {
	type?: string;
	placeholder?: string;
}

const FormTextInput: React.FC<FormTextInputProps & FieldProps> = ({
	field,
	form,
	type,
	placeholder = '',
	...props
}) => {
	return (
		<div>
			<StyledInput
				className={`${colors.lightgrey} borderstyling`}
				type={type}
				{...field}
				{...props}
				placeholder={placeholder}
			/>
			{/* {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>} */}
		</div>
	);
};

export default FormTextInput;

const StyledInput = styled.input`
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	height: 2em;
	border-radius: 5px;
	min-width: 15em;
	padding: 0.5em;
	color: white;
`;
