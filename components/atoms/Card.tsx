import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';

interface GreyCardProps {
	backgroundColor?: string;
	includeBorder?: boolean;
	className?: string;
	button?: boolean;
	children: ReactElement;
}
const Card: React.FC<GreyCardProps> = ({
	children,
	backgroundColor = '#f5f5f5',
	includeBorder = true,
	button = false,
	className,
}) => {
	return (
		<Wrapper includeBorder={includeBorder} backgroundColor={backgroundColor}>
			{button ? (
				<button className={`${className} cardstyling`}>{children}</button>
			) : (
				<div className={`${className} cardstyling`}>{children}</div>
			)}
		</Wrapper>
	);
};

export default Card;

type WrapperProps = {
	backgroundColor?: string;
	includeBorder?: boolean;
};

const Wrapper = styled.div<WrapperProps>`
	.cardstyling {
		display: flex;
		${({ includeBorder = true }) =>
			includeBorder &&
			css`
				border: 1px solid #dedede;
			`};
		background-color: ${({ backgroundColor = '#f5f5f5' }) => backgroundColor};
		color: black;
	}
	button {
		width: 100%;
		padding: 0;
	}
`;

export const StyledCard = styled.button<{
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
