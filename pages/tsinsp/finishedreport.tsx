import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Card, { StyledCard } from '../../components/atoms/Card';
import { TagsProps } from '../../components/atoms/ReportAtoms/Tag';
import TsButton from '../../components/atoms/TsButton';
import { Layout } from '../../components/molecules/ReportLayout';
import FinishedReportMinimized from '../../components/molecules/ReportMolecules/FinishedReportMinimized';
import FinishedReportExpanded from './../../components/molecules/ReportMolecules/FinishedReportExpanded';

const TopText =
	'Ved østsiden av Østre Granfosstunnelen er det en bom i midtdeler som ikke er godkjent. Denne bommen er ikke påkjørselssikker verken når den er lukket eller når den er åpnet. Bomfundamentet er ikke sikret, bortsett fra i noen situasjoner.';
const ActionDescription =
	'Koble sammen rekkverkene og snu skapet slik at det blir mulig å åpne dørene på innsiden av rekkverket.Koble sammen rekkverkene og snu skapet slik at det blir mulig å åpne dørene på innsiden av rekkverket.';

const HandbookReference =
	'Håndbok V161 Brurekkverk, Vegnormal N101 Trafikksikkert sideterreng og vegsikringsutstyr';

const Tags: TagsProps[] = [
	{
		text: 'Avvik',
	},
	{
		text: 'Vegbanen',
	},
];

const TextColor = '#444F55';

const Finishedreport: React.FC = () => {
	const [showMore, setShowMore] = useState(true);
	const handleToggle = useCallback(() => {
		setShowMore(!showMore);
	}, [showMore]);

	return (
		<Card backgroundColor="white">
			<Container>
				<Wrapper>
					<Header>
						<div className="headertext">
							<h1>2.</h1>
							<h1>Høyde på rekkverk</h1>
						</div>
						<TsButton
							iconPath={showMore ? '/ArrowUp.png' : '/ArrowDown.png'}
							text={showMore ? 'Vis mindre' : 'Vis mer'}
							callback={handleToggle}
							border={false}
							reverse
							classname="togglebtn"
						/>
					</Header>
					{showMore ? (
						<>
							<CustomCard backgroundColor="white">
								<>
									<p>Registrert 11.04.22 09:42</p>
									<p>|</p>
									<p>Sist endret 11.04.22 09:42</p>
								</>
							</CustomCard>
							<FinishedReportExpanded
								actionDescription={ActionDescription}
								topText={TopText}
								handbookReference={HandbookReference}
								tags={Tags}
							/>
						</>
					) : (
						<FinishedReportMinimized />
					)}
				</Wrapper>
				<ButtonRow>
					<TsButton
						iconPath="/EditPencil.svg"
						text="Rediger"
						border={false}
						callback={() => {}}
						classname="btnstyling"
					/>
					<TsButton
						iconPath="/Trash.png"
						text="Slett"
						border={false}
						callback={() => {}}
						classname="btnstyling"
					/>
				</ButtonRow>
			</Container>
		</Card>
	);
};

export default Finishedreport;

const Wrapper = styled.div`
	padding: 0 2em 2em;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	.headertext {
		display: inherit;
		column-gap: 1em;
		h1 {
			font-size: 20px;
			font-weight: 400;
			margin: 1em 0;
		}
		h1:first-of-type {
			color: #ff9600;
		}
		h1:last-of-type {
			color: ${TextColor};
		}
	}
	.togglebtn {
		font-size: 16px;
		color: ${TextColor};
		font-weight: 300;
	}
`;

const ButtonRow = styled.div`
	display: flex;
	column-gap: 1em;
	.btnstyling {
		padding-left: 0;
		background-color: #ececec;
		font-size: 14px;
		img {
			width: 17px;
			height: 16px;
		}
	}
	padding-left: 2em;
	background-color: #ececec;
	height: 3.3em;
	align-items: center;
`;

const CustomCard = styled(StyledCard)`
	padding: 0 1.5em;
	margin-bottom: 1em;
	column-gap: 1em;
	color: ${TextColor};
	font-weight: 300;
	font-size: 14px;
`;
