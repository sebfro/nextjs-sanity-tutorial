import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../../atoms/Card';
import Row from '../../atoms/ReportAtoms/Row';
import Thumbnail from '../../atoms/ReportAtoms/Thumbnail';
import { StyledSvg } from '../../atoms/StyledComponents/StyledSvg';
import ChangePosition from '../ChangePosition';
import Modal from '../Modal';

interface SideCardContentProps {
	canEditPosition?: boolean;
}

const SideCardContent: React.FC<SideCardContentProps> = ({
	canEditPosition = true,
}) => {
	const [isPositionModalOpen, setIsPositionModalOpen] = useState(false);
	return (
		<Card>
			<>
				<SideCardWrapper>
					<Thumbnail photos={['/ExampleMap.png']} />
					<Content>
						{canEditPosition && (
							<Row
								firstText="Posisjon"
								secondText="14 - 21 %"
								includeLine={false}
							>
								<CustomStyledSvg
									className="cursorhover"
									src="/EditPencil.svg"
									alt="logo"
									onClick={() => setIsPositionModalOpen(true)}
								/>
							</Row>
						)}
						<CoordinateRow>
							<CustomStyledSvg src="/ArrowRight.png" alt="logo" />
							<p>RV580 S1D1 M5561</p>
						</CoordinateRow>
						<CoordinateRow>
							<CustomStyledSvg src="/ArrowLeft.png" alt="logo" />
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

const CustomStyledSvg = styled(StyledSvg)`
	width: 1em;
`;

const Content = styled.div`
	padding: 16px 21px;
	display: grid;
`;

const StyledModal = styled(Modal)`
	padding: 2.8em 2em 3em;
	width: fit-content;
`;
