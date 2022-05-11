import React from "react";
import styled from "styled-components";

interface WorkoutSetRowProps {
  sets: string[];
}

const WorkoutSetRow: React.FC<WorkoutSetRowProps> = ({ sets }) => {
	return (
		<Row>
			{sets.map((set, i) => (
				<Column key={i}>{set}</Column>
			))}
		</Row>
	);
};

export default WorkoutSetRow;

const Row = styled.div`
    display: flex;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 0 1em;
`;

const Column = styled.div`
    margin: 0.6em 1em;
`;