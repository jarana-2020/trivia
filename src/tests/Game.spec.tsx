import React from 'react';
import { render, screen } from "@testing-library/react";
import Game from '../pages/Game';


describe("Testing Game Page", () => {
  it("should have a button configuration", () => {
    render(<Game />)
    const btnConfiguration = screen.getByLabelText('configuration');
    expect(btnConfiguration).toBeInTheDocument();
  })

  it("should have a image", () => {
    render(<Game />)
    const imgLogo = screen.getByAltText(/logo-trivia/);
    expect(imgLogo).toBeInTheDocument();
  })

  it("should have a text with the player name", () => {
    render(<Game />)
    const playerName = screen.getByTestId(/player-name/);
    expect(playerName).toBeInTheDocument();
  })

  it("should have a text with the player email", () => {
    render(<Game />)
    const playerEmail = screen.getByTestId(/player-email/);
    expect(playerEmail).toBeInTheDocument();
  })
})