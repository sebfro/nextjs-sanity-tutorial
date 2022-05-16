import sanityClient from "@sanity/client";
import React, { useCallback } from "react";
import styled from "styled-components";
import colors from "../../styles/colors.module.css";

interface WorkoutSetRowProps {
    sets: string[];
    id: string;
}

const client = sanityClient({
	projectId: "6hplvwaq",
	dataset: "production",
	apiVersion: "2022-05-09",
	useCdn: true,
});

const WorkoutSetRow: React.FC<WorkoutSetRowProps> = ({ sets, id }) => {
	const handleUpdate = useCallback(
		(e: any) => {
			e.preventDefault();
			console.log(e);
			// client
			// 	.patch(id).set({
			// 		sets: [...sets, "40/12"]
			// 	})
			// 	.commit()
			// 	.then((response) => {
			// 		console.log(response);
			// 	})
			// 	.catch((err) => {
			// 		console.log(err);
			// 	});
		},
		[],
	);
    
	return (
		<Row className={colors.lightgrey}>
			{sets.map((set, i) => (
				<Column key={i}>{set}</Column>
			))}
			<AddBtn onClick={handleUpdate}>+</AddBtn>
		</Row>
	);
};

export default WorkoutSetRow;

const Row = styled.div`
    display: flex;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 0 1em;
	align-items: center;
	width: fit-content;
`;

const Column = styled.div`
    /* margin: 0.6em 1em; */
	margin-right: 1em;
`;

const AddBtn = styled.button`
	margin: 1em 0;
	background-color: #4f8dce;
	border: none;
	border-radius: 4px;
	:hover {
		background-color: #8cb9e8;
	}
`;