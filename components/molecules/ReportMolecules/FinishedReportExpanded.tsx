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
			<SideCardContent canEditPosition={false} />
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
					/>
				</div>
			</ReportContent>
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
