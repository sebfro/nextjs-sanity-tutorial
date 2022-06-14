import React from 'react';
import styled from 'styled-components';
import DescriptionWithTagRow from '../../atoms/ReportAtoms/DescriptionWithTagRow';
import { TagsProps } from '../../atoms/ReportAtoms/Tag';
import Thumbnail from '../../atoms/ReportAtoms/Thumbnail';

const TopText =
	'Ved østsiden av Østre Granfosstunnelen er det en bom i midtdeler som ikke er godkjent. Denne bommen er ikke påkjørselssikker verken når den er lukket eller når den er åpnet. Bomfundamentet er ikke sikret, bortsett fra i noen situasjoner.';

const Tags: TagsProps[] = [
	{
		text: 'Strakstiltak',
		iconPath: '/InfoNotification.png',
		type: 'error',
	},
	{
		text: 'Avvik',
	},
	{
		text: 'Vegbanen',
	},
	{
		text: 'Risiko 150',
	},
];

const FinishedReportMinimized: React.FC = () => {
	return (
		<Wrapper>
			<div>
				<Thumbnail thumbnailPath="/wallpaper.jpg" editable={false} />
			</div>
			<DescriptionWithTagRow description={TopText} tags={Tags} />
		</Wrapper>
	);
};

export default FinishedReportMinimized;

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 30% 67%;
	column-gap: 3%;
	color: #444f55;
`;
