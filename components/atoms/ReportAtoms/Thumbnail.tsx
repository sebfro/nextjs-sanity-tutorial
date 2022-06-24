import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import { EditPencil } from '../../Icons';
import IconButton from '../Common/IconButton';
import { StyledSvg } from '../StyledComponents/StyledSvg';
import UpdateImages from './UpdateImages';

interface ThumbnailProps {
	photos: string[];
	editable?: boolean;
	slideShow?: boolean;
}
const Thumbnail: React.FC<ThumbnailProps> = ({
	photos: photos,
	editable = true,
	slideShow = true,
}) => {
	const [counter, setCounter] = useState(1);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	// const [selectedPhoto, setSelectedPhoto] = useState(photos[0]);
	const handleEditPhoto = useCallback(() => {
		setModalIsOpen(!modalIsOpen);
	}, [modalIsOpen]);
	const handleNextPhoto = useCallback(
		(inc: 'next' | 'prev') => {
			console.log(inc);
			if (inc === 'next' && counter === photos.length) return;
			if (inc === 'prev' && counter === 1) return;
			const photoIndex = counter + (inc === 'next' ? 1 : -1);
			setCounter(photoIndex);
			// setSelectedPhoto(photos[photoIndex - 1]);
		},
		[counter, photos]
	);

	return (
		<ThumbnailWrapper>
			<img id="thumbnail" src={photos[counter - 1]} />
			{editable && (
				<CircleEditPencil
					handleClickCallback={handleEditPhoto}
					svgSrc={EditPencil}
				/>
			)}
			{slideShow && photos.length > 0 && (
				<>
					{counter !== 1 && (
						<CircleArrowLeft
							svgSrc={CircleArrowLeft}
							handleClickCallback={() => handleNextPhoto('prev')}
						/>
					)}
					{counter !== photos.length && (
						<CircleArrowRight
							svgSrc={CircleArrowLeft}
							handleClickCallback={() => handleNextPhoto('next')}
						/>
					)}
					<Counter>{`${counter} / ${photos.length}`}</Counter>
				</>
			)}
			<UpdateImages
				isOpen={modalIsOpen}
				handleClose={handleEditPhoto}
				handleConfirm={handleEditPhoto}
			/>
		</ThumbnailWrapper>
	);
};

export default Thumbnail;

const ThumbnailWrapper = styled.div`
	display: inline-block;
	position: relative;
	width: 100%;
	min-height: 12em;
	#thumbnail {
		width: 100%;
		height: 100%;
	}
`;

const CircleBtn = styled(IconButton)`
	background-color: white;
	border-radius: 50%;
	/* width: 2em;
	height: 2em; */
	display: flex;
	justify-content: center;
	position: absolute;
`;

const CircleEditPencil = styled(CircleBtn)`
	border: 1px solid black;
	right: 0.5em;
	top: 0.5em;
`;

const ChangeImageArrowBase = styled(CircleBtn)`
	border: 1px solid #858d90;
	/* img {
		width: 0.6em;
		height: 0.9em;
	} */
	align-items: center;
	bottom: 40%;
`;

const CircleArrowRight = styled(ChangeImageArrowBase)`
	right: 1em;
`;
const CircleArrowLeft = styled(ChangeImageArrowBase)`
	left: 1em;
	transform: scaleX(-1);
`;

const Counter = styled.div`
	position: absolute;
	bottom: 1em;
	left: 1em;
	color: white;
	font-size: 18px;
`;

const CustomStyledSvg = styled(StyledSvg)`
	width: 1em;
`;
