import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import Ranking from '../pages/Ranking';
import store from '../store';


describe("Testing Ranking Page", () => {

  it("should have a title", () => {
    render(
      <Provider store={store}>
        <Ranking />
      </Provider>
    );
    const title = screen.getByTestId(/^ranking-title$/);
    expect(title).toBeInTheDocument();
  })

  it("should have player name", () => {
    render(
      <Provider store={store}>
        <Ranking />
      </Provider>
    );
    const playerName = screen.getByTestId(/^player-name-0$/);
    expect(playerName).toBeInTheDocument();
  })

  it("should have player score", () => {
    render(
      <Provider store={store}>
        <Ranking />
      </Provider>
    );
    const playerScore = screen.getByTestId(/^player-score-0$/);
    expect(playerScore).toBeInTheDocument();
  })

  it("shold have button to the beginning", () => {
    render(
      <Provider store={store}>
        <Ranking />
      </Provider>
    );
    const buttonBegin = screen.getByTestId(/^btn-go-home$/);
    expect(buttonBegin).toBeInTheDocument();
  })

});