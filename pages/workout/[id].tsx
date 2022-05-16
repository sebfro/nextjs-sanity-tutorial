import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { Workout } from "../../types/SchemaTypes";
import { fetchAllByType } from "../api/GroqHelper";

// export const getStaticProps: GetStaticProps = async () => {
// 	const workouts: Workout[] = await fetchAllByType<Workout[]>("workout");
// 	return {
// 		props: {
// 			workouts,
// 		},
// 	};
// };

interface WeekProps {
  workouts: Workout[];
}

const Week: React.FC<WeekProps> = () => {
	const router = useRouter();
	console.log(router.query);
	const workouts = [{
		title: "hei"
	}];
	return (
		<>
			{workouts.length > 0 && (
				<div>
					<pre>{JSON.stringify(workouts, null, 2)}</pre>
				</div>
			)}
		</>
	);
};

export default Week;
