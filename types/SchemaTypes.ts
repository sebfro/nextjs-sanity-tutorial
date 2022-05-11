export type Pet = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    name: string;
}

export type Workout = {
    _createdAt: string,
    _id: string;
    ovelse: string;
    sets: string[];
    workoutdeyref: reference;
}

export type WorkoutWeek = {
    _createdAt: string;
    _id: string;
    week: string;
    weeknr: number;
}

export type WorkoutDay = {
    _id: string;
    workoutday: string;
    workoutweekref: reference;
    _createdAt: string;
}

type reference = {
    _ref: string;
    _type: string;
}