import React from 'react';
import styled from 'styled-components';
import { StyledSvg } from '../StyledComponents/StyledSvg';

interface ThumbnailProps {
	thumbnailPath: string;
}
const Thumbnail: React.FC<ThumbnailProps> = ({ thumbnailPath }) => {
	return (
		<ThumbnailWrapper>
			<img id="thumbnail" src={thumbnailPath} alt="logo" />
			<CircleEditPencil>
				<CustomStyledSvg
					className="cursorhover"
					src="/EditPencil.svg"
					alt="logo"
				/>
			</CircleEditPencil>
		</ThumbnailWrapper>
	);
};

export default Thumbnail;

const ThumbnailWrapper = styled.div`
	display: inline-block;
	position: relative;
	width: 100%;
`;

const CircleEditPencil = styled.div`
	background-color: white;
	border-radius: 50%;
	width: 2em;
	height: 2em;
	display: flex;
	justify-content: center;
	border: 1px solid black;
	position: absolute;
	right: 0.5em;
	top: 0.5em;
`;

const CustomStyledSvg = styled(StyledSvg)`
	width: 1em;
`;
