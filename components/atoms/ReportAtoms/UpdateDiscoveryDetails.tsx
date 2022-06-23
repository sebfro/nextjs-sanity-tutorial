import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import Modal from '../../molecules/Modal';
import FormDropdown from '../FormInputs/FormDropdown';

interface InitialValues {
	type: string;
	location: string;
	problem: string;
}
interface UpdateDiscoveryDetailsProps extends InitialValues {
	isOpen: boolean;
	handleClose: () => void;
	handleConfirm: () => void;
}

const options: string[] = [
	'Option 1',
	'Option 2',
	'Option 3',
	'Option 4',
	'Option 5',
];

const UpdateDiscoveryDetails: React.FC<UpdateDiscoveryDetailsProps> = ({
	isOpen,
	handleClose,
	handleConfirm,
	...props
}) => {
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
		<Wrapper>
			<Modal
				headerText="Endre funndetaljer"
				isOpen={isOpen}
				handleClose={handleClose}
				handleConfirm={handleConfirm}
				includeBtnRow={false}
			>
				<Formik initialValues={props} onSubmit={handleSubmit}>
					{(props: FormikProps<InitialValues>) => (
						<Form>
							<FormDropdown
								placeholder="Velg type..."
								labelText="Hvilken type funn er det?"
								name="type"
								options={options}
								{...props}
							/>
							<FormDropdown
								placeholder="Velg hvor funnet er..."
								labelText="Hvor er funnet?"
								name="location"
								options={options}
								{...props}
							/>
							<FormDropdown
								placeholder="Velg problemet..."
								labelText="Hva er problemet?"
								name="problem"
								options={options}
								{...props}
							/>
						</Form>
					)}
				</Formik>
			</Modal>
		</Wrapper>
	);
};

export default UpdateDiscoveryDetails;

const Wrapper = styled.div``;
