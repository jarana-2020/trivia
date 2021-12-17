import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../store';

// source https://blog.blumenaujs.org/testando-rotas-com-react-testing-library

describe("Testing routes", () => {
  it("home page should be '/'", () => {
    const history = createMemoryHistory();
    history.push('/');
    const { container } = render(
      <Router history={ history }>
        <Provider store={store}>
          <App />
        </Provider>
        
      </Router>
    );
    const path = history.location.pathname;
    expect(path).toEqual('/');  
    expect(container.innerHTML).toMatch(/Player Name/);
    expect(container.innerHTML).toMatch(/E-mail/);
  })

});