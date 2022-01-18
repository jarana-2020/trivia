import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import Feedback from '../pages/Feedback';
import store from '../store';

describe("Testing Feedback Page", () => {
  it("should have header with gravatar image", () => {
    render(
      <Provider store={store}>
        <Feedback />
      </Provider>
    );
    const imgGravatar = screen.getByTestId(/^header-profile-picture$/);
    expect(imgGravatar).toBeInTheDocument();
  })

  it("should have header with player name", () => {
    render(
      <Provider store={store}>
        <Feedback />
      </Provider>
    );
    const playerName = screen.getByTestId(/^player-name$/);
    expect(playerName).toBeInTheDocument();
  })

  it("should have header with player score", () => {
    render(
      <Provider store={store}>
        <Feedback />
      </Provider>
    );
    const playerScore = screen.getByTestId(/^player-score$/);
    expect(playerScore).toBeInTheDocument();
  })
});