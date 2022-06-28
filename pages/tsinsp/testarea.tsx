import React from 'react';
import styled from 'styled-components';
import IconButton from '../../components/atoms/Common/IconButton';
import InfoCard from '../../components/atoms/Common/InfoCard';
import LinkCard from '../../components/atoms/Common/LinkCard';
import { White } from '../../styles/Colors';
import { EditPencil } from '../../components/Icons';
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
			<Row>
				<IconButton svgSrc="/heart.png" />
				<IconButton svgSrc={EditPencil} circle={false} />
			</Row>
			<CardButton>Click me</CardButton>
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

const Row = styled.div`
	display: flex;
	column-gap: 1em;
`;

const CardButton = styled.button`
	background-color: ${White};
	border: 1px solid black;
	p {
		color: #444f55;
		margin: 0;
	}
	:hover {
		border-width: 3px;
		box-shadow: 0px 0px 8px 4px rgba(53, 62, 67, 0.2);
		.titletext {
			border-bottom: 1px solid grey;
		}
	}
`;
