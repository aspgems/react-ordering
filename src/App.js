import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import {
  ProductList,
  initState as initCatalogueState,
  NAMESPACE as CATALOGUE_NAMESPACE,
  API_HOST as CATALOGUE_API_HOST,
  DEFAULT_QUERY as PRODUCTS_QUERY
} from './components/Catalogue/';
import {
  ShoppingCart,
  initState as initShoppingCartState,
  increaseItemCount,
  decreaseItemCount,
  removeItem,
  NAMESPACE as SHOPPING_CART_NAMESPACE,
  addItem
} from './components/ShoppingCart/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      [CATALOGUE_NAMESPACE]: initCatalogueState(),
      [SHOPPING_CART_NAMESPACE]: initShoppingCartState()
    };
  }

  increase(index) {
    this.setState(increaseItemCount(index, this.state.shoppingCart));
  }

  decrease(index) {
    this.setState(decreaseItemCount(index, this.state.shoppingCart));
  }

  remove(index) {
    this.setState(removeItem(index, this.state.shoppingCart));
  }

  add(product) {
    this.setState(addItem(product, this.state.shoppingCart));
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
                products={this.state[CATALOGUE_NAMESPACE]}
                addCallback={this.add.bind(this)}
              />
            </Col>
            <Col sm="12" md="4">
              <ShoppingCart
                shoppingCart={this.state[SHOPPING_CART_NAMESPACE]}
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
    fetch(CATALOGUE_API_HOST + PRODUCTS_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ [CATALOGUE_NAMESPACE]: data }))
      .catch(e => console.log(e));
  }
}

export default App;
