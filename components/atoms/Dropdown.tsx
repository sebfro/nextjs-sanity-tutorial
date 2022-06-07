import { Field, FieldProps } from 'formik';
import React, { useCallback } from 'react';
import styled from 'styled-components';

interface DropdownProps {
	name: string;
	id: string;
	options: string[];
	labelText: string;
}

const Dropdown: React.FC<DropdownProps> = ({
	id,
	name,
	options,
	labelText,
}) => {
	const handleChnage = useCallback((e: any) => {
		console.log(e.target.value);
	}, []);

	return (
		<div>
			<Label>{labelText} </Label>
			<Field as="select" name={name} onChange={handleChnage}>
				{options.map((o, i) => (
					<option value={o} key={o + i} />
				))}
			</Field>
		</div>
	);

	// return (
	// 	<Wrapper>
	// 		<label htmlFor={id}>Choose a car:</label>
	// 		<select
	// 			id={id}
	// 			onChange={handleChnage}
	// 			defaultValue="Velg ett alternativ..."
	// 		>
	// 			{options.map((o, i) => (
	// 				<option value={o} key={o + i} />
	// 			))}
	// 		</select>
	// 	</Wrapper>
	// );
};

export default Dropdown;

const Label = styled.p`
	font-weight: bold;
	color: black;
	font-size: 12px;
`;

const Wrapper = styled.div`
	select {
		width: 100%;
	}
`;

const StyledSelect = styled.select`
	/* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	height: 2em;
	border-radius: 5px; */
	width: 100%;
	/* padding: 0.5em;
	color: black; */
`;
