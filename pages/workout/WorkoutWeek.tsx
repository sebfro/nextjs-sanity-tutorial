import { GetServerSideProps } from "next";
import { groq } from "next-sanity";
import React, { useCallback } from "react";
import { client } from "../api/client";
import { WorkoutDay } from "../../types/SchemaTypes";
import { useRouter } from "next/router";
import Button from "../../components/atoms/Button";
import styled from "styled-components";
import Header from "../../components/atoms/Header";
import { WorkoutRoutes } from "../../Constants/routes";
import StyledButton from "../../components/atoms/Common/StyledButton";

export const getServerSideProps: GetServerSideProps = async ({ query: { id }}) => {
	const workoutDays: WorkoutDay[] = await client.fetch(
		groq`*[_type=="workoutday" && references(*[_type=="workoutweek" && _id == "${id}"]._id)]{workoutday, _id, workoutweekref, _createdAt}`
	);
	return {
		props: {
			workoutDays,
		},
	};
};

interface WorkoutWeekProps {
  workoutDays: WorkoutDay[];
}

const WorkoutWeek: React.FC<WorkoutWeekProps> = ({ workoutDays }) => {
	const router = useRouter();
	const goToWorkoutDay = useCallback((ref: string) => {
		router.push({ pathname: WorkoutRoutes.workoutday, query: { id: ref}});
	}, []);

	return (
		<>
			<Header headerText="Velg treningsprogram for uken" />
			<BtnRow>
				{workoutDays.map(({ _id, workoutday }) => (
					<StyledButton key={_id}>
						<Button key={_id} callback={() => goToWorkoutDay(_id)} text={workoutday} />
					</StyledButton>
				))}
			</BtnRow>
		</>
	);
};

export default WorkoutWeek;

const BtnRow = styled.div`
	display: flex;
`;
