import { Field, FieldProps, FormikProps } from 'formik';
import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import { InitialValues } from '../../organisms/CreateTSInspectionForm';

interface FileDropBoxProps {
	labelText: string;
	name: string;
	formikProps: FormikProps<InitialValues>;
}
const FileDropBox: React.FC<FileDropBoxProps> = ({
	labelText,
	name,
	formikProps: { setFieldValue, values },
}) => {
	const fileRef = useRef();
	// const handleFileUpload = useCallback(
	// 	(e: any) => {
	// 		console.log('------------------------------------------------------');
	// 		// console.log(e.target.value);
	// 		// console.log(e.target[name]);
	// 		// console.log(e.target.files);
	// 		console.log(values.files);
	// 		setFieldValue(name, [...values.files, e.target[name].file]);
	// 	},
	// 	[name, setFieldValue, values.files]
	// );
	console.log(values.files);
	return (
		<Field name={name}>
			{({
				field, // { name, value, onChange, onBlur }
				form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
				meta,
			}: FieldProps) => (
				<Wrapper>
					<Label>{labelText} </Label>
					<CustomBtn className="button" htmlFor="upload">
						<p>Klikk for å laster opp</p>
						<StyledSvg src="/piggy-bank.png" alt="logo" />
					</CustomBtn>
					<input
						multiple
						id="upload"
						className="picturesubmit"
						type="file"
						alt="Submit"
						accept=".pdf,.docx,.jpg"
						// {...field}
						onChange={(e: any) => {
							console.log(Array.from(e.currentTarget.files));
							setFieldValue(
								'files',
								values.files.concat(e.currentTarget.files)
							);
						}}
					/>
					<p className="subtitle">Tillatte filformater: .pdf, .docx, .jpg</p>
					{meta.touched && meta.error && (
						<div className="error">{meta.error}</div>
					)}
				</Wrapper>
			)}
		</Field>
	);
};

export default FileDropBox;

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
		border: 2px dotted black;
		width: 100%;
		padding: 1em;
		display: flex;
		position: absolute;
		z-index: -1;

		top: 10px;
		left: 8px;
		font-size: 17px;
		color: #b8b8b8;
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

const StyledSvg = styled.img`
	width: 1em;
	display: flex;
	align-items: center;
	column-gap: 0.4em;
`;

const Label = styled.p`
	font-weight: bold;
	color: black;
	font-size: 12px;
`;

const CustomBtn = styled.label`
	display: flex;
	column-gap: 0.5em;
	p {
		margin: 0;
	}
`;
