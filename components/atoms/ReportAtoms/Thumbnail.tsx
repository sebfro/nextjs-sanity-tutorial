import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { White } from '../../../styles/Colors';
import { CircleArrowLeft, EditPencil, PlaceholderPhoto } from '../../Icons';
import IconButton from '../Common/IconButton';
import UpdateImages from './UpdateImages';

interface ThumbnailProps {
	photos?: string[];
	editable?: boolean;
	slideShow?: boolean;
}
const Thumbnail: React.FC<ThumbnailProps> = ({
	photos = [],
	editable = false,
	slideShow = true,
}) => {
	const [counter, setCounter] = useState(1);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const handleEditPhoto = useCallback(() => {
		setModalIsOpen(!modalIsOpen);
	}, [modalIsOpen]);
	const handleNextPhoto = useCallback(
		(inc: 'next' | 'prev') => {
			if (inc === 'next' && counter === photos.length) return;
			if (inc === 'prev' && counter === 1) return;
			const photoIndex = counter + (inc === 'next' ? 1 : -1);
			setCounter(photoIndex);
		},
		[counter, photos]
	);
	console.log(photos);
	return (
		<ThumbnailWrapper>
			<img id="thumbnail" src={photos[counter - 1] || PlaceholderPhoto} />
			{editable && (
				<CircleEditPencil onClick={handleEditPhoto} svgSrc={EditPencil} />
			)}
			{slideShow && photos.length > 0 && photos[0] !== PlaceholderPhoto && (
				<>
					{counter !== 1 && (
						<CircleArrowLeftBtn
							svgSrc={CircleArrowLeft}
							onClick={() => handleNextPhoto('prev')}
							iconSize={2}
						/>
					)}
					{counter !== photos.length && (
						<CircleArrowRightBtn
							svgSrc={CircleArrowLeft}
							onClick={() => handleNextPhoto('next')}
							iconSize={2}
						/>
					)}
					<Counter>{`${counter} / ${photos.length}`}</Counter>
				</>
			)}
			{editable && (
				<UpdateImages
					isOpen={modalIsOpen}
					handleClose={handleEditPhoto}
					handleConfirm={handleEditPhoto}
				/>
			)}
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
	background-color: ${White};
	border-radius: 50%;
	display: flex;
	justify-content: center;
	position: absolute;
`;

const CircleEditPencil = styled(CircleBtn)`
	border: 1px solid black;
	right: 0.5em;
	top: 0.5em;
`;

const ChangeImageArrowBase = styled(IconButton)`
	border: 1px solid #858d90;
	align-items: center;
	bottom: 40%;
	position: absolute;
`;

const CircleArrowRightBtn = styled(ChangeImageArrowBase)`
	right: 1em;
`;
const CircleArrowLeftBtn = styled(ChangeImageArrowBase)`
	left: 1em;
	transform: scaleX(-1);
`;

const Counter = styled.div`
	position: absolute;
	bottom: 1em;
	left: 1em;
	color: ${White};
	font-size: 18px;
`;
