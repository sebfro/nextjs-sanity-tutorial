import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import LayoutToggle, {
	Toggle,
} from '../../components/atoms/Common/LayoutToggle';
import DiscoveriesInReportCard from '../../components/atoms/ReportAtoms/DiscoveriesInReportCard';
import { TagsProps } from '../../components/atoms/ReportAtoms/Tag';
import ResultStatusCard from '../../components/atoms/ResultStatusCard';
import TsButton from '../../components/atoms/TsButton';
import Finishedreport, {
	FinishedreportProps,
} from '../../components/organisms/FinishedReport';
import Report, { ReportProps } from './report';

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

const finishedReport: FinishedreportProps = {
	topText: TopText,
	actionDescription: ActionDescription,
	handbookReference: HandbookReference,
	tags: Tags,
	headerText: 'Høyde på rekkverk',
	reportNr: 2,
	immediateActionRequired: false,
};

const FinishedReports: FinishedreportProps[] = [
	finishedReport,
	{ ...finishedReport, immediateActionRequired: true },
	finishedReport,
	finishedReport,
	{ ...finishedReport, immediateActionRequired: true },
];

const inProgressReport: ReportProps = {
	reportNr: 4,
	title: 'Annet problem i sidearealet',
	discoveryType: 'Avvik',
	discovery: 'Eksisterende rekkverk',
	risk: {
		consequence: 10,
		frequency: 15,
	},
};

const inProgressReports: ReportProps[] = [
	inProgressReport,
	{ ...inProgressReport, reportNr: 5 },
	{ ...inProgressReport, reportNr: 6 },
	{ ...inProgressReport, reportNr: 8 },
	{ ...inProgressReport, reportNr: 10 },
];

const ReportsPage: React.FC = () => {
	const [selectedToggle, setSelectedToggle] = useState<Toggle>('InProgress');

	const handleToggle = useCallback((toggle: Toggle) => {
		setSelectedToggle(toggle);
	}, []);

	const handleRegister = useCallback(() => {
		console.log('Registrer');
	}, []);

	return (
		<Container>
			<ResultStatusCard
				status="warning"
				text="Rapport levert  klokken 13:03,  22. Mars 2022"
			/>
			<DiscoveriesInReportCard avvik={11} feil={0} merknad={3} />
			<BtnRow>
				<LayoutToggle
					firstToggleText="Funn under arbeid (4)"
					lastToggleText={`Ferdigstilte funn (${FinishedReports.length})`}
					handleToggleClick={handleToggle}
					selectedToggle={selectedToggle}
				/>
				<StyledTsButton
					centerText
					callback={handleRegister}
					text="Register funn"
				/>
			</BtnRow>
			{selectedToggle === 'InProgress'
				? inProgressReports.map((r, i) => (
						<Report {...r} key={r.reportNr + i} />
				  ))
				: FinishedReports.map((f, i) => (
						<Finishedreport
							{...f}
							headerText="Høyde på rekkverk"
							key={f.reportNr + i}
						/>
				  ))}
		</Container>
	);
};

export default ReportsPage;

const Container = styled.section`
	display: flex;
	flex-direction: column;
	row-gap: 1.5em;
`;

const BtnRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledTsButton = styled(TsButton)`
	padding: 0.9em 3em;
`;
