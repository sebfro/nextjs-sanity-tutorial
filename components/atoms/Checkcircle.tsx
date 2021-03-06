import React, { useCallback } from 'react';
import styled from 'styled-components';

interface CheckcircleProps {
	onClickCallback: (value: string) => void;
	value: number;
	checked: boolean;
	className: string;
}
const Checkcircle: React.FC<CheckcircleProps> = ({
	onClickCallback,
	value,
	checked,
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
				type="radio"
				checked={checked}
				value={value}
				onChange={handleChange}
			/>
		</Wrapper>
	);
};

export default Checkcircle;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const CustomCheckbox = styled.input`
	width: 2em;
`;
