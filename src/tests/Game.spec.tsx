import React from 'react';
import { render, screen, waitFor } from "@testing-library/react";
import Game from '../pages/Game';
import { Provider } from "react-redux";
import store from "../store";
import userEvent from '@testing-library/user-event';


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
    userEvent.click(buttonCorrectAnswer[0]);
    buttonCorrectAnswer.forEach((button) => {
      expect(button).toHaveStyle('borderColor: 3px solid rgb(6, 240, 15)')
    });
  })

  it("should have a button for wrong answer", async() => {
    render(
      <Provider store={store}>
        <Game />
      </Provider>
    );
    const buttonWrongAnswer = await screen.findAllByTestId(/^wrong-answer$/);
    expect(buttonWrongAnswer.length > 0).toBeTruthy();
    userEvent.click(buttonWrongAnswer[0]);
    buttonWrongAnswer.forEach((button) => {
      expect(button).toHaveStyle('borderColor: 3px solid rgb(255, 0, 0)')
    })
  })

  it("shouldn't have a button for next question",async() => {
    render(
      <Provider store={store}>
        <Game />
      </Provider>
    );
    const btnNextQuestion = await screen.findByTestId(/btn-next/);
    expect(btnNextQuestion).not.toBeVisible();
  })

  it("should have a button for next question",async() => {
    render(
      <Provider store={store}>
        <Game />
      </Provider>
    );
    const btnWrong = await screen.findAllByTestId(/^wrong-answer$/);
    userEvent.click(btnWrong[0]);
    const btnNextQuestion = await screen.findByTestId(/^btn-next$/);
    expect(btnNextQuestion).toBeVisible();
  });

  // jest.setTimeout(38000);

  // it("should be able to respond after five seconds", async() => {
  //   render(
  //     <Provider store={store}>
  //       <Game />
  //     </Provider>
  //   );
  //   const buttons = await screen.findAllByTestId(/^wrong-answer$/);
  //   await new Promise((r) => setTimeout(r, 6000));
  //   expect(buttons[0]).not.toBeDisabled(); 
  // })

  // it("shouldn't be able to respond after thirty seconds", async() => {
  //   render(
  //     <Provider store={store}>
  //       <Game />
  //     </Provider>
  //   );
  //   const buttons = await screen.findAllByTestId(/^wrong-answer$/);
  //   await new Promise((r) => setTimeout(r, 33000));
  //   expect(buttons[0]).toBeDisabled();
  // })

})


