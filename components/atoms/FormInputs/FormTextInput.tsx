import { Field, FieldProps } from 'formik';
import React from 'react';
import styled from 'styled-components';

interface FormTextInputProps {
	labelText: string;
	name: string;
	placeholder?: string;
	className?: string;
}

const FormTextInput: React.FC<FormTextInputProps> = ({
	className,
	labelText,
	name,
	placeholder = '',
}) => {
	return (
		<Field name={name}>
			{({
				field, // { name, value, onChange, onBlur }
				form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
				meta,
			}: FieldProps) => (
				<div className={className}>
					<div>
						<Label>{labelText} </Label>
						<StyledInput type="text" placeholder={placeholder} {...field} />
						{/* {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>} */}
					</div>
					{meta.touched && meta.error && (
						<div className="error">{meta.error}</div>
					)}
				</div>
			)}
		</Field>
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
