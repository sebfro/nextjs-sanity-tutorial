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
		<>
			{button ? (
				<CardBtn className={`${className} cardstyling`}>{children}</CardBtn>
			) : (
				<CardDiv
					includeBorder={includeBorder}
					backgroundColor={backgroundColor}
					className={`${className}`}
				>
					{children}
				</CardDiv>
			)}
		</>
	);
};

export default Card;

type CardProps = {
	backgroundColor?: string;
	includeBorder?: boolean;
};

const CardBtn = styled.button<CardProps>`
	display: flex;
	${({ includeBorder = true }) =>
		includeBorder &&
		css`
			border: 1px solid #dedede;
		`};
	background-color: ${({ backgroundColor = '#f5f5f5' }) => backgroundColor};
	color: black;
	width: 100%;
	padding: 0;
`;

export const CardDiv = styled.div<CardProps>`
	display: flex;
	${({ includeBorder = true }) =>
		includeBorder &&
		css`
			border: 1px solid #dedede;
		`};
	background-color: ${({ backgroundColor = '#f5f5f5' }) => backgroundColor};
	color: black;
`;
