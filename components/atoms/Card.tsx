import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';

interface GreyCardProps {
	backgroundColor?: string;
	includeBorder?: boolean;
	className?: string;
	children: ReactElement;
}
const Card: React.FC<GreyCardProps> = ({
	children,
	backgroundColor = '#f5f5f5',
	includeBorder = true,
	className,
}) => {
	return (
		<StyledCard
			className={className}
			includeBorder={includeBorder}
			backgroundColor={backgroundColor}
		>
			{children}
		</StyledCard>
	);
};

export default Card;

export const StyledCard = styled.div<{
	backgroundColor?: string;
	includeBorder?: boolean;
}>`
	display: flex;
	${({ includeBorder = true }) =>
		includeBorder &&
		css`
			border: 1px solid #dedede;
		`};
	background-color: ${({ backgroundColor = '#f5f5f5' }) => backgroundColor};
	color: black;
`;
