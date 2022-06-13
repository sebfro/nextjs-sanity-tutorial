import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface GreyCardProps {
	backgroundColor?: string;
	children: ReactElement;
}
const Card: React.FC<GreyCardProps> = ({
	children,
	backgroundColor = '#f5f5f5',
}) => {
	return <StyledCard backgroundColor={backgroundColor}>{children}</StyledCard>;
};

export default Card;

export const StyledCard = styled.div<{ backgroundColor: string }>`
	display: flex;
	/* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
	/* padding: 0 1em; */
	border: 1px solid #dedede;
	background-color: ${({ backgroundColor }) => backgroundColor};
	color: black;
`;
