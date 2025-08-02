import { createAction, props } from "@ngrx/store";

export const langaction=createAction("langaction",props<{lang:string}>())