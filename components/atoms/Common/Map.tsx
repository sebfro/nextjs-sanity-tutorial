import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import LayoutToggle from './LayoutToggle';

interface MapProps {
	temp?: string;
}
const Map: React.FC<MapProps> = () => {
	const toggles: string[] = ['Strekning', 'Bakgrunn', 'Parter'];
	const [selectedToggle, setSelectedToggle] = useState<string>(toggles[0]);

	const handleToggle = useCallback((toggle: string) => {
		setSelectedToggle(toggle);
	}, []);
	return (
		<Wrapper>
			<Heading>
				<CustomLayoutToggle
					selectedColor="#FFFFFF"
					deselectedColor="#DADADA"
					divivderColor="#DADADA"
					handleToggleClick={handleToggle}
					selectedToggle={selectedToggle}
					toggles={toggles}
				/>
			</Heading>
			<img src="/ExampleMap.png" />
		</Wrapper>
	);
};

export default Map;

const Heading = styled.div`
	background-color: #444f55;
	padding: 1.5em;
	p {
		margin: 0;
	}
`;

const Wrapper = styled.div`
	flex-grow: 4;
	min-width: 45em;
	height: fit-content;
	img {
		width: 100%;
	}
`;

const CustomLayoutToggle = styled(LayoutToggle)`
	column-gap: 1.5em;
`;
