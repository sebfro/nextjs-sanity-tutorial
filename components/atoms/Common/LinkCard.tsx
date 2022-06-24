import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import { StyledSvg } from '../StyledComponents/StyledSvg';

interface LinkCardProps {
	textHeader: string;
	subTitleText: string;
	url: string;
}
const LinkCard: React.FC<LinkCardProps> = ({
	textHeader,
	subTitleText,
	url,
}) => {
	return (
		<CustomCard backgroundColor="white" button>
			<Link href={url}>
				<CardContent>
					<CardFirstRow>
						<p className="titletext">{textHeader}</p>
						<StyledSvg src="/ArrowDown.png" />
					</CardFirstRow>
					<SubTitle>{subTitleText}</SubTitle>
				</CardContent>
			</Link>
		</CustomCard>
	);
};

export default LinkCard;

const CustomCard = styled(Card)`
	p {
		color: #444f55;
		margin: 0;
		/* text-align: start; */
	}
	:hover {
		border-width: 3px;
		box-shadow: 0px 0px 8px 4px rgba(53, 62, 67, 0.2);
		.titletext {
			border-bottom: 1px solid grey;
		}
	}
`;
const CardFirstRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	p {
		font-size: 20px;
		color: #444f55;
	}
	img {
		transform: rotate(-0.25turn);
		width: 1em;
		height: 1em;
	}
`;
const CardContent = styled.div`
	width: 100%;
	padding: 1.5em;
	row-gap: 1.2em;
	display: flex;
	flex-direction: column;
`;
const SubTitle = styled.p`
	font-size: 16px;
	text-align: start;
`;
