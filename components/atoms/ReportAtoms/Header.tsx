import React from 'react';
import styled from 'styled-components';
import EditPencilBtn from '../Common/EditPencilBtn';
import { StyledCursorPointerSvg } from '../StyledComponents/StyledSvg';

interface HeaderProps {
	headingNumber: number;
	title: string;
	discoveryType: string;
	discovery: string;
	handleOnClick: () => void;
}
const Header: React.FC<HeaderProps> = ({
	discovery,
	discoveryType,
	headingNumber,
	title,
	handleOnClick,
}) => {
	return (
		<Container>
			<ColumnOne>
				<h1>{`${headingNumber}.`}</h1>
				<TextWrapper>
					<h2>{title}</h2>
					<p>
						{discoveryType} | {discovery}
					</p>
				</TextWrapper>
			</ColumnOne>
			<EditPencilBtn onClick={handleOnClick} border />
			{/* <IconButton handleClickCallback={handleOnClick} svgSrc={EditPencil} /> */}
		</Container>
	);
};

export default Header;

const Container = styled.div`
	display: flex;
	padding: 16px 24px;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	font-size: 30px;
`;

const TextWrapper = styled.div`
	h2 {
		font-size: 20px;
		margin: 0 0 0.2em 0;
	}
	p {
		font-size: 14px;
		color: #444f55;
		margin: 0;
	}
`;

const CustomStyledSvg = styled(StyledCursorPointerSvg)`
	width: 20px;
	height: 24px;
	align-self: center;
`;

const ColumnOne = styled.div`
	display: flex;
	align-items: center;
	h1 {
		font-size: 30px;
		margin: 0;
	}
	column-gap: 1em;
`;
