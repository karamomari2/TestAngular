import { createReducer, on } from "@ngrx/store";
import { langaction } from "./lang.action";

const initlang="en"
export const landreduceser=createReducer(
    initlang,
    on(langaction,(stats,action)=>action.lang)
)