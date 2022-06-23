import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import Modal from '../../molecules/Modal';
import SaveButtonRow from '../../molecules/SaveButtonRow';
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

const problems: string[] = [
	'Annet problem i sidearealet',
	'Malt feil',
	'Stein i sidearealet',
];

const types: string[] = ['Avvik', 'Merknad', 'Feil'];

const locations: string[] = ['Sideareal', 'Vei', 'Rekkverk'];

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
							<FormWrapper>
								<FormDropdown
									placeholder="Velg type..."
									labelText="Hvilken type funn er det?"
									name="type"
									options={types}
									{...props}
								/>
								<FormDropdown
									placeholder="Velg hvor funnet er..."
									labelText="Hvor er funnet?"
									name="location"
									options={locations}
									{...props}
								/>
								<FormDropdown
									placeholder="Velg problemet..."
									labelText="Hva er problemet?"
									name="problem"
									options={problems}
									{...props}
								/>
								<CustomSaveButtonRow
									confirmCallback={props.handleSubmit}
									cancelCallback={handleClose}
								/>
							</FormWrapper>
						</Form>
					)}
				</Formik>
			</Modal>
		</Wrapper>
	);
};

export default UpdateDiscoveryDetails;

const Wrapper = styled.div``;

const CustomSaveButtonRow = styled(SaveButtonRow)`
	margin-top: 2em;
`;

const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 10px;
	padding: 2em 0 0.5em;
`;
