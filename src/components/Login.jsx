import React from 'react';

const Login = () => (
  <section>
    <label htmlFor="name">
      Player Name:
      <input
        type="text"
        id="name"
      />
    </label>
    <label htmlFor="email">
      E-mail:
      <input
        type="email"
        id="email"
      />
    </label>
    <input type="button" value="Play" />
  </section>
);

export default Login;
