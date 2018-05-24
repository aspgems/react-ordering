import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('Application tests', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('renders without crashing', () => {
    fetch.mockResponse(
      JSON.stringify({
        id: 'A101',
        description: 'Screwdriver',
        category: '1',
        price: '9.75'
      })
    );

    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
