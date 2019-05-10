import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.reducer";

export const getAppSate = createFeatureSelector<AppState>("app");

export const getCurrentWord = createSelector(
  getAppSate,
  (state: AppState) => state.currentWord
);
