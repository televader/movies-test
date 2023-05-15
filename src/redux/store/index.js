import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../slices/moviesSlice";
import aboutReducer from "../slices/aboutSlice";
import formReducer from "../slices/formSlice"

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        about: aboutReducer,
        form:  formReducer
    }
})