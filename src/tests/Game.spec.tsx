import React from 'react';
import { render, screen } from "@testing-library/react";
import Game from '../pages/Game';
import { Provider } from "react-redux";
import store from "../store";


describe("Testing Game Page", () => {
  it("should have a button configuration", () => {
    render(
      <Provider store={store}>
        <Game />
      </Provider>
    );
    const btnConfiguration = screen.getByLabelText('configuration');
    expect(btnConfiguration).toBeInTheDocument();
  })

  it("should have a image", () => {
    render(
      <Provider store={store}>
        <Game />
      </Provider>
    );
    const imgLogo = screen.getByAltText(/logo-trivia/);
    expect(imgLogo).toBeInTheDocument();
  })

  it("should have category game", async() => {
    render(
      <Provider store={store}>
        <Game />
      </Provider>
    );
    const category = await screen.findByTestId(/question-category/);
    expect(category).toBeInTheDocument();
  })

  it("should have a question", async() => {
    render(
      <Provider store={store}>
        <Game />
      </Provider>
    );
    const question = await screen.findByTestId(/question-text/);
    expect(question).toBeInTheDocument();
  })

  it("should have a button for correct answer", async() => {
    render(
      <Provider store={store}>
        <Game />
      </Provider>
    );
    const buttonCorrectAnswer = await screen.findAllByTestId(/^correct-answer$/);
    expect(buttonCorrectAnswer.length).toBe(1);
  })

  it("should have a button for wrong answer", async() => {
    render(
      <Provider store={store}>
        <Game />
      </Provider>
    );
    const buttonWrongAnswer = await screen.findAllByTestId(/^wrong-answer$/);
    expect(buttonWrongAnswer.length > 0).toBeTruthy();
  })
})