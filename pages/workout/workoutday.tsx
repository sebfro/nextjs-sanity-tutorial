import { GetServerSideProps } from "next";
import { groq } from "next-sanity";
import styled from "styled-components";
import React, { useCallback } from "react";
import { Workout } from "../../types/SchemaTypes";
import { client } from "../api/client";
import WorkoutSetRow from "../../components/atoms/WorkoutSetRow";
import { useRouter } from "next/router";
import Header from "../../components/atoms/Header";
import utilStyles from "../../styles/utils.module.css";
import Button from "../../components/atoms/Button";

export const getServerSideProps: GetServerSideProps = async ({
	query: { id },
}) => {
	const response = await client.fetch(
		groq`*[_type=="workout" && references(*[_type=="workoutday" && _id == "${id}"]._id)]
		{
			_id,
			ovelse,
			workoutdeyref,
			sets
		}`
	);
	return { props: { workouts: response } };
};

interface WorkoutdayProps {
  workouts: Workout[];
}

const Workoutday: React.FC<WorkoutdayProps> = ({ workouts }) => {
	const router = useRouter();
	const handleAddWorkout = useCallback(() => {
		console.log("added");
	}, []);

	return (
		<>
			<Header headerText="Dagens økt" />
			{workouts.map(({ ovelse, sets, _id }) => (
				<Row key={_id}>
					<p className={utilStyles.headingMd}>{ovelse}</p>
					<WorkoutSetRow sets={sets} id={_id} />
				</Row>
			))}
			<AddBtn callback={handleAddWorkout} text="+" />
		</>
	);
};

export default Workoutday;

const Row = styled.div`
  display: grid;
`;

const AddBtn = styled(Button)`
.custombtn {
	margin-top: 10em;
}
`;
