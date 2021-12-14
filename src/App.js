import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Game from './pages/game';
import Login from './pages/login';

export default function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Login } />
      <Route path="/game" component={ Game } />
    </BrowserRouter>
  );
}
