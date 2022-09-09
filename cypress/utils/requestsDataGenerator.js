import { Chance } from "chance"
import { USER_LIMITS } from "./limits.js";

export const DATA_OPTIONS = { MIN: "min", MAX: "max", AVERAGE: "average" }

export const getUserData = (param = DATA_OPTIONS.AVERAGE) => {
    return (param === DATA_OPTIONS.AVERAGE) ?
        {
            name: Chance().string({ length: Chance().integer({ min: USER_LIMITS.name.min, max: USER_LIMITS.name.max }) }),
            job: Chance().string({ length: Chance().integer({ min: USER_LIMITS.job.min, max: USER_LIMITS.job.max }) }),
        } : (param === DATA_OPTIONS.MAX) ? {
            name: Chance().string({ length: USER_LIMITS.name.max }),
            job: Chance().string({ length: USER_LIMITS.job.max }),
        } : {
            name: Chance().string({ length: USER_LIMITS.name.min }),
            job: Chance().string({ length: USER_LIMITS.job.min }),
        }
}