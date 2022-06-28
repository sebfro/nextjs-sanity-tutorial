import React from 'react';
import styled from 'styled-components';
import DescriptionWithTagRow from '../../atoms/ReportAtoms/DescriptionWithTagRow';
import Infobox from '../../atoms/ReportAtoms/Infobox';
import Tag, { TagsProps } from '../../atoms/ReportAtoms/Tag';
import { Line } from '../../atoms/StyledComponents/Line';
import { Layout } from '../ReportLayout';
import SideCardContent from './SideCardContent';
import { Label } from './../../atoms/Common/Label';
import RiskCardRow from './../../atoms/ReportAtoms/RiskCardRow';
import { CardDiv } from '../../atoms/Card';
import { TextColor, White } from '../../../styles/Colors';

interface FinishedReportExpandedProps {
	tags: TagsProps[];
	actionDescription: string;
	handbookReference: string;
	topText: string;
	immediateActionRequired?: boolean;
}

const FinishedReportExpanded: React.FC<FinishedReportExpandedProps> = ({
	actionDescription,
	handbookReference,
	tags,
	topText,
	immediateActionRequired = false,
}) => {
	return (
		<Layout>
			<SideCardContent
				canEditPosition={false}
				photos={[]}
				canEditPhoto={false}
			/>
			<ReportContent>
				<DescriptionWithTagRow description={topText} tags={tags}>
					<CustomLine />
				</DescriptionWithTagRow>
				<Infobox label="Forslag til tiltak" description={actionDescription}>
					<>
						{immediateActionRequired && (
							<Tag
								text="Strakstiltak"
								iconPath="/InfoNotification.png"
								type="error"
							/>
						)}
					</>
				</Infobox>
				<Infobox label="Hånbok referanse" description={handbookReference} />
				<div>
					<Label>Alvorlighetsscore</Label>
					<RiskCardRow
						consequence={15}
						frequency={10}
						type="expand"
						backgroundColor="#FFF5E6"
						includeBorder={false}
					/>
				</div>
			</ReportContent>
			<CustomCard backgroundColor={White} includeBorder>
				<>
					<p>Funn ID 2022-005-008</p>
					<p>|</p>
					<p>Registrert 11.04.22 09:42</p>
					<p>|</p>
					<p>Sist endret 11.04.22 09:42</p>
				</>
			</CustomCard>
		</Layout>
	);
};

export default FinishedReportExpanded;

const ReportContent = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 1.5em;
`;

const CustomLine = styled(Line)`
	margin-top: 1.5em;
	background-color: #dadada;
`;

const CustomCard = styled(CardDiv)`
	padding: 0 1.5em;
	column-gap: 1em;
	color: ${TextColor};
	font-weight: 300;
	font-size: 14px;
	grid-column: 1 / 3;
`;
