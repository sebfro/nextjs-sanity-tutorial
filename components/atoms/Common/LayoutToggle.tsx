import React from 'react';
import styled from 'styled-components';

export type Toggle = 'InProgress' | 'Completed';

interface LayoutToggleProps {
	firstToggleText: string;
	lastToggleText: string;
	handleToggleClick: (toggle: Toggle) => void;
	selectedToggle: Toggle;
}

const LayoutToggle: React.FC<LayoutToggleProps> = ({
	firstToggleText,
	lastToggleText,
	handleToggleClick,
	selectedToggle,
}) => {
	return (
		<Toggles>
			<ToggleBtn
				className={
					selectedToggle === 'InProgress'
						? 'selectedtoggle'
						: 'deselectedtoggle'
				}
				onClick={() => handleToggleClick('InProgress')}
			>
				{firstToggleText}
			</ToggleBtn>
			<p>|</p>
			<ToggleBtn
				className={
					selectedToggle === 'Completed' ? 'selectedtoggle' : 'deselectedtoggle'
				}
				onClick={() => handleToggleClick('Completed')}
			>
				{lastToggleText}
			</ToggleBtn>
		</Toggles>
	);
};

export default LayoutToggle;

const Toggles = styled.div`
	display: flex;
	column-gap: 0.4em;
	justify-content: flex-start;
	color: black;
	column-gap: 1em;
	align-items: center;
	.selectedtoggle {
		border-bottom: 2px solid #fcae3d;
	}
	.deselectedtoggle {
		color: grey;
	}
`;

const ToggleBtn = styled.p`
	:hover {
		cursor: pointer;
	}
`;
