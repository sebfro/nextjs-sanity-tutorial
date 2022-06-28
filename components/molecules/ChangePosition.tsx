import React from 'react';
import styled from 'styled-components';
import StyledSvg from '../atoms/StyledComponents/StyledSvg';

const ChangePosition: React.FC = () => {
	return (
		<div>
			<Header>
				<p>Endre posisjon for funnet</p>
				<p>{'"i sikkerhetssone / sideareal".'}</p>
			</Header>
			<Wrapper>
				<CustomBtn className="cursorhover">
					<CustomStyledSvg src={'/PositionTag.png'} alt="logo" />
					<p>Bruk nåværende posisjon</p>
				</CustomBtn>
				<p>/</p>
				<CustomBtn className="cursorhover">
					<CustomStyledSvg src={'/Map.png'} alt="logo" />
					<p>Velg posisjon i kart</p>
				</CustomBtn>
			</Wrapper>
		</div>
	);
};

export default ChangePosition;

const Header = styled.div`
	font-size: 16px;
	display: flex;
	color: black;
	column-gap: 0.2em;
	p:last-of-type {
		font-weight: 600;
	}
`;
const Wrapper = styled.div`
	padding: 2em 0 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	column-gap: 1em;
`;

const CustomBtn = styled.div`
	border: 1px dashed black;
	padding: 3em;
	height: 6em;
	width: 8em;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	p {
		font-size: 16px;
		color: #444f55;
	}
`;

const CustomStyledSvg = styled(StyledSvg)``;
