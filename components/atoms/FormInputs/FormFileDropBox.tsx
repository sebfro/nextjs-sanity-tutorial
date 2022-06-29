import { Field, FieldProps, FormikProps } from 'formik';
import React from 'react';
import styled from 'styled-components';
import SvgGetter from '../SVG/SvgGetter';

interface FileDropBoxProps {
	labelText: string;
	name: string;
	formikProps: FormikProps<any>;
	fieldName?: string;
	acceptedFormats?: string;
}
const FormFileDropBox: React.FC<FileDropBoxProps> = ({
	labelText,
	name,
	formikProps: { setFieldValue, values },
	fieldName = 'files',
	acceptedFormats = '.pdf,.docx,.jpg',
}) => {
	// touched og errors kan brukes til feilhåntering når vi kommer så langt
	return (
		<Field name={name}>
			{({
				form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
				meta,
			}: FieldProps) => (
				<Wrapper>
					<Label>{labelText} </Label>
					<CustomBtn className="button" htmlFor="upload">
						<p>Klikk for å laster opp</p>
						<SvgGetter icon="Upload" />
					</CustomBtn>
					<input
						multiple
						id="upload"
						className="picturesubmit"
						type="file"
						alt="Submit"
						accept={acceptedFormats}
						onChange={(e: any) => {
							setFieldValue(
								fieldName,
								values[fieldName].concat(Array.from(e.currentTarget.files))
							);
						}}
					/>
					<p className="subtitle">
						Tillatte filformater: {acceptedFormats.replaceAll(',', ', ')}
					</p>
					{meta.touched && meta.error && (
						<div className="error">{meta.error}</div>
					)}
				</Wrapper>
			)}
		</Field>
	);
};

export default FormFileDropBox;

const Wrapper = styled.div`
	width: 100%;
	grid-column: 1 / 3;
	color: black;
	.subtitle {
		color: #6c6d70;
		font-size: small;
		margin-top: 0.5em;
	}
	input {
		display: none;
	}
	.button {
		border: 2px dotted black;
		width: 100%;
		display: flex;
		padding: 1em 0;
		justify-content: center;
	}
	.button:hover {
		background-color: #e9e9e9;
		cursor: pointer;
	}
`;

const Label = styled.p`
	font-weight: bold;
	color: black;
	font-size: 14px;
`;

const CustomBtn = styled.label`
	display: flex;
	align-items: center;
	column-gap: 1.5em;
	p {
		margin: 0;
	}
`;
