import React from 'react';
import styled from 'styled-components';
import { TagsProps } from '../../components/atoms/ReportAtoms/Tag';
import Finishedreport, {
	FinishedreportProps,
} from '../../components/organisms/FinishedReport';

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

const report: FinishedreportProps = {
	topText: TopText,
	actionDescription: ActionDescription,
	handbookReference: HandbookReference,
	tags: Tags,
	headerText: 'Høyde på rekkverk',
	reportNr: 2,
	immediateActionRequired: false,
};

const FinishedReports: FinishedreportProps[] = [
	report,
	{ ...report, immediateActionRequired: true },
	report,
	report,
	{ ...report, immediateActionRequired: true },
];

const Finishedreportpage: React.FC = () => {
	return (
		<Container>
			{FinishedReports.map(f => (
				<Finishedreport
					topText={f.topText}
					actionDescription={f.actionDescription}
					handbookReference={f.handbookReference}
					tags={f.tags}
					headerText="Høyde på rekkverk"
					reportNr={f.reportNr}
					key={f.reportNr}
					immediateActionRequired={f.immediateActionRequired}
				/>
			))}
		</Container>
	);
};

export default Finishedreportpage;

const Container = styled.section`
	display: flex;
	flex-direction: column;
	row-gap: 1.5em;
`;
