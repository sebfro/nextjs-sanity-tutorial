import React, { useCallback } from 'react';
import styled from 'styled-components';
import { StyledSvg } from '../StyledComponents/StyledSvg';

interface ThumbnailProps {
	thumbnailPath: string;
	editable?: boolean;
}
const Thumbnail: React.FC<ThumbnailProps> = ({
	thumbnailPath,
	editable = true,
}) => {
	const handleEditPhoto = useCallback(() => {
		console.log('Edit photo');
	}, []);

	return (
		<ThumbnailWrapper>
			<img id="thumbnail" src={thumbnailPath} alt="logo" />
			{editable && (
				<CircleEditPencil onClick={handleEditPhoto}>
					<CustomStyledSvg
						className="cursorhover"
						src="/EditPencil.svg"
						alt="logo"
					/>
				</CircleEditPencil>
			)}
		</ThumbnailWrapper>
	);
};

export default Thumbnail;

const ThumbnailWrapper = styled.div`
	display: inline-block;
	position: relative;
	width: 100%;
	#thumbnail {
		width: 100%;
	}
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
