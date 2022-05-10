import { GetStaticProps } from "next";
import React from "react";
import { Workout } from "../../types/SchemaTypes";
import { fetchByType } from "../api/client";

export const getStaticProps: GetStaticProps = async () => {
  const workouts: Workout[] = await fetchByType<Workout[]>("workout");
  return {
    props: {
      workouts,
    },
  };
};

interface WeekProps {
  workouts: Workout[];
}

const week: React.FC<WeekProps> = ({ workouts }) => {
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

export default week;
