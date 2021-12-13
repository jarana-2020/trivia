import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Login } />
    </BrowserRouter>
  );
}
