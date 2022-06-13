import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import Card from '../../components/atoms/Card';
import FormTextInput from '../../components/atoms/FormInputs/FormTextInput';
import Header from '../../components/atoms/ReportAtoms/Header';
import Row from '../../components/atoms/ReportAtoms/Row';
import Thumbnail from '../../components/atoms/ReportAtoms/Thumbnail';
import { StyledSvg } from '../../components/atoms/StyledComponents/StyledSvg';
import { Label } from './../../components/atoms/Common/Label';

export interface InitialValues {
	description: string;
	suggestion: string;
	handbookReference: string;
	risk: string;
}

const Report: React.FC = () => {
	const initialValues: InitialValues = {
		description: '',
		suggestion: '',
		handbookReference: '',
		risk: '',
	};

	const handleSubmit = useCallback(
		async (
			values: InitialValues,
			formikHelpers: FormikHelpers<InitialValues>
		) => {
			console.log(values);
			console.log('--------');
		},
		[]
	);

	const handleEditClick = useCallback(() => {
		console.log('How edit work?');
	}, []);

	return (
		<div>
			<Card backgroundColor="white">
				<Formik initialValues={initialValues} onSubmit={handleSubmit}>
					{(props: FormikProps<InitialValues>) => (
						<StyledForm>
							<Card>
								<Header
									headingNumber={4}
									title="Annet problem i sidearealet"
									discoveryType="Avvik"
									discovery="Eksisterende rekkverk"
									handleOnClick={handleEditClick}
								/>
							</Card>
							<ReportBody>
								<Card>
									<SideCardWrapper>
										<Thumbnail thumbnailPath="/ExampleMap.png" />
										<SideCardContent>
											<Row
												firstText="Posisjon"
												secondText="14 - 21 %"
												includeLine={false}
											>
												<CustomStyledSvg
													className="cursorhover"
													src="/EditPencil.svg"
													alt="logo"
												/>
											</Row>
											<CoordinateRow>
												<CustomStyledSvg src="/ArrowRight.png" alt="logo" />
												<p>RV580 S1D1 M5561</p>
											</CoordinateRow>
											<CoordinateRow>
												<CustomStyledSvg src="/ArrowLeft.png" alt="logo" />
												<p>RV580 S1D1 M5561</p>
											</CoordinateRow>
											<Row firstText="Fartsgrense" secondText="40 - 60 Km/t" />
											<Row firstText="ÅDT" secondText="32 4112 - 47 458" />
											<Row firstText="Andel lange" secondText="14 - 21 %" />
										</SideCardContent>
									</SideCardWrapper>
								</Card>
								<InputsContainer>
									<FormTextInput
										name="description"
										labelText="Beskrivelse av funn"
										textarea
										height={11}
									/>
									<FormTextInput
										name="suggestion"
										labelText="Forslag til tiltak"
										textarea
										height={7}
									/>
									<FormTextInput
										name="handbookReference"
										labelText="Håndbok referanse"
									/>
									<Label>Alvorlighetsscore</Label>
									<Card>
										<RiskCardContent>
											<div className="risktext">
												<p>150</p>
												<p>Drepte (15) * Ofte (10)</p>
											</div>
											<CustomStyledSvg
												className="cursorhover"
												src="/EditPencil.svg"
												alt="logo"
											/>
										</RiskCardContent>
									</Card>
								</InputsContainer>
							</ReportBody>
						</StyledForm>
					)}
				</Formik>
			</Card>
		</div>
	);
};

export default Report;

const StyledForm = styled(Form)`
	padding: 1.5em;
	width: 100%;
	row-gap: 1em;
	column-gap: 0.9em;
	display: grid;
	.cursorhover {
		:hover {
			cursor: pointer;
		}
	}
`;

const ReportBody = styled.div`
	display: grid;
	grid-template-columns: 35% 60%;
	column-gap: 5%;
`;

const InputsContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const SideCardWrapper = styled.div`
	width: 100%;
	#thumbnail {
		width: 100%;
	}
`;

const SideCardContent = styled.div`
	padding: 16px 21px;
	display: grid;
`;

const CustomStyledSvg = styled(StyledSvg)`
	width: 1em;
`;

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

const CoordinateRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-decoration: underline;
	color: #444f55;
`;
