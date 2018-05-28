import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  // Order

  Alert,
  ListGroup,
  ListGroupItemHeading,
  ListGroupItem,
  ListGroupItemText,
  Button
} from 'reactstrap';
import ProductItem from './components/ProductItem';
import OrderItem from './components/OrderItem';
import logo from './logo.svg';
import './App.css';
import state from './state';
import config from './config';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {
        id: null,
        customerId: null,
        items: [],
        total: 0
      },
      products: []
    };
  }

  productIdToItem(productId) {
    const product = state.getProductById(this.state.products, productId);
    const item = state.productToItem(product);
    return item;
  }

  addToCartHandler(productId) {
    this.setState(state.addToCart(this.productIdToItem(productId)));
  }

  placeOrderHandler() {
    console.log('placing Order');
  }

  componentDidMount() {
    fetch(config.order.api.host + config.order.api.orderPath(1))
      .then(response => response.json())
      .then(data => this.setState({ order: this._parseOrderJSON(data) }))
      .catch(e => console.log(e));

    fetch(config.products.api.host + config.products.api.productsPath)
      .then(response => response.json())
      .then(data =>
        this.setState({
          products: data.map(product => this._parseProductJSON(product))
        })
      )
      .catch(e => console.log(e));
  }

  _parseProductJSON(data) {
    return {
      id: data.id,
      description: data.description,
      category: data.category,
      price: Number(parseFloat(data.price).toFixed(2))
    };
  }

  _parseOrderJSON(data) {
    return {
      id: Number(data.id),
      customerId: Number(data.id),
      items: data.items.map(function(item) {
        return {
          productId: item.productId,
          quantity: Number(item.quantity),
          unitPrice: Number(parseFloat(item.unitPrice).toFixed(2)),
          total: Number(parseFloat(item.total).toFixed(2))
        };
      }),
      total: data.total
    };
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
              <div>
                <h2>Product List</h2>
                <div className="row">
                  {this.state.products.map(p => {
                    return (
                      <ProductItem
                        key={p.id}
                        product={p}
                        addToCartHandler={() => this.addToCartHandler(p.id)}
                      />
                    );
                  })}
                </div>
              </div>
            </Col>
            <Col sm="12" md="4">
              <h2>Shopping Cart</h2>
              {this.state.order.items.length > 0 ? (
                <div>
                  <ListGroup>
                    {this.state.order.items.map((item, index) => {
                      return (
                        <OrderItem
                          key={index}
                          item={item}
                          index={index}
                          removeCallback={this.props.removeCallback}
                          increaseCallback={this.props.increaseCallback}
                          decreaseCallback={this.props.decreaseCallback}
                        />
                      );
                    })}
                  </ListGroup>
                  <Alert color="dark">
                    Total: € {this.state.order.total}
                    <br />
                    <Button color="primary" onClick={this.placeOrderHandler}>
                      Buy
                    </Button>
                  </Alert>
                </div>
              ) : (
                <div>Empty</div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
