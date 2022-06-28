import React from 'react';
import styled from 'styled-components';
import { Icons } from '../../Icons';
import Card from '../Card';
import StyledSvg from '../StyledComponents/StyledSvg';

interface InfoCardProps {
	redirectLink: string;
	redirectText: string;
	title: string;
	imgSrc: Icons;
}
const InfoCard: React.FC<InfoCardProps> = ({
	title,
	imgSrc,
	redirectLink,
	redirectText,
}) => {
	return (
		<Wrapper backgroundColor="#e6f1f5">
			<>
				<div id="firstelement">
					<StyledSvg src={imgSrc} alt="logo" />
					<p>{title}</p>
				</div>
				<a href={redirectLink}>{redirectText}</a>
			</>
		</Wrapper>
	);
};

export default InfoCard;

const Wrapper = styled(Card)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1em 1.5em;
	p {
		margin: 0;
	}
	#firstelement {
		display: inherit;
		column-gap: 1em;
		align-items: inherit;
		img {
			width: 2em;
			height: 2em;
		}
	}
`;
