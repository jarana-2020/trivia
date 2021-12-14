import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Game from './pages/Game';
import Login from './pages/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Login } />
      <Route path="/game" component={ Game } />
    </BrowserRouter>
  );
}
