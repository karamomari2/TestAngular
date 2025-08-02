import { createReducer, on } from "@ngrx/store";
import { increasecounter } from "./counter.action";

export const counterreuser=createReducer(
    0,
   on(increasecounter,(state)=>state+1)
)