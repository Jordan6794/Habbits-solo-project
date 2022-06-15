import { Habit } from "./Table/habits.model";

export interface User {
    result: Result
    token: string;
}

export interface Result {
    _id: string;
    username: string;
    password: string;
    habits: Array<Habit>
}