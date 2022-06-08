import React from 'react';
import styled from 'styled-components';
import colors from '../../../styles/colors.module.css';

interface FileDropBoxProps {
	labelText: string;
}
const FileDropBox: React.FC<FileDropBoxProps> = ({ labelText }) => {
	return (
		<Wrapper>
			<Label>{labelText} </Label>
			<input className="picturesubmit" type="file" alt="Submit" />
			<p className="subtitle">Tillatte filformater: .pdf, .docx, .jpg</p>
		</Wrapper>
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
	}
`;

const Label = styled.p`
	font-weight: bold;
	color: black;
	font-size: 12px;
`;
