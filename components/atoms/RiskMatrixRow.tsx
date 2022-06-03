import React from 'react';
import styled from 'styled-components';
import { CheckBoxRowValues } from '../../pages/risk/matrix';
import Checkcircle from './Checkcircle';

interface RiskMatrixRowProps {
	checkboxList: CheckBoxRowValues[];
	categoryHeader: string;
	categorySubheader: string;
	setCheckValue: (e: any) => void;
	rowNr: string;
}

const RiskMatrixRow: React.FC<RiskMatrixRowProps> = ({
	categoryHeader,
	categorySubheader,
	checkboxList,
	setCheckValue,
	rowNr,
}) => {
	return (
		<>
			<Category className={`colorRow${rowNr}Column1`}>
				<p>{categoryHeader}</p>
				<p>{categorySubheader}</p>
			</Category>
			{checkboxList.map(({ value, riskValue }, i) => (
				<Checkcircle
					className={`colorRow${rowNr}Column${i + 2}`}
					value={value}
					key={riskValue}
					onClickCallback={setCheckValue}
				/>
			))}
		</>
	);
};

export default RiskMatrixRow;

const Category = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.5em;
	p:last-child {
		font-size: small;
		margin-top: 4px;
	}
`;
