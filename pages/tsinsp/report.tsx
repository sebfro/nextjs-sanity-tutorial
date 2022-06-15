import { Form, Formik, FormikProps } from 'formik';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import Card from '../../components/atoms/Card';
import FormTextInput from '../../components/atoms/FormInputs/FormTextInput';
import Header from '../../components/atoms/ReportAtoms/Header';
import { Label } from './../../components/atoms/Common/Label';
import { Line } from './../../components/atoms/StyledComponents/Line';
import ButtonRow from './../../components/atoms/FormInputs/ButtonRow';
import Checkbox from '../../components/atoms/ReportAtoms/Checkbox';
import SideCardContent from '../../components/molecules/ReportMolecules/SideCardContent';
import * as Yup from 'yup';
import { Layout } from '../../components/molecules/ReportLayout';
import RiskCardRow from './../../components/atoms/ReportAtoms/RiskCardRow';

export interface InitialValues {
	description: string;
	suggestion: string;
	handbookReference: string;
	risk: {
		consequence: number;
		frequency: number;
	};
	immediateAction: boolean;
}

export interface ReportProps {
	reportNr: number;
	title: string;
	discoveryType: string;
	discovery: string;
	risk: {
		consequence: number;
		frequency: number;
	};
}

const Report: React.FC<ReportProps> = ({
	reportNr,
	title,
	discoveryType,
	discovery,
	risk,
}) => {
	const initialValues: InitialValues = {
		description: '',
		suggestion: '',
		handbookReference: '',
		risk: risk,
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
										headingNumber={reportNr}
										title={title}
										discoveryType={discoveryType}
										discovery={discovery}
										handleOnClick={handleEditClick}
									/>
								</Card>
							</div>
							<Layout className="reportpadding">
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
									<RiskCardRow {...risk} type="edit" />
								</InputsContainer>
							</Layout>
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
	.reportpadding {
		padding: 1.5em;
	}
`;

const InputsContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const CustomLine = styled(Line)`
	background-color: #dedede;
`;
