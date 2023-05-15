import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Card from "../components/Card";
import storeConfigure from "redux-mock-store";

describe("Card component", () => {
  let initialState = {
    movies: {
      data: [
        {
          id: "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8",
          name: "Harry Potter",
          actor: "Daniel Radcliffe",
          image: "https://ik.imagekit.io/hpapi/harry.jpg",
        },
      ],
    },
  };

  const mockStore = storeConfigure()
  const store = mockStore(initialState)

  beforeEach(() => {
    render(
      <Provider store={store}>
        <Card 
            id={initialState.movies.data[0].id}
            image={initialState.movies.data[0].image}
            name={initialState.movies.data[0].name}
            actor={initialState.movies.data[0].actor}
        />
        </Provider>
    );
  });

  test("Verify that the character's name Harry Potter is displayed on screen", () => {
    let characterName = screen.getByText(/harry potter/i);  // Regex used to search for "Harry Potter" in a case-insensitive manner.
    expect(characterName).toBeInTheDocument;
  });

  test("Verify that the actor's name Daniel Radcliffe is displayed on screen", () => {
    let actorName = screen.getByText("Daniel Radcliffe");
    expect(actorName).toBeInTheDocument;
  });

  test("Verify if images and its corresponding alt text are displayed on screen", () => {
    let image = screen.getByRole("img");
    expect(image.src).toContain("https://ik.imagekit.io/hpapi/harry.jpg");
    expect(image.alt).toBe("Harry Potter");
  });



}); 