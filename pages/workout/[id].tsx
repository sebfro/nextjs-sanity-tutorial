import { GetStaticPaths, GetStaticProps } from "next";
import { groq } from "next-sanity";
import { useRouter } from "next/router";
import React from "react";
import { GetUrlId } from "../../lib/helpers";
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
  const queryId = useRouter().query.id;
  const paths = [
    {
      params: {
        id: queryId,
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
