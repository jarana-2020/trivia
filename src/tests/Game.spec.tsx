import React from 'react';
import { render, screen } from "@testing-library/react";
import Game from '../pages/Game';


describe("Testing Game Page", () => {
  render(<Game />)

  it("should have a button configuration", () => {
    const btnConfiguration = screen.getByLabelText('configuration');
    expect(btnConfiguration).toBeInTheDocument();
  })
})