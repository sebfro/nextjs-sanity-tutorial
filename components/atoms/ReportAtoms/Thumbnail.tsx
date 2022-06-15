import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import { StyledSvg } from '../StyledComponents/StyledSvg';

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
	const [selectedPhoto, setSelectedPhoto] = useState(photos[0]);
	const handleEditPhoto = useCallback(() => {
		console.log('Edit photo');
	}, []);
	const handleNextPhoto = useCallback(
		(inc: 'next' | 'prev') => {
			console.log(inc);
			if (inc === 'next' && counter === photos.length) return;
			if (inc === 'prev' && counter === 1) return;
			const photoIndex = counter + (inc === 'next' ? 1 : -1);
			setCounter(photoIndex);
			setSelectedPhoto(photos[photoIndex - 1]);
		},
		[counter, photos]
	);

	return (
		<ThumbnailWrapper>
			<img id="thumbnail" src={selectedPhoto} alt="logo" />
			{editable && (
				<CircleEditPencil onClick={handleEditPhoto}>
					<CustomStyledSvg
						className="cursorhover"
						src="/EditPencil.svg"
						alt="logo"
					/>
				</CircleEditPencil>
			)}
			{slideShow && (
				<>
					{counter !== 1 && (
						<CircleArrowLeft
							disabled={counter === 1}
							onClick={() => handleNextPhoto('prev')}
						>
							<CustomStyledSvg
								className="cursorhover"
								src="/CircleArrowLeft.png"
								alt="logo"
							/>
						</CircleArrowLeft>
					)}
					{counter !== photos.length && (
						<CircleArrowRight
							disabled={counter === photos.length}
							onClick={() => handleNextPhoto('next')}
						>
							<CustomStyledSvg
								className="cursorhover"
								src="/CircleArrowLeft.png"
								alt="logo"
							/>
						</CircleArrowRight>
					)}
					<Counter>{`${counter} / ${photos.length}`}</Counter>
				</>
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
		height: 100%;
	}
`;

const CircleBtn = styled.div`
	background-color: white;
	border-radius: 50%;
	width: 2em;
	height: 2em;
	display: flex;
	justify-content: center;
	position: absolute;
`;

const CircleEditPencil = styled(CircleBtn)`
	border: 1px solid black;
	right: 0.5em;
	top: 0.5em;
`;

const ChangeImageArrowBase = styled(CircleBtn)<{ disabled: boolean }>`
	${({ disabled }) =>
		disabled &&
		css`
			opacity: 50%;
		`}
	border: 1px solid #858d90;
	img {
		width: 0.6em;
		height: 0.9em;
	}
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
