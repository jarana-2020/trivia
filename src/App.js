import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Game from './pages/game';
import Login from './pages/login';

export default function App() {
  return (
    <Switch>
      <Route path="/game" component={ Game } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}
