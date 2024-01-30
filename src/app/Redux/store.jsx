"use client";

import { combineReducers, configureStore  }     from "@reduxjs/toolkit";
import responsiverReducer                       from "./Slices/responsive/responsiveSlice";

const rootReducer = combineReducers({
  responsive: responsiverReducer,
  //add all your reducers here
},);

export const store = configureStore({
  reducer: rootReducer,

 });
