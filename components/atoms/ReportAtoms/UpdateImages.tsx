import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import Modal from '../../molecules/Modal';
import FormFileDropBox from '../FormInputs/FormFileDropBox';

interface InitialValues {
	images: string[];
}

interface UpdateImagesProps extends InitialValues {
	isOpen: boolean;
	handleClose: () => void;
	handleConfirm: () => void;
}
const UpdateImages: React.FC<UpdateImagesProps> = ({
	isOpen,
	handleConfirm,
	handleClose,
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
				<Content>
					<Formik initialValues={props} onSubmit={handleSubmit}>
						{(props: FormikProps<InitialValues>) => (
							<Form>
								<FormWrapper>
									<FormFileDropBox
										labelText="Bakgrunnsmateriale"
										name="files"
										formikProps={props}
										acceptedFormats=".jpg,.png"
									/>
								</FormWrapper>
							</Form>
						)}
					</Formik>
				</Content>
			</Modal>
		</Wrapper>
	);
};

export default UpdateImages;

const Wrapper = styled.div``;
const FormWrapper = styled.div``;

const Content = styled.div`
	display: flex;
	flex-direction: column;
`;
