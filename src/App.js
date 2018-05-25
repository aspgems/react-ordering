import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import { product2orderItem, parseOrderJSON } from './mappers';
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
  addItem,
  API_HOST as ORDER_API_HOST,
  orderPath
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
    this.setState(addItem(product2orderItem(product)));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ASPgems &amp; React</h1>
        </header>
        <Container>
          <Row>
            <Col sm="12" md="8">
              <ProductList
                products={this.state[CATALOGUE_NAMESPACE]}
                addCallback={this.add.bind(this)}
              />
            </Col>
            <Col sm="12" md="4">
              <h2>Shopping Cart</h2>
              <ShoppingCart
                order={this.state[SHOPPING_CART_NAMESPACE]}
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

    fetch(ORDER_API_HOST + orderPath(1))
      .then(response => response.json())
      .then(data =>
        this.setState({ [SHOPPING_CART_NAMESPACE]: parseOrderJSON(data) })
      )
      .catch(e => console.log(e));
  }
}

export default App;
