import { Field, FieldProps } from 'formik';
import React from 'react';
import styled from 'styled-components';

interface CheckboxProps {
	value: string;
	name: string;
	label?: string;
}
const Checkbox: React.FC<CheckboxProps> = ({ name, label }) => {
	return (
		<Field name={name}>
			{({ field }: FieldProps) => (
				<Wrapper>
					<CustomCheckbox
						type="checkbox"
						// value={value}
						// onChange={handleChange}
						{...field}
					/>
					{label && <p>{label}</p>}
				</Wrapper>
			)}
		</Field>
	);
};

export default Checkbox;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	width: fit-content;
	align-items: center;
	p {
		color: #444f55;
		margin: 0;
	}
	column-gap: 10px;
`;

const CustomCheckbox = styled.input`
	height: 24px;
	width: 24px;
	align-self: center;
`;
