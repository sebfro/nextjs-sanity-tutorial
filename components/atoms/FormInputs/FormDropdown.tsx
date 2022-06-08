import { Field } from 'formik';
import React from 'react';
import styled from 'styled-components';

interface DropdownProps {
	name: string;
	options: string[];
	labelText: string;
	placeholder?: string;
}

const FormDropdown: React.FC<DropdownProps> = ({
	name,
	options,
	labelText,
	placeholder = 'Velg ett alternativ...',
}) => {
	return (
		<Wrapper>
			<Label>{labelText} </Label>
			<Field as="select" name={name} id={name}>
				<option className="default" value="" disabled>
					{placeholder}
				</option>
				{options.map((o, i) => (
					<option value={o} key={o + i}>
						{o}
					</option>
				))}
			</Field>
		</Wrapper>
	);
};

export default FormDropdown;

const Label = styled.p`
	font-weight: bold;
	color: black;
	font-size: 12px;
`;

const Wrapper = styled.div`
	.default {
		color: #97989b;
	}
	select {
		width: 100%;
		border: 2px solid #97989b;
		height: 44px;
		background-color: white;
	}
`;
