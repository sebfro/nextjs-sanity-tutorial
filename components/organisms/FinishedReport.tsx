import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Card from '../../components/atoms/Card';
import { TagsProps } from '../../components/atoms/ReportAtoms/Tag';
import TsButton from '../../components/atoms/TsButton';
import FinishedReportMinimized from '../../components/molecules/ReportMolecules/FinishedReportMinimized';
import { Grey, TextColor, White } from '../Colors';
import { EditPencil } from '../Icons';
import FinishedReportExpanded from './../../components/molecules/ReportMolecules/FinishedReportExpanded';

export interface FinishedreportProps {
	topText: string;
	actionDescription: string;
	handbookReference: string;
	tags: TagsProps[];
	reportNr: number;
	headerText: string;
	immediateActionRequired: boolean;
}

const Finishedreport: React.FC<FinishedreportProps> = ({
	reportNr,
	headerText,
	topText,
	actionDescription,
	handbookReference,
	tags,
	immediateActionRequired,
}) => {
	const [showMore, setShowMore] = useState(false);
	const handleToggle = useCallback(() => {
		setShowMore(!showMore);
	}, [showMore]);
	const handleEditClick = useCallback(() => {
		console.log('edit');
	}, []);
	const handleDeleteClick = useCallback(() => {
		console.log('slett');
	}, []);

	return (
		<Card backgroundColor={White}>
			<Container>
				<Wrapper>
					<Header>
						<div className="headertext">
							<h1>{reportNr}.</h1>
							<h1>{headerText}</h1>
						</div>
						<TsButton
							iconPath={showMore ? '/ArrowUp.png' : '/ArrowDown.png'}
							text={showMore ? 'Vis mindre' : 'Vis mer'}
							callback={handleToggle}
							border={false}
							reverse
							className="togglebtn"
						/>
					</Header>
					{showMore ? (
						<FinishedReportExpanded
							topText={topText}
							actionDescription={actionDescription}
							handbookReference={handbookReference}
							tags={tags}
							immediateActionRequired={immediateActionRequired}
						/>
					) : (
						<FinishedReportMinimized
							tags={tags}
							topText={topText}
							immediateActionRequired={immediateActionRequired}
							risk={150}
						/>
					)}
				</Wrapper>
				<ButtonRow>
					<TsButton
						iconPath={EditPencil}
						text="Rediger"
						border={false}
						callback={handleEditClick}
						className="btnstyling"
					/>
					<TsButton
						iconPath="/Trash.png"
						text="Slett"
						border={false}
						callback={handleDeleteClick}
						className="btnstyling"
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
		background-color: ${Grey};
		font-size: 14px;
		img {
			width: 17px;
			height: 16px;
		}
	}
	padding-left: 2em;
	background-color: ${Grey};
	height: 3.3em;
	align-items: center;
`;
