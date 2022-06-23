import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Modal from '../../molecules/Modal';
import TsButton from '../TsButton';
import { StyledCard } from './../Card';
import DeliverReportModal from './DeliverReportModal';

interface DiscoveriesInReportCardProps {
	avvik: number;
	feil: number;
	merknad: number;
}
const DiscoveriesInReportCard: React.FC<DiscoveriesInReportCardProps> = ({
	avvik,
	feil,
	merknad,
}) => {
	const [modalOpen, setModalOpen] = useState(false);
	const handleModalConfirm = useCallback(() => {
		setModalOpen(false);
	}, []);

	const handleClick = useCallback(() => {
		setModalOpen(true);
	}, []);

	return (
		<CustomStyledCard backgroundColor="#ececec">
			<LeftSideContent>
				<h1>Funn i rapporten</h1>
				<div id="discoverywrapper">
					<DiscoveryText>
						<p>{`${avvik} `}</p>
						<p>{' - Avvik'}</p>
					</DiscoveryText>
					<DiscoveryText>
						<p>{`${feil} `}</p>
						<p>{' - Feil'}</p>
					</DiscoveryText>
					<DiscoveryText>
						<p>{`${merknad} `}</p>
						<p>{' - Merknad'}</p>
					</DiscoveryText>
				</div>
			</LeftSideContent>
			<CustomBtn centerText callback={handleClick} text="Lever rapport" />
			<CustomModal
				isOpen={modalOpen}
				handleClose={handleModalConfirm}
				handleConfirm={handleModalConfirm}
				headerText="Lever rapport"
				columnDirection
				confirmBtnText="Lever rapport"
			>
				<DeliverReportModal avvik={11} feil={0} merknad={3} />
			</CustomModal>
		</CustomStyledCard>
	);
};

export default DiscoveriesInReportCard;

const CustomBtn = styled(TsButton)`
	padding: 1em 3em;
	background-color: #444f55;
	color: white;
`;

const CustomStyledCard = styled(StyledCard)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1em 1.5em;
`;

const LeftSideContent = styled.div`
	h1 {
		font-weight: 600;
		font-size: 14px;
		color: #444f55;
		margin: 0 0 0.6em;
	}
	p {
		margin: 0;
	}
	#discoverywrapper {
		display: flex;
		column-gap: 1em;
	}
`;

const DiscoveryText = styled.div`
	color: #353e43;
	display: flex;
	align-items: center;
	column-gap: 0.2em;
	p:first-of-type {
		font-size: 20px;
	}
	p:last-of-type {
		font-size: 16px;
	}
`;

const CustomModal = styled(Modal)`
	display: flex;
	flex-direction: column;
	row-gap: 2em;
	padding: 2.8em 2em 3em;
	button {
		font-size: 18px;
	}
`;
