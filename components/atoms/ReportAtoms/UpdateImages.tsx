import {
	Form,
	Formik,
	FormikHelpers,
	FormikProps,
	useFormikContext,
} from 'formik';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { InitialValues } from '../../../pages/tsinsp/report';
import { SuccessIcon } from '../../Icons';
import Modal from '../../molecules/Modal';
import FormFileDropBox from '../FormInputs/FormFileDropBox';
import { StyledSvg } from './../StyledComponents/StyledSvg';

interface UpdateImagesProps {
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
	const formikProps = useFormikContext<InitialValues>();
	const handleSubmit = useCallback(async (values: InitialValues) => {
		console.log(values);
		console.log('--------');
	}, []);
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
					<FormWrapper>
						<FormFileDropBox
							labelText="Bakgrunnsmateriale"
							name="files"
							formikProps={formikProps}
							acceptedFormats=".jpg,.png"
							fieldName="images"
						/>
					</FormWrapper>
					<UploadedImages>
						{formikProps.values.images.map((img, i) => {
							return (
								<UploadedImagesRow key={i}>
									<UploadedImageName>
										<StyledSvg src={SuccessIcon} />
										<p>{img.name}</p>
									</UploadedImageName>
									<TrashIcon>
										<StyledSvg src="/Trash.png" />
										<p>Fjern fil</p>
									</TrashIcon>
								</UploadedImagesRow>
							);
						})}
					</UploadedImages>
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

const UploadedImages = styled.div`
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid black;
`;
const UploadedImagesRow = styled.div`
	display: flex;
	justify-content: space-between;
	border-top: 1px solid black;
	align-items: center;
	padding: 1em 1.5em 1em 0;
`;

const UploadedImageName = styled.div`
	display: flex;
	column-gap: 0.5em;
`;

const TrashIcon = styled.div`
	display: grid;
	justify-items: center;
	align-items: center;
	row-gap: 0.5em;
	img {
		width: 24px;
		height: 24px;
	}
	p {
		margin: 0;
	}
`;
