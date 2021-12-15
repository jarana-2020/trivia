import Login from "../../pages/login";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from '../../../src/App';


describe("Testing Login Page", () => {
  it("should have a field for player name" , () => {
    render(<Login />);

    const inputName = screen.getByLabelText('Player Name');
    userEvent.type(inputName, 'Julio');
    expect(inputName).toHaveValue('Julio');
    expect(inputName).toBeInTheDocument();
  })

  it("should have a field for player e-mail" , () => {
    render(<Login />);

    const inputEmail = screen.getByLabelText('E-mail');
    userEvent.type(inputEmail, 'julio@yahoo.com.br');
    expect(inputEmail).toHaveValue('julio@yahoo.com.br');
    expect(inputEmail).toBeInTheDocument();
  })

  it("should have a button for start the trivia game" , () => {
    render(<Login />);

    const btnPlay = screen.getByRole('button', { name: /Play/i});
    const inputName = screen.getByLabelText('Player Name');
    const inputEmail = screen.getByLabelText('E-mail');
    expect(btnPlay).toBeInTheDocument();
    expect(btnPlay).toBeDisabled();

    userEvent.type(inputName, 'Julio');
    userEvent.type(inputEmail, 'julio@yahoo.com.br');
    expect(btnPlay).not.toBeDisabled();
  })
})