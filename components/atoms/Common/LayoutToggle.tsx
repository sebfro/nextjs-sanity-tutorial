import React from 'react';
import styled from 'styled-components';
interface LayoutToggleProps {
	toggles: string[];
	handleToggleClick: (toggle: string) => void;
	selectedToggle: string;
	className?: string;
	selectedColor?: string;
	deselectedColor?: string;
	divivderColor?: string;
}

const LayoutToggle: React.FC<LayoutToggleProps> = ({
	toggles,
	handleToggleClick,
	selectedToggle,
	className = '',
	selectedColor = '#444F55',
	deselectedColor = '#697277',
	divivderColor = '#858D90',
}) => {
	return (
		<Toggles
			className={className}
			deselectedColor={deselectedColor}
			selectedColor={selectedColor}
		>
			{toggles.map((t, i) => (
				<>
					{i !== 0 && <Divivder color={divivderColor}>|</Divivder>}
					<ToggleBtn
						className={
							selectedToggle === t ? 'selectedtoggle' : 'deselectedtoggle'
						}
						onClick={() => handleToggleClick(t)}
						key={t + i}
					>
						{t}
					</ToggleBtn>
				</>
			))}
		</Toggles>
	);
};

export default LayoutToggle;

const Toggles = styled.div<{ selectedColor: string; deselectedColor: string }>`
	display: flex;
	column-gap: 0.4em;
	justify-content: flex-start;
	color: black;
	column-gap: 1em;
	align-items: center;
	.selectedtoggle {
		border-bottom: 2px solid #fcae3d;
		color: ${({ selectedColor }) => selectedColor};
	}
	.deselectedtoggle {
		color: ${({ deselectedColor }) => deselectedColor};
	}
`;

const ToggleBtn = styled.button`
	border: none;
	text-align: start;
	background-color: transparent;
	font-size: 16px;
	font-weight: 600;
	padding: 0;
	:hover {
		cursor: pointer;
	}
`;

const Divivder = styled.p<{ color: string }>`
	color: ${({ color }) => color};
`;
