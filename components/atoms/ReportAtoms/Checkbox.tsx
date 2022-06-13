import React, { useCallback } from 'react';
import styled from 'styled-components';

interface CheckboxProps {
	onClickCallback: (value: string) => void;
	value: string;
}
const Checkbox: React.FC<CheckboxProps> = ({
	onClickCallback,
	value,
	className,
}) => {
	const handleChange = useCallback(
		(e: any) => {
			onClickCallback(e.target.value);
		},
		[onClickCallback]
	);

	return (
		<Wrapper className={className}>
			<CustomCheckbox
				name="risk"
				type="checkbox"
				value={value}
				onChange={handleChange}
			/>
		</Wrapper>
	);
};

export default Checkbox;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const CustomCheckbox = styled.input`
	height: 2em;
	align-self: center;
`;
