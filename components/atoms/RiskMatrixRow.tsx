import { isEqual } from 'lodash';
import React from 'react';
import styled from 'styled-components';
import { SelectedRiskValues } from '../../../types/Matrix';
import Radio from '../toggles/Radio';
import { FrequencyHeaders } from './Matrix';
const getScore = (riskCombination: any) => {
	const { risikoAlvorlighet, risikoSannsynlighet } = riskCombination ?? {};
	return +risikoAlvorlighet * +risikoSannsynlighet;
};
interface RiskMatrixRowProps {
	rowNr: string;
	matrixRow: FrequencyHeaders;
	values: SelectedRiskValues[];
	checkedValue: SelectedRiskValues | null;
	setCheckValue: (selectedRiskValues: SelectedRiskValues) => void;
}
const RiskMatrixRow: React.FC<RiskMatrixRowProps> = ({
	rowNr,
	matrixRow,
	values,
	checkedValue,
	setCheckValue,
}) => {
	return (
		<>
			<Category className={`colorRow${rowNr}Column1`}>
				<p>{matrixRow.categoryHeader}</p>
				<p>{matrixRow.categorySubheader}</p>
			</Category>
			{values.map((riskCombination, i) => (
				<RadioWrapper
					key={`radioWrapper_'${getScore(riskCombination)}`}
					className={`colorRow${rowNr}Column${i + 2}`}
				>
					<Radio
						checked={isEqual(riskCombination, checkedValue)}
						value={getScore(riskCombination)}
						key={getScore(riskCombination)}
						onChange={() => setCheckValue(riskCombination)}
					/>
				</RadioWrapper>
			))}
		</>
	);
};
export default RiskMatrixRow;
const Category = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.5em;
	p:last-of-type {
		font-size: small;
		margin-top: 4px;
	}
`;
const RadioWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
