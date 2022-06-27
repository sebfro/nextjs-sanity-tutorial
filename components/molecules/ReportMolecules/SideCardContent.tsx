import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../../atoms/Card';
import EditPencilBtn from '../../atoms/Common/EditPencilBtn';
import Row from '../../atoms/ReportAtoms/Row';
import Thumbnail from '../../atoms/ReportAtoms/Thumbnail';
import { lightgrey } from '../../colors';
import { PositionLeftArrow, PositionRightArrow } from '../../Icons';
import ChangePosition from '../ChangePosition';
import Modal from '../Modal';
import IconButton from './../../atoms/Common/IconButton';

interface SideCardContentProps {
	photos: string[];
	canEditPhoto?: boolean;
	canEditPosition?: boolean;
}

const SideCardContent: React.FC<SideCardContentProps> = ({
	photos,
	canEditPhoto = false,
	canEditPosition = true,
}) => {
	const [isPositionModalOpen, setIsPositionModalOpen] = useState(false);

	return (
		<Card>
			<>
				<SideCardWrapper>
					<Thumbnail photos={photos} editable={canEditPhoto} />
					<Content>
						{canEditPosition && (
							<StyledRow firstText="Posisjon" includeLine={false}>
								<EditPencilBtn
									backgroundColor={lightgrey}
									border={false}
									onClick={() => setIsPositionModalOpen(true)}
								/>
							</StyledRow>
						)}
						<CoordinateRow>
							<CustomStyledSvg
								svgSrc={PositionRightArrow}
								border={false}
								onClick={() => {}}
								backgroundColor={lightgrey}
							/>
							<p>RV580 S1D1 M5561</p>
						</CoordinateRow>
						<CoordinateRow>
							<CustomStyledSvg
								svgSrc={PositionLeftArrow}
								border={false}
								onClick={() => {}}
								backgroundColor={lightgrey}
							/>
							<p>RV580 S1D1 M5561</p>
						</CoordinateRow>
						<Row firstText="Fartsgrense" secondText="40 - 60 Km/t" />
						<Row firstText="ÅDT" secondText="32 4112 - 47 458" />
						<Row firstText="Andel lange" secondText="14 - 21 %" />
					</Content>
				</SideCardWrapper>
				<StyledModal
					isOpen={isPositionModalOpen}
					handleClose={() => setIsPositionModalOpen(false)}
					handleConfirm={() => setIsPositionModalOpen(false)}
					headerText="Endre posisjon"
					includeBtnRow={false}
				>
					<ChangePosition />
				</StyledModal>
			</>
		</Card>
	);
};

export default SideCardContent;

const SideCardWrapper = styled.div`
	width: 100%;
`;

const CoordinateRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-decoration: underline;
	color: #444f55;
`;

const CustomStyledSvg = styled(IconButton)`
	margin: 0;
	img {
		width: 2em;
	}
`;

const Content = styled.div`
	padding: 16px 21px;
	display: grid;
`;

const StyledModal = styled(Modal)`
	padding: 2.8em 2em 3em;
	width: fit-content;
`;

const StyledRow = styled(Row)`
	* {
		margin: 0;
	}
`;
