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
							<Temp>
								<Label>{labelText} </Label>
								{meta.touched && meta.error && (
									<p className="error">({meta.error}*)</p>
								)}
							</Temp>
							{children && children}
						</LabelWrapper>
						{textarea ? (
							<StyledTextarea
								className="styledinput"
								height={height}
								placeholder={placeholder}
								{...field}
							/>
						) : (
							<StyledInput
								className="styledinput"
								type="text"
								placeholder={placeholder}
								{...field}
							/>
						)}
						{/* {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>} */}
					</Wrapper>
				</div>
			)}
		</Field>
	);
};

export default FormTextInput;

const Wrapper = styled.div`
	.styledinput {
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
	.error {
		font-size: 14px;
		color: red;
	}
`;

const Temp = styled.div`
	display: flex;
	column-gap: 0.5em;
`;
