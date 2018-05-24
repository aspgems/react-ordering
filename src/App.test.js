import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const fetchPromise = Promise.resolve({
  json: () =>
    Promise.resolve({
      id: 'A101',
      description: 'Screwdriver',
      category: '1',
      price: '9.75'
    })
});
global.fetch = () => fetchPromise;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
