import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Harry from "../components/Harry";
import { configureStore } from "@reduxjs/toolkit";

describe("Harry Potter component", ()=> {

    beforeEach(()=> {
        render(<Provider store={store}> <Harry/> </Provider>)
    })

    test("Verify that the title Harry Potter Special is displayed on screen", () => {

        let title = screen.getByText("Harry Potter")
        expect(title).toBeInTheDocument;
    }) 
})
