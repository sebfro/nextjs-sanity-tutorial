import { GetServerSideProps } from "next";
import React, { useCallback } from "react";
import { fetchAllByTypeAndReference } from "../api/client";
import { WorkoutDay } from "../../types/SchemaTypes";
import { useRouter } from "next/router";
import Button from "../../components/atoms/Button";
import Header from "../../components/atoms/Header";
import { WorkoutRoutes } from "../../Constants/routes";
import flexhelper from "../../styles/flexhelper.module.css";

export const getServerSideProps: GetServerSideProps = async ({ query: { id }}) => {
	const workoutDays: WorkoutDay[] = 
		await fetchAllByTypeAndReference("workoutday", "workoutweek", id as string);
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
			<div className={flexhelper.flexrow}>
				{workoutDays.map(({ _id, workoutday }) => (
					<Button key={_id} callback={() => goToWorkoutDay(_id)} text={workoutday} />
				))}
			</div>
		</>
	);
};

export default WorkoutWeek;
