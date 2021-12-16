import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import App from '../App';

// source https://blog.blumenaujs.org/testando-rotas-com-react-testing-library

describe("Testing routes", () => {
  it("home page should be '/'", () => {
    const history = createMemoryHistory();
    history.push('/');
    const { container } = render(
      <Router history={ history }>
        <App />
      </Router>
    );
    const path = history.location.pathname;
    expect(path).toEqual('/');  
    expect(container.innerHTML).toMatch(/Player Name/);
    expect(container.innerHTML).toMatch(/E-mail/);
  })

});