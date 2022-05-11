import { GetServerSideProps, GetStaticProps } from "next";
import { groq } from "next-sanity";
import Link from "next/link";
import React, { useCallback } from "react";
import { client } from "../api/client";
import utilStyles from "../../styles/utils.module.css";
import { WorkoutDay } from "../../types/SchemaTypes";
import { useRouter } from "next/router";
import Button from "../../components/atoms/Button";
import styled from "styled-components";
import Header from "../../components/atoms/Header";

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
		router.push({ pathname: `${"/workout/workoutday"}`, query: { id: ref}});
	}, []);

	return (
		<>
			<Header headerText="Velg treningsprogram for uken" />
			<BtnRow>
				{workoutDays.map(({ _id, workoutday }) => (
					<Button key={_id} callback={() => goToWorkoutDay(_id)} text={workoutday} />
				))}
			</BtnRow>
		</>
	);
};

export default WorkoutWeek;

const BtnRow = styled.div`
	display: flex;
`;

const HeaderRow = styled.div`
	display: flex;
	justify-content: space-between
`;