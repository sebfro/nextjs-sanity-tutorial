import React from 'react';
import styled from 'styled-components';

interface DeliverReportModalProps {
	avvik: number;
	feil: number;
	merknad: number;
}

const DeliverReportModal: React.FC<DeliverReportModalProps> = ({
	avvik,
	feil,
	merknad,
}) => {
	return (
		<Wrapper>
			<p>
				Er du sikker på at du ønsker å levere rapporten? Du vil ikke kunne gjøre
				endringer på rapporten etter den er levert.
			</p>
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
		</Wrapper>
	);
};

export default DeliverReportModal;

const DiscoveryText = styled.div`
	color: #353e43;
	display: flex;
	align-items: center;
	column-gap: 0.2em;
	p:first-of-type {
		font-size: 24px;
	}
	p:last-of-type {
		font-size: 16px;
	}
`;

const Wrapper = styled.div`
	#discoverywrapper {
		display: flex;
		column-gap: 1.5em;
	}
	p {
		margin: 0;
	}
	row-gap: 2em;
	display: flex;
	flex-direction: column;
`;
