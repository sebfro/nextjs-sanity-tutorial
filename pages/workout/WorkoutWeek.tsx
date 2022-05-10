import { GetStaticProps } from "next";
import React from "react";
import { WorkoutWeek } from "../../types/SchemaTypes";
import { fetchByType } from "../api/client";

export const getStaticProps: GetStaticProps = async () => {
  const workouts: WorkoutWeek[] = await fetchByType<WorkoutWeek[]>("workout");
  return {
    props: {
      workouts,
    },
  };
};

interface WorkoutWeekProps {
  workoutWeek: WorkoutWeek[];
}

const WorkoutWeek: React.FC<WorkoutWeekProps> = () => {
  return (
    <>
      {pets.length > 0 && (
        <div>
          <pre>{JSON.stringify(pets, null, 2)}</pre>
        </div>
      )}
    </>
  );
};

export default WorkoutWeek;
