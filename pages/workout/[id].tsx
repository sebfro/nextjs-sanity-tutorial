import { GetStaticPaths, GetStaticProps } from "next";
import { groq } from "next-sanity";
import { useRouter } from "next/router";
import { NextResponse } from "next/server";
import React, { useMemo } from "react";
import { Workout } from "../../types/SchemaTypes";
import { client } from "../api/client";

export const getStaticProps: GetStaticProps = async ({ params }) => {
	if (!params) return { props: {} };
	const p = params.id as string;
	const workout: Workout[] = await client.fetch(
		groq`*[_type=="workout" && references(*[_type=="workoutday" && _id == $p]._id)]
    {
      workoutday,
      _id,
      workoutweekref
    }`
	);
	console.log(workout);
	return {
		props: {
			workout,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = [
		{
			params: {
				id: "queryId",
			},
		},
	];
	return {
		paths,
		fallback: false,
	};
};

interface DayProps {
  workouts: Workout[];
}

const Day: React.FC<DayProps> = ({ workouts }) => {
	const router = useRouter();

	const workoutData = useMemo(() => {
		client
			.fetch(
				groq`*[_type=="workout" && references(*[_type=="workoutday" && _id == $p]._id)]
      {
        workoutday,
        _id,
        workoutweekref
      }`
			)
			.then((response: NextResponse) => {
				console.log(response);
				if (response.status === 200) {
					return response.body;
				}
				return [];
			}).catch(() => []);
	}, []);

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

export default Day;
