import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import { product2orderItem, parseOrderJSON, parseProductJSON } from './mappers';
import {
  ProductList,
  initState as initCatalogueState,
  NAMESPACE as CATALOGUE_NAMESPACE,
  API_HOST as CATALOGUE_API_HOST,
  DEFAULT_QUERY as PRODUCTS_QUERY
} from './components/Catalogue/';
import {
  Order,
  actions as orderActions,
  config as orderConfig
} from './components/ShoppingCart/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      [CATALOGUE_NAMESPACE]: initCatalogueState(),
      [orderConfig.NAMESPACE]: orderActions.initState()
    };
  }

  increase(index) {
    this.setState(
      orderActions.increaseItemCount(index, this.state[orderConfig.NAMESPACE])
    );
  }

  decrease(index) {
    this.setState(
      orderActions.decreaseItemCount(index, this.state[orderConfig.NAMESPACE])
    );
  }

  remove(index) {
    this.setState(
      orderActions.removeItem(index, this.state[orderConfig.NAMESPACE])
    );
  }

  add(product) {
    this.setState(
      orderActions.addItem(
        product2orderItem(product),
        this.state[orderConfig.NAMESPACE]
      )
    );
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
              <Order
                order={this.state[orderConfig.NAMESPACE]}
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
      .then(data =>
        this.setState({
          [CATALOGUE_NAMESPACE]: data.map(product => parseProductJSON(product))
        })
      )
      .catch(e => console.log(e));

    fetch(orderConfig.API_HOST + orderConfig.orderPath(1))
      .then(response => response.json())
      .then(data =>
        this.setState({ [orderConfig.NAMESPACE]: parseOrderJSON(data) })
      )
      .catch(e => console.log(e));
  }
}

export default App;
