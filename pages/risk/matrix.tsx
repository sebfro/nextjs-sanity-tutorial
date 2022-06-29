import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import RiskMatrixRow from '../../components/atoms/RiskMatrixRow';
import { ColorWrapper } from '../../components/atoms/StyledComponents/RiskMatrixColors';

export interface CheckBoxRowValues {
	value: string;
	riskValue: number;
}

const FirstRowCheckboxValues: CheckBoxRowValues[][] = [
	[
		{ value: 'Lett skade', riskValue: 1 },
		{ value: 'Hard skade', riskValue: 2 },
		{ value: 'Drept', riskValue: 3 },
		{ value: 'Flere drepte', riskValue: 4 },
	],
	[
		{ value: 'Lett skade', riskValue: 5 },
		{ value: 'Hard skade', riskValue: 6 },
		{ value: 'Drept', riskValue: 7 },
		{ value: 'Flere drepte', riskValue: 8 },
	],
	[
		{ value: 'Lett skade', riskValue: 9 },
		{ value: 'Hard skade', riskValue: 10 },
		{ value: 'Drept', riskValue: 11 },
		{ value: 'Flere drepte', riskValue: 12 },
	],
	[
		{ value: 'Lett skade', riskValue: 13 },
		{ value: 'Hard skade', riskValue: 14 },
		{ value: 'Drept', riskValue: 15 },
		{ value: 'Flere drepte', riskValue: 16 },
	],
];

const Matrix: React.FC = () => {
	// const [checkedValue, setCheckedValue] = useState<string | null>(null);
	// const setCheckValue = useCallback((value: string) => {
	// 	setCheckedValue(value);
	// }, []);

	return (
		<ColorWrapper>
			<StyledForm>
				<Heading className="columnOne bold colorRow1Column1">
					Risikomatrise
				</Heading>
				<Heading className="colorRow1Column2">Lettere skadd</Heading>
				<Heading className="colorRow1Column3">Hardt skadd</Heading>
				<Heading className="colorRow1Column4">Drept</Heading>
				<Heading className="colorRow1Column5">Flere drepte</Heading>
				{/* <RiskMatrixRow
					categoryHeader="Svært ofte"
					categorySubheader="Minst 1 gang pr år"
					checkboxList={FirstRowCheckboxValues[0]}
					setCheckValue={setCheckValue}
					rowNr="2"
				/>
				<RiskMatrixRow
					categoryHeader="Ofte"
					categorySubheader="1 gang hvert 2.-10 år"
					checkboxList={FirstRowCheckboxValues[1]}
					setCheckValue={setCheckValue}
					rowNr="3"
				/>
				<RiskMatrixRow
					categoryHeader="Sjelden"
					categorySubheader="1 gang hvert 10-30. år"
					checkboxList={FirstRowCheckboxValues[2]}
					setCheckValue={setCheckValue}
					rowNr="4"
				/>
				<RiskMatrixRow
					categoryHeader="Svært sjelden"
					categorySubheader="Sjeldnere enn hvert 30. år"
					checkboxList={FirstRowCheckboxValues[3]}
					setCheckValue={setCheckValue}
					rowNr="4"
				/> */}
				<BottomRow>
					<p className="bold">Alvorighetsscore</p>
					<p>|</p>
					<p>Valgt Sansynlighet * Valgt Alvorlighet</p>
				</BottomRow>
			</StyledForm>
		</ColorWrapper>
	);
};

export default Matrix;

const StyledForm = styled.form`
	display: grid;
	background-color: #ffeaca;
	grid-template-columns: 30% 17.5% 17.5% 17.5% 17.5%;
	grid-template-rows: auto;
	border: 3px solid white;
	p {
		color: black;
		margin: 0;
	}
	.columnOne {
		justify-content: start;
	}
	.bold {
		font-weight: bold;
	}
`;

const Heading = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: black;
	padding: 0.5em;
`;

const BottomRow = styled.div`
	grid-column: 1 / 6;
	padding: 0.6em;
	color: black;
	display: flex;
	column-gap: 8px;
	background-color: #ffe0b3;
	p:last-child {
		display: flex;
		align-items: center;
		font-style: italic;
		font-size: small;
	}
`;
