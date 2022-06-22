import React from 'react';
import styled from 'styled-components';
import InfoCard from '../../components/atoms/Common/InfoCard';
import LinkCard from '../../components/atoms/Common/LinkCard';
import { VeivesenRoutes } from '../../Constants/routes';

const TestArea: React.FC = () => {
	return (
		<Wrapper>
			<LinkCard
				textHeader="RV. 580 - Flyplassvegen mellom Ytrebygda og Rå"
				subTitleText="Vanlig TS-Inspeksjon"
				url={VeivesenRoutes.overviewLayout}
			/>
			<InfoCard
				title="Dette funnet har status “uten finansiering”."
				redirectText="Se oppfølgingsside"
				redirectLink={VeivesenRoutes.overviewLayout}
			/>
		</Wrapper>
	);
};

export default TestArea;

const Wrapper = styled.div`
	width: 80%;
	margin: auto;
	padding-top: 5em;
	display: flex;
	flex-direction: column;
	row-gap: 2em;
`;
