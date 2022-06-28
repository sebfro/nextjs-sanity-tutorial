import React, { useCallback } from 'react';
import styled from 'styled-components';
import StyledSvg from './StyledComponents/StyledSvg';

interface TopBarProps {
	username: string;
}
const TopBar: React.FC<TopBarProps> = ({ username }) => {
	const handleLogout = useCallback(() => {
		console.log('Goodbye my friend');
	}, []);
	return (
		<Bar className="flexaligncenter">
			<HeadingItem className="flexaligncenter">
				<StyledSvg src={'/Upload.svg'} alt="logo" />
				{username}
			</HeadingItem>
			<HeadingItem
				className="flexaligncenter pointeronhover"
				onClick={handleLogout}
			>
				<StyledSvg src={'/Close.svg'} alt="logo" />
				Logg ut
			</HeadingItem>
		</Bar>
	);
};

export default TopBar;

const HeadingItem = styled.div`
	display: flex;
	column-gap: 0.4em;
`;

const Bar = styled.div`
	padding: 0.2em 0.8em;
	background-color: #353e43;
	justify-content: space-between;
`;
