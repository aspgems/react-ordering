import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import ShopingCart from './components/ShopingCart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 'A101',
          description: 'Screwdriver',
          category: '1',
          price: '9.75'
        },
        {
          id: 'A102',
          description: 'Electric screwdriver',
          category: '1',
          price: '49.50'
        },
        {
          id: 'B101',
          description: 'Basic on-off switch',
          category: '2',
          price: '4.99'
        },
        {
          id: 'B102',
          description: 'Press button',
          category: '2',
          price: '4.99'
        },
        {
          id: 'B103',
          description: 'Switch with motion detector',
          category: '2',
          price: '12.95'
        }
      ],
      shoping_cart: [
        {
          product: {
            id: 'A101',
            description: 'Screwdriver',
            category: '1',
            price: '9.75'
          },
          quantity: 2
        },
        {
          product: {
            id: 'A102',
            description: 'Electric screwdriver',
            category: '1',
            price: '49.50'
          },
          quantity: 1
        }
      ]
    };
  }

  increase(index) {
    let shopingCart = this.state.shoping_cart.slice();

    shopingCart[index].quantity += 1;

    this.setState({ shoping_cart: shopingCart });
  }

  decrease(index) {
    let shopingCart = this.state.shoping_cart.slice();

    if (shopingCart[index].quantity > 0) {
      shopingCart[index].quantity -= 1;

      this.setState({ shoping_cart: shopingCart });
    }
  }

  remove(index) {
    let shopingCart = this.state.shoping_cart.slice();

    shopingCart.splice(index, 1);

    this.setState({ shoping_cart: shopingCart });
  }

  add(product) {
    // TODO Increase quantity for already existing items in the shoping list.
    let shopingCart = this.state.shoping_cart.slice();

    shopingCart.push({
      product: product,
      quantity: 1
    });

    this.setState({ shoping_cart: shopingCart });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ASPgems &amp; React</h1>
        </header>
        <p className="App-intro">Coming soon...</p>
        <ProductList
          products={this.state.products}
          addCallback={this.add.bind(this)}
        />
        <ShopingCart
          shopingCart={this.state.shoping_cart}
          removeCallback={this.remove.bind(this)}
          decreaseCallback={this.decrease.bind(this)}
          increaseCallback={this.increase.bind(this)}
        />
      </div>
    );
  }
}

export default App;
