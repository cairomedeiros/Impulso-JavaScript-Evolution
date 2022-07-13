import { configureStore } from "@reduxjs/toolkit";
import repoReducer from './repos/repoSlice';

export const store = configureStore({
    reducer: {
       repos: repoReducer,
    },
});