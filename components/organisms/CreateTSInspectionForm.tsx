import { Field, Form, Formik, FormikHelpers, FormikProps } from 'formik';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import Dropdown from '../atoms/Dropdown';
import { FieldProps } from 'formik';
import FormTextInput from '../atoms/FormInputs/FormTextInput';

const options: string[] = [
	'Option 1',
	'Option 2',
	'Option 3',
	'Option 4',
	'Option 5',
];

interface InitialValues {
	name: string;
	inspectionType: string;
	inspectionReason: string;
	ordering: string;
	inspectionLeader: string;
	strekningStart: string;
	strekningSlutt: string;
}

const CreateTSInspectionForm: React.FC = () => {
	const initialValues: InitialValues = {
		name: '',
		inspectionType: '',
		inspectionReason: '',
		ordering: '',
		inspectionLeader: '',
		strekningStart: '',
		strekningSlutt: '',
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

	return (
		<Container>
			<Heading>
				<h1>Opprett TS-inspeksjon</h1>
			</Heading>
			<Line />
			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
				{(props: FormikProps<any>) => (
					<Form>
						<FormWrapper>
							<Field
								name="name"
								render={(props: FieldProps) => (
									<FormTextInput
										{...props}
										type="text"
										className="spantwocolumns"
										labelText="Navn på TS-Inspeksjon"
									/>
								)}
							/>
							<Field
								id="inspectionType"
								name="inspectionType"
								render={(props: FieldProps) => (
									<Dropdown
										labelText="Inspeksjonstype"
										name="Inspeksjonstype"
										id="1"
										options={options}
										{...props}
									/>
								)}
							/>
							<Field
								id="inspectionReason"
								name="inspectionReason"
								render={(props: FieldProps) => (
									<Dropdown
										labelText="Bakgrunn for inspeksjon"
										name="inspectionReason"
										id="1"
										options={options}
										{...props}
									/>
								)}
							/>
							<Field
								id="ordering"
								name="ordering"
								render={(props: FieldProps) => (
									<Dropdown
										labelText="Bestiller"
										name="ordering"
										id="1"
										options={options}
										{...props}
									/>
								)}
							/>
							<Dropdown
								labelText="Bestiller"
								name="inspectionLeader"
								id="1"
								options={options}
							/>
							<Field
								name="strekningStart"
								render={(props: FieldProps) => (
									<FormTextInput
										{...props}
										type="text"
										labelText="Strekning - Start"
									/>
								)}
							/>
							<Field
								name="strekningSlutt"
								render={(props: FieldProps) => (
									<FormTextInput
										{...props}
										type="text"
										labelText="Strekning - Slutt"
									/>
								)}
							/>
							<img src="/ExampleMap.png" alt="logo" />
							<input className="picturesubmit" type="file" alt="Submit" />
							<button type="submit">Submit</button>
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
	width: 600px;
`;

const Heading = styled.h1`
	color: black;
	padding: 3em 1em 1em;
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
	padding: 1em;
	row-gap: 1em;
`;
