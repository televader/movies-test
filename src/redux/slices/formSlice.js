import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {
        name: "",
        email: "",
        message: ""
    }
}

export const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        saveFormData: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { saveFormData } = formSlice.actions

export default formSlice.reducer