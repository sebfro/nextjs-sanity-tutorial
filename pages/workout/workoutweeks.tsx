import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import styled from "styled-components";
import Button from "../../components/atoms/Button";
import Header from "../../components/atoms/Header";
import Layout from "../../components/atoms/Layout";
import { WorkoutWeek } from "../../types/SchemaTypes";
import { fetchAllByType } from "../api/client";

export const getServerSideProps: GetStaticProps = async () => {
	let workoutWeeks: WorkoutWeek[] = await fetchAllByType("workoutweek");
	workoutWeeks = workoutWeeks.sort((a, b) => {
		if (a.weeknr < b.weeknr) return -1;
		if (a.weeknr > b.weeknr) return 1;
		return 0;
	});
	return {
		props: {
			workoutWeeks,
		},
	};
};

interface WorkoutsProps {
  workoutWeeks: WorkoutWeek[];
}

const WorkoutWeeks: React.FC<WorkoutsProps> = ({ workoutWeeks }) => {
	console.log(workoutWeeks);
	const router = useRouter();
	const goToWorkoutWeek = useCallback((id: string) => {
		router.push({ pathname: "/workout/workoutweek", query: { id } });
	}, []);

	const handleAddWeek = useCallback(() => {
		console.log("Add week");
	}, []);

	return (
		<>
			<Header headerText="Trenings Uker" goBackBtn={false} />
			<WeekContainer>
				{workoutWeeks.map(({ week, _id }) => (
					<Button
						key={_id}
						callback={() => goToWorkoutWeek(_id)}
						text={week}
					/>
				))}
				<Button callback={handleAddWeek} text="+" />
			</WeekContainer>
		</>
	);
};

export default WorkoutWeeks;

const HeaderText = styled.h1`
  margin-bottom: 1em;
`;

const WeekContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
