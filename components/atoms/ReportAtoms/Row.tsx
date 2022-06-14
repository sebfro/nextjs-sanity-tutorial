import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';

interface RowProps {
	firstText: string;
	secondText?: string;
	children?: ReactElement;
	includeLine?: boolean;
	reverseDirection?: boolean;
}
const Row: React.FC<RowProps> = ({
	firstText,
	secondText,
	children,
	includeLine = true,
	reverseDirection = false,
}) => {
	return (
		<Container border={includeLine}>
			<TextWrapper reverseDirection={reverseDirection}>
				<p>{firstText}</p>
				{children ? children : <p>{secondText}</p>}
			</TextWrapper>
		</Container>
	);
};

export default Row;

const TextWrapper = styled.div<{ reverseDirection: boolean }>`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	p:first-of-type {
		font-weight: bold;
	}
	p:last-of-type {
		color: #444f55;
	}
	p {
		margin: 0;
	}
	margin: 0.9em 0;
	align-items: center;
	flex-direction: ${({ reverseDirection }) =>
		reverseDirection ? 'row-reverse' : 'row'};
`;

const Container = styled.div<{ border: boolean }>`
	${({ border }) =>
		border &&
		css`
			border-top: 1px solid #dadada;
		`};
`;
