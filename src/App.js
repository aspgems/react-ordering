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
import logo from './logo.svg';
import './App.css';

// config
const config = {
  order: {
    api: {
      host: '',
      orderPath: id => {
        return '/data/orders/' + id + '.json';
      }
    }
  },
  products: {
    api: {
      host: 'https://raw.githubusercontent.com',
      productsPath: '/aspgems/react-ordering/master/public/data/products.json'
    }
  }
};

// selectors
const calculateOrderTotal = items => {
  return items.reduce((acc, item) => {
    return acc + item.total;
  }, 0);
};
const calulateItemTotal = item => {
  return Number(parseFloat(item.quantity * item.unitPrice).toFixed(2));
};

// mutations
const buildItem = item => {
  return {
    productId: item.productId,
    quantity: item.quantity,
    unitPrice: item.unitPrice,
    total: calulateItemTotal(item)
  };
};
const itemsIncrease = (items, productId) => {
  return items.map(item => {
    if (item.productId === productId) {
      return buildItem({ ...item, quantity: item.quantity + 1 });
    }

    return buildItem({ ...item });
  });
};
const itemsDecrease = (items, productId) => {
  return items.map(item => {
    if (item.productId === productId && item.quantity > 0) {
      return buildItem({ ...item, quantity: item.quantity - 1 });
    }

    return buildItem({ ...item });
  });
};

const itemsRemove = (items, productId) => {
  return items.filter(item => item.productId !== productId);
};

// actions
const increaseItem = productId => {
  return state => {
    const prevState = state.order;
    const items = itemsIncrease(prevState.items, productId);
    return {
      order: {
        id: prevState.id,
        customerId: prevState.customerId,
        items: items,
        total: calculateOrderTotal(items)
      }
    };
  };
};

const decreaseItem = productId => {
  return state => {
    const prevState = state.order;
    const items = itemsDecrease(prevState.items, productId);
    return {
      order: {
        id: prevState.id,
        customerId: prevState.customerId,
        items: items,
        total: calculateOrderTotal(items)
      }
    };
  };
};

const removeItem = productId => {
  return state => {
    const prevState = state.order;
    const items = itemsRemove(prevState.items, productId);
    return {
      order: {
        id: prevState.id,
        customerId: prevState.customerId,
        items: items,
        total: calculateOrderTotal(items)
      }
    };
  };
};

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

  increaseItemHandler(productId) {
    this.setState(increaseItem(productId));
  }

  decreaseItemHandler(productId) {
    this.setState(decreaseItem(productId));
  }

  removeItemHandler(productId) {
    this.setState(removeItem(productId));
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
                        addToCartHandler={() => console.log('added to cart')}
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
                        <ListGroupItem key={index}>
                          <ListGroupItemHeading>
                            {item.productId} <br />
                          </ListGroupItemHeading>
                          <ListGroupItemText>
                            <Button
                              onClick={() =>
                                this.decreaseItemHandler(item.productId)
                              }
                              color="secondary"
                            >
                              -
                            </Button>{' '}
                            <Button
                              onClick={() => {
                                this.increaseItemHandler(item.productId);
                              }}
                              color="secondary"
                            >
                              +
                            </Button>{' '}
                            {item.quantity} x € {item.unitPrice}
                          </ListGroupItemText>
                          <ListGroupItemText>
                            Subtotal Item: € {item.total}
                            <br />
                            <Button
                              outline
                              color="danger"
                              onClick={() =>
                                this.removeItemHandler(item.productId)
                              }
                            >
                              Remove
                            </Button>
                          </ListGroupItemText>
                        </ListGroupItem>
                      );
                    })}
                  </ListGroup>
                  <Alert color="dark">Total: € {this.state.order.total}</Alert>
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
