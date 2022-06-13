import { Form, Formik, FormikProps } from 'formik';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import Card from '../../components/atoms/Card';
import FormTextInput from '../../components/atoms/FormInputs/FormTextInput';
import Header from '../../components/atoms/ReportAtoms/Header';
import { StyledSvg } from '../../components/atoms/StyledComponents/StyledSvg';
import { Label } from './../../components/atoms/Common/Label';
import { Line } from './../../components/atoms/StyledComponents/Line';
import ButtonRow from './../../components/atoms/FormInputs/ButtonRow';
import Checkbox from '../../components/atoms/ReportAtoms/Checkbox';
import SideCardContent from '../../components/molecules/ReportMolecules/SideCardContent';
import * as Yup from 'yup';

export interface InitialValues {
	description: string;
	suggestion: string;
	handbookReference: string;
	risk: string;
	immediateAction: boolean;
}

const Report: React.FC = () => {
	const initialValues: InitialValues = {
		description: '',
		suggestion: '',
		handbookReference: '',
		risk: '',
		immediateAction: false,
	};

	const handleSubmit = useCallback(async (values: InitialValues) => {
		console.log(values);
		console.log('--------');
	}, []);

	const handleEditClick = useCallback(() => {
		console.log('How edit work?');
	}, []);

	const handleCancelClick = useCallback(() => {
		console.log('I cancel');
	}, []);

	const SignupSchema = Yup.object().shape({
		description: Yup.string().required('Required'),
		suggestion: Yup.string().required('Required'),
		handbookReference: Yup.string().required('Required'),
	});

	return (
		<div>
			<Card backgroundColor="white">
				<Formik
					initialValues={initialValues}
					onSubmit={handleSubmit}
					validationSchema={SignupSchema}
				>
					{(props: FormikProps<InitialValues>) => (
						<StyledForm>
							<div className="reportpadding">
								<Card>
									<Header
										headingNumber={4}
										title="Annet problem i sidearealet"
										discoveryType="Avvik"
										discovery="Eksisterende rekkverk"
										handleOnClick={handleEditClick}
									/>
								</Card>
							</div>
							<ReportBody className="reportpadding">
								<SideCardContent />
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
									>
										<Checkbox
											value="temp"
											label="Strakstiltak"
											name="immediateAction"
										/>
									</FormTextInput>
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
							<CustomLine />
							<div className="reportpadding">
								<ButtonRow
									cancelBtnText="Slett funn"
									confirmBtnText="Ferdigstill funn"
									cancelCallback={handleCancelClick}
									confirmCallback={props.handleSubmit}
									type="submit"
								/>
							</div>
						</StyledForm>
					)}
				</Formik>
			</Card>
		</div>
	);
};

export default Report;

const StyledForm = styled(Form)`
	width: 100%;
	row-gap: 1em;
	column-gap: 0.9em;
	display: grid;
	.cursorhover {
		:hover {
			cursor: pointer;
		}
	}
	.reportpadding {
		padding: 1.5em;
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

const CustomLine = styled(Line)`
	background-color: #dedede;
`;
