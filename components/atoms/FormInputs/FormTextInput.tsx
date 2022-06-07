import { FieldProps } from 'formik';
import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors.module.css';

interface FormTextInputProps {
	labelText: string;
	type?: string;
	placeholder?: string;
	className?: string;
}

const FormTextInput: React.FC<FormTextInputProps & FieldProps> = ({
	field,
	form,
	type,
	className,
	labelText,
	placeholder = '',
	...props
}) => {
	return (
		<div className={className}>
			<Label>{labelText} </Label>
			<StyledInput
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

const Label = styled.p`
	font-weight: bold;
	color: black;
	font-size: 12px;
`;

const StyledInput = styled.input`
	/* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
	height: 2em;
	/* border-radius: 5px; */
	min-width: 15em;
	padding: 0.5em;
	/* color: white; */
	border: 2px solid #97989b;
	width: -moz-available;
`;
