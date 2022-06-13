import { Field, FieldProps } from 'formik';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Label } from '../Common/Label';

interface FormTextInputProps {
	labelText: string;
	name: string;
	children?: ReactElement;
	placeholder?: string;
	className?: string;
	textarea?: boolean;
	height?: number;
}

const FormTextInput: React.FC<FormTextInputProps> = ({
	className,
	labelText,
	name,
	children,
	placeholder = '',
	textarea = false,
	height = 2,
}) => {
	return (
		<Field name={name}>
			{({
				field, // { name, value, onChange, onBlur }
				form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
				meta,
			}: FieldProps) => (
				<div className={className}>
					<Wrapper>
						<LabelWrapper>
							<Label>{labelText} </Label>
							{children && children}
						</LabelWrapper>
						{textarea ? (
							<StyledTextarea
								height={height}
								placeholder={placeholder}
								{...field}
							/>
						) : (
							<StyledInput type="text" placeholder={placeholder} {...field} />
						)}
						{/* {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>} */}
					</Wrapper>
					{meta.touched && meta.error && (
						<div className="error">{meta.error}</div>
					)}
				</div>
			)}
		</Field>
	);
};

export default FormTextInput;

const Wrapper = styled.div`
	input,
	textarea {
		min-width: 15em;
		padding: 0.5em;
		border: 2px solid #97989b;
		width: -moz-available;
		width: -webkit-fill-available;
	}
`;

const StyledInput = styled.input`
	height: 2em;
`;

const StyledTextarea = styled.textarea<{ height: number }>`
	height: ${({ height }) => height + 'em'};
	resize: none;
`;

const LabelWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;
