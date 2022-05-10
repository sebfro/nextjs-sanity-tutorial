import { fetchByType } from "../pages/api/client";
import { Workout } from "../types/SchemaTypes";


export const getSortedWorkoutsData = async () => {
    const workouts: Workout[] = await fetchByType<Workout[]>("workout");

    return workouts.sort(({ _createdAt: a }, { _createdAt: b }) => {
        if (a < b) {
          return 1;
        } else if (a > b) {
          return -1;
        } else {
          return 0;
        }
      });

}

export const getAllPostIds = async () => {
    const workouts: Workout[] = await fetchByType<Workout[]>("workout");

    return workouts.map((workouts) => {
      return {
        params: {
          id: workouts._id,
        },
      };
    });
  }