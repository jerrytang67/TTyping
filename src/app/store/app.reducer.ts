import { Action } from "@ngrx/store";

export interface AppState {
  currentIndex: number;
  currentWord: string;
  text: string;
  input: string;
  correct: string;
}

export const initialApp: AppState = {
  currentIndex: 0,
  currentWord: "",
  text: "",
  input: "",
  correct: ""
};

export function appReducer(state = initialApp, action: any) {
  switch (action.type) {
    case "INPUT":
      state.input = action.payload;
      if (state.input === state.currentWord) {
        state.currentIndex += 1;
        state.currentWord = state.text[state.currentIndex];
        if (state.currentWord === "\\n") {
          state.currentIndex += 1;
          state.currentWord = state.text[state.currentIndex];
        }
        if (state.currentIndex > 1) {
          state.correct += state.text[state.currentIndex - 2];
        }
      }
      return state;
    case "NEXT":
      state.currentIndex += 1;
      state.currentWord = state.text[state.currentIndex];
      return state;
    case "SET_TEXT":
      console.log("SET_TEXT");
      state.text = action.payload;
      state.text = state.text.replace(/\t/g, "");
      state.currentIndex = 0;
      state.currentWord = state.text[0];
      state.correct = "";
      return state;
    case "NEXT":
      state.currentIndex += 1;
      state.currentWord = state.text[state.currentIndex];
      return state;
    default:
      return state;
  }
}

function isEnterNext() {}
