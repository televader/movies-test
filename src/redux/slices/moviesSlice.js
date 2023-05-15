import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [],
}

export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
       loadMoviesData: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { loadMoviesData } = moviesSlice.actions

export default moviesSlice.reducer