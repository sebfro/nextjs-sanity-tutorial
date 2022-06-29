import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { Icons } from '../../Icons';
import Card from '../Card';
import IconButton from './../Common/IconButton';

interface RiskCardRowprops {
	consequence: number;
	frequency: number;
	type: 'edit' | 'expand';
	backgroundColor?: string;
	includeBorder?: boolean;
}

const RiskCardRow: React.FC<RiskCardRowprops> = ({
	consequence,
	frequency,
	type,
	backgroundColor = '#f5f5f5',
	includeBorder = true,
}) => {
	const iconSrc = useMemo((): Icons => {
		switch (type) {
			case 'edit':
				return 'EditPencil';
			default:
				return 'Expand';
		}
	}, [type]);
	const handleClick = useCallback(() => {
		switch (type) {
			case 'edit':
				console.log('rediger');
				break;
			default:
				console.log('Expand');
				break;
		}
	}, [type]);

	return (
		<Card backgroundColor={backgroundColor} includeBorder={includeBorder}>
			<RiskCardContent>
				<div className="risktext">
					<p>{consequence * frequency}</p>
					<p>
						Drepte ({consequence}) * Ofte ({frequency})
					</p>
				</div>
				<IconButton
					backgroundColor={backgroundColor}
					svgSrc={iconSrc}
					onClick={handleClick}
					border={false}
				/>
			</RiskCardContent>
		</Card>
	);
};

export default RiskCardRow;

const RiskCardContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
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
