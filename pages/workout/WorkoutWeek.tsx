import { GetStaticProps } from "next";
import { groq } from "next-sanity";
import Link from "next/link";
import React from "react";
import { WorkoutDay } from "../../types/SchemaTypes";
import { client } from "../api/client";
import utilStyles from "../../styles/utils.module.css";

export const getStaticProps: GetStaticProps = async () => {
  const workoutDays: WorkoutDay[] = await client.fetch(
    groq`*[_type=="workoutday" && references(*[_type=="workoutweek" && week == "Uke 1"]._id)]{workoutday, _id, workoutweekref, _createdAt}`
  );
  console.log(workoutDays);
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
  return (
    <>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
        {workoutDays.map(({ _id, workoutday, workoutweekref }) => (
          <li className={utilStyles.listItem} key={_id}>
            <Link
              href={{
                pathname: `/workout/[id]`,
                query: { id: workoutweekref._ref },
              }}
            >
              <a>{workoutday}</a>
            </Link>
            <br />
          </li>
        ))}
      </ul>
    </>
  );
};

export default WorkoutWeek;
