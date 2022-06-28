import React from 'react';
import styled, { css } from 'styled-components';
import Card from './Card';
import StyledSvg from './StyledComponents/StyledSvg';

type StatusType = 'error' | 'success' | 'warning';
interface ResultStatusCard {
	text: string;
	status: StatusType;
}
const ResultStatusCard: React.FC<ResultStatusCard> = ({ status, text }) => {
	return (
		<StyledCard status={status}>
			<>
				<StyledSvg src={'/Info_Success.svg'} alt="Success checkmark" />
				<p>{text}</p>
			</>
		</StyledCard>
	);
};

export default ResultStatusCard;

const StyledCard = styled(Card)<{ status: StatusType }>`
	padding: 0.5em 0.6em;
	p {
		margin: 0;
		font-size: 14px;
		line-height: 18px;
		color: #444f55;
	}
	img {
		width: 18px;
		height: 18px;
	}
	align-items: center;
	column-gap: 0.8em;
	${({ status }) => {
		switch (status) {
			case 'error':
				return css`
					background-color: #f0dcdc;
					border-color: #b76565;
				`;
			case 'success':
				return css`
					background-color: #e8f3e9;
					border-color: #64b16e;
				`;
			default:
				return css`
					background-color: #f7f7b5|;
					border-color: #dfdb68;
				`;
		}
	}}
`;
