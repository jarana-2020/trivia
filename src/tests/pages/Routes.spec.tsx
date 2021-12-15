import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import App from '../../../src/App';

// source https://blog.blumenaujs.org/testando-rotas-com-react-testing-library

describe("Testing routes", () => {
  it("home page should be '/'", () => {
    const history = createMemoryHistory();
    history.push('/');
    render(
      <Router history={ history }>
        <App />
      </Router>
    );
    expect(history.location.pathname).toEqual('/');
  })
});