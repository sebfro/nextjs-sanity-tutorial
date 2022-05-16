import React from "react";
import styled from "styled-components";
import { home } from "../../types/TIbberApiTypes";

interface TibberInfoViewerProps {
    tibberHomes: home[]
}

const TibberInfoViewer: React.FC<TibberInfoViewerProps> = ({ tibberHomes }) => {
	return (
		<div>TibberInfoViewer</div>
	);
};

export default TibberInfoViewer;

const InfoRow = styled.div`
	display: flex;
	row-gap: 1em;
	column-gap: 1em;
`;