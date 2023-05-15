import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "Welcome to Cinemate, your ultimate destination for all things movies!",
    text: "At Cinemate, we are passionate about films and dedicated to creating a omprehensive database that caters to every movie lover's needs. Whether you're a casual viewer, a dedicated cinephile, or a film industry enthusiast, you'll find something to captivate your interest on our platform."
}

export const aboutSlice = createSlice({
    name: "about",
    initialState,
    reducers: {
        loadAboutData: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { loadAboutData } = aboutSlice.actions

export default aboutSlice.reducer