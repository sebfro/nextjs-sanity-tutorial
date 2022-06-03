import { Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import Dropdown from '../atoms/Dropdown';

const options: string[] = ['1', '2', '3', '4', '5'];

interface InitialValues {
	name: string;
	inspectiontype: string;
}

const CreateTSInspectionForm: React.FC = () => {
	const initialValues: InitialValues = {
		name: '',
		inspectiontype: '',
	};

	const handleSubmit = useCallback(async (values: InitialValues) => {
		console.log('submit');
	}, []);

	return (
		<Container>
			<Heading>
				<h1>Opprett TS-inspeksjon</h1>
			</Heading>
			<Line />
			<FormWrapper initialValues={initialValues} onSubmit={handleSubmit}>
				<input type="text" id="fname" name="fname" />
				<Dropdown name="Inspeksjonstype" id="1" options={options} />
				<input type="text" id="tre" name="tre" />
				<input type="text" id="fire" name="fire" />
				<input type="text" id="fem" name="fem" />
				<input type="text" id="seks" name="seks" />
				<img src="/ExampleMap.png" alt="logo" />
				<input type="text" id="syv" name="syv" />
				<input type="text" id="syv" name="syv" />
				<input className="picturesubmit" type="file" alt="Submit" />
			</FormWrapper>
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

const FormWrapper = styled(Formik)`
	input:first-of-type {
		grid-column: 1 / 3;
	}
	img {
		grid-row: 4 / 6;
		grid-column: 2;
	}
	.picturesubmit {
		grid-column: 1 / 3;
	}
	display: grid;
	grid-template-columns: 49% 49%;
	justify-content: space-between;
	padding: 1em;
	row-gap: 1em;
`;
