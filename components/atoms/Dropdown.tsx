import { FieldProps } from 'formik';
import React from 'react';
import styled from 'styled-components';

interface DropdownProps {
	name: string;
	id: string;
	options: string[];
}

const Dropdown: React.FC<DropdownProps & FieldProps> = ({
	id,
	name,
	options,
}) => {
	return (
		<div>
			<StyledSelect>
				{options.map((o, i) => (
					<option value={o} key={o + i} />
				))}
			</StyledSelect>
		</div>
	);
};

export default Dropdown;

const StyledSelect = styled.select`
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	height: 2em;
	border-radius: 5px;
	min-width: 15em;
	padding: 0.5em;
	color: white;
`;
