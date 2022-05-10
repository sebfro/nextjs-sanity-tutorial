import { GetStaticPaths, GetStaticProps } from "next";
import { groq } from "next-sanity";
import { useRouter } from "next/router";
import { NextResponse } from "next/server";
import React, { useMemo } from "react";
import { Workout } from "../../types/SchemaTypes";
import { client } from "../api/client";

const Workoutday: React.FC = () => {
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
			})
			.catch(() => []);
	}, []);

	console.log(workoutData);

	return <>hei</>;
};

export default Workoutday;
