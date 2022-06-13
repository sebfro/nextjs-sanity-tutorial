import { Field, Form, Formik, FormikHelpers, FormikProps } from 'formik';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import FormDropdown from '../atoms/FormInputs/FormDropdown';
import FormTextInput from '../atoms/FormInputs/FormTextInput';
import FileDropBox from '../atoms/FormInputs/FileDropBox';
import SaveButtonRow from '../molecules/SaveButtonRow';
import { prependOnceListener } from 'process';

const options: string[] = [
	'Option 1',
	'Option 2',
	'Option 3',
	'Option 4',
	'Option 5',
];

export interface InitialValues {
	inspectionName: string;
	inspectionType: string;
	inspectionReason: string;
	ordering: string;
	inspectionLeader: string;
	strekningStart: string;
	strekningSlutt: string;
	files: File[];
}

const CreateTSInspectionForm: React.FC = () => {
	const initialValues: InitialValues = {
		inspectionName: '',
		inspectionType: '',
		inspectionReason: '',
		ordering: '',
		inspectionLeader: '',
		strekningStart: '',
		strekningSlutt: '',
		files: [],
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

	const handleCancelClick = useCallback(() => {
		console.log('I cancel');
	}, []);

	return (
		<Container>
			<Heading>
				<h1>Opprett TS-inspeksjon</h1>
			</Heading>
			<Line />
			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
				{(props: FormikProps<InitialValues>) => (
					<Form>
						<FormWrapper>
							<FormTextInput
								name="inspectionName"
								className="spantwocolumns"
								labelText="Navn på TS-Inspeksjon"
								placeholder="Veinummer + strekningsnavn"
							/>
							<FormDropdown
								placeholder="Velg type..."
								labelText="Inspeksjonstype"
								name="inspectionType"
								options={options}
								{...props}
							/>
							<FormDropdown
								labelText="Bakgrunn for inspeksjon"
								name="inspectionReason"
								options={options}
								{...props}
							/>
							<FormDropdown
								labelText="Bestiller"
								name="ordering"
								options={options}
								{...props}
							/>
							<FormDropdown
								labelText="Bestiller"
								name="inspectionLeader"
								options={options}
							/>
							<FormTextInput
								name="strekningStart"
								labelText="Strekning - Start"
							/>
							<FormTextInput
								name="strekningSlutt"
								labelText="Strekning - Slutt"
							/>
							<img src="/ExampleMap.png" alt="logo" />
							<FileDropBox
								labelText="Bakgrunnsmateriale"
								name="files"
								formikProps={props}
							/>
							<button type="submit">Submit</button>
							<SaveButtonRow
								confirmCallback={props.handleSubmit}
								cancelCallback={handleCancelClick}
							/>
						</FormWrapper>
					</Form>
				)}
			</Formik>
		</Container>
	);
};

export default CreateTSInspectionForm;

const Container = styled.div`
	display: grid;
	background-color: white;
	width: 100%;
`;

const Heading = styled.div`
	color: black;
	padding: 3em 2em 1em;
	h1 {
		font-size: 26px;
	}
`;

const Line = styled.div`
	width: 100%;
	height: 1px;
	margin-left: auto;
	margin-right: auto;
	background-color: #474646;
	border: 0 none;
`;

const FormWrapper = styled.div`
	.spantwocolumns {
		grid-column: 1 / 3;
	}
	img {
		grid-row: 4 / 6;
		grid-column: 2;
	}
	.picturesubmit {
		grid-column: 1 / 3;
	}
	button {
		grid-column: 1 / 3;
	}
	display: grid;
	grid-template-columns: 49% 49%;
	justify-content: space-between;
	padding: 1.5em 2em 2em;
	row-gap: 1em;
`;
