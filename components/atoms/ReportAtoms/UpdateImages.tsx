import { useFormikContext } from 'formik';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { InitialValues } from '../../../pages/tsinsp/report';
import Modal from '../../molecules/Modal';
import IconButton from '../Common/IconButton';
import FormFileDropBox from '../FormInputs/FormFileDropBox';
import SvgGetter from '../SVG/SvgGetter';

interface UpdateImagesProps {
	isOpen: boolean;
	handleClose: () => void;
	handleConfirm: () => void;
}
const UpdateImages: React.FC<UpdateImagesProps> = ({
	isOpen,
	handleConfirm,
	handleClose,
}) => {
	const formikProps = useFormikContext<InitialValues>();
	const {
		values: { images },
		setFieldValue,
	} = formikProps;
	const removeImage = useCallback(
		(imgFile: File) => {
			setFieldValue(
				'images',
				images.filter(img => img !== imgFile)
			);
		},
		[images, setFieldValue]
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
						{images.map((img, i) => {
							return (
								<UploadedImagesRow key={i}>
									<UploadedImageName>
										<SvgGetter icon="SuccessIcon" />
										<p>{img.name}</p>
									</UploadedImageName>
									<IconButton
										svgSrc="Trash"
										border={false}
										text="Fjern fil"
										onClick={() => removeImage(img)}
										circle={false}
									/>
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
	align-items: center;
`;
