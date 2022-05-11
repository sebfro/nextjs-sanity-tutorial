import { GetServerSideProps } from "next";
import { groq } from "next-sanity";
import styled from "styled-components";
import React from "react";
import { Workout } from "../../types/SchemaTypes";
import { client } from "../api/client";
import WorkoutSetRow from "../../components/atoms/WorkoutSetRow";

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getServerSideProps: GetServerSideProps = async ({ query: { id }}) => {
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
	workouts: Workout[]
}

const Workoutday: React.FC<WorkoutdayProps> = ({ workouts }) => {
	return (
		<Layout>
			{
				workouts.map(({ovelse, sets, _id}) => (
					<Row key={_id}>
						<p>{ovelse}</p>
						<WorkoutSetRow sets={sets} />
					</Row>
				))
			}
		</Layout>);
};

export default Workoutday;

const Layout = styled.div`
	width: 80%;
	margin: auto;
`;

const Row = styled.div`
	display: grid;
`;



