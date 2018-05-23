import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import { ProductList } from './components/Catalogue/';
import { ShoppingCart } from './components/ShoppingCart/';

const API = 'http://localhost:3000';
const DEFAULT_QUERY = '/data/products.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      shoping_cart: []
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
        <Container>
          <Row>
            <Col sm="12" md="8">
              <ProductList
                products={this.state.products}
                addCallback={this.add.bind(this)}
              />
            </Col>
            <Col sm="12" md="4">
              <ShoppingCart
                shopingCart={this.state.shoping_cart}
                removeCallback={this.remove.bind(this)}
                decreaseCallback={this.decrease.bind(this)}
                increaseCallback={this.increase.bind(this)}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  }
}

export default App;
