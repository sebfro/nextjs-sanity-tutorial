import { GetStaticProps } from "next";
import { groq } from "next-sanity";
import Link from "next/link";
import React, { useCallback } from "react";
import { client } from "../api/client";
import utilStyles from "../../styles/utils.module.css";
import { WorkoutDay } from "../../types/SchemaTypes";
import { useRouter } from "next/router";

export const getStaticProps: GetStaticProps = async () => {
	const workoutDays: WorkoutDay[] = await client.fetch(
		groq`*[_type=="workoutday" && references(*[_type=="workoutweek" && week == "Uke 1"]._id)]{workoutday, _id, workoutweekref, _createdAt}`
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
			<h2 className={utilStyles.headingLg}>Blog</h2>
			<ul className={utilStyles.list}>
				{workoutDays.map(({ _id, workoutday }) => (
					<li className={utilStyles.listItem} key={_id}>
						<button type="button" onClick={() => goToWorkoutDay(_id)}>{workoutday} </button>
						<br />
					</li>
				))}
			</ul>
		</>
	);
};

export default WorkoutWeek;
