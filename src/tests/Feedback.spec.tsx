import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import Feedback from '../pages/Feedback';
import store from '../store';

describe("Testing Feedback Page", () => {
  Storage.prototype.getItem = jest.fn(() => 'name');
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

  it("should have a feedback message", () => {
    render(
      <Provider store={store}>
        <Feedback />
      </Provider>
    );
    const feedbackMessage = screen.getByTestId(/^feedback-total-score$/);
    expect(feedbackMessage).toBeInTheDocument();
  })

  it("should have a total score message", () => {
    render(
      <Provider store={store}>
        <Feedback />
      </Provider>
    );
    const totalScore = screen.getByTestId(/^feedback-total-score$/);
    expect(totalScore).toBeInTheDocument();
  })

  it("should have a total assertions message", () => {
    render(
      <Provider store={store}>
        <Feedback />
      </Provider>
    );
    const totalAssertions = screen.getByTestId(/^feedback-total-question$/);
    expect(totalAssertions).toBeInTheDocument();
  })

  it("should have a button for play again", () => {
    render(
      <Provider store={store}>
        <Feedback />
      </Provider>
    );
    const buttonPlay = screen.getByTestId(/^btn-play-again$/);
    expect(buttonPlay).toBeInTheDocument();
  })

  it("should have a button for ranking page", () => {
    render(
      <Provider store={store}>
        <Feedback />
      </Provider>
    );
    const buttonRanking = screen.getByTestId(/^btn-ranking$/);
    expect(buttonRanking).toBeInTheDocument();
  })
});