import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ASPgems &amp; React</h1>
        </header>
        <p className="App-intro">Coming soon...</p>
        <ProductList />
        <ShoppingCart />
      </div>
    );
  }
}

export default App;
