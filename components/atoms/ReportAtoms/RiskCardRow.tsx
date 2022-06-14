import React, { useMemo } from 'react';
import styled from 'styled-components';
import Card from '../Card';
import { StyledSvg } from '../StyledComponents/StyledSvg';

interface RiskCardRowprops {
	consequence: number;
	frequency: number;
	type: 'edit' | 'expand';
	backgroundColor?: string;
}

const RiskCardRow: React.FC<RiskCardRowprops> = ({
	consequence,
	frequency,
	type,
	backgroundColor = '#f5f5f5',
}) => {
	const iconSrc = useMemo(() => {
		switch (type) {
			case 'edit':
				return '/EditPencil.svg';
			default:
				return '/Expand.png';
		}
	}, [type]);
	return (
		<Card backgroundColor={backgroundColor}>
			<RiskCardContent>
				<div className="risktext">
					<p>{consequence * frequency}</p>
					<p>
						Drepte ({consequence}) * Ofte ({frequency})
					</p>
				</div>
				<CustomStyledSvg className="cursorhover" src={iconSrc} alt="logo" />
			</RiskCardContent>
		</Card>
	);
};

export default RiskCardRow;

const RiskCardContent = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 1em;
	width: 100%;
	.risktext {
		align-items: center;
		display: flex;
		column-gap: 1em;
		p:first-of-type {
			font-size: 18px;
		}
		p:last-of-type {
			color: #444f55;
		}
	}
`;

const CustomStyledSvg = styled(StyledSvg)`
	width: 1em;
	height: 1em;
	align-self: center;
`;
